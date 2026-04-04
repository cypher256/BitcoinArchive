---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-08-06T23:32:05.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=723.msg8013#msg8013"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 723."
isSatoshi: false
tags: []
---

[Quote from: Red on August 06, 2010, 11:08:28 PM](/BitcoinArchive/entries/forum/bitcointalk/topic-723/2010-08-06-red-msg8007/)
> So for any new transaction, to verify it, you send it to the five closest nodes to each in-point on the transaction. They record the transaction and immediately tell you if they've seen a double spend. If any have, it's a bogus transaction, which gets broadcast to the other close nodes.

What happens when they disagree about which transaction happened first?  Majority rule?  Who decides what the majority is, and can it change if 4 of the five nodes leave the network and are replaced by another 5 nodes?

And if I know that I'm going to create a large transaction, can I do some work precomputing node IDs such that the transaction (which I haven't yet sent out) will hash to nodes that I control?   If I control all the nodes storing the transaction, then I can just answer "yes, absolutely, that transaction is valid and hasn't been double-spent..."

The brilliant insight behind bitcoin is the distributed timestamping mechanism; everybody agrees on an order of transactions.  I don't see how your scheme solves that problem.
