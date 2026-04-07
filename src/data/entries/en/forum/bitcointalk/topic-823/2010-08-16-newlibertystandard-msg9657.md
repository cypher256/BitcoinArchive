---
title: "Re: overflow bug SERIOUS"
date: 2010-08-16T03:09:52.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9657#msg9657"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 823. after msg9648, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "bdonlan"
    personSlug: "bdonlan"
    date: "2010-08-16T02:39:55.000Z"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-16T02:16:10.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-satoshi-msg9642"
---

<!-- quote: q1 -->
> 
> <!-- quote: q2 -->
> > The bad chain is also slowed down as more nodes upgrade.
> > 
> > We've already generated 14 blocks since 74638.  The builds of 0.3.10 were uploaded about 2 and 3 hours ago.  Of the nodes I'm connected to, more than half are already 0.3.10.  I would say we probably already have more power than the bad chain.
> 
> I think it'd probably be a good idea still to come out with another version that rejects connections from older versions - otherwise the network might remain rather fragmented for a while. :/

We want to keep the older clients connected so that when the correct chain overtakes the incorrect chain, they will switch back to the correct chain. Although I don't know the specifics of how far back in the chain the old chain will accept a branched chain.
