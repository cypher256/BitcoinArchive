---
title: "Spent per txout"
date: 2011-03-17T21:58:07.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/122"
author: "sipa"
participants:
  - name: "sipa"
    slug: "sipa"
description: "PR #122 thread starter by sipa in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "pull-request"
---

This patch changes some internal structures to keep track of spentness of each wallet transaction output separately, to support partially-spent transactions. It contains:
- an update to the data structures (vfSpent in CWalletTx instead of fSpent)
- a backward-compatible update to the wallet disk format (written by Satoshi, Gavin knows). Old clients reading back an updated wallet will ignore partially spent transactions when creating new ones, and may report a wrong balance, though.
- some helper functions (CWalletTx: IsSpent, MarkSpent, MarkDirty to reset cached values, GetAvailableCredit which only counts unredeemed outputs)
- update to SelectCoins and CreateTransaction to select source transaction outputs separately instead of per whole transaction. This fixes the issue mentioned in http://www.bitcoin.org/smf/index.php?topic=3759.0

The reason for writing this patch: i'm also working on an import/export wallet patch, where situations with partially spent transactions become hard to avoid.

Everything except loading a new wallet into an old client is tested on the testnet, including crafted situations with partially-spent transactions.
