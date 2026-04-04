---
title: "The dollar cost of bitmining energy"
date: 2010-07-16T05:42:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=403.msg3397#msg3397"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "Context post by Ground Loop in BitcoinTalk topic 403. before msg3545."
isSatoshi: false
tags: []
---

I run my computers off solar-generated electricity, so I keep pretty tight tabs on how much power they consume.

I have one headless Ubuntu server that is always-on, usually with the disk array spun down, as it has some central network management roles.  It's an Intel Core2Duo E6300 @ 1.86 GHz, and mines at about 950 khash/s.

I was curious to see the impact bitcoind generation would have on it.  Here is what it looks like:

The lowest level on the left is idle, and the noise after it is bitcoind inhaling the block history.  The step up is the bitminer threads.
In short, hashing raised the idle floor from about 120W to 160W, or +40W.

This draws 29 kilowatt-hours a month from my generation, which means I net some $3.80 less for power ($0.13/kwh marginal power rate)

If I generate an average of 13 blocks a month at the current difficulty, BTC 650, that puts my cost at about US$0.005/BTC.

In short, I'm better off buying BTC from the exchange than generating them on this particular machine.  Food for thought.
