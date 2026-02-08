---
title: "Re: Bitcoind x86 binary for CentOS"
date: 2010-08-03T21:05:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=685.msg7331#msg7331"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bitcoind x86 binary for CentOS\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/310/"
---

[Quote from: sgtstein on August 03, 2010, 05:30:37 PM](https://bitcointalk.org/index.php?topic=685.msg7275#msg7275)I have successfully built it with 4.8, 4.7 never would but with 4.8 bitcoind locks up whenever it dumps the initial block download to disk. 
I urge you not to use BDB 4.8.  The database/log0000* files will be incompatible if anyone uses your build and then goes back to the official build.
