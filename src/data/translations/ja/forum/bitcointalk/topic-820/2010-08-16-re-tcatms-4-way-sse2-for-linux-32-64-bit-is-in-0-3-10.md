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
---

[Quote from: jgarzik on August 16, 2010, 03:35:28 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-820/2010-08-16-jgarzik-msg9665/)
> 以下のアップデート：
> Code:cpu family	: 6
> model		: 26
> model name	: Genuine Intel(R) CPU             000  @ 3.20GHz
> stepping	: 4
> マシンは4コアで、各コアに2つのハイパースレッドがある。/proc/cpuinfoは8つの仮想プロセッサを表示する。
>
> -4wayなし、setgen 4:    5.7 Mhash/秒
> -4wayなし、setgen 8:    5.0 Mhash/秒
>
> -4way付き、setgen 4:   7.0 Mhash/秒
> -4way付き、setgen 8:   9.3 Mhash/秒
>
> したがって、「ハイパースレッディングは速度を低下させる」という古い常識は、このマシンでは覆された。

```
cpu family : 6
model  : 26
model name : Genuine Intel(R) CPU             000  @ 3.20GHz
stepping : 4
```

cpu family 6 model 26 stepping 4はIntel Core i7だ。<br>
-4wayで23%の高速化、-4way + ハイパースレッディングで合計63%の高速化だ。<br>
ハイパースレッディングありの場合、なしの場合より33%高速だ。
