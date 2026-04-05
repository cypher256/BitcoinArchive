---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-24T22:43:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg11068#msg11068"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/411/"
translationStatus: complete
---

[Quote from: ArtForz on August 21, 2010, 04:56:31 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-820/2010-08-21-artforz-msg10609/)
> 新しいCPUと古いCPUの違いはかなり簡単に説明できる。
> 古いマイクロアーキテクチャは64ビットのMMX/SSE実行ユニットを持ち、128ビットSSE命令を2つの64ビットマイクロオペレーションに分割する。
> 新しいアーキテクチャは128ビットSSEユニットを持つ。
> - AMD K8: 2つの64ビットユニット
> - Intel Core/Core2: 3つの64ビットユニット
> - AMD K10: 2つの128ビットユニット
> - Intel Nehalem: 3つの128ビットユニット
> K10 = 4コア以上のOpteron、Phenom、Phenom II、Athlon II
> Nehalem = Xeon 34xx/35xx/36xx/55xx/56xx/65xx/75xx、i3/i5/i7

- Intel Nehalem: 128ビットユニット3つ
これはおそらく、ハイパースレッディングが-4wayで性能を向上させる理由を説明している。3つのSSE2ユニットが過剰であれば、ハイパースレッディングがそれらをすべてビジー状態に保つのに役立つだろう。
