---
title: "Improve -rescan idea"
date: 2011-03-08T14:47:03.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/108"
author: "gavinandresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Issue #108 thread starter by gavinandresen in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "issue"
---

Idea from Satoshi to improve/automate the -rescan feature:

Whenever a new block is accepted, the best block pointer is updated in blkindex.dat.  If you also record it in wallet.dat (as a CBlockLocator), then on startup, if wallet's last seen best block is further back than blkindex.dat's, it should rescan starting from there.
