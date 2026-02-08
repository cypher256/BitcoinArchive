---
title: "Re: Where is the separate discussion devoted to possible Bitcoin weaknesses."
date: 2010-08-11T22:40:25.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=788.msg8804#msg8804"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Where is the separate discussion devoted to possible Bitcoin weaknesses.\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/344/"
---

It doesn't have to be such a breaking change.  New nodes could accept old transactions for a long time until most nodes have already upgraded before starting to refuse transactions without PoW.  Or, they could always accept old transactions, but only a limited number per time period.

I've thought about PoW on transactions many times, but usually I end up thinking a 0.01 transaction fee is essentially similar and better.  0.01 is basically a proof of work, but not wasted.  But if the problem is validating loads of transactions, then PoW could be checked faster.

A more general umbrella partial solution would be to implement the idea where an unlikely dropoff in blocks received is detected.  Then an attacker would still need a substantial portion of the network's power to benefit from a DoS attack.

[Quote from: gavinandresen on August 11, 2010, 04:10:56 PM](https://bitcointalk.org/index.php?topic=788.msg8761#msg8761)Bitcoin's p2p network is subject to various kinds of denial of service attacks.

There, I said it.
+1

Any demonstration tests at this point would only show what we already know, and divert dev time from strengthening the system to operational fire fighting.
