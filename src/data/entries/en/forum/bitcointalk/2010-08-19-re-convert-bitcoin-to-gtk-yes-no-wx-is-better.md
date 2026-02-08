---
title: "Re: Convert Bitcoin to GTK: Yes? No? wx is better?"
date: 2010-08-19T18:44:36.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=867.msg10272#msg10272"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Convert Bitcoin to GTK: Yes? No? wx is better?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/400/"
---

[Quote from: BioMike on August 19, 2010, 08:05:18 AM](https://bitcointalk.org/index.php?topic=867.msg10226#msg10226)WxWidgets is not really a problem. My problem is the version that is used (2.9), which is considered unstable by many distro packagers (although the WxWidgets devs say it isn't). On the other side, as far as I know WxWidgets uses gtk under Linux for drawing the whole stuff and makes it for the bitcoins devs easy to make things cross platform.
wxWidgets 2.9 is their first UTF-8 version.  We are UTF-8 on all platforms including Windows.

The distro packages of 2.8 are UTF-16, so they just trip people up.  People had endless build problems with 2.8 and its wxString UTF-16/ANSI conditional build options until we standardized on 2.9.  Also, to use 2.8, we were using ANSI, which was just a temporary stopgap until wxWidgets supported UTF-8.

This is a problem that will solve itself.  With time, 2.9 will become a more mainline release.
