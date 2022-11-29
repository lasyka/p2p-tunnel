﻿using System;

namespace common.server.model
{
    interface CryptoInfo
    {
    }

    [Flags, MessengerIdEnum]
    public enum CryptoMessengerIds: ushort
    {
        Min = 200,
        Key = 201,
        Set = 202,
        Test = 203,
        Clear = 204,

        Max = 299,
    }
}
