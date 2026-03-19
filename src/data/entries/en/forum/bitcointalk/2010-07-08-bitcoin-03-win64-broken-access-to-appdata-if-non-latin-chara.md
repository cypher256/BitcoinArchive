---
title: "bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"
date: 2010-07-08T00:33:16.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2052#msg2052"
author: "m0mchil"
participants:
  - name: "m0mchil"
    slug: "m0mchil"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "m0mchil starts a discussion: bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username."
isSatoshi: false
threadId: "bt-bitcoin-0-3-win64-broken-access-to-appdata-if-non-"
threadPosition: 1
tags: []
---

I know it's not the smartest move to name my user account using non-latin characters. Anyway, 0.2 has no problems with this.

Verified as follows... created a 'normal' new user and 0.3 opened the data folder. Created **new, fresh data folder** and copied it to the non-standard user - 0.3 fails with DB_RUN_RECOVERY.
