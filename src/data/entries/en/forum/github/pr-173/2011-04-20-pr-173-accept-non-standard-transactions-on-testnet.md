---
title: "Accept non-standard transactions on testnet."
date: 2011-04-20T15:28:25.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/173"
author: "gavinandresen"
participants:
  - name: "gavinandresen"
    slug: "gavinandresen"
description: "PR #173 thread starter by gavinandresen in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "pull-request"
---

This is a single-line change that allows non-standard transactions to get into the transaction memory pool (and, therefore, relayed and written into blocks) on -testnet.

Satoshi suggested this to me in an email, and I agree it is a good idea-- we should encourage people to experiment on -testnet with new features, or they will figure out less efficient ways of wedging what they want to do into the existing standard transaction types.
