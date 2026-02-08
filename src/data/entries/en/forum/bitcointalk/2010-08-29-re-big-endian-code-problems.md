---
title: "Re: Big endian code problems"
date: 2010-08-29T22:14:36.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=816.msg11610#msg11610"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Big endian code problems\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/432/"
---

The code assumes little-endian throughout and was written with the intention of never being ported to big-endian.  Every integer that is sent over the network would have to be byte swapped, in addition to many dozens of other places in code.  It would not be worth the extra sourcecode bloat.

Big-endian is on its way out anyway.
