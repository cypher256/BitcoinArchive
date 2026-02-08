---
title: "Re: Version 0.3.8"
date: 2010-07-14T22:11:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=260.msg2226#msg2226"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi introduces the alert system in Bitcoin, a mechanism to broadcast warnings to all nodes in case of critical bugs or network issues."
isSatoshi: true
tags:
  - "alert-system"
  - "version-update"
  - "safety"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/141/"
---

Version 0.3.8 adds an important safety feature.

There is now an alert system so that critical bugs or security issues can be broadcast to notify users.

The alerts are signed with a specific key. Only alerts signed with that key are accepted. This keeps anyone from being able to broadcast fake alerts.

If a critical problem is found, an alert will be broadcast to all nodes, showing a warning message in the status bar and the node will stop processing blocks.
