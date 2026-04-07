---
title: "Re: Bitcoin clients getting k-lined from the IRC bootstrapping channel"
date: 2010-06-25T23:33:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=215.msg1783#msg1783"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Context post by The Madhatter in BitcoinTalk topic 215. after msg1779."
isSatoshi: false
tags: []
---

I was mucking around with the source code on a large research cluster that I have access to. For some reason the nodes were connecting and disconnecting from Freenode quite rapidly witch resulted in most of my nodes getting k-lined. Freenode started going nuts and blocking my nodes as fast as I was creating connections.

Not too sure if other people were k-line'd as well because of this?? However, the timing was "bang on".

I had discovered the bug around the same time this k-line problem was reported. I ended up forcing the source to seed IPs from some Bitcoin clients that I run on a different network.
