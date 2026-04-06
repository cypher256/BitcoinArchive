---
title: "Re: Questions about Addresses"
date: 2010-02-03T14:57:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=34.msg206#msg206"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "Context post by BitcoinFX in BitcoinTalk topic 34. before msg222."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "sirius-m"
    date: "2010-02-02T03:34:08.000Z"
  - id: "q2"
    person: "BitcoinFX"
    date: "2010-02-02T00:00:20.000Z"
    parent: "q1"
---

<!-- quote: q1 -->
> <!-- quote: q2 -->
> > Thanks, I understand that and my port 8333 is correctly forwarded to my 24/7 Bitcoin machine. 
> > 
> > However, lets say that I have 2 machines on the same IP running Bitcoin without port 8333 forwarded on either !
> > 
> > Bitcoin node (1) 192.168.0.2
> > 
> > Bitcoin node (2) 192.168.0.3
> > 
> > So, I would guess that 192.168.0.2 machine would receive the bitcoins because it is the first IP on the sub-net ?
> 
> 
> The connection won't get through at all if the port is not forwarded.

Not so ? I have had 2 machines connected (getting 4+ connections on each) and generating Bitcoins on the same static IP address. The port 8333 is of course forwarded for connection through my firewall, which I guess is what you mean. However, connections to other nodes are made without port 8333 being specifically forwarded through my router to a specific machine (sub-net IP), which is of course the best way to max connectivity. I understand Bitcoin only requires 1 other connection for transactions, yes ?

I think my original question was valid and thanks for clarifying this everyone. NewLibertyStandard I think is correct "If I remember correctly I think I was told that they would be sent to the first bitcoin application with whom the sender connects."

I dislike communication on forums, it's hard to discuss topics sometimes when all parties mean the same thing and communicate it in a different way ! 😊 

I have enough internet connections, routers and PC equipment - So, I'm off to make an 'official' test for myself whilst I RTM  😄
