---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-16T04:36:59.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9676#msg9676"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/386/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-08-15T18:35:28.000Z"
    sourceEntryId: "forum/bitcointalk/topic-820/2010-08-16-jgarzik-msg9665"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 以下のアップデート：
<!-- /tone-skip -->

```
cpu family : 6
model  : 26
model name : Genuine Intel(R) CPU             000  @ 3.20GHz
stepping : 4
```

cpu family 6 model 26 stepping 4はIntel Core i7だ。<br>
-4wayで23%の高速化、-4way + ハイパースレッディングで合計63%の高速化だ。<br>
ハイパースレッディングありの場合、なしの場合より33%高速だ。
