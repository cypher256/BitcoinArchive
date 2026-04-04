---
title: "auto backing up of wallet.dat"
date: 2010-08-24T18:52:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11107#msg11107"
author: "nelisky"
participants:
  - name: "nelisky"
    slug: "nelisky"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "nelisky starts a discussion: auto backing up of wallet.dat."
isSatoshi: false
tags: []
---

So, as many others, I need to backup wallet.dat. And since this one is on a server, I need it to happen unattended. And because this server is being used by the lottery, I must not shutdown bitcoind.

So far I just copy the file over, and do it often so I can outlive one corrupted file. But this is not ideal, as I should backup after every transaction (sent, right? no new addresses are created on receiving a transfer ) or after everytime I create a new address.

For that I thought about instead of copying the file I could use db_dump to dump it's contents, using the -r flag just in case. Would that work?

The ideal solution would be an rpc call that would either:
- flush and lock updates until a new rpc call (any call, didn't need to be an unlock command) would come over
- flush and cp wallet.dat to a side file
- flush and dump through jsonrpc. If each key would come separate in an array, we could then call this with 'lastseen=X' to just get new keys

Could this work? Which would work best?
