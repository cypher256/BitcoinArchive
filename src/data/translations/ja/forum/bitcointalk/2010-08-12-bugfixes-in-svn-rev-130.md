---
title: "Bugfixes in SVN rev 130"
date: 2010-08-12T21:20:31.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=795.msg8920#msg8920"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"Bugfixes in SVN rev 130\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/349/"
threadId: "bt-bugfixes-in-svn-rev-130"
threadTitle: "Bugfixes in SVN rev 130"
threadPosition: 1
translationStatus: pending
---

Misc bugfixes in rev 130:

fix -datadir with relative path
autostart is now off by default except on windows
fix occasional "vector iterator not dereferencable" assertion when compiled with msvc
fix readlink compile warning on linux build
use sys/param.h and BSD define instead of __BSD__
-paytxfee switch, e.g. -paytxfee=0.01
