---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-11-07T02:14:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg20419#msg20419"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 1668."
isSatoshi: false
tags: []
---

Actually... prioritizing free transactions based on both amount and their "age" should make this attack toothless.

The basic idea is that if you're spamming lots of small free transactions, you'll be creating lots of brand-new "pennies" (you'll take an old 50BTC generated transaction, then split off a penny and get a penny and 49.99 change.  Then split that 49.99 to get another penny, and so on and so on).

Sorting pending free transactions so that larger-value transactions and free transactions with inputs deep in the block chain ("old money") are given priority would let normal transactions go through.

The spammy transactions would still take up network bandwidth and disk space; if that becomes a problem, nodes could just ignore small, new transactions (not relay them) and let the nodes that are doing the spamming queue up and rebroadcast the transactions.  They'd trickle into the network eventually, and in the meantime the spammer's bit-pennies would be tied up.
