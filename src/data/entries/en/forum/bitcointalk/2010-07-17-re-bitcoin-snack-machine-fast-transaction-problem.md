---
title: "Re: Bitcoin snack machine (fast transaction problem)"
date: 2010-07-17T22:29:13.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=423.msg3819#msg3819"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi describes how a payment processor could enable fast Bitcoin transactions with good-enough checking in 10 seconds, explaining the propagation race that makes double-spending impractical."
isSatoshi: true
tags:
  - "zero-confirmation"
  - "payments"
  - "vending"
  - "double-spending"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/233/"
threadId: "bt-bitcoin-snack-machine-fast-transaction-problem"
threadPosition: 1
---

I believe it'll be possible for a payment processing company to provide as a service the rapid distribution of transactions with good-enough checking in something like 10 seconds or less.

The network nodes only accept the first version of a transaction they receive to incorporate into the block they're trying to generate.  When you broadcast a transaction, if someone else broadcasts a double-spend at the same time, it's a race to propagate to the most nodes first.  If one has a slight head start, it'll geometrically spread through the network faster and get most of the nodes.

A rough back-of-the-envelope example:<br>
1         0<br>
4         1<br>
16        4<br>
64        16<br>
80%      20%

So if a double-spend has to wait even a second, it has a huge disadvantage.

The payment processor has connections with many nodes.  When it gets a transaction, it blasts it out, and at the same time monitors the network for double-spends.  If it receives a double-spend on any of its many listening nodes, then it alerts that the transaction is bad.  A double-spent transaction wouldn't get very far without one of the listeners hearing it.  The double-spender would have to wait until the listening phase is over, but by then, the payment processor's broadcast has reached most nodes, or is so far ahead in propagating that the double-spender has no hope of grabbing a significant percentage of the remaining nodes.
