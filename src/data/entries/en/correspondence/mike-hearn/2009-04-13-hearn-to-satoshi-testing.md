---
title: "Questions about BitCoin"
date: 2009-04-13T13:39:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn reports testing Bitcoin on Mac via Wine, asks about block counts, confirmation times for micropayments, proof-of-work coordination, and difficulty adjustment."
isSatoshi: false
threadId: "satoshi-mike-hearn-questions"
threadTitle: "Questions about BitCoin"
threadPosition: 3
tags:
  - "correspondence"
  - "wine"
  - "macos"
  - "block-chain"
  - "micropayments"
  - "confirmations"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Thanks Satoshi,

I tried the app yesterday. It seems to work pretty well running on Wine (I tried it on MacOS but it should run on Linux too, and will try that next week when I am back at work).

In the lower right hand corner it has a block count which increases rapidly and then stops. Is this the length of the global chain? It seems to advance far too fast for that. Or is this the number of genesis blocks that have been tried but did not result in a partial collision? I'm not sure if the way it stops and starts is expected, or some glitch caused by it running under emulation. My best guess - it is the length of the global chain, and the rapid advance at the start is as the software downloads and verifies the preceding blocks in the chain as being valid.

With regards to the buyer/seller experience, I understand that the global chain advances at about 6-7 blocks per hour under the current settings. If we assume that 0.1% is a good risk rate, then z=5 thus any transaction must wait a bit less than an hour before being solidified in the chain. As micropayments for things like web content or virtual goods are by definition something that requires low overhead, waiting an hour seems like quite a significant hurdle.

I understand that nodes attempt to find a POW to advance the global chain in an uncoordinated fashion. This sentence however:

"If a majority of CPU power is controlled by honest nodes, the honest chain will grow the fastest and outpace any competing chains."

is confusing for me, because it appears the only way the honest chain can grow faster than a chain worked on by 1 attacking cpu is if the keyspace to scan looking for a partial collision is sharded evenly amongst the participating honest nodes. That way the speed at which collisions are found would be proportional to the number of nodes. Yet I don't see any discussion of such work sharding, which obviously adds complexity. Likewise:

"To compensate for increasing hardware speed and varying interest in running nodes over time, the proof-of-work difficulty is determined by a moving average targeting an average number of blocks per hour. If they're generated too fast, the difficulty increases."

How is the required difficulty of each block communicated through the network and agreed upon?

Thanks once again. I have yet more questions but this is enough for one email :) I will be happy to summarize these discussions into an FAQ-like document at some point. Apologies if the questions seem trivial.

-mike
