---
title: "Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
date: 2010-08-16T04:34:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9674#msg9674"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "Context post by Ground Loop in BitcoinTalk topic 820. before msg9676."
isSatoshi: false
tags: []
---

No winners for 4way in my other three Intel machines either:

Intel(R) Core(TM)2 Duo CPU     E8500 @ 3.16GHz (64-bit Linux)
4way: 1565  std: 3002

Intel(R) Xeon(TM) CPU 3.00GHz (32-bit Linux)
4way: 1243  std: 2048

Intel(R) Core(TM)2 CPU          6300  @ 1.86GHz
4way: 932   std: 1733

(All running 0.3.10, -1 proclimit)
Experiments with proclimit weren't any better.
