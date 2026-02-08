---
title: "Re: Stealing Coins"
date: 2010-07-25T20:01:40.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=571.msg5740#msg5740"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Stealing Coins\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/271/"
threadId: "bt-stealing-coins"
threadTitle: "Stealing Coins"
threadPosition: 3
---

[Quote from: knightmb on July 25, 2010, 07:44:02 PM](https://bitcointalk.org/index.php?topic=571.msg5736#msg5736)If I figure out that Public Key 123456 generates Hash ABCD
and
Public Key 654321 also generates Hash ABCD
*I'm still left without the Private Key.*

But from what you are saying, all I need is Public Key 654321 and I can spend coin pretending to be Public Key 123456.
You would still have to sign it with public key 654321.  You need to find a collision using a public key for which you know the private key.

When you claim a Bitcoin Address transaction, you give your public key that matches the hash, then you must sign it with that key.

Red's point is that it's easy to quickly generate insecure public keys which you could break and find the private key after you find a collision.

He points out that if the public key was required to be a secure one, one which must have required significant work to find the prime numbers, that would increase the strength above that of the hash function alone.  Someone trying to brute force would have to take time generating a key for each attempt.
