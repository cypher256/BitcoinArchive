---
title: "Re: On IRC bootstrapping"
date: 2010-06-18T14:08:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg1616#msg1616"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "Context post by DataWraith in BitcoinTalk topic 84. before msg1781."
isSatoshi: false
tags: []
---

I think the way eMule handles bootstrapping for its KAD-network is pretty close to optimal:

The list of known peers is stored in a file (nodes.dat), and every client maintains a list of known nodes in that file (sorted by longest uptime, I think -- that's an intrinsic property of Kademlia, but still a good idea). The released client should be accompanied by such a file that contains the addresses of a few reliable peers on static IP addresses, from which a new client can then get more addresses to connect to (and hence store in its own file).

If the "seed list" gets out of date, or the server is shut down or something, you can just ask *anyone* in the network to publish his nodes-file (on rapidshare, say), and voila, you've got a fresh list of IPs you can connect to.
