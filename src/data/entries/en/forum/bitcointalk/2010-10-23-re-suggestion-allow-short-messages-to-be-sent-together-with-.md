---
title: "Re: Suggestion: Allow short messages to be sent together with bitcoins ?"
date: 2010-10-23T19:02:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1545.msg18250#msg18250"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Suggestion: Allow short messages to be sent together with bitcoins ?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/496/"
---

ECDSA can't encrypt messages, only sign signatures.

It would be unwise to have permanently recorded plaintext messages for everyone to see.  It would be an accident waiting to happen.

If there's going to be a message system, it should be a separate system parallel to the bitcoin network.  Messages should not be recorded in the block chain.  The messages could be signed with the bitcoin address keypairs to prove who they're from.
