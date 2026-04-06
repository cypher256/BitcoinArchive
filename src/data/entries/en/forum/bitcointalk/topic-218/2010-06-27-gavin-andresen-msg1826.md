---
title: "Re: (context post by Gavin Andresen)"
date: 2010-06-27T01:55:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=218.msg1826#msg1826"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 218. before msg1828."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "HarryS"
    date: "2010-06-26T16:43:37.000Z"
    sourceEntryId: "forum/bitcointalk/topic-218/2010-06-27-harrys-msg1825"
---

<!-- quote: q1 -->
> When I run,
> Quote./bitcoind getaddressesbylabel ""
> [
> ]
> Is it normal for it to give nothing, or what?

Hmm, yeah, it's probably normal; I THOUGHT the default address was given an empty label; I'm wrong, they're given the label "Your Address".
So:  Code:./bitcoind getaddressesbylabel "Your Address" should work.

Or just generate a new address, either with or without a label:
Code:./bitcoind getnewaddress
