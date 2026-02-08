---
title: "Re: [PATCH] Automatic block validation"
date: 2010-08-16T17:08:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=832.msg9775#msg9775"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"[PATCH] Automatic block validation\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/392/"
---

[Quote from: satoshi on August 16, 2010, 03:25:54 PM](https://bitcointalk.org/index.php?topic=832.msg9754#msg9754)It would probably be possible to initiate an AddToBlockIndex or Reorganize after the check, but it would require a lot more careful attention.  I probably should break out part of AddToBlockIndex that sets the new best block.  I'll probably end up doing that instead of the code below.
This is what I ended up doing in SVN rev 139.

Instead of deleting the bad chain, I added an extra CheckBlock to ConnectBlock so bad blocks can't get back into the best chain once they're kicked out.
