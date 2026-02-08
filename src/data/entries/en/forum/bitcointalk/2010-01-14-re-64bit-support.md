---
title: "Re: 64bit support"
date: 2010-01-14T20:17:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=18.msg97#msg97"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"64bit support\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/29/"
---

I haven't tried compiling 64-bit yet. 64-bit wouldn't make it any faster, since it uses 64-bit numbers in only a few places and SHA-256 is a 32-bit algorithm, but it may be convenient for those running a 64-bit OS. If I get a chance I'll try -m64 and see what the problem is.

You can run the 32-bit version on 64-bit Linux by installing ia32-libs.  (sudo apt-get install ia32-libs)  If we made a Debian package, it could automatically pull that in as a dependency.
