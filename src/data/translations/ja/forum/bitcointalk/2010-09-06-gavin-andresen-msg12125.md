---
title: "Re: (context post by Gavin Andresen)"
date: 2010-09-06T19:18:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=969.msg12125#msg12125"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 969. before msg12130."
isSatoshi: false
tags: []
translationStatus: pending
---

Speak now about this change or forever hold your peace...  Satoshi will be including this functionality in the next version of Bitcoin (0.3.12).

If you use the JSON-RPC api, you should check your error-condition-handling code; again, the changes are that the error member will be an Object (with 'code' and 'message' fields) instead of a String, and the HTTP status code may be 404 instead of 500 for method-not-found.
