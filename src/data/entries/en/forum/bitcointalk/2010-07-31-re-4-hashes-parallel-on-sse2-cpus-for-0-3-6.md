---
title: "Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"
date: 2010-07-31T00:29:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg6751#msg6751"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"4 hashes parallel on SSE2 CPUs for 0.3.6\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/302/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 1
---

That's amazing... 

So are you saying you use 128-bit registers to SIMD four 32-bit data at once?  I've wondered about that for a long time, but I didn't think it would be possible due to addition carrying into the neighbour's value.
