---
title: "Re: Scalability"
date: 2010-06-18T20:43:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2947#msg2947"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi discusses Bitcoin's scalability, comparing potential transaction volume to Visa and explaining how the system can scale with technological progress."
isSatoshi: true
tags:
  - "scalability"
  - "visa"
  - "block-size"
  - "technology-progress"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/114/"
threadId: "bt-scalability"
threadTitle: "Scalability"
threadPosition: 1
---

The current system where every user is a network node is not the intended configuration for large scale. That would be like every Usenet user runs their own NNTP server. The design supports letting users just be users. The more burden it becomes to run a node, the fewer nodes there will be. Those few nodes will be big server farms. The rest will be client nodes that only do transactions and don't generate.

A block header with no transactions would be about 80 bytes. If we suppose blocks are generated every 10 minutes, 80 bytes * 6 * 24 * 365 = 4.2MB per year. With computer systems typically selling with 2GB of RAM as of 2008, and Moore's law predicting current growth of 1.2GB per year, storage should not be a problem even if the block headers must be kept in memory.
