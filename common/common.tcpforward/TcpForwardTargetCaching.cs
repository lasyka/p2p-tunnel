﻿using common.server;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace common.tcpforward
{
    public class TcpForwardTargetCaching : ITcpForwardTargetCaching<TcpForwardTargetCacheInfo>
    {
        private readonly ConcurrentDictionary<string, TcpForwardTargetCacheInfo> cacheHost = new();
        private readonly ConcurrentDictionary<ushort, TcpForwardTargetCacheInfo> cache = new();

        public TcpForwardTargetCaching()
        {

        }

        public TcpForwardTargetCacheInfo Get(string host)
        {
            cacheHost.TryGetValue(host, out TcpForwardTargetCacheInfo cacheInfo);
            return cacheInfo;
        }
        public TcpForwardTargetCacheInfo Get(string domain, ushort port)
        {
            return Get(JoinHost(domain, port));
        }
        public TcpForwardTargetCacheInfo Get(ushort port)
        {
            cache.TryGetValue(port, out TcpForwardTargetCacheInfo cacheInfo);
            return cacheInfo;
        }

        public bool Add(string domain, ushort port, TcpForwardTargetCacheInfo mdoel)
        {
            return cacheHost.TryAdd(JoinHost(domain, port), mdoel);
        }
        public bool Add(ushort port, TcpForwardTargetCacheInfo mdoel)
        {
            bool res = cache.TryAdd(port, mdoel);
            return res;
        }

        public void AddOrUpdate(string domain, ushort port, TcpForwardTargetCacheInfo mdoel)
        {
            cacheHost.AddOrUpdate(JoinHost(domain, port), mdoel, (a, oldValue) => mdoel);
        }
        public void AddOrUpdate(ushort port, TcpForwardTargetCacheInfo mdoel)
        {
            cache.AddOrUpdate(port, mdoel, (a, oldValue) => mdoel);
        }

        public bool Remove(string domain, ushort port)
        {
            return cacheHost.TryRemove(JoinHost(domain, port), out _);
        }
        public bool Remove(ushort port)
        {
            return cache.TryRemove(port, out _);
        }
        public IEnumerable<ushort> Remove(string targetName)
        {
            var keys = cache.Where(c => c.Value.Name == targetName).Select(c => c.Key);
            foreach (var key in keys)
            {
                cache.TryRemove(key, out _);
            }
            var keys1 = cacheHost.Where(c => c.Value.Name == targetName).Select(c => c.Key);
            foreach (var key in keys1)
            {
                cacheHost.TryRemove(key, out _);
            }
            return keys;
        }
        public IEnumerable<ushort> Remove(ulong id)
        {
            var keys = cache.Where(c => c.Value.Id == id).Select(c => c.Key);
            foreach (var key in keys)
            {
                cache.TryRemove(key, out _);
            }
            var keys1 = cacheHost.Where(c => c.Value.Id == id).Select(c => c.Key);
            foreach (var key in keys1)
            {
                cacheHost.TryRemove(key, out _);
            }
            return keys;
        }

        public bool Contains(string domain, ushort port)
        {
            return cacheHost.ContainsKey(JoinHost(domain, port));
        }
        public bool Contains(ushort port)
        {
            return cache.ContainsKey(port);
        }

        private string JoinHost(string domain, ushort port)
        {
            return port == 80 || port == 443 ? domain : $"{domain}:{port}";
        }

        public void ClearConnection()
        {
            foreach (var item in cacheHost.Values)
            {
                item.Connection = null;
            }
            foreach (var item in cache.Values)
            {
                item.Connection = null;
            }
        }
        public void ClearConnection(string name)
        {
            foreach (var item in cacheHost.Values.Where(c => c.Name == name))
            {
                item.Connection = null;
            }
            foreach (var item in cache.Values.Where(c => c.Name == name))
            {
                item.Connection = null;
            }
        }
        public void ClearConnection(ulong id)
        {
            foreach (var item in cacheHost.Values.Where(c => c.Id == id))
            {
                item.Connection = null;
            }
            foreach (var item in cache.Values.Where(c => c.Id == id))
            {
                item.Connection = null;
            }
        }
    }

    public class TcpForwardTargetCacheInfo
    {
        public ulong Id { get; set; }
        public string Name { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public IConnection Connection { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public Memory<byte> Endpoint { get; set; }
        public TcpForwardTypes ForwardType { get; set; } = TcpForwardTypes.Forward;
    }
}