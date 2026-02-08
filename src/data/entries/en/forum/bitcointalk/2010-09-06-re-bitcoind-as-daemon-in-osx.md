---
title: "Re: bitcoind as daemon in OSX"
date: 2010-09-06T21:52:45.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=992.msg12135#msg12135"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoind as daemon in OSX\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/438/"
---

Can you build?

Try changing line 78 of init.cpp from:
#ifdef __WXGTK__

to:
#ifndef __WXMSW__

If that works, I'll change the source.  It should work.
