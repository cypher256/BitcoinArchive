---
title: "Re: Auto-detect for 128-bit 4-way SSE2"
date: 2010-09-10T18:11:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1007.msg12372#msg12372"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Auto-detect for 128-bit 4-way SSE2\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/448/"
---

[Quote from: teknohog on September 09, 2010, 07:32:05 PM](https://bitcointalk.org/index.php?topic=1007.msg12336#msg12336)Since the function CallCPUID function contains x86 assembler, it breaks the build on other architectures. I've changed line 2770 in main.cpp to

#if defined(__GNUC__) && defined(CRYPTOPP_X86_ASM_AVAILABLE)

to make it compile again, at least on ARM.
Added in SVN rev 152
