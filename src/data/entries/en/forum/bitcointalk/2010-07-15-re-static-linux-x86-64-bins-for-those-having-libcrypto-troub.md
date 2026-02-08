---
title: "Re: Static Linux x86_64 bins for those having libcrypto troubles"
date: 2010-07-15T14:33:04.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=326.msg3157#msg3157"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Static Linux x86_64 bins for those having libcrypto troubles\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/191/"
---

We don't even specify linking glibcxx_3.4.11, so gcc must automatically link it behind the scenes.  There's probably a compiler switch that would tell it to static link it.  I'm not sure what the licensing issues would be.  Typically, compiler stuff is fully redistributable.
