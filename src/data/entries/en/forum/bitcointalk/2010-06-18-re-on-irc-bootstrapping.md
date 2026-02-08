---
title: "Re: On IRC bootstrapping"
date: 2010-06-18T17:28:18.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg1619#msg1619"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"On IRC bootstrapping\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/128/"
threadId: "bt-on-irc-bootstrapping"
threadTitle: "On IRC bootstrapping"
threadPosition: 3
---

The SVN version now uses IRC first and if that fails it falls back to a hardcoded list of seed nodes.  There are enough seed nodes now that many of them should still be up by the time of the next release.  It only briefly connects to a seed node to get the address list and then disconnects, so your connections drop back to zero for while.  At that point, be patient.  It's only slow to get connected the first time.

This means TOR users won't need to -addnode anymore, it'll get connected automatically.
