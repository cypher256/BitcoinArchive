---
title: "Remove fClient"
date: 2013-01-09T18:42:57.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/2161"
author: "sipa"
participants:
  - name: "sipa"
    slug: "sipa"
description: "PR #2161 thread starter by sipa in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "pull-request"
---

Client (SPV) mode never got implemented entirely, and whatever part was already working, is likely not been tested (or even executed at all) for the past two years. This removes it entirely.

If we want an SPV implementation, I think we should first get the block chain data structures to be encapsulated in a class implementing a standard interface, and then writing an alternate implementation with SPV semantics.
