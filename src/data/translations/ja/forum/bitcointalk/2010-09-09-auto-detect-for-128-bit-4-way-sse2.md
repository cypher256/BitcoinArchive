---
title: "Auto-detect for 128-bit 4-way SSE2"
date: 2010-09-09T01:04:05.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1007.msg12262#msg12262"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"Auto-detect for 128-bit 4-way SSE2\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/444/"
threadId: "bt-auto-detect-for-128-bit-4-way-sse2"
threadTitle: "Auto-detect for 128-bit 4-way SSE2"
threadPosition: 1
translationStatus: pending
---

SVN rev 150 has some code to try to auto-detect whether to use 4-way SSE2.  We need this because it's only faster on certain newer CPUs that have 128-bit SSE2 and not ones with 64-bit SSE2.

It uses the CPUID instruction to get the CPU brand, family, model number and stepping.  That's the easy part.  Knowing what to do with the model number is the hard part.  I was not able to find any table of family, model and stepping numbers for CPUs.  I had to go by various random reports I saw.

Here's what I ended up with:
Code:  // We need Intel Nehalem or AMD K10 or better for 128bit SSE2
  // Nehalem = i3/i5/i7 and some Xeon
  // K10 = Opterons with 4 or more cores, Phenom, Phenom II, Athlon II
  //  Intel Core i5  family 6, model 26 or 30
  //  Intel Core i7  family 6, model 26 or 30
  //  Intel Core i3  family 6, model 37
  //  AMD Phenom    family 16, model 10
  bool fUseSSE2 = ((fIntel && nFamily * 10000 + nModel >=  60026) ||
                   (fAMD   && nFamily * 10000 + nModel >= 160010));

I saw some sporadic inconsistent model numbers for AMD CPUs, so I'm not sure if this will catch all capable AMDs.

If it's wrong, you can still override it with -4way or -4way=0.

It prints what it finds in debug.log.  Search on CPUID.

This is only enabled if built with GCC.
