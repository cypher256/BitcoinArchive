---
title: "Block-header-only, faster startup client"
date: 2010-12-20T13:53:07.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7"
author: "gavinandresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Issue #7 thread starter by gavinandresen in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "issue"
---

Bitcoin newbies have to endure an hour or two (or more) while bitcoin downloads and indexes all transactions and blocks.

Satoshi has mostly implemented code that downloads just the block headers; as long as you're not generating blocks, you don't need all the old transactions.
