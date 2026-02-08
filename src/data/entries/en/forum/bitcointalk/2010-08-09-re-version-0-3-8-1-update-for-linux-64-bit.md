---
title: "Re: Version 0.3.8.1 update for Linux 64-bit"
date: 2010-08-09T20:55:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=765.msg8422#msg8422"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Version 0.3.8.1 update for Linux 64-bit\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/335/"
threadId: "bt-version-0-3-8-1-update-for-linux-64-bit"
threadTitle: "Version 0.3.8.1 update for Linux 64-bit"
threadPosition: 2
---

That's a good point, I believe you could run with generation off if you don't have SSE2.

How about add to the top of cryptopp/config.h:

#if !defined(_M_X64) && !defined(__x86_64__)
#define CRYPTOPP_DISABLE_SSE2  1
#endif

that would disable SSE2 for 32-bit builds.  (at least with GCC or MSVC)
