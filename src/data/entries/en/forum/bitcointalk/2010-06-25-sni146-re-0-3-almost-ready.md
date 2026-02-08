---
title: "Re: 0.3 almost ready"
date: 2010-06-25T14:10:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1769#msg1769"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"0.3 almost ready\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/146/"
threadId: "bt-0-3-almost-ready"
threadTitle: "0.3 almost ready"
threadPosition: 8
---

Thanks virtualcoin, that's a perfect comparison.

The 8% speedup from 32-bit Windows (2310k) to 32-bit Linux (2500k) is probably from the newer version of GCC on Linux (4.4.3 vs 3.4.5).

The 15% speedup from 32-bit to 64-bit Linux is more of a mystery.  The code is completely 32-bit.

Hmm, I think the 8 extra registers added by x86-64 must be what's helping.  That would make a significant difference to SHA if it could hold most of the 16 state variables in registers.
