---
title: "Prioritized transactions, and tx fees"
date: 2010-09-29T11:13:30.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1314.msg14616#msg14616"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Jeff Garzik starts a discussion: Prioritized transactions, and tx fees."
isSatoshi: false
tags: []
---

As noted in [this wiki page](http://www.bitcoin.org/wiki/doku.php?id=transaction_fee) and in [this satoshi post](http://bitcointalk.org/index.php?topic=795.msg8960#msg8960), the -paytxfee switch may be employed give your sent transactions "priority."

Prioritized transactions appear to be defined as increasing the likelihood that a transaction will be included in a block, even if that block is very large (byte-wise or tx-wise).

Considering that 99.9% of blocks are outside the range that will incur tx fees, it can be said that tx fees are largely useless today.  But it makes me curious...

Are there any other areas of the bitcoin client or network that could somehow prioritize transactions based on tx fees?  Examples:
if you have a list of transactions to send out to the network, send prioritized ones to more connected nodesrestart mining work immediately if priority tx arrives, but continue working on existing block for a while, if free tx arrives
And with my businessman's cap on, I would think it prudent practice for any bitcoin business to use -paytxfee=0.02 by default, just to be safe, guaranteeing priority on the existing network and existing clients, in cases of extreme network load.

Other comments about how to use tx fees welcome...  I strongly believe that a healthy tx fee structure is important to the long term health of the bitcoin P2P network.
