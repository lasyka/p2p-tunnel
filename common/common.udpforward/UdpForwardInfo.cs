﻿using common.libs;
using common.libs.extends;
using common.server;
using System;
using System.ComponentModel;
using System.Net;

namespace common.udpforward
{
    /// <summary>
    /// udp转发数据
    /// </summary>
    public class UdpForwardInfo
    {
        public UdpForwardInfo() { }


        public ushort SourcePort { get; set; } = 0;

        /// <summary>
        /// 来源地址，是谁发的数据，目标端回复的时候知道回复给谁
        /// </summary>
        public IPEndPoint SourceEndpoint { get; set; }
        /// <summary>
        /// 目标地址，发给谁
        /// </summary>
        public Memory<byte> TargetEndpoint { get; set; }
        /// <summary>
        /// 发送的数据
        /// </summary>
        public Memory<byte> Buffer { get; set; } = Helper.EmptyArray;

        public IConnection Connection { get; set; }

        public byte[] ToBytes()
        {
            var sourceIpBytes = SourceEndpoint.Address.GetAddressBytes();
            var sourcePortBytes = SourceEndpoint.Port.ToBytes();

            var bytes = new byte[
                1 + sourceIpBytes.Length + 2 + // endpoint
                1 + TargetEndpoint.Length + // endpoint
                Buffer.Length
            ];

            int index = 0;

            bytes[index] = (byte)sourceIpBytes.Length;
            index++;

            Array.Copy(sourceIpBytes, 0, bytes, index, sourceIpBytes.Length);
            index += sourceIpBytes.Length;

            bytes[index] = sourcePortBytes[0];
            bytes[index + 1] = sourcePortBytes[1];
            index += 2;

            bytes[index] = (byte)TargetEndpoint.Length;
            index++;
            TargetEndpoint.CopyTo(bytes.AsMemory(index, TargetEndpoint.Length));
            index += TargetEndpoint.Length;

            Buffer.CopyTo(bytes.AsMemory(index, Buffer.Length));
            index += Buffer.Length;
            return bytes;
        }

        public void DeBytes(in Memory<byte> memory)
        {
            var span = memory.Span;
            int index = 0;

            byte endpointLength = span[index];
            index++;

            IPAddress ip = new IPAddress(span.Slice(index, endpointLength));
            index += endpointLength;

            int port = span.Slice(index, 2).ToUInt16();
            index += 2;
            SourceEndpoint = new IPEndPoint(ip, port);

            endpointLength = span[index];
            index++;
            TargetEndpoint = memory.Slice(index, endpointLength);
            index += endpointLength;

            Buffer = memory.Slice(index);
        }
    }


    [Flags, MessengerIdEnum]
    public enum UdpForwardMessengerIds : ushort
    {
        Min = 700,
        Request = 702,
        Response = 703,
        Ports = 704,
        SignIn = 705,
        SignOut = 706,
        GetSetting = 707,
        Setting = 708,
        Max = 799,
    }
}
