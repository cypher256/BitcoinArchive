---
title: "Re: 64bit support"
date: 2010-01-29T00:42:49.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=18.msg174#msg174"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"64bit support\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/38/"
threadId: "bt-64bit-support"
threadTitle: "64bit support"
threadPosition: 2
---

I committed a fix for 64-bit compile and some fixes to support wxWidgets 2.9.0.

There was one compile error in serialize.h with min(sizeof()) that I fixed for 64-bit.  The rest of the 64-bit compile errors I was getting were in wxWidgets 2.8.9, so I started working on supporting wxWidgets 2.9.0.

wxWidgets 2.9.0 is UTF-8.  We've been using the ANSI version of wxWidgets 2.8.9 in anticipation of wxWidgets UTF-8 support.

I compiled and ran on 64-bit Ubuntu 9.10 Karmic.

I think the only bug left is where the status number is mashed up.  I'm not sure why, I have to suspect it's a UTF-8 thing, but no idea how that could happen.  Haven't looked into it.

build-unix.txt is updated and two makefiles on SVN:
makefile.unix.wx2.8
makefile.unix.wx2.9

Unfortunately there's still no debian package for either version of wxWidgets we use.  They only have the wchar ("unicode") version of wxWidgets 2.8, which is a disaster because wchar wxString doesn't convert to std::string.  We use either ANSI wxWidgets 2.8, or wxWidgets 2.9.  So you still have to get it and build it yourself.
