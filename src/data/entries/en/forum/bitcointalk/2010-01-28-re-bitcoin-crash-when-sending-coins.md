---
title: "Re: Bitcoin crash when sending coins"
date: 2010-01-28T23:08:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=27.msg170#msg170"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bitcoin crash when sending coins\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/35/"
threadId: "bt-bitcoin-crash-when-sending-coins"
threadTitle: "Bitcoin crash when sending coins"
threadPosition: 2
---

The resync idea would go through your wallet and check it against the block index to find any transactions that your current computer doesn't realize are already spent.  That could happen if they were spent on another computer with a copy of the wallet file, or you had to restore the wallet to a backup from before they were spent.  Currently, the software just assumes it always knows whether its transactions are spent because it marks them spent in wallet.dat when it spends them.

A wallet merge tool is possible to implement but much less in demand once resync solves most of the problem.  With resync, you could do about the same thing by sending all the money from one wallet to the other.  The receiver would resync and discover all its overlapping coins were spent, then receive them in the new transaction.
