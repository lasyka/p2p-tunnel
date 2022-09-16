﻿using client.messengers.clients;
using client.messengers.register;
using common.libs;
using common.libs.extends;
using common.server;
using System;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Runtime.InteropServices;
using System.Security.Principal;

namespace client.service.vea
{
    public class VeaTransfer
    {
        Process Tun2SocksProcess;
        int interfaceNumber = 0;
        const string veaName = "p2p-tunnel";

        private readonly ConcurrentDictionary<IPAddress, IPAddressCacheInfo> ips = new ConcurrentDictionary<IPAddress, IPAddressCacheInfo>();
        private readonly ConcurrentDictionary<int, IPAddressCacheInfo> lanips = new ConcurrentDictionary<int, IPAddressCacheInfo>();
        public ConcurrentDictionary<IPAddress, IPAddressCacheInfo> IPList => ips;
        public ConcurrentDictionary<int, IPAddressCacheInfo> LanIPList => lanips;

        private readonly Config config;
        private readonly IVeaSocks5ClientListener socks5ClientListener;
        private readonly IClientInfoCaching clientInfoCaching;
        private readonly VeaMessengerSender veaMessengerSender;
        private readonly RegisterStateInfo registerStateInfo;

        public VeaTransfer(Config config, IClientInfoCaching clientInfoCaching, VeaMessengerSender veaMessengerSender, IVeaSocks5ClientListener socks5ClientListener, RegisterStateInfo registerStateInfo)
        {
            this.config = config;
            this.socks5ClientListener = socks5ClientListener;
            this.clientInfoCaching = clientInfoCaching;
            this.veaMessengerSender = veaMessengerSender;
            this.registerStateInfo = registerStateInfo;

            clientInfoCaching.OnOnline.Sub((client) =>
            {
                UpdateIp();
            });
            clientInfoCaching.OnOffline.Sub((client) =>
            {
                var value = ips.FirstOrDefault(c => c.Value.Client.Id == client.Id);
                if (value.Key != null)
                {
                    if (ips.TryRemove(value.Key, out IPAddressCacheInfo cache))
                    {
                        lanips.TryRemove(cache.Mask, out _);
                    }
                }
            });

            AppDomain.CurrentDomain.ProcessExit += (object sender, EventArgs e) => Stop();
        }

        public void OnNotify(IConnection connection)
        {
            if (clientInfoCaching.Get(connection.FromConnection.ConnectId, out ClientInfo client))
            {
                IPAddressInfo ips = new IPAddressInfo();
                ips.DeBytes(connection.ReceiveRequestWrap.Memory);
                UpdateIp(client, ips);
            }
        }
        private void UpdateIp(ClientInfo client, IPAddressInfo _ips)
        {
            if (client == null || _ips == null) return;

            lock (this)
            {
                var cache = ips.Values.FirstOrDefault(c => c.Client.Id == client.Id);
                if (cache != null)
                {
                    ips.TryRemove(cache.IP, out _);
                    lanips.TryRemove(GetIpMask(_ips.LanIP), out _);
                }

                cache = new IPAddressCacheInfo { Client = client, IP = _ips.IP, LanIP = _ips.LanIP, Mask = 0 };

                ips.AddOrUpdate(_ips.IP, cache, (a, b) => cache);
                if (_ips.LanIP.Equals(IPAddress.Any) == false)
                {
                    int mask = GetIpMask(_ips.LanIP);
                    cache.Mask = mask;
                    lanips.AddOrUpdate(mask, cache, (a, b) => cache);
                    AddRoute(_ips.LanIP);
                }
            }
        }
        private void UpdateIp()
        {
            foreach (var item in clientInfoCaching.All())
            {
                var connection = item.OnlineConnection;
                var client = item;
                if (connection != null)
                {
                    _ = veaMessengerSender.IP(connection).ContinueWith((result) =>
                    {
                        UpdateIp(client, result.Result);
                    });
                }
            }
        }

        public void Run()
        {
            Stop();
            if (config.Enable)
            {
                RunTun2Socks();
                socks5ClientListener.Start(config.SocksPort, config.BufferSize);
            }
            UpdateIp();
        }
        public void Stop()
        {
            socks5ClientListener.Stop();
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                KillWindows();
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            {
                KillLinux();
            }
        }

        private void RunTun2Socks()
        {
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                WindowsIdentity id = WindowsIdentity.GetCurrent();
                WindowsPrincipal principal = new WindowsPrincipal(id);
                if (principal.IsInRole(WindowsBuiltInRole.Administrator))
                {
                    RunWindows();
                }
                else
                {
                    throw new Exception($"需要管理员权限");
                }
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                RunLinux();
            }
        }

