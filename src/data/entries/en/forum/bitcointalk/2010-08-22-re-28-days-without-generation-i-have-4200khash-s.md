---
title: "Re: 28 days without generation, i have 4200khash/s"
date: 2010-08-22T23:01:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=862.msg10717#msg10717"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"28 days without generation, i have 4200khash/s\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/407/"
---

Search debug.log for "proof-of-work found".  If you find any, then check for any errors right after that.

[Quote from: davidonpda on August 19, 2010, 07:43:01 PM](https://bitcointalk.org/index.php?topic=862.msg10291#msg10291)How big of a margin on the time is allowed for things to work right.
The margin is 2 hours.

This should be solved in SVN rev 141 and the next release (0.3.11+).  It'll pop up a message box alerting you if your clock is off by more than an hour.
