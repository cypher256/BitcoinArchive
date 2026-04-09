---
title: "Re: Block-header-only, faster startup client"
date: 2014-03-30T00:24:46.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7#issuecomment-39013731"
author: "bardiharborow"
participants:
  - name: "bardiharborow"
    slug: "bardiharborow"
description: "Comment by bardiharborow in bitcoin/bitcoin issue #7. context for Satoshi mention."
isSatoshi: false
tags:
  - "github"
---

@laanwj, my understanding is that most SPV clients at the moment either get headers from a centralised source (Electrum) or use their own p2p network. I don't know, some may use the main Bitcoin network, but wouldn't they be queried for blocks by other clients and have to ignore those requests which could confuse the other peer (maybe?). I think it would be neater if other peers knew that you could be asked for headers, but not for blocks/txs. Anyway, sorry to bring up an old issue. Just thought someone should start working through the massive backlog, so I started from the back.
