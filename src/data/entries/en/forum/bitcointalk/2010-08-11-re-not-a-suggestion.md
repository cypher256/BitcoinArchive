---
title: "Re: Not a suggestion"
date: 2010-08-11T00:14:22.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=770.msg8637#msg8637"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Not a suggestion\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/339/"
threadId: "bt-not-a-suggestion"
threadTitle: "Not a suggestion"
threadPosition: 2
---

This is a very interesting topic.  If a solution was found, a much better, easier, more convenient implementation of Bitcoin would be possible.

Originally, a coin can be just a chain of signatures.  With a timestamp service, the old ones could be dropped eventually before there's too much backtrace fan-out, or coins could be kept individually or in denominations.  It's the need to check for the absence of double-spends that requires global knowledge of all transactions.

The challenge is, how do you prove that no other spends exist?  It seems a node must know about all transactions to be able to verify that.  If it only knows the hash of the in/outpoints, it can't check the signatures to see if an outpoint has been spent before.  Do you have any ideas on this?

It's hard to think of how to apply zero-knowledge-proofs in this case.

We're trying to prove the absence of something, which seems to require knowing about all and checking that the something isn't included.
