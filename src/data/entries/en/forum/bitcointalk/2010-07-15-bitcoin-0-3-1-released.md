---
title: "Bitcoin 0.3.1 released"
date: 2010-07-15T17:05:54.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=383.msg3198#msg3198"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Bitcoin 0.3.1 released\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/193/"
---

This is a bugfix maintenance release.  It is now uploaded to SourceForge.  Mac OS X didn't need any fixes so we don't really need to update it, 0.3.0 is still good.

The download links are on bitcoin.org

Changes:
- Added Portuguese translation by Tiago Faria
Windows
- Fix for 22DbRunRecoveryException if your username has non-ascii characters in it
Linux
- Laszlo's fix for lowering generate thread to lowest priority 
- Fix for if you're having trouble with libcrypto linkage
- Gavin Andresen's implementation of "start on windowing system startup" option
