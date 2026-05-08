---
title: "Key pool feature for safer wallet backup"
date: 2010-10-09T20:19:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1414.msg16316#msg16316"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Key pool feature for safer wallet backup\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/490/"
---

SVN rev 163 (ver 0.3.13.3) has the key pool feature.  Pre-generated new keys are aged in a queue before use, so that backups of wallet.dat hold keys you'll use in the future.

For now I made the default pool size 100.  It can be configured with -keypool=.  Be aware, it takes a little time to increase the pool size, so don't go crazy with it.  Disk space is about 1K per key.

I have not addressed the recovery side of this yet.  If you actually did restore an old wallet.dat, I think you may have to delete blk*.dat to rediscover your own transactions during the redownload.

I've only tested this moderately.  You might not want to use this for a website server until it's had some more testing.
