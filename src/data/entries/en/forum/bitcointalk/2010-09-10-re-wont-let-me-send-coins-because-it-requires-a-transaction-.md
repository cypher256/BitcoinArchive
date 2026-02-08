---
title: "Re: Won't let me send coins because it requires a transaction fee?"
date: 2010-09-10T00:23:24.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1013.msg12341#msg12341"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Won't let me send coins because it requires a transaction fee?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/445/"
threadId: "bt-won-t-let-me-send-coins-because-it-requires-a-tran"
threadTitle: "Won't let me send coins because it requires a transaction fee?"
threadPosition: 1
---

What version is the one where this happened?  Release build, or built it yourself?  Which operating system?  

Were you sending by IP or by Bitcoin Address?

When you sent 49.99, did it prompt you to pay a 0.01 fee?

There was a change in GetMinFee, but I can't see how it would cause this.  It only starts to apply when a block gets huge. 

The reason for the difference in block number is the number displayed was reduced by 1 in 0.3.11 because it made more sense that way.
