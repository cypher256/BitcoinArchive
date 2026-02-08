---
title: "Re: Is safe running bitcoins with the same wallet on more computers simultaneously?"
date: 2010-11-28T18:06:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1986.msg25154#msg25154"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Is safe running bitcoins with the same wallet on more computers simultaneously?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/519/"
---

QuoteWill it be synchronized automatically?
Very much not.  Using multiple copies of wallet.dat is not recommended or supported, in fact all of Bitcoin is designed to defeat that.  Both copies will get screwed up.

If you're trying to consolidate your generated coins into one wallet, a better solution now is to run getwork miners on the additional systems.  jgarzik has a CPU miner, and it supports tcatm's 4-way SSE2, so on Windows it's up to twice as fast as the built-in SHA if you have an AMD or recent Intel (core 3, 5 or 7).

New demonstration CPU miner available:
[http://bitcointalk.org/index.php?topic=1925.0](http://bitcointalk.org/index.php?topic=1925.0)
