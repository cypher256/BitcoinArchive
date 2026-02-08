---
title: "Re: RFC: remove DB_PRIVATE flag"
date: 2010-09-12T18:00:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=920.msg12484#msg12484"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッドにおけるサトシ・ナカモトの返信 \"RFC: remove DB_PRIVATE flag\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/450/"
threadId: "bt-rfc-remove-db-private-flag"
threadTitle: "RFC: remove DB_PRIVATE flag"
threadPosition: 2
translationStatus: pending
---

Trying it without the DB_PRIVATE flag in rev 153.  We need to keep an eye on what's different.

On Windows at least, it creates six __db.001 - __db.006 files with sizes from 24K to 4MB.  It doesn't delete them on exit, it just leaves them behind.

The docs say it uses memory mapped files.  I assume they have the same file permissions as the database files, so the same user access restrictions apply.

Tests on Windows private LAN download of 78500 blocks:
with DB_PRIVATE     20 minutes 51 seconds
without DB_PRIVATE   20 minutes 51 seconds

I wasn't expecting them to come out exactly the same.
