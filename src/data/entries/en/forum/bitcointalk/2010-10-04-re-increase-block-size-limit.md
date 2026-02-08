---
title: "Re: [PATCH] increase block size limit"
date: 2010-10-04T19:48:40.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1347.msg15366#msg15366"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"[PATCH] increase block size limit\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/485/"
threadId: "bt-patch-increase-block-size-limit"
threadTitle: "[PATCH] increase block size limit"
threadPosition: 2
---

It can be phased in, like:

if (blocknumber > 115000)
    maxblocksize = largerlimit

It can start being in versions way ahead, so by the time it reaches that block number and goes into effect, the older versions that don't have it are already obsolete.

When we're near the cutoff block number, I can put an alert to old versions to make sure they know they have to upgrade.
