---
title: "Re: JSON-RPC password"
date: 2010-07-19T12:02:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4215#msg4215"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. quoted by msg4268."
isSatoshi: false
threadId: "bt-json-rpc-password"
tags: []
---

The Bitcoin Faucets (production and TEST) are now running with this change.

I was confused for a bit because the password is given LAST on the command line, but FIRST in the JSON-RPC params list.  I agree that reading the command-line password from a file would be more convenient and more secure.

I'll try to do some research on how other projects tackle JSON-RPC authentication.
