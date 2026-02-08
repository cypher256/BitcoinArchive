---
title: "Re: Payment server"
date: 2010-01-28T23:26:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=29.msg172#msg172"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Payment server\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/36/"
---

That's the right way to do it as riX says.  The software can generate a new bitcoin address whenever you need one for each payment.  "Please send X bc to [single-use bitcoin address] to complete your order"  When the server receives that amount to the bitcoin address, that could trigger it to automatically fulfil the order or e-mail the shop owner.

Adding command line support is a high priority.  It's just a matter of getting the time to code it.
