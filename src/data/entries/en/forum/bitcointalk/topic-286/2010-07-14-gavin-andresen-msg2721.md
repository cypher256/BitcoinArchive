---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-07-14T02:20:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2721#msg2721"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 286."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "spaceshaker"
    personSlug: "spaceshaker"
    date: "2010-07-13T16:52:00.000Z"
  - id: "q2"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-13T15:42:32.000Z"
    parent: "q1"
---

<!-- quote: q1 -->
> <!-- quote: q2 -->
> > And I expect most of us will be running lightweight clients that just keep our wallets, sign transactions, and send and receive transactions to the ultra-fast nodes that ARE looking at every transaction.
> 
> 
> Is this possible? What would this look like? From a technical perspective what does a "lightweight client" look like for you? My understanding is that the Bitcoin client needs the entire block chain in order to establish trust.

I'm imagining:

A lightweight client would have a wallet with coins in it (public+private key pairs).

And a secure way of sending messages to, and getting messages from, any of the ultra-fast, always-connected heavyweight nodes.

The lightweight client sends money by:
  creating a transaction (signing coins with the private key)
  sending the signed transaction securely to the ultra-fast server, which puts it on the network.
  receiving confirmation that the transaction was valid and sent, and updating its wallet (marks coins as spent)
   (or getting a "you already spent those coins" error from the server)

The lightweight client receives money by:
  Either polling the server every once in a while, asking "Any payments to these BC addresses that I have in my wallet?"
   ... or asking the server to tell it whenever it sees a transaction to a list of BC addresses (or maybe when it sees
    a relevant transaction with N confirmations)
  When transactions occur, the lightweight client updates its wallet (adds the coins).

You don't have to trust the server; it never has your private keys.

Well, you do have to trust that the server doesn't lie about whether your transactions are valid or not, but why would the server lie about that?
