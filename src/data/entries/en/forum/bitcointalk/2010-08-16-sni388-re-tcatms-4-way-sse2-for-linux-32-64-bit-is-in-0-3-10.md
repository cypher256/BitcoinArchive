---
title: "Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
date: 2010-08-16T13:38:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9736#msg9736"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/388/"
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-is-in-0-3-1"
threadTitle: "tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
threadPosition: 3
---

I wrapped sha256.cpp in 
#ifdef FOURWAYSSE2
#endif // FOURWAYSSE2

try it now.
