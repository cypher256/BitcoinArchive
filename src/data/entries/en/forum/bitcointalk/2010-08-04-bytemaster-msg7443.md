---
title: "Re: (quoted post by bytemaster)"
date: 2010-08-04T06:22:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7443#msg7443"
author: "bytemaster"
participants:
  - name: "bytemaster"
    slug: "bytemaster"
description: "Quoted post by bytemaster in BitcoinTalk topic 287."
isSatoshi: false
tags: []
---

Well, right now nothing stops someone from creating a system where:

A sends  1.00000001 to B
B sends  1.00000000 back to A

Net result is a micro-payment and no processing fee.  I am creating a system that does something very similar to the above.   The reality is that any "micro-payment" system should probably be handled outside the BTC block and have the payments "summed up" before being sent.  

I think the processing fee design is brilliant.  Every node can pick and choose which transactions it wants to include and thus the "time until included" is directly proportional to the number of nodes who accept your "offer".  Worst case you have to wait until your lonely PC can create a block which at the moment could be weeks! 

In fact, I think it would be reasonable to offer to pay the nodes that propagate your transaction if there was some way to "enforce it" and prevent rouge clients from collecting fees but not doing work.
