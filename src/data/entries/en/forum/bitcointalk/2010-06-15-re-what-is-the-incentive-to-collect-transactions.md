---
title: "Re: What is the incentive to collect transactions?"
date: 2010-06-15T23:41:29.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=165.msg1595#msg1595"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"What is the incentive to collect transactions?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/122/"
---

[Quote from: theymos on June 05, 2010, 04:26:09 PM](https://bitcointalk.org/index.php?topic=165.msg1373#msg1373)Adding transactions to the block you're working on will slow down your generation rate
The premise is false.  Adding more transactions to the block you're working on does NOT slow down your generation rate.  When generate is scanning hashes, it only hashes the header of the block, which is constant size.  The header contains a hash of the transactions (the Merkle root) and is only updated occasionally.

If necessary I can write code to make nodes prefer not to use a block if it doesn't contain enough of the transactions they know about.  A discouraged block would almost always fail to be included in the main chain, but would be accepted if it did get in.  I doubt this will be necessary, since there's no real advantage for nodes not to include all transactions.
