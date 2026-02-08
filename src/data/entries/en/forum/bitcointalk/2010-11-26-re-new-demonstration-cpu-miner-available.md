---
title: "Re: New demonstration CPU miner available"
date: 2010-11-26T22:02:41.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1925.msg24719#msg24719"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"New demonstration CPU miner available\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/516/"
---

You should try it with tcatm's 4-way SSE2 SHA in sha256.cpp.  It compiles fine as a C file, just rename sha256.cpp to sha256.c.  I was able to get it to work in simple tests on Windows, but not when linked in with Bitcoin.  It may have a better chance of working as part of a C program instead of C++.

Currently it's only enabled in the Linux build, so if you get it to work you could make it available to Windows users.  It's about 100% speedup on AMD CPUs.
