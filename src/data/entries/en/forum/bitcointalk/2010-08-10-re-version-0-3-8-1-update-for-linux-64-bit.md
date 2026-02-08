---
title: "Re: Version 0.3.8.1 update for Linux 64-bit"
date: 2010-08-10T23:46:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=765.msg8628#msg8628"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Version 0.3.8.1 update for Linux 64-bit\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/338/"
---

SVN rev 128: disable SSE2 on 32-bit.  This may only disable it for MSVC and GCC.  Other compilers might have different 64-bit defines.
