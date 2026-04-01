---
title: "Re: (context post by Gavin Andresen)"
date: 2010-07-09T18:11:27.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=240.msg2104#msg2104"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 240. before msg2132."
isSatoshi: false
tags: []
translationStatus: pending
---

It's a bad idea to try to break the "in-production" bitcoin network.

If anybody is starting serious work on either extending Bitcoin or developing compatible implementations or trying to break it by creating bad transactions, I think creating a "parallel universe" test network with its own block chain, data directory, etc makes sense.

Satoshi:  would you be open to a --testnetwork (or something) flag to bitcoin that swapped to an alternate genesis block, data directory, listen port and IRC channel?  Maybe with a really short average block generation time, too (like once per minute instead of once per 10 minutes) so everything happens ten times a fast to make testing quicker.
