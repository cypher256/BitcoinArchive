---
title: "Re: Running on a port other than 8333"
date: 2010-09-12T17:40:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=589.msg12483#msg12483"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Running on a port other than 8333\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/449/"
---

[Quote from: lachesis on August 10, 2010, 03:24:55 PM](https://bitcointalk.org/index.php?topic=589.msg8544#msg8544)Also, does Bitcoin open the BerkeleyDB as exclusive, precluding the need for a file lock?It does not -- did my own tests.
Is there a way to open BerkeleyDB exclusive?

DB_PRIVATE is the worst of both worlds.  DB_PRIVATE is not exclusive, but it does make it get screwed up if another process tries to access it at the same time.

I've dropped the DB_PRIVATE flag in rev 153.
