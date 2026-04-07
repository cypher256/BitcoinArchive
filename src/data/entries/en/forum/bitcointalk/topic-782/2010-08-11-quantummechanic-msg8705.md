---
title: "Re: Lost large number of bitcoins"
date: 2010-08-11T08:10:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=782.msg8705#msg8705"
author: "QuantumMechanic"
participants:
  - name: "QuantumMechanic"
    slug: "quantummechanic"
description: "Context post by QuantumMechanic in BitcoinTalk topic 782. quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-07-17T16:27:39.000Z"
    sourceEntryId: "forum/bitcointalk/topic-434/2010-07-17-re-privacy-versus-safety-handling-change"
---

I think Satoshi proposed a protection against this in the following post:

<!-- quote: q1 -->
> We should queue up a supply of pre-made addresses in the wallet to use when a new address is needed.  They aren't very big, so it wouldn't hurt to have a lot of them.  This would more generally cover the case also where someone backs up, then requests a new address and receives a big payment with it.  Maybe there should be separate queues so one type of demand on addresses doesn't deplete it for the others.
> 
> The addresses would be created and stored in the normal place, but also listed on a separate list of created-but-never-used addresses.  When an address is requested, the address at the front of the never-used queue is handed out, and a new address is created and added to the back.
> 
> There's some kind of rescan in the block loading code that was made to repair the case where someone copied their wallet.dat.  I would need to check that the rescan handles the case of rediscovering received payments in blocks that were already received, but are forgotten because the wallet was restored.
