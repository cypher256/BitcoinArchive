---
title: "Re: bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"
date: 2010-07-09T03:01:35.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2077#msg2077"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/173/"
---

I think I see where the problem is.  Coincidentally, I recently coded a replacement for the function in question which should fix it.  It's not enabled yet, but in the SVN version it prints a debug message in debug.log showing the new directory value and old value for comparison.
