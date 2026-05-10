---
title: "Re: Linux 64 ビット用バージョン 0.3.8.1 アップデート"
date: 2010-08-10T23:46:00.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=765.msg8628#msg8628"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが SVN rev 128 で 32 ビットビルドの SSE2 を無効化したことを報告。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/338/"
translationStatus: complete
---

SVN rev 128：32 ビットで SSE2 を無効化。これは MSVC と GCC でのみ無効化される可能性がある。他のコンパイラーは異なる 64 ビット定義を持っているかもしれない。
