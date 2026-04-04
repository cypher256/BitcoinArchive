---
title: "Re: (quoted post by The Madhatter)"
date: 2009-12-12T06:34:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg51#msg51"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Quoted post by The Madhatter in BitcoinTalk topic 12."
isSatoshi: false
tags: []
---

I almost have the svn 0.2 compiling on Mac OS X 10.4.11/Intel (I also have a PPC970 machine here as well so a PPC build would be possible as well). The windowing is native carbon too via wxwidgets! It is FAST! Wink I had to create a new makefile (makefile.osx; based on makefile.unix of course.. given any thought to using autoconf?) and put some ifdef's into header.h. I have patches. I will keep toying around. I might try it on FreeBSD next.

I already run a great deal of TOR and I2P nodes so for me to add this app to those same servers is a snap. Smiley

I think that breaking bitcoin into two apps is ideal. A wxwidgets front end (since it is mostly all there) and a backend that binds to a control TCP socket. I have been reading over the source to see how hard it would be to break it apart and I think it should be fairly simple. Of course an API would have to be developed.

I'll keep toying around with the source code and see what I can come up with.

Smiley
