---
title: "Re: JSON-RPC password"
date: 2010-07-22T01:51:40.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4918#msg4918"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. before msg5337."
isSatoshi: false
threadId: "bt-json-rpc-password"
tags: []
translationStatus: pending
---

I've implemented it so that all the command-line options can also be specified in the bitcoin.conf file.

Options given on the command line override options in the conf file.  But I need to do more testing, especially with the "multiargs" options like "addnode".
