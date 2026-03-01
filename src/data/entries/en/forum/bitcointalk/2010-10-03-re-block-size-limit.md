---
title: "Re: Block size limit"
date: 2010-10-03T23:47:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1347.msg15139#msg15139"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi discusses the block size limit and how it can be increased in the future if needed, through a phased approach."
isSatoshi: true
tags:
  - "block-size"
  - "scalability"
  - "future-planning"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/387/"
---

It can be phased in, like:

if (blocknumber > 115000)
    maxblocksize = largerlimit

It can start being in versions way ahead, so by the time it reaches that block number and goes into effect, the older versions that don't have it are already obsolete.

When we're near the cutoff block number, I can put an alert to old versions to make sure they know they have to upgrade.
