---
title: "Re: Scalability"
date: 2010-07-14T19:23:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2921#msg2921"
author: "InterArmaEnimSil"
participants:
  - name: "InterArmaEnimSil"
    slug: "interarmaenimsil"
description: "Context post by InterArmaEnimSil in BitcoinTalk topic 286. before msg2947."
isSatoshi: false
threadId: "bt-scalability"
tags: []
translationStatus: pending
---

I second the DHT idea for maintaining a client list - we can't have millions of people relying upon an IRC channel, etc.  As far as the scaling issue goes, the issue is not at all HDD space, its network bandwidth.  Everyone is forgetting, its not bytes_per_transaction*transactions, which is the number everyone is using.  That number, as everyone has said, is fully manageable.  No, the number we're interested in is bytes_per_transaction * transactions * number_of_clients * total_hops_beyond_first_between_all_clients_combined

THIS is the amount of bandwidth which the protocol for BTC consumes as the network scales.  We're not just talking about sending one copy of each transaction to each client - we're talking about multiple clients broadcasting potentially redundant data to one another, and doing it across numerous hops, meaning numerous rebroadcasts.  Much larger number, much more difficult to handle.  However, it is manageable, just not in the current incarnation of network handling in the client.

Perhaps in the "popular" phase, BTC chains could be broken up by region, similar to the purviews of domain name authorities now - and there could be an alternative protocol for transactions across these regional boundaries?  This would help the raw numbers of the problem, and also cut down on latency and related issues.  Not that I think this is an excellent solution - but P2P flooding across all active clients is obviously out barring some massive breakthrough in quantum computing or whatnot.
