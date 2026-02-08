---
title: "Re: What's with this odd generation?"
date: 2010-02-12T03:08:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=48.msg316#msg316"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"What's with this odd generation?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/52/"
threadId: "bt-what-s-with-this-odd-generation"
threadTitle: "What's with this odd generation?"
threadPosition: 1
---

There's a small transaction fee for very large transactions.  The node that generates the block that contains the transaction gets the fee.

If the same money gets sent again, it won't incur the fee again.  If all you have is generated coins in your wallet, if you send them all in one huge transaction, it has to bundle hundreds of 50 bc coins together.  After that it's just one line to send the combined unit.
