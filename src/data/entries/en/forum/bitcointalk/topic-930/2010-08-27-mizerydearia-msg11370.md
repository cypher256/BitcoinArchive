---
title: "Re: Gentoo Linux Ebuild"
date: 2010-08-27T08:03:27.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=930.msg11370#msg11370"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Context post by mizerydearia in BitcoinTalk topic 930. after msg11342, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-08-27T00:49:43.000Z"
    sourceEntryId: "forum/bitcointalk/topic-930/2010-08-27-re-gentoo-linux-ebuild"
  - id: "q2"
    person: "satoshi"
    date: "2010-08-27T00:49:43.000Z"
    sourceEntryId: "forum/bitcointalk/topic-930/2010-08-27-re-gentoo-linux-ebuild"
  - id: "q3"
    person: "BioMike"
    date: "2010-08-27T05:22:35.000Z"
  - id: "q4"
    person: "BioMike"
    date: "2010-08-27T05:22:35.000Z"
  - id: "q5"
    person: "BioMike"
    date: "2010-08-27T05:22:35.000Z"
  - id: "q6"
    person: "BioMike"
    date: "2010-08-27T05:22:35.000Z"
---

> Last time I tried $(shell /usr/bin/wx-config), there was immediate hollering about build problems with it.  There wasn't time to investigate at the time.
> 
> One problem with $(shell /usr/bin/wx-config) is it will pick up any version (wx 2.8 ) and any configuration (non-UTF-8 ) of wxWidgets that happens to be there.  -lwx_gtk2ud-2.9 only matches the right configuration.  It fails if wxWidgets was built with the wrong configuration.

For reference purpose, Gentoo has the following work-around for specific wxWidgets versions:

Code:$ eselect wxwidgets list
Available wxWidgets profiles:
  [1]   gtk2-ansi-release-2.6
  [2]   gtk2-unicode-2.9 *
  [3]   gtk2-unicode-release-2.6
  [4]   gtk2-unicode-release-2.8

$ /usr/bin/wx-config --version
2.9.1

# eselect wxwidgets set 1

Setting wxWidgets profile to gtk2-ansi-release-2.6

$ /usr/bin/wx-config --version
2.6.4
I'm not sure about other distros though.

> QuoteThis is because on my system the path is /usr/include/wx-2.9/wx/wx.h
> Why is it there?  Was it included by the OS, or did you have to build it?  If you built it, I wonder why it would put itself in a different place.

Quote from: bonsaikitten<bonsaikitten> necrodearia: it is there because that's the correct location
<bonsaikitten> necrodearia: it is not in /usr/local because that's not the correct location
<bonsaikitten> further questions might be resolved by reading FHS
http://www.pathname.com/fhs/

Gentoo Linux is designed so that all (99.99%) packages are compiled from source, so yes, I compiled wxGTK using an ebuild from Portage, the Gentoo Linux package management software.

> 1) Remind that you will need to fix the header.

I don't understand this.  Which header?

> 4) /home/bticoin?

I don't see where I misspelled bitcoin.  Which file?

> 5) Strip optimizations from the Makefile and let the user provide them (or strip them properly)

I am uncertain what "optimizations" are.

> 6) Don't build static code. I have a Makefile that builds dynamic code. If you want I can send it to you. You will need to make changes to it.

I am not familiar with which parts of code are static and could be converted to dynamic.  I only prepared an ebuild because it seems nobody else has.  I am not skilled enough to perfect the ebuild, however, if anyone else would like to contribute towards making it better, I set up a git repository: http://github.com/mizerydearia/bitcoin_gentoo_ebuild
