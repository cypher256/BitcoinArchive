---
title: "Re: Questions about Bitcoin"
date: 2009-12-11T17:58:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=13.msg49#msg49"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Questions about Bitcoin\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/18/"
threadId: "bt-questions-about-bitcoin"
threadTitle: "Questions about Bitcoin"
threadPosition: 2
---

That's true, with the send-to-IP option, you are sending to whoever answers that IP.  Sending to a bitcoin address doesn't have that problem.

The plan is to implement an IP + bitcoin address option that would have the benefits of both.  It would still use a different address for each transaction, but the receiver would sign the one-time-use address with the given bitcoin address to prove it belongs to the intended receiver.
