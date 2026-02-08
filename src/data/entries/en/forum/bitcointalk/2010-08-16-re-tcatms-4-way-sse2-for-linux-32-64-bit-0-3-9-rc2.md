---
title: "Re: tcatm's 4-way SSE2 for Linux 32/64-bit 0.3.9 rc2"
date: 2010-08-16T02:57:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9655#msg9655"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"tcatm's 4-way SSE2 for Linux 32/64-bit 0.3.9 rc2\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/384/"
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
threadTitle: "tcatm's 4-way SSE2 for Linux 32/64-bit 0.3.9 rc2"
threadPosition: 3
---

[Quote from: tcatm on August 16, 2010, 12:43:39 AM](https://bitcointalk.org/index.php?topic=820.msg9617#msg9617)I propose to compile sha256.cpp with -O3 -march=amdfamk10 (will work on 32bit and 64bit) as only CPUs supporting this instruction set (AMD Phenom, Intel i5 and newer) benefit from -4way and it'll improve performance by ~9%.
GCC 4.3.3 doesn't support -march=amdfamk10.  I get:
sha256.cpp:1: error: bad value (amdfamk10) for -march= switch

[Quote from: NewLibertyStandard on August 16, 2010, 01:49:01 AM](https://bitcointalk.org/index.php?topic=820.msg9630#msg9630)With 4way, I get significantly better performance when I have all my virtual cores enabled. I think I get about the same amount of hashes when hyper threading is turned off with or without 4way.
Hey, you may be onto something!

hyperthreading didn't help before because all the work was in the arithmetic and logic units, which the hyperthreads share.

tcatm's SSE2 code must be a mix of normal x86 instructions and SSE2 instructions, so while one is doing x86 code, the other can do SSE2.

How much of an improvement do you get with hyperthreading?

Some numbers?  What CPU is that?
