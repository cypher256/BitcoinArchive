---
title: "Re: How fast do the fastest computers generate bitcoins?"
date: 2010-06-22T04:35:26.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=197.msg1656#msg1656"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"How fast do the fastest computers generate bitcoins?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/135/"
---

I've noticed that hashing performance doesn't vary as much between CPUs as you'd expect.  Compared to an old CPU, a newer CPU doesn't show as much of a speedup at hashing as it does on general benchmarks.

I guess recent CPU optimizations must have concentrated on things like I/O and branch prediction.  Most programs are a bunch of memory access, comparisons and branching, they rarely get down to cranking away at maths for very long.

The latest SVN version has a khash/s display.  Around 400 khash/s per processor is typical.
