---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-08-03T18:38:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=661.msg7293#msg7293"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 661."
isSatoshi: false
tags: []
---

[Quote from: BeeCee1 on August 03, 2010, 03:12:42 PM](/BitcoinArchive/entries/forum/bitcointalk/topic-661/2010-08-03-beecee1-msg7249/)
> I am also not saying it is a good thing.  having a single split for a fairly long period of time lets people come up with a solution, having many splits that each last for a few hours means that transactions randomly disappear and that hurts confidence in the system.

Transactions won't disappear if they're valid.  They'll just move to the longer block chain.

Invalid transactions would be somebody trying to double-spend across the split chains (which would be tricky-- you'd have to run a modified client, or copy your wallet to a machine working on the other block chain).

Or if the split lasted long enough (more than 100 blocks), transactions that involve generated coins on the shorter chain would be invalid at the merge.

For shorter splits, immature generated coins on the shorter chain will disappear when the chains merge, but that would be about the worst consequences for honest users (unless you were unlucky enough to get an invalid coin from somebody trying to cheat).
