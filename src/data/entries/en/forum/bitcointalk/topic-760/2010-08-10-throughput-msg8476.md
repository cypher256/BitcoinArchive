---
title: "Re: What could be the transition plan to Y2038 compliant Bitcoin? (it already is)"
date: 2010-08-10T05:44:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=760.msg8476#msg8476"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "Context post by throughput in BitcoinTalk topic 760. after msg8413, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-08-09T20:13:26.000Z"
    sourceEntryId: "forum/bitcointalk/topic-760/2010-08-09-re-what-could-be-the-transition-plan-to-y2038-compliant-bitc"
---

> unsigned int is good until 2106.  Surely the network will have to be totally revamped at least once by then.
> 
> There should not be any signed int.  If you've found a signed int somewhere, please tell me (within the next 25 years please) and I'll change it to unsigned int.

I have a better idea for timestamps, whatever their underlying type is, for the purposes of calculating the hash,
convert them to the string representation of the number of seconds since the epoch (I hope that moment will not change
after a century).
