---
title: "Re: On IRC bootstrapping"
date: 2010-04-30T14:51:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg1036#msg1036"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "Context post by DataWraith in BitcoinTalk topic 84. after msg729."
isSatoshi: false
tags: []
---

Hi all.

This may be a stupid idea, and if it's not stupid, may not be viable for the next few years, but I thought I'd toss it out there anywhere:

**What about Multicasting?**

IPv6 is supposed to have better multicasting support than IPv4, and if I did not misunderstand the Bitcoin protocol, most messages need to be broadcasted to the entire network. Theoretically a node could send such messages to a global multicast address, and everyone will receive it in a bandwith-efficient way.

That would make bootstrapping in the traditional sense obsolete, since the client would just have to subscribe to the multicast channel. The remaining "Give me block xyz" requests could be handled by optionally including a field in messages to the multicast channel that basically says "My address is 2001:db8::42, and I'm willing to answer direct queries for specific blocks". After listening to the channel for a while, such a packet should come around, because, at the very least, new blocks will be announced there every so often.
