---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-08-07T01:20:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=723.msg8035#msg8035"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 723."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Red"
    date: "2010-08-06T15:19:16.000Z"
    sourceEntryId: "forum/bitcointalk/topic-723/2010-08-07-red-msg8023"
---

<!-- quote: q1 -->
> So which one is valid? Who cares. Flip a coin. That is exactly what bitcoin does in this situation. If my node is working on a block with on transaction, and your node is working on a block with a conflicting transaction, whoever solves the block first wins.

Now I'm confused again.  I thought your scheme didn't have blocks, just transactions.  What do you mean, whoever solves "the block" first?

But standard DHTs are typically used to store chunks of MP3s or movies, indexed by a torrent file that has the hash for every piece.  So it is easy for me to tell whether or not I'm getting bad data from any particular DHT node.  I don't have to trust them.

Huh?  Lets say the network has 10,000 nodes in it.  I query the network to find the network node closest to a transaction that I want to double-spend.

So I generate a private key.  It has about a 1 in 10,000 chance of being closer than the current closest node.  So I keep generating private keys until I have 5 that are closer.  It's too late for me to figure out the odds, but lets say I generate 100,000 private keys, I'm pretty darn likely to find 5.  My wimpy laptop can generate at LEAST 100 ECC keys/second, so in under 20 minutes it could generate 100,000.

I create 5 nodes with those keys (telling the rest of the network "honest, folks, I chose those keys RANDOMLY...") and I've won.

I'm not trying to generate a transaction with a particular hash, I'm trying to generate node ids that are "closer" to that transaction's hash than any other node currently on the network.  That's much easier.
