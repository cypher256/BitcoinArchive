---
title: "Re: Warning: don't use -server or bitcoind where you web browse (v0.3.2 and lower)"
date: 2010-07-21T16:10:32.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=479.msg4759#msg4759"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 479. before msg5432."
isSatoshi: false
threadId: "bt-warning-dont-use-server-or-bitcoind"
tags: []
---

chroot: won't protect you.

Running as a separate VM:  I think will protect you.  But I thought browsers wouldn't allow XMLHTTPRequests to "localhost" from web pages fetched from the web, so my advice would be to test it.  See if you can talk to the Bitcoin daemon from another VM on the same machine by running "bitcoind getinfo" or "bitcoin getinfo" on the non-bitcoin-vm.
