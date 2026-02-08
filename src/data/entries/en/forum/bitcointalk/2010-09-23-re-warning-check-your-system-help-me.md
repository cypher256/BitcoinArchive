---
title: "Re: Warning : Check your system ( Help me )"
date: 2010-09-23T16:28:25.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=960.msg13833#msg13833"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Warning : Check your system ( Help me )\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/459/"
threadId: "bt-warning-check-your-system-help-me"
threadTitle: "Warning : Check your system ( Help me )"
threadPosition: 3
---

I don't understand, are you under the impression that the program sets the system clock?  It doesn't.

[Quote from: Cdecker on September 19, 2010, 08:14:08 PM](https://bitcointalk.org/index.php?topic=960.msg13212#msg13212)We already have ways to synchronize (approximately) the clients, so why not make use of that?
We use an internal offset based on the median of other nodes' times, but for security reasons we don't let them offset us by more than an hour.  If they indicate we're off by more than an hour, then we resort to alerting the user to fix their clock.
