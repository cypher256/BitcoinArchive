---
title: "Re: Privacy versus Safety: handling change"
date: 2010-08-12T12:52:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=434.msg8882#msg8882"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "Context post by throughput in BitcoinTalk topic 434. quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-07-17T16:27:39.000Z"
    sourceEntryId: "forum/bitcointalk/topic-434/2010-07-17-re-privacy-versus-safety-handling-change"
---

> We should queue up a supply of pre-made addresses in the wallet to use when a new address is needed.  They aren't very big, so it wouldn't hurt to have a lot of them.  This would more generally cover the case also where someone backs up, then requests a new address and receives a big payment with it.  Maybe there should be separate queues so one type of demand on addresses doesn't deplete it for the others.
> 
> The addresses would be created and stored in the normal place, but also listed on a separate list of created-but-never-used addresses.  When an address is requested, the address at the front of the never-used queue is handed out, and a new address is created and added to the back.
> 
> There's some kind of rescan in the block loading code that was made to repair the case where someone copied their wallet.dat.  I would need to check that the rescan handles the case of rediscovering received payments in blocks that were already received, but are forgotten because the wallet was restored.

It should be better to allow exporting of keypairs in text form, as is done with PGP, and importing them back.
It would be also useful to add more control over transaction outputs (and inputs) in, say, no-warranty-expert-mode.
I request manual selection of tx inputs and specification of tx outputs. Let it only exist in command-line mode with -do-as-i-say option.
