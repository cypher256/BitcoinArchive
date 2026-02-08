---
title: "*** ALERT *** Upgrade to 0.3.6"
date: 2010-07-29T19:13:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6451#msg6451"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"*** ALERT *** Upgrade to 0.3.6\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/289/"
---

Please upgrade to 0.3.6 ASAP!  We fixed an implementation bug where it was possible that bogus transactions could be displayed as accepted.  Do not accept Bitcoin transactions as payment until you upgrade to version 0.3.6!

If you can't upgrade to 0.3.6 right away, it's best to shut down your Bitcoin node until you do.

Also in 0.3.6, faster hashing:
- midstate cache optimisation thanks to tcatm
- Crypto++ ASM SHA-256 thanks to BlackEye
Total generating speedup 2.4x faster.

Download:
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.6/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.6/)

Windows and Linux users: if you got 0.3.5 you still need to upgrade to 0.3.6.
