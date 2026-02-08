---
title: "Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"
date: 2010-08-02T19:02:46.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg7084#msg7084"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"4 hashes parallel on SSE2 CPUs for 0.3.6\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/307/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 2
---

Is it 2x fast on AMD and 1/2 fast on Intel?

[Quote from: tcatm on July 31, 2010, 10:12:38 AM](https://bitcointalk.org/index.php?topic=648.msg6797#msg6797)Btw. Why are you using this alignup<16> function when __attribute__ ((aligned (16))) will tell the compiler to align at compiletime?
Tried that, but it doesn't work for things on the stack.  I ran some tests.

It doesn't even cause an error, it just doesn't align it.
