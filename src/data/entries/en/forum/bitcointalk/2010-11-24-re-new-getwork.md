---
title: "Re: New getwork"
date: 2010-11-24T17:21:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1901.msg24095#msg24095"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"New getwork\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/509/"
threadId: "bt-new-getwork"
threadTitle: "New getwork"
threadPosition: 3
---

[Quote from: jgarzik on November 24, 2010, 04:47:42 AM](https://bitcointalk.org/index.php?topic=1901.msg24008#msg24008)I suspect something weird going on with ByteReverse (or lack thereof).  It's quite unclear whether or not 'data' and 'nonce' must be byte-reversed, and in what way.
getwork does the byte-reversing.  midstate, data and hash1 are already big-endian, and you pass data back still big-endian, so you work in big-endian and don't have to do any byte-reversing.  They're the same data that is passed to the ScanHash_ functions.  You can take midstate, data and hash1, put them in 16-byte aligned buffers and pass them to a ScanHash_ function, like ScanHash(pmidstate, pdata + 64, phash1, nHashesDone).  If a nonce is found, patch it into data and call getwork.

I should probably change the ScanHash_ functions to use pdata instead of pdata + 64 so they're consistent.

target is little endian, it's supposed to be the same as how m0mchil's did it.  (if it's not, then it should be fixed)  That's the only case where you would use byte reverse.  I think you do it like: if ByteReverse((unsigned int*)hash[6]) < (unsigned int*)target[6].

[Quote from: DiabloD3 on November 24, 2010, 11:31:11 AM](https://bitcointalk.org/index.php?topic=1901.msg24050#msg24050)Satoshi, please fix your implementation of getwork so it complies with m0mchill's specification
This is the new spec.  It shouldn't be hard to update your miner to use it.

The changes are:
- It does not return work when you submit a possible hit, only when called without parameter.
- The block field has been split into data and hash1.
- state renamed to midstate for consistency.
- extranonce not needed.
