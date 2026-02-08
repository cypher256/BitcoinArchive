---
title: "Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"
date: 2010-08-12T22:07:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg8929#msg8929"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッドにおけるサトシ・ナカモトの返信 \"4 hashes parallel on SSE2 CPUs for 0.3.6\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/352/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 4
translationStatus: pending
---

That big of a difference in speed, by a factor of 4 or 6, feels like it's likely to be some quirky weak spot or instruction that the old chip is slow with.  Unless it's a touted feature of the i5 that they made SSE2 six times faster.

A quick summary:
Xeon Quad        41% slower
Core 2 Duo        55% slower
Core 2 Duo        same (vess)
Core 2 Quad      50% slower
Core i5            200% faster (nelisky)
Core i5            100% faster (vess)
AMD Opteron    105% faster

aceat64:
My system went from ~7100 to ~4200.
This particular system has dual Intel Xeon Quad-Core CPUs (E5335) @ 2.00GHz.

impossible7:
on an Intel Core 2 Duo T7300 running x86_64 linux it was 55% slower compared to the stock version (r121)

nelisky:
My Core2Quad (Q6600) slowed down 50%, 
my i5 improved ~200%, 

impossible7:
on an AMD Opteron 2374 HE running x86_64 linux I got a 105% improvement (!)
