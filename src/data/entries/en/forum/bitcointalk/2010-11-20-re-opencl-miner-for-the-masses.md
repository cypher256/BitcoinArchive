---
title: "Re: OpenCL miner for the masses"
date: 2010-11-20T17:24:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1334.msg23097#msg23097"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"OpenCL miner for the masses\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/506/"
---

[Quote from: m0mchil on November 20, 2010, 10:16:19 AM](https://bitcointalk.org/index.php?topic=1334.msg23018#msg23018)updated to SVN 186
Thanks m0mchil for keeping up on the updates!

GPU miners, please upgrade as soon as possible to shut down the free transaction abuse!  This version has the new priority-based limit on free transaction spam.

[Quote from: m0mchil on November 16, 2010, 10:30:41 AM](https://bitcointalk.org/index.php?topic=1334.msg22251#msg22251)Just updated to SVN 181 and fixed getwork patch to wait 60 seconds between rebuilding the block with new transactions. This is actually the behavior of the original client, was forgotten in the patch by mistake.  Fixes heavy CPU usage on every getwork request (this became obvious with recent heavy transaction spam). Please upgrade.
Before SVN 184, compiling transactions into a block used an n^2 algorithm.  The new efficient single-pass algorithm is orders of magnitude quicker.  (O(n) vs O(n^2)/2 algorithm, n=200 maybe 10 to 100 times quicker)
