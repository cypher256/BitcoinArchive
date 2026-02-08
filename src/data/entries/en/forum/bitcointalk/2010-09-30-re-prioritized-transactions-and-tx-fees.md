---
title: "Re: Prioritized transactions, and tx fees"
date: 2010-09-30T18:11:56.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1314.msg14732#msg14732"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Prioritized transactions, and tx fees\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/468/"
---

It ramps up the fee requirement as the block fills up:

<50KB  free
50KB   0.01
250KB  0.02
333KB  0.03
375KB  0.04
etc.

It's a typical pricing mechanism.  After the first 50KB sells out, the price is raised to 0.01.  After 250KB is sold, it goes up to 0.02.  At some price, you can pretty much always get in if you're willing to outbid the other customers.

Just including the minimum 0.01 goes a long way.
