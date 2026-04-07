---
title: "Re: CLI bitcoin generation"
date: 2010-05-26T23:04:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1261#msg1261"
author: "molybdenum"
participants:
  - name: "molybdenum"
    slug: "molybdenum"
description: "Context post by molybdenum in BitcoinTalk topic 145. after msg1256."
isSatoshi: false
tags: []
---

Heh, found this when i was cruising rpc.cpp when updating to r78... btw, it doesn't quite compile with GCC 4.3.4 from debian lenny backports, I had to change DEFAULT_PORT in net.h to a #define because the htons() wasn't allowed in the variable declaration for some reason... probably not the best solution, but it worked for the shirt term. Wink
