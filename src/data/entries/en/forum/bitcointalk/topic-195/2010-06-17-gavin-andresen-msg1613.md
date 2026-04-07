---
title: "Re: Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-17T19:58:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1613#msg1613"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 195. quoted by msg1617."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-06-17T09:46:08.000Z"
---

<!-- quote: q1 -->
> I don't believe a second, compatible implementation of Bitcoin will ever be a good idea.  So much of the design depends on all nodes getting exactly identical results in lockstep that a second implementation would be a menace to the network.  The MIT license is compatible with all other licenses and commercial uses, so there is no need to rewrite it from a licensing standpoint.

Good idea or not, SOMEBODY will try to mess up the network (or co-opt it for their own use) sooner or later.  They'll either hack the existing code or write their own version, and will be a menace to the network.

I admire the flexibility of the scripts-in-a-transaction scheme, but my evil little mind immediately starts to think of ways I might abuse it.  I could encode all sorts of interesting information in the TxOut script, and if non-hacked clients validated-and-then-ignored those transactions it would be a useful covert broadcast communication channel.

That's a cool feature until it gets popular and somebody decides it would be fun to flood the payment network with millions of transactions to transfer the latest Lady Gaga video to all their friends...
