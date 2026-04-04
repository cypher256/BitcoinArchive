---
title: "Re: 最速のコンピュータはどのくらい速くビットコインを生成しますか？"
date: 2010-06-22T04:35:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=197.msg1656#msg1656"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「最速のコンピュータはどのくらい速くビットコインを生成しますか？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/135/"
translationStatus: complete
---

ハッシュ性能はCPU間で予想ほど差がないことに気づいた。古いCPUと比較して、新しいCPUは一般的なベンチマークほどにはハッシュの高速化を示さない。

最近のCPU最適化はI/Oや分岐予測などに集中しているのだろう。ほとんどのプログラムはメモリアクセス、比較、分岐の集まりで、長い間数学の計算をし続けることはめったにない。

最新のSVNバージョンにはkhash/s表示がある。プロセッサあたり約400 khash/sが典型的だ。
