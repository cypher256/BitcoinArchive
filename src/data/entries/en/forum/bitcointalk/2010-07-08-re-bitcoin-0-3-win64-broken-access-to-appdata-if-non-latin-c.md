---
title: "Re: bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"
date: 2010-07-08T18:24:19.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2068#msg2068"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/171/"
threadId: "bt-bitcoin-0-3-win64-broken-access-to-appdata-if-non-"
threadTitle: "bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"
threadPosition: 1
---

Thanks for finding that.  We switched from ANSI in 0.2 to UTF-8 in version 0.3, so it must be related to that.

Just to confirm, if you log in with the non-latin character username, not having an appdata/Bitcoin directory yet, and run Bitcoin and let it create the database from scratch, does it work or not?
