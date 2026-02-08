---
title: "Re: Checking the block chain on load"
date: 2010-08-18T18:28:28.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=841.msg10082#msg10082"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Checking the block chain on load\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/399/"
---

In the next SVN rev, I'll make it only go back to the last checkpoint at block 74000.  If we need to correct a problem in the future, we can always make sure it goes back at least as far back as the problem.  Also, I'm adding code to verify the block index, which means the proof-of-work chain is checked.

Still, the system won't be entirely secure against your blk*.dat files.  You are trusting someone if you use a copy of their blk files.
