---
title: "Re: Assertion Failure - Ubuntu Lucid"
date: 2010-07-16T14:52:04.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=400.msg3492#msg3492"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Assertion Failure - Ubuntu Lucid\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/211/"
threadId: "bt-assertion-failure-ubuntu-lucid"
threadTitle: "Assertion Failure - Ubuntu Lucid"
threadPosition: 1
---

That's the first time I've seen this error.

How many blocks do you have? (in the status bar)

You should move your blk*.dat files (in ~/.bitcoin) to another directory and let it start over downloading the block chain again.  If you don't mind, could you keep the old blk*.dat files for a little while in case I need to look at them?
