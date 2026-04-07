---
title: "Re: Flood attack 0.00000001 BC"
date: 2010-08-05T18:12:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7713#msg7713"
author: "bytemaster"
participants:
  - name: "bytemaster"
    slug: "bytemaster"
description: "Context post by bytemaster in BitcoinTalk topic 287. after msg7710."
isSatoshi: false
tags: []
---

The assumption is that you would send variations of the same transaction to different nodes with a tip for working to integrate your transaction.  In order for that node to collect their tip they eventually have to generate a block, but they eventually will anyway.  The tip would be below the amount that would allow said user to "rebroadcast" their transmit fee.  So you don't get recursive transmit fees.  

Say I want to send .001 BTC to Fred.   The cluster is operating at 1billion k/hash/second, then I need to distribute my transactions to enough nodes so that the k/hash/second % of the total is acceptably high for the transaction to get logged within the next N blocks.   

So generating nodes A, B, and C each price their transmit fee proportional to their khash rate.  (how do they prove their khash rate?  total blocks generated over time?) 

So I send a transaction of .001 BTC from me to Fred and .000001 BTC from me to A.   I send a different one to B and C.   

Now A, B, and C cannot make a profit by sending that transaction for anyone else to crunch on so if they want to collect they have to process it.

The trick is enforcing the rule that 0.001 only flows from me to fred once and not in each block.
