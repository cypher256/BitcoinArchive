---
title: "Re: Having problems specifing -datadir"
date: 2010-07-28T20:58:26.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=601.msg6268#msg6268"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Having problems specifing -datadir\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/284/"
---

It was able to reproduce this.  The database doesn't like the relative path.

"bitcoind -datadir=./subdir getinfo" works against a running daemon, but trying to start the daemon as "bitcoind -datadir=./subdir" gets that exception.

I guess we should resolve the full path before passing it to the database.

It looks like you were the first one to ever use -datadir with a relative path.
