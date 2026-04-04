---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-07-14T00:42:32.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2696#msg2696"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 286."
isSatoshi: false
tags: []
---

[Quote from: Insti on July 13, 2010, 11:34:03 PM](#msg2678)
> 77428 transactions in 66663 blocks is about 46,752,464 bytes.
> which works out to about 600 bytes per transaction (including block headers + database overheads)

That sounds about right.

So a million transactions a day would be 600 million bytes.  600 megabytes a day, 18 GB a month.

That's not bad.  Actual network bandwidth will be higher (the way the network is connected you get the same transaction multiple times from your peers).  You won't be running an always-connected-network node on your iPhone, but any low-cost server will give you twenty times that bandwidth per month.  And 18GB isn't much disk space in these days of terabyte hard drives.

A million transactions per day is a **LOT**!  For comparison, in 2006 there were about 60 million credit card transactions per day in the US.

Eventually, if Bitcoin survives and gets as popular as credit cards for paying for stuff I expect somebody will create a compatible version with a more efficient network structure (maybe by that time there will be some fancy IPV6 multicast protocol or something).  And they'll implement a couple of gateway nodes (running on really fast connections) that shuttle transaction and block traffic from the current Bitcoin network into the super-efficient network.  And I expect most of us will be running lightweight clients that just keep our wallets, sign transactions, and send and receive transactions to the ultra-fast nodes that ARE looking at every transaction.

You know, kind of like how we have those Big Routers in the Sky that handle Internet backbone traffic (or the ultra-fast DNS root servers).  The Internet didn't start out with astoundingly fast routers zinging packets around.
