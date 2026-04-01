---
title: "Re: 0.3 almost ready -- please test the Mac version!"
date: 2010-06-22T17:58:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1672#msg1672"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 199. before msg1675."
isSatoshi: false
threadId: "bt-1-3-almost-ready"
tags: []
translationStatus: pending
---

[Quote from: satoshi on June 22, 2010, 04:01:53 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-06-22-0-3-almost-ready-please-test-the-mac-version/)
> I finished everything on my list to do for version 0.3.  The code on SVN is about ready to release.
> Testing at this point is much appreciated.

I just finished creating a clean Amazon EC2 debian 5.0 machine image with everything I needed to compile bitcoind, and it compiled (using a variation of Laszlo's makefile.unix) and is running fine (just finished downloading the block chain).  I'll let you know if it misbehaves.

I had trouble compiling the gtk version, but I think that's because I did something wrong compiling wxWidgets.  I don't need no stinkin' graphics (and am not a wxWidgets expert), so I'm not going to bother trying to fix that.
