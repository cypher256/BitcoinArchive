---
title: "Re: 0.3.1 release candidate, please test"
date: 2010-07-15T17:56:43.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=383.msg3221#msg3221"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"0.3.1 release candidate, please test\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/195/"
threadId: "bt-0-3-1-release-candidate-please-test"
threadTitle: "0.3.1 release candidate, please test"
threadPosition: 2
---

I don't think you have a particular problem, I think your system is laggy because you're running a lot of things at once and hitting the pagefile because memory is full.  You confirmed when you shut off generation that your CPU drops to 0%, so the CPU usage is definitely all idle priority.  There's nothing in the 0.3.1 that would affect these things.
