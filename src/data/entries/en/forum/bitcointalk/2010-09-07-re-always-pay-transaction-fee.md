---
title: "Re: Always pay transaction fee?"
date: 2010-09-07T16:32:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=994.msg12168#msg12168"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Always pay transaction fee?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/439/"
---

Another option is to reduce the number of free transactions allowed per block before transaction fees are required.  Nodes only take so many KB of free transactions per block before they start requiring at least 0.01 transaction fee.

The threshold should probably be lower than it currently is.

I don't think the threshold should ever be 0.  We should always allow at least some free transactions.
