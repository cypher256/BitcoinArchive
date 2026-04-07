---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T21:40:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9549#msg9549"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "Context post by NewLibertyStandard in BitcoinTalk topic 823. after msg9548."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "kencausey"
    date: "2010-08-15T21:36:30.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-15-kencausey-msg9545"
---

> How about explaining to us stupid newbies what we would do with the blockchain once we download it?

While Bitcoin is not running, you put it in your Bitcoin data directory. ~/.bitcoin on Linux. If you want to re-download the whole chain, you just delete the file from the data directory while Bitcoin is not running.

I'm going to be move my blk00x.dat files and blkindex.dat file out of by data directory and restart the client. Those are the correct files, right?

Edit: I'll also backup the whole directory, like I usually do before upgrades.
