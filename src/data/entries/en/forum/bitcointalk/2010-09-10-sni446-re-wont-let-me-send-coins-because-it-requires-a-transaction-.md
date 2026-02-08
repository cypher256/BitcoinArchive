---
title: "Re: Won't let me send coins because it requires a transaction fee?"
date: 2010-09-10T00:46:37.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1013.msg12342#msg12342"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Won't let me send coins because it requires a transaction fee?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/446/"
---

I think I know what happened.  Doubleclick on the generated transaction.  It probably has a sub-0.01 transaction fee in it.

Someone has been paying a 0.00000010 transaction fee.  I don't think you can even set that with -paytxfee, I think you'd have to modify the code to do it.  Your generated block is worth 50.00000010, so when you try to send the whole thing you have 0.00000010 left over for the change, which triggers the dust spam 0.01 fee.

It would normally be harmless except in this corner case.  I should add a special case to CreateTransaction to handle this.
