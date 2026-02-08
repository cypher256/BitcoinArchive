---
title: "Re: BUG Report: Rounding glitch"
date: 2010-07-17T16:06:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=432.msg3769#msg3769"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"BUG Report: Rounding glitch\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/229/"
---

It must be a rounding error when getinfo converts to floating point to return the JSON-RPC result.  The only place where it uses floating point to represent money is returning a value in JSON-RPC.

1.139999999999 is longer than bitcoin can internally represent.

internally, it could only be:
1.13999999 or
1.14000000

1.139999999999 is much much closer to 1.14000000 than 1.13999999, so it must be 1.14000000.

The code is this:
(double)GetBalance() / (double)COIN.

(I can't think of an easy way to fix it at the moment)
