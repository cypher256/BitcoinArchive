---
title: "Re: Proof-of-work difficulty increasing"
date: 2010-02-26T01:35:08.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg541#msg541"
author: "Suggester"
participants:
  - name: "Suggester"
    slug: "suggester"
description: "Context post by Suggester in BitcoinTalk topic 43. after msg510, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-02-25T23:06:29.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-25-re-proof-of-work-difficulty-increasing"
  - id: "q2"
    person: "satoshi"
    date: "2010-02-16T17:36:40.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-16-re-proof-of-work-difficulty-increasing"
---

> I don't know what you're talking about accepting easier difficulties.

We were essentially discussing Sabunir's question about what prevents someone from messing with the program's source code to adjust block-generating difficulty to be very easy, then make a network on his own and create a, say, 50,000-block proof-of-work within seconds then finally propagate it across the real network to steal "votes" towards his new fake blocks as technically, his proof would be "the longest". So is there a way to verify how much work was actually put into a given PoW (for eg. how many zero's are at the beginning of each hash or something)?

> It wouldn't work anyway because that would be only 1 minute average between blocks, too close to the broadcast latency when the network gets larger.

Since we're at it, what's the approximate time for proof-of-work propagation across a network of about 100,000 machines? Is there a way to optimize connections so that broadcasting is done via a pyramid-form to minimize the needed time? For example, the block creator sends it to 10 nodes, then those 10 send it to a 100 provided that none of those 100 were among the original 11, then those 100 tell a 1000 provided that none of those 1000 were among the original 111, etc to save time.
