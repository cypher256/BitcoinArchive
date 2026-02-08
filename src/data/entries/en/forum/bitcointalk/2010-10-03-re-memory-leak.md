---
title: "Re: Memory leak"
date: 2010-10-03T22:07:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1023.msg15150#msg15150"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Memory leak\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/481/"
---

You're connecting to yourself.  All 21 connection attempts were to a node with version 31300 (0.3.13).  Not everyone has 0.3.13 yet.

IRC seems to be working.  It ought to have other nodes to try.

There may be something I need to do to make sure it doesn't try to connect to itself again right away after disconnecting.  I can't see how it's happening though, it should be resetting nLastTry which would put it to the back of the queue, but the log doesn't show it.

You can try moving addr.dat aside.  Maybe there's something wrong in it.

Are you using -addnode?
