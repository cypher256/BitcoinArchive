---
title: "0.3.13 RC1 for Windows, please test"
date: 2010-09-30T17:04:15.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1322.msg14722#msg14722"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"0.3.13 RC1 for Windows, please test\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/466/"
---

0.3.13 release candidate, to be released soon so please test:
[http://www.bitcoin.org/download/bitcoin-0.3.13-rc1-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.13-rc1-win32-setup.exe)

- don't count or spend payments until they have 1 confirmation
     [http://bitcointalk.org/index.php?topic=1306.0](http://bitcointalk.org/index.php?topic=1306.0)
- internal version number from 312 to 31300
- only accept transactions sent by IP address if -allowreceivebyip is specified
- dropped DB_PRIVATE Berkeley DB flag
- fix problem sending the last cent with sub-cent fractional change
- auto-detect whether to use 128-bit 4-way SSE2 on Linux
Gavin Andresen:
- option -rpcallowip= to accept json-rpc connections from another machine
- clean shutdown on SIGTERM on Linux
