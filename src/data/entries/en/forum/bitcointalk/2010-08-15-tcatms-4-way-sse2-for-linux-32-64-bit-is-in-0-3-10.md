---
title: "tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
date: 2010-08-15T15:52:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9452#msg9452"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/363/"
---

0.3.10 has tcatm's 4-way SSE2 as an option switch.

Use the switch "-4way" to turn it on.  Without the switch you get Crypto++ ASM SHA-256.

I could only get this working with Linux.

Download:
Get 0.3.10 from [http://bitcointalk.org/index.php?topic=827.0](http://bitcointalk.org/index.php?topic=827.0)

Please report back your CPU and results!  I think it's pretty clear that Core 2 and lower are slower, i5 faster.  I don't think we've heard any i7 results yet.  We need to know about the different models of AMD or other less common CPUs.
