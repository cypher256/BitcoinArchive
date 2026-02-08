---
title: "Re: *** ALERT *** Upgrade to 0.3.6 ASAP!"
date: 2010-07-29T21:20:38.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6490#msg6490"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"*** ALERT *** Upgrade to 0.3.6 ASAP!\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/292/"
---

0.3.6 Linux build is back to the old makefile.unix.  It static links libjpeg so that shouldn't be a problem.

Is that working better?

If you got 22DbRunRecoveryException and you've used someone else's build before, you may need to delete (or move the files somewhere else) database/log.000000*

Windows and Linux users: if you got 0.3.5 you still need to upgrade to 0.3.6.
