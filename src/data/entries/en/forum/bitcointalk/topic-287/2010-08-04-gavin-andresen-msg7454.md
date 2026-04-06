---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-08-04T11:58:58.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7454#msg7454"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 287."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "bytemaster"
    date: "2010-08-03T21:22:56.000Z"
---

<!-- quote: q1 -->
> Well, right now nothing stops someone from creating a system where:
> 
> A sends  1.00000001 to B
> B sends  1.00000000 back to A
> 
> Net result is a micro-payment and no processing fee.

... unless B started with zero bitcoins.  Then B is stuck; she can't send 1.0 back, because doing that would cause a 0.00000001 bitcoin 'change' transaction, which would trigger the 0.01BTC fee, which they can't pay (because they only have 1.0000000001).
