---
title: "Re: Number of connections"
date: 2010-03-01T02:55:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=58.msg580#msg580"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 58. after msg413, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Xunie"
    date: "2010-03-01T01:06:07.000Z"
  - id: "q2"
    person: "satoshi"
    date: "2010-02-21T03:43:48.000Z"
    sourceEntryId: "forum/bitcointalk/topic-58/2010-02-21-re-number-of-connections"
---

> 
> > Nodes stop trying to initiate connections once they have 15.
> 
> Are you sure about that? I get 30+ connections easily!
> I have port 8333 open, but I can't exactly believe everynode of the network connects to me.
> (I'm running version 0.2, downloaded from the website.)

The client stops making outgoing connections once it has 15 connections but if your port is open it continues accepting incoming connections from other clients which haven't yet connected to 15 clients. If the port isn't open, it can't accept incoming connections so it will never connect to more than 15 clients.
