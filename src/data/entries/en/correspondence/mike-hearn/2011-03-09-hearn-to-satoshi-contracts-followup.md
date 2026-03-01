---
title: "Contracts follow-up, publish/subscribe, and merged mining"
date: 2011-03-09T17:39:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread4.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn acknowledges the double-spend verification issue, asks about the publish/subscribe protocol feature, and seeks clarification on Satoshi's merged mining proposal."
isSatoshi: false
threadId: "satoshi-mike-hearn-bitcoinj"
threadPosition: 3
tags:
  - "correspondence"
  - "contracts"
  - "transaction-replacement"
  - "fees"
  - "publish-subscribe"
  - "merged-mining"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

> If you don't know about all txes in existence, I don't know how to do 2). You could only rely on trusting other nodes for that. That trust can be distributed over multiple nodes. Nodes only relay transactions they accept as valid. If you receive inv messages for a tx from all the nodes you're connected to, they're attesting that it's valid and the first spend they saw.

Good point. I was talking about verifying the inputs yes, but it is indeed pointless unless you hear about all open transactions as well. So being able to fetch a CMerkleTx is not important.

> Just to reduce surface area. It wouldn't help with increasing tx fee. A tx starts being valid at nLockTime. It wouldn't work to have a tx that stops being valid at a certain time; once a tx ever becomes valid, it must stay valid permanently.
>
> See these threads:
> http://www.bitcoin.org/smf/index.php?topic=1786.msg22119#msg22119
> http://www.bitcoin.org/smf/index.php?topic=2181.msg28729#msg28729

I see. So right now fees are tricky because you have to decide up front what the fee should be, and if you guess too low, there's no way to correct the transaction and though the network will eventually forget it, your wallet still records that you spent the coins. This has already started happening.

> It's for contracts.

Ah ha. A whole unexplored area of the system opens up before my eyes :-) The concept of forming distributed contracts and escrow transactions without needing to trust an intermediary is a concept nearly as novel as BitCoin itself, I think.

I have more questions!

There's an unfinished part of the protocol that deals with setting up publisher/subscriber channels for distributed routing via the network. What was the purpose of this? Was the idea to have a p2p market or did it have some kind of lower level function, like perhaps broadcasting expected tx fees?

There was an interesting discussion of generalizing BitCoin some months ago, but we struggled to fully understand how you planned to achieve it. I think I understood the concept of placing another merkle tree on top of multiple separate chains:

http://www.bitcoin.org/smf/index.php?topic=3414.msg48171#msg48171

But I didn't understand your comment about having 200 bytes for backwards compatibility. Also, I guess this is obvious, but to be super clear - in your idea the alternative chains would share exactly the same format and sets of verification rules as BitCoin (the same script language etc), so all miners can verify all blocks even if they are non-financial in nature? And then the point of having separate block chains is simply to manage storage costs and bandwidth for client-mode implementations?

Thanks!
