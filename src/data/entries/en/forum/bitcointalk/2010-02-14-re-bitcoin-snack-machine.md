---
title: "Re: Bitcoin snack machine"
date: 2010-02-14T17:47:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=423.msg3819#msg3819"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi describes the vision for fast Bitcoin payments, explaining that for small transactions, accepting zero-confirmation transactions is practical and secure enough."
isSatoshi: true
tags:
  - "zero-confirmation"
  - "payments"
  - "vending"
  - "practicality"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/33/"
---

I believe it'll be possible for a payment processing company to provide as a service the rapid distribution of transactions with good-enough checking in something like 10 seconds or less.

The network nodes only accept the first version of a transaction they receive to incorporate into the block they're trying to generate. When you broadcast a transaction, if someone else broadcasts a double-spend at the same time, it's a race to propagate to the most nodes first. If one has a slight head start, it'll geometrically spread through the network faster and get most of the nodes.

A rough back-of-the-envelope calculation: With z=-1, 10% hashpower, and 10 seconds between the real transaction and the double-spend attempt, the probability of the double-spend succeeding is about 0.0000001, negligible.
