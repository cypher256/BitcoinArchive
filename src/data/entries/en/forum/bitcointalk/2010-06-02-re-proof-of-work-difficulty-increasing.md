---
title: "Re: Proof-of-work difficulty increasing"
date: 2010-06-02T18:45:38.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg1323#msg1323"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Proof-of-work difficulty increasing\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/115/"
---

That's a good idea.  I'm not sure where exactly to fit that in, but it could certainly calculate the expected average time between blocks generated, and then people would know what to expect.

Every node and each processor has a different public key in its block, so they're guaranteed to be scanning different territory.

Whenever the 32-bit nonce starts over at 1, bnExtraNonce gets incremented, which is an arbitrary precision integer.
