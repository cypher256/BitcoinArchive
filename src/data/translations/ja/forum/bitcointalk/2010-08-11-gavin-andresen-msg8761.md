---
title: "Re: (context post by Gavin Andresen)"
date: 2010-08-11T16:10:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=788.msg8761#msg8761"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 788. quoted by msg8804."
isSatoshi: false
tags: []
translationStatus: pending
---

Bitcoin's p2p network is subject to various kinds of denial of service attacks.

There, I said it.

Do you have constructive suggestions for how to fix it, or are you the kind of person who just enjoys breaking things because you can?

Ideas that have been bouncing around my head that may or may not work:

+ have clients tell each other how many transactions per unit of time they're willing to accept.  If a client sends you more (within some fuzz factor), drop it.  Compile in a default that's based on estimated number of transactions for a typical user and estimate on the number of current users.

+ require some proof-of-work as part of the client-to-client connection process (helps prevent 'Sybil' attacks).

This is an active area of research; see, for example: http://scholar.google.com/scholar?q=ddos+attacks+by+subverting+membership
