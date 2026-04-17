---
title: "BDB: restore DB_PRIVATE flag to environment"
date: 2012-05-21T01:11:47.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/1367"
author: "jgarzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
description: "PR #1367 thread starter by jgarzik in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "pull-request"
---

Satoshi's commits fdbf76d4f49c220e2ed4412a3d8d8cd6efd74826 and
c8ad9b8375f5308bb46a124f096a80926ea42fba (SVN import) removed the
DB_PRIVATE flag from the environment.  In part, this enables processes
other than bitcoind to examine the active database environment.

However, this incurs a slight performance penalty versus working entirely
within application memory (DB_PRIVATE).  Because bitcointools and other
direct-BDB-accessing tools are not used by the vast majority of users, prefer
to default with DB_PRIVATE with the option of disabling it if needed
via -privdb=0.
