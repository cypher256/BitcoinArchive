---
title: "Re: Version 0.3.13, please upgrade"
date: 2010-10-03T21:43:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg15147#msg15147"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Version 0.3.13, please upgrade\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/480/"
---

ShadowOfHarbringer, is yours faster with -4way?

If it is, then I'm thinking that any AMD that supports 64-bit has 128-bit SSE2.

The specialbuild version I posted here looks for model 4 or higher.  If yours is faster with -4way, then I should change it to always use SSE2 with any AMD with 64-bit.