        private void KillWindows()
        {
            interfaceNumber = 0;
            if (Tun2SocksProcess != null)
            {
                Tun2SocksProcess.Kill();
                Tun2SocksProcess.Close();
                Tun2SocksProcess.Dispose();
                Tun2SocksProcess = null;
            }
            foreach (var item in Process.GetProcesses().Where(c => c.ProcessName.Contains("tun2socks")))
            {
                item.Kill();
                item.Close();
                item.Dispose();
            };
        }
        private void KillLinux()
        {
            if (Tun2SocksProcess != null)
            {
                Tun2SocksProcess.Kill();
                Tun2SocksProcess.Close();
                Tun2SocksProcess.Dispose();
                Tun2SocksProcess = null;
            }

            Command.Execute("bash", string.Empty, new string[] { $"ip tuntap del mode tun dev {veaName}" });
        }

        private void RunWindows()
        {
            Tun2SocksProcess = Command.Execute("tun2socks-windows.exe", $" -device {veaName} -proxy socks5://127.0.0.1:{config.SocksPort} -loglevel silent");
            for (int i = 0; i < 60; i++)
            {
                //分配ip
                Command.Execute("cmd.exe", string.Empty, new string[] { $"netsh interface ip set address name=\"{veaName}\" source=static addr={config.IP} mask=255.255.255.0 gateway=none" });
                //网卡编号
                interfaceNumber = GetWindowsInterfaceNum();
                if (interfaceNumber > 0)
                {
                    AddRoute();
                    if (config.ProxyAll) //代理所有
                    {
                        //AddRoute(IPAddress.Any);
                    }
                    break;
                }
                else
                {
                    System.Threading.Thread.Sleep(1000);
                }
            }
        }
        private void RunLinux()
        {
            Command.Execute("bash", string.Empty, new string[] {
                $"ip tuntap add mode tun dev {veaName}",
                $"ip addr add {config.IP}/24 dev {veaName}",
                $"ip link set dev {veaName} up"
            });
            Tun2SocksProcess = Command.Execute("bash", $" tun2socks-linux -device {veaName} -proxy socks5://127.0.0.1:{config.SocksPort} -loglevel silent");
        }
        private int GetWindowsInterfaceNum()
        {
            string output = Command.Execute("cmd.exe", string.Empty, new string[] { "route print" });
            foreach (var item in output.Split("\r\n"))
            {
                if (item.Contains("WireGuard Tunnel"))
                {
                    return int.Parse(item.Substring(0, item.IndexOf('.')).Trim());
                }
            }
            return 0;
        }

        private void AddRoute()
        {
            foreach (var item in lanips)
            {
                AddRoute(item.Value.LanIP);
            }
        }
        private void AddRoute(IPAddress ip)
        {
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                AddRouteWindows(ip);
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            {
                AddRouteLinux(ip);
            }
        }
        private void AddRouteWindows(IPAddress ip)
        {
            if (interfaceNumber > 0)
            {
                Command.Execute("cmd.exe", string.Empty, new string[] { $"route add {ip} mask 255.255.255.0 {config.IP} metric 5 if {interfaceNumber}" });
            }
        }
        private void AddRouteLinux(IPAddress ip)
        {
            Command.Execute("bash", string.Empty, new string[] { $"ip route add {ip} via {config.IP} dev {veaName} metric 1 " });
        }

        public int GetIpMask(IPAddress ip)
        {
            return GetIpMask(ip.GetAddressBytes());
        }
        public int GetIpMask(Span<byte> ip)
        {
            return ip.ToInt32() & 0xffffff;
        }

    }

    public class IPAddressCacheInfo
    {
        public int Mask { get; set; }
        public IPAddress IP { get; set; }
        public IPAddress LanIP { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public ClientInfo Client { get; set; }
    }

    public class IPAddressInfo
    {
        public IPAddress IP { get; set; }
        public IPAddress LanIP { get; set; }

        public byte[] ToBytes()
        {
            var ip = IP.GetAddressBytes();
            var lanip = LanIP.GetAddressBytes();

            var bytes = new byte[1 + ip.Length + lanip.Length];

            bytes[0] = (byte)ip.Length;
            Array.Copy(ip, 0, bytes, 1, ip.Length);
            Array.Copy(lanip, 0, bytes, ip.Length + 1, lanip.Length);

            return bytes;
        }

        public void DeBytes(ReadOnlyMemory<byte> memory)
        {
            var span = memory.Span;
            IP = new IPAddress(span.Slice(1, span[0]));
            LanIP = new IPAddress(span.Slice(span[0] + 1));
        }
    }
}