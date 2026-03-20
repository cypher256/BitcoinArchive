---
title: "Transaction / spam flood attack currently under way"
date: 2010-11-19T10:02:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1850.msg22870#msg22870"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Jeff Garzik starts a discussion: Transaction / spam flood attack currently under way."
isSatoshi: false
threadId: "bt-transaction-spam-flood-attack"
threadPosition: 1
tags: []
---

Someone is apparently "testing" the main bitcoin network by flooding it with 0.01 BTC transactions from A->A and B->B, where A and B are two random public keys.  You can watch at [http://theymos.ath.cx:64150/bbe](http://theymos.ath.cx:64150/bbe) 

We've hit the free transaction limit on each block, for many blocks now -- appears to be ~219 free transactions per block.  "real" transactions do not appear DoS'd at this time, presumably due to logic that prioritizes, in part, based on transaction value.

<soapbox>
Free TX's are just asking for permanent level of spam.  There should be a cost to each TX, even if it's only 0.001 BTC or so.
</soapbox>
