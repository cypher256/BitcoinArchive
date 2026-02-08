---
title: "Re: bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"
date: 2010-07-09T15:37:05.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2092#msg2092"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/175/"
---

I tested this with a non-lower-ASCII account name on XP and confirmed the bug, then tested that the new GetDefaultDataDir fixed it.  This change is revision 102 of the SVN.
