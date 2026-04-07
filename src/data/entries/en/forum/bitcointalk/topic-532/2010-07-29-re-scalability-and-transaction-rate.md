---
title: "Re: Scalability and transaction rate"
date: 2010-07-29T02:00:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=532.msg6306#msg6306"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Scalability and transaction rate\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/287/"
quotes:
  - id: "q1"
    person: "bytemaster"
    personSlug: "bytemaster"
    date: "2010-07-28T11:59:42.000Z"
    sourceEntryId: "forum/bitcointalk/topic-532/2010-07-28-bytemaster-msg6269"
---

The current system where every user is a network node is not the intended configuration for large scale.  That would be like every Usenet user runs their own NNTP server.  The design supports letting users just be users.  The more burden it is to run a node, the fewer nodes there will be.  Those few nodes will be big server farms.  The rest will be client nodes that only do transactions and don't generate.

<!-- quote: q1 -->
> Besides, 10 minutes is too long to verify that payment is good.  It needs to be as fast as swiping a credit card is today.

See the snack machine thread, I outline how a payment processor could verify payments well enough, actually really well (much lower fraud rate than credit cards), in something like 10 seconds or less.  If you don't believe me or don't get it, I don't have time to try to convince you, sorry.
[topic 423](/BitcoinArchive/entries/forum/bitcointalk/topic-423/2010-07-17-newlibertystandard-msg3708/)
