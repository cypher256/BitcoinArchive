---
title: "Re: Proof-of-work difficulty increasing"
date: 2010-06-21T18:09:17.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg1648#msg1648"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Proof-of-work difficulty increasing\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/132/"
threadId: "bt-proof-of-work-difficulty-increasing"
threadTitle: "Proof-of-work difficulty increasing"
threadPosition: 9
---

I integrated the hashmeter idea into the SVN version.  It displays khash/s in the left section of the status bar.

Two new log messages:
21/06/2010 01:23 hashmeter   2 CPUs    799 khash/s
21/06/2010 01:23 generated 50.00

grep your debug.log for "generated" to see what you've generated, and grep for "hashmeter" to see the performance.  On windows, use:
 findstr "hashmeter generated" "%appdata%\bitcoin\debug.log"

I have the hashmeter messages once an hour.  How often do you think it should be?
