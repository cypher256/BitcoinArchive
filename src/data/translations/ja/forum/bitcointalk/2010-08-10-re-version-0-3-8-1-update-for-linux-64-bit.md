---
title: "Re: Linux 64ビット用バージョン0.3.8.1アップデート"
date: 2010-08-10T23:46:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=765.msg8628#msg8628"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがSVN rev 128で32ビットビルドのSSE2を無効化したことを報告。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/338/"
threadId: "bt-version-0-3-8-1-update-for-linux-64-bit"
threadTitle: "Version 0.3.8.1 update for Linux 64-bit"
threadPosition: 3
translationStatus: complete
---

SVN rev 128：32ビットでSSE2を無効化。これはMSVCとGCCでのみ無効化される可能性があります。他のコンパイラは異なる64ビット定義を持っているかもしれません。
