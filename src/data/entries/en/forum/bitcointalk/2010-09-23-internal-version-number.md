---
title: "Internal version number"
date: 2010-09-23T16:19:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1269.msg13831#msg13831"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Internal version number\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/458/"
---

In the next release (0.3.13), I'm going to change the format of the internal version number integer from 313 to 31300, for instance 31305 = 0.3.13.5.  The last number represents changes on the SVN between releases and ought to be properly represented in the version number.  Otherwise, it would be a pain if we had a mistake or something in one of the sub versions that needed to be worked around.
