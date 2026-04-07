---
title: "Re: Flood attack 0.00000001 BC"
date: 2010-08-06T00:32:49.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7761#msg7761"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 287. after msg7710."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "bytemaster"
    date: "2010-08-05T18:12:02.000Z"
---

> So I send a transaction of .001 BTC from me to Fred and .000001 BTC from me to A.   I send a different one to B and C.   
> 
> Now A, B, and C cannot make a profit by sending that transaction for anyone else to crunch on so if they want to collect they have to process it.
> 
> The trick is enforcing the rule that 0.001 only flows from me to fred once and not in each block.

I'm thoroughly confused on what, exactly, you're proposing.

I want to make a 100 Bitcoin transaction to you.

You're proposing that I need to pay a "transmit fee" ... which is paid to who and does what, exactly?

If I pay it to A, B, and C, does that mean they rebroadcast the transaction to everybody they're connected to?  Do they, in turn, pay transmit fees to the nodes they're rebroadcast it to?  What stops them from saying "Thank you very much for the transmit fee" and cheating (drop my transaction on the floor)?

Satoshi's proposal that all transaction carry a minimum fee to cover network overhead makes sense; whoever generates the block with the transaction gets the fee.
