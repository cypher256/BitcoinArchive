---
title: "Re: Bitcoin crash when sending coins"
date: 2010-02-03T23:29:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=27.msg219#msg219"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bitcoin crash when sending coins\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/39/"
---

I uploaded this fix to the SVN.  It watches for spent coins and updates your wallet on load and also continuously as blocks come in.  I also put a better error message, but it should never hit it because it always finds spent coins ahead of time, unless you spent the same money at the same time on two computers at once.

If you want to try it, PM or e-mail me your e-mail address where I can send it as an attachment and also what OS (win, linux 32-bit, linux 64-bit).
