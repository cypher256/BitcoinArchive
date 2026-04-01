---
title: "Re: JSON-RPC password"
date: 2010-07-21T12:11:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4709#msg4709"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. before msg4775."
isSatoshi: false
threadId: "bt-json-rpc-password"
tags: []
translationStatus: pending
---

I think there's no such thing a a "typical" settings file on Linux!

I just did a quick survey of 20 .conf files in /etc on my debian system, and found:
 1 file used "key value"
 5 used "key=value"  (actually, a couple were  "key = value", allowing whitespace around the "=")
 14 did their own thing.

The 14 that did their own thing were all over the map; from one-value-per-line to "key:value" to full-blown XML.  # is
the universal comment character in the Linux world.

My vote would be for:

# comment
key1=value1
