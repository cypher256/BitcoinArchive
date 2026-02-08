---
title: "Re: A few suggestions"
date: 2009-12-18T17:37:48.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg79#msg79"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"A few suggestions\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/27/"
---

What you can currently do is set "Minimize to the tray" in options, then run it as "bitcoin -min" so it starts minimized.  The only visible part will be a small (20x20) icon on the tray, which can be doubleclicked if you want to access the UI.  Note: there's a bug with tray icons sometimes disappearing on 64-bit Karmic Koala, not sure if it's from 64-bit or Karmic, it was fine on 32-bit Jaunty.

We didn't have time to implement the "Start Bitcoin on system startup" feature on Linux in time for 0.2 so it's greyed out.  I figured Linux people wouldn't mind doing that manually anyway.  I guess they need to know about the -min switch to do it right.

You can locate the data directory where you want with the "-datadir=<directory>" switch.  I know someone is already doing that to put it on a TrueCrypt USB drive.
