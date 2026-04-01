---
title: "Re: Scalability"
date: 2010-07-14T17:44:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2888#msg2888"
author: "spaceshaker"
participants:
  - name: "spaceshaker"
    slug: "spaceshaker"
description: "Context post by spaceshaker in BitcoinTalk topic 286. before msg2947."
isSatoshi: false
threadId: "bt-scalability"
tags: []
---

[Quote from: DataWraith on July 14, 2010, 04:42:16 PM](https://bitcointalk.org/index.php?topic=286.msg2875#msg2875)
> Um. That's exactly what a supernode server would do.

Um. Sure. I think I've gone full circle. I think Gavin said it best:

[Quote from: gavinandresen on July 14, 2010, 02:20:45 AM](https://bitcointalk.org/index.php?topic=286.msg2721#msg2721)
> A lightweight client would have a wallet with coins in it (public+private key pairs).
> 
> And a secure way of sending messages to, and getting messages from, any of the ultra-fast, always-connected heavyweight nodes.
> 
> The lightweight client sends money by:
>   creating a transaction (signing coins with the private key)
>   sending the signed transaction securely to the ultra-fast server, which puts it on the network.
>   receiving confirmation that the transaction was valid and sent, and updating its wallet (marks coins as spent)
>    (or getting a "you already spent those coins" error from the server)
> 
> The lightweight client receives money by:
>   Either polling the server every once in a while, asking "Any payments to these BC addresses that I have in my wallet?"
>    ... or asking the server to tell it whenever it sees a transaction to a list of BC addresses (or maybe when it sees
>     a relevant transaction with N confirmations)
>   When transactions occur, the lightweight client updates its wallet (adds the coins).
> 
> You don't have to trust the server; it never has your private keys.
> 
> Well, you do have to trust that the server doesn't lie about whether your transactions are valid or not, but why would the server lie about that?

In this scenario, the Bitcoin client could remain largely the same as it is today, although the focus would be that it is used on the "super-nodes" or "transaction servers" or "proxy servers" (these systems would probably serve all three roles) or by anyone wishing to play in that game. If the Bitcoin client was augmented to use DHT then that may be improvement but there is still a need for a "lightweight client" as Gavin described above. It seem's Gavin's "lightweight client" concept obviates my scalability concerns somewhat.
