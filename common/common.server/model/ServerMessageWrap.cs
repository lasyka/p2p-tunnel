﻿using common.libs;
using common.libs.extends;
using System;
using System.Buffers;
using System.ComponentModel;

namespace common.server.model
{
    public class MessageRequestWrap
    {
        public const int RelayIdLengthPos = 5;
        public const int RelayIdIndexPos = RelayIdLengthPos + 1;
        public const int RelayIdSize = 8;
        /// <summary>
        /// Relay + Reply + 111111
        /// </summary>
        public const byte RelayBit = 0b10000000;
        public const byte ReplyBit = 0b01000000;
        public const byte TypeBits = 0b00111111;


        /// <summary>
        /// 用来读取数据，发送数据用下一层的FromConnection，来源连接，在中继时，数据来自服务器，但是真实来源是别的客户端，所以不能直接用这个来发送回复的数据
        /// </summary>
        public IConnection Connection { get; set; }
        /// <summary>
        /// 超时时间，发送待回复时设置
        /// </summary>
        public int Timeout { get; set; } = 15000;

        /// <summary>
        /// 消息id
        /// </summary>
        public ushort MessengerId { get; set; } = 0;
        /// <summary>
        /// 每条数据都有个id，【只发发数据的话，不用填这里】
        /// </summary>
        public uint RequestId = 0;
        /// <summary>
        /// 是否等待回复
        /// </summary>
        public bool Reply { get; internal set; }

        /// <summary>
        /// 是否中继
        /// </summary>
        public bool Relay { get; set; }
        /// <summary>
        /// 中继节点id列表
        /// </summary>
        public ulong[] RelayId { get; set; } = Helper.EmptyUlongArray;
        /// <summary>
        /// 中继节点id列表，读取用
        /// </summary>
        public Memory<byte> RelayIds { get; private set; } = Helper.EmptyArray;
        public byte RelayIdLength { get; private set; } = 0;
        public byte RelayIdIndex { get; private set; } = 0;

        /// <summary>
        /// 数据荷载
        /// </summary>
        public Memory<byte> Payload { get; set; } = Helper.EmptyArray;

        /// <summary>
        /// 转包
        /// </summary>
        /// <returns></returns>
        public byte[] ToArray(out int length)
        {
            byte[] requestIdByte = RequestId.ToBytes();
            byte[] messengerIdByte = MessengerId.ToBytes();

            int index = 0;

            length = 4
                + 1 //Relay + Reply + type
                + requestIdByte.Length
                + messengerIdByte.Length
                + Payload.Length;
            if (Relay)
            {
                length += RelayId.Length * RelayIdSize + 2; //length index
            }

            byte[] res = ArrayPool<byte>.Shared.Rent(length);
            byte[] payloadLengthByte = (length - 4).ToBytes();
            Array.Copy(payloadLengthByte, 0, res, index, payloadLengthByte.Length);
            index += 4;

            res[index] = (byte)MessageTypes.REQUEST;
            if (Relay == true)
            {
                res[index] |= RelayBit;
            }
            if (Reply == true)
            {
                res[index] |= ReplyBit;
            }
            index += 1;

            if (Relay)
            {
                res[index] = (byte)(RelayId.Length); //length
                index += 1;

                res[index] = 2; //index
                index += 1;
                for (int i = 0; i < RelayId.Length; i++)
                {
                    byte[] relayidByte = RelayId[i].ToBytes();
                    Array.Copy(relayidByte, 0, res, index, relayidByte.Length);
                    index += relayidByte.Length;
                }
            }
            Array.Copy(requestIdByte, 0, res, index, requestIdByte.Length);
            index += requestIdByte.Length;

            messengerIdByte.CopyTo(res.AsMemory(index, messengerIdByte.Length));
            index += messengerIdByte.Length;

            Payload.CopyTo(res.AsMemory(index, Payload.Length));
            index += Payload.Length;

            return res;
        }
        /// <summary>
        /// 解包
        /// </summary>
        /// <param name="bytes"></param>
        public void FromArray(Memory<byte> memory)
        {
            var span = memory.Span;

            int index = 0;

            Relay = (span[index] & RelayBit) == RelayBit;
            Reply = (span[index] & ReplyBit) == ReplyBit;
            index += 1;

            if (Relay)
            {
                RelayIdLength = span[index];
                index += 1;

                RelayIdIndex = span[index];
                index += 1;

                RelayIds = memory.Slice(index, RelayIdLength * RelayIdSize);
                index += RelayIdLength * RelayIdSize;
            }
            else
            {
                RelayIds = Helper.EmptyArray;
                RelayIdIndex = 0;
                RelayIdLength = 0;
            }

            RequestId = span.Slice(index).ToUInt32();
            index += 4;

            MessengerId = span.Slice(index, 2).ToUInt16();
            index += 2;

            Payload = memory.Slice(index, memory.Length - index);
        }

