---
title: "Re: Make your \"we accept Bitcoin\" logo"
date: 2010-02-08T01:22:29.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=45.msg278#msg278"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Make your \"we accept Bitcoin\" logo\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/47/"
threadId: "bt-make-your-we-accept-bitcoin-logo"
threadTitle: "Make your \"we accept Bitcoin\" logo"
threadPosition: 1
---

No, sorry.  I've been meaning to redo it.  The largest icon that still looks good is the 20x20 one which is used for the tray icon in GNOME.  Any larger than that looks bad.  The 16x16 and 20x20 ones have quite a bit of hand tweaking to get the pixels to work out right.  If you just scale down a larger image, the pixels end up blurred and awkward in places where the lines in "BC" don't land square on a pixel.

The best 16x16 with full alpha channel is in src/rc/bitcoin.ico.  I don't like the 32x32 version.

I'm attaching bitcoin20x20.png, the 20x20 version with full transparency.
