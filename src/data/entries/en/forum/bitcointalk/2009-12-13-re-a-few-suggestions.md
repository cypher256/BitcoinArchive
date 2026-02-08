---
title: "Re: A few suggestions"
date: 2009-12-13T16:51:25.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg62#msg62"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"A few suggestions\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/22/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 5
---

There would be a command line switch at runtime to tell it to run without UI.  All it needs to do is not create the main window.  A simplistic way would be to disable "pframeMain->Show" and "ptaskbaricon->Show" in ui.cpp.  The network threads don't care that the UI isn't there.  The only other UI is a message box in CheckDiskSpace if it runs out of disk space.

Then a separate command line utility to communicate with it to do things.  Not sure what it should be named.

"natural deflation"... I like that name for it.  Yes, there will be natural deflation due to payment mistakes and lost data.  Coin creation will eventually get slow enough that it is exceeded by natural deflation and we'll have net deflation.
