---
title: "Re: DEB Package?"
date: 2010-02-12T15:57:37.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg322#msg322"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"DEB Package?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/53/"
threadId: "bt-deb-package"
threadTitle: "DEB Package?"
threadPosition: 2
---

[Quote from: soultcer on February 12, 2010, 02:31:50 PM](https://bitcointalk.org/index.php?topic=49.msg321#msg321)If you want, I can provide you with a precompiled binary.

Am I missing something?  Is there something wrong with the 32-bit linux precompiled binary on bitcoin.org?

The bitcoin binary in the distribution static links the wxWidgets library, and its shared links (openssl and GTK) are included in Ubuntu, so it can run without needing to be a .deb to pull down dependencies.

Since we're upgrading to wxWidgets 2.9.0 for UTF-8, which doesn't have a DEB package yet, we'll continue to need to static link it.
