---
title: "Re: 0.3 almost ready"
date: 2010-06-22T19:11:41.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1675#msg1675"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"0.3 almost ready\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/140/"
---

[Quote from: davidonpda on June 22, 2010, 06:23:26 PM](https://bitcointalk.org/index.php?topic=199.msg1673#msg1673)EXCEPTION: 22DbRunRecoveryException
DBENv::open: DB_RUNRECOVERY: Fatal error, run database recovery
C:\Program Files\Bitcoin\bitcoin.exe in OnInit()
What operating system?

Normally when it does that it's because the directory where the data directory should go doesn't exist.  See if the "%appdata%" directory exists.

Do you get that error with 0.2 also?  It's hard to see how you could get that with 0.3 and not with 0.2 since there's nothing different in that regard.
