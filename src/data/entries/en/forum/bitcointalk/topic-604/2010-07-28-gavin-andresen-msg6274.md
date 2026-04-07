---
title: "Re: Build error SVN r115 on my Mac: workaround"
date: 2010-07-28T21:40:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=604.msg6274#msg6274"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 604. after msg6273, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-07-28T21:23:23.000Z"
    sourceEntryId: "forum/bitcointalk/topic-604/2010-07-28-re-build-error-svn-r115-on-my-mac-workaround"
---

> Was that the only thing I broke in the OSX build?!  Does it actually work after just that one change?

I built a TEST-network bitcoind with the SVN r115 changes merged in, and yes, after that one change it's been happily generating coins all afternoon.
I don't use the stock makefile.osx, though-- I setup the dependency directory structure a little differently (for no really good reason).
