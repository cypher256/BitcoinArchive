---
title: "Re: Strange block 74638"
date: 2010-08-15T20:02:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=822.msg9547#msg9547"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi responds to a critical value overflow incident in Bitcoin, one of the most serious bugs in Bitcoin's early history. He quickly deployed a fix."
isSatoshi: true
tags:
  - "bug"
  - "overflow"
  - "incident-response"
  - "soft-fork"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/222/"
---

The bug was the value overflow check was done on individual outputs, not the sum of the outputs.

The fix is already available in version 0.3.10. Please upgrade.

The good chain has overtaken the bad chain. The network will now refuse any block that has an output value larger than 21 million coins.
