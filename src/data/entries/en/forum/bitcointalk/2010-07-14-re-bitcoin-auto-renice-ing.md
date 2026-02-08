---
title: "Re: bitcoin auto-renice-ing"
date: 2010-07-14T17:38:31.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=72.msg2886#msg2886"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoin auto-renice-ing\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/182/"
threadId: "bt-bitcoin-auto-renice-ing"
threadTitle: "bitcoin auto-renice-ing"
threadPosition: 2
---

Laszlo corrected this, but unfortunately it was too late to make it into 0.3.0.  There will probably be a 0.3.1 soon though.

The problem is I used PRIO_MIN, I should have used PRIO_MAX for the lowest priority.  The OS isn't supposed to let you increase priority, so the PRIO_MIN ought to leave it at priority 0.
