---
title: "Re: resource hog"
date: 2010-07-15T14:59:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=327.msg3162#msg3162"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"resource hog\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/192/"
---

Then all the CPU time is the generate thread, which definitely runs at the lowest possible priority, idle priority.  It's normal that your CPU meter is 100%.  Since it's idle priority, it won't actually slow anything else down, even though the CPU meter is 100%.
