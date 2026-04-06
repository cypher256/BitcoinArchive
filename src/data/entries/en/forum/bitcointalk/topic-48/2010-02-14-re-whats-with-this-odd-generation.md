---
title: "Re: What's with this odd generation?"
date: 2010-02-14T06:28:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=48.msg327#msg327"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"What's with this odd generation?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/56/"
quotes:
  - id: "q1"
    person: "theymos"
    date: "2010-02-11T23:31:52.000Z"
  - id: "q2"
    person: "SmokeTooMuch"
    date: "2010-02-12T04:11:09.000Z"
---

<!-- quote: q1 -->
> Does the sending client send more BitCoins to account for the fee (so the recipient gets what he's expecting)?

Yes.

<!-- quote: q2 -->
> why do we even need fees ? i thougt the no-fees-feature was one of the advantages of bitcoin ?!

Almost all transactions are free.  A transaction is over the maximum size limit if it has to add up more than 500 of the largest payments you've received to make up the amount.  A transaction over the size limit can still be sent if a small fee is added.

The average transaction, and anything up to 500 times bigger than average, is free.

It's only when you're sending a really huge transaction that the transaction fee ever comes into play, and even then it only works out to something like 0.002% of the amount.  It's not money sucked out of the system, it just goes to other nodes.  If you're sad about paying the fee, you could always turn the tables and run a node yourself and maybe someday rake in a 0.44 fee yourself.
