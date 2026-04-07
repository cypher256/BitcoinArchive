---
title: "Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
date: 2010-08-16T05:02:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9680#msg9680"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 820. after msg9676, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "gridecon"
    personSlug: "gridecon"
    date: "2010-08-16T03:15:44.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-16-gridecon-msg9659"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-16T02:57:57.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-16-re-tcatms-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
  - id: "q3"
    person: "NewLibertyStandard"
    personSlug: "newlibertystandard"
    date: "2010-08-16T01:49:01.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-16-newlibertystandard-msg9630"
---

<!-- quote: q1 -->
> I have two quadcore Phenom II 64-bit linux machines (ubuntu 9.10 both) and the -4way option increases my hashing speed so much I'm suspicious. I get about 5-6khash/sec on these boxes previously and without -4way option. With -4way I get over 11khash/sec! In other words, the -4way switch almost DOUBLES the reported hashing speed. This level of improvement seems more than expected and makes me wonder if my boxes are really doing the hashing that much faster or if there could possible be an issue where the math operations are actually being skipped over for some reason, causing illusory speed and an inability to actually generate blocks?

o_O... good luck hashing, you're gonna need it!

<!-- quote: q2 -->
> <!-- quote: q3 -->
> > With 4way, I get significantly better performance when I have all my virtual cores enabled. I think I get about the same amount of hashes when hyper threading is turned off with or without 4way.
> 
> Hey, you may be onto something!
> 
> hyperthreading didn't help before because all the work was in the arithmetic and logic units, which the hyperthreads share.
> 
> tcatm's SSE2 code must be a mix of normal x86 instructions and SSE2 instructions, so while one is doing x86 code, the other can do SSE2.
> 
> How much of an improvement do you get with hyperthreading?
> 
> Some numbers?  What CPU is that?

Here are the results from my very poor memory on an i7 860 2.8 GHz with Ubuntu 10.04 amd64. Some of the numbers may be a bit off.

Without 4way, with HT, 4/8 virtual cores, 4.5-5 Mhash/sec
Without 4way, with HT, 8/8 virtual cores, a bit less than above, but basically the same

With 4way, with HT, 8/8 virtual cores, 6.5-8 Mhash/sec (It may be my imagination, but it seems noticeably more variable.)
With 4way, with HT, 4/8 virtual cores, 5-6 Mhash/sec

Without 4way, without HT, 4/4 physical cores, 4.5-5 Mhas/sec (But a bit slower than the first result.)
With 4way, without HT, 4/4 physical cores, 5-6 Mhash/sec
