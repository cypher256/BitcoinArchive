---
title: "Re: Anonymity"
date: 2010-08-10T07:59:00.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=241.msg8497#msg8497"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "Context post by throughput in BitcoinTalk topic 241. after msg2071, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-07-08T19:12:00.000Z"
    sourceEntryId: "forum/bitcointalk/topic-241/2010-07-08-re-anonymity"
---

<!-- quote: q1 -->
> It's hard to imagine the Internet getting segmented airtight.  It would have to be a country deliberately and totally cutting itself off from the rest of the world.
>
> Any node with access to both sides would automatically flow the block chain over, such as someone getting around the blockade with a dial-up modem or sat-phone.  It would only take one node to do it.  Anyone who wants to keep doing business would be motivated.
>
> If the network is segmented and then recombines, any transactions in the shorter fork that were not also in the longer fork are released into the transaction pool again and are eligible to get into future blocks.  Their number of confirmations would start over.

It is easy to imagine some bug in implementation, that may be triggered by some invalid specially crafted network message,
let it cause bitcoin client to hang, but only after retransmission of the same message to peers and after damaging the blockchain
database on disk.

If there will be only one implementation with the same bugs shared among versions and platforms, then the entire network will lose blockchain and when the majority will eventually recover, every separate node will reconnect to some existing majority with it's own notion of history. If that event happens as a coordinated attack, then we may get very different history.
How can that affect previous transactions?
BTW, is there a blockchain backups?

PS: Let's not discuss how impossible it is to exploit software vulnerabilities so precisely. That is an art with it's own secrets and surprises. And no, I cannot do that right now to prove it is possible.
