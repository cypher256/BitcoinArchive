---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T21:10:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9534#msg9534"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 823. after msg9530."
isSatoshi: false
tags: []
---

Looks good to me.

Can you easily hardcode a check for the bad block's hash at startup and orphan it and subsequent blocks if they're on the best-block chain?
It's painful to have to re-download all or most of the chain to fix this...