        public void Return(byte[] array)
        {
            ArrayPool<byte>.Shared.Return(array);
        }
    }

    public class MessageResponseWrap
    {
        public IConnection Connection { get; set; }
        public MessageResponeCodes Code { get; set; } = MessageResponeCodes.OK;
        public uint RequestId { get; set; } = 0;
        public Memory<byte> RelayIds { get; set; } = Helper.EmptyArray;
        public byte RelayIdLength { get; private set; }
        public byte RelayIdIndex { get; private set; }
        public ReadOnlyMemory<byte> Payload { get; set; } = Helper.EmptyArray;
        public bool Relay { get;private set; }

        /// <summary>
        /// 转包
        /// </summary>
        /// <returns></returns>
        public byte[] ToArray(out int length)
        {
            length = 4
                + 1 //type
                + 1 //code
                + 4 //requestid
                + Payload.Length;

            if (RelayIds.Length > 0)
            {
                RelayIdLength = (byte)(RelayIds.Length / MessageRequestWrap.RelayIdSize - 2);
                //不要头两个id
                length += MessageRequestWrap.RelayIdSize * RelayIdLength + 2; //length + index
            }

            byte[] res = ArrayPool<byte>.Shared.Rent(length);

            int index = 0;
            byte[] payloadLengthByte = (length - 4).ToBytes();
            Array.Copy(payloadLengthByte, 0, res, index, payloadLengthByte.Length);
            index += 4;

            res[index] = (byte)MessageTypes.RESPONSE;
            index += 1;

            if (RelayIdLength > 0)
            {
                res[index - 1] |= MessageRequestWrap.RelayBit;
                res[index] = RelayIdLength;
                index += 1;
                res[index] = 0;
                index += 1;

                for (int i = 0; i < RelayIdLength; i++)
                {
                    RelayIds.Slice((RelayIdLength - 1 - i) * MessageRequestWrap.RelayIdSize, MessageRequestWrap.RelayIdSize).CopyTo(res.AsMemory(index, MessageRequestWrap.RelayIdSize));
                    index += MessageRequestWrap.RelayIdSize;
                }
            }

            res[index] = (byte)Code;
            index += 1;

            byte[] requestIdByte = RequestId.ToBytes();
            Array.Copy(requestIdByte, 0, res, index, requestIdByte.Length);
            index += requestIdByte.Length;

            if (Payload.Length > 0)
            {
                Payload.CopyTo(res.AsMemory(index, Payload.Length));
                index += Payload.Length;
            }
            return res;
        }
        /// <summary>
        /// 解包
        /// </summary>
        /// <param name="bytes"></param>
        public void FromArray(Memory<byte> memory)
        {
            var span = memory.Span;
            int index = 0;

            Relay = (span[index] & MessageRequestWrap.RelayBit) == MessageRequestWrap.RelayBit;
            index += 1;

            if (Relay)
            {
                RelayIdLength = span[index];
                index += 1;
                RelayIdIndex = span[index];
                index += 1;

                RelayIds = memory.Slice(index, RelayIdLength * MessageRequestWrap.RelayIdSize);
                index += RelayIdLength * MessageRequestWrap.RelayIdSize;
            }
            else
            {
                RelayIdLength = 0;
                RelayIdIndex = 0;
                RelayIds = Helper.EmptyArray;
            }

            Code = (MessageResponeCodes)span[index];
            index += 1;

            RequestId = span.Slice(index).ToUInt32();
            index += 4;

            Payload = memory.Slice(index, memory.Length - index);
        }

        public void Return(byte[] array)
        {
            ArrayPool<byte>.Shared.Return(array);
        }

        public void Reset()
        {
            Payload = Helper.EmptyArray;
            Payload = Helper.EmptyArray;
        }
    }

    [Flags]
    public enum MessageResponeCodes : byte
    {
        [Description("成功")]
        OK = 0,
        [Description("网络未连接")]
        NOT_CONNECT = 1,
        [Description("网络资源未找到")]
        NOT_FOUND = 2,
        [Description("网络超时")]
        TIMEOUT = 3,
        [Description("程序错误")]
        ERROR = 4,
    }

    [Flags]
    public enum MessageTypes : byte
    {
        [Description("请求")]
        REQUEST = 0,
        [Description("回复")]
        RESPONSE = 1
    }

}
