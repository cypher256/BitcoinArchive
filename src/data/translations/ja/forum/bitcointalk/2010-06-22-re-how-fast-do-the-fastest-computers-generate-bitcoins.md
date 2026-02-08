---
title: "返信: 最速のコンピュータはどのくらい速くビットコインを生成しますか？"
date: 2010-06-22T04:35:26.000Z
source: bitcointalk
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

ハッシュ性能はCPU間で予想ほど差がないことに気づきました。古いCPUと比較して、新しいCPUは一般的なベンチマークほどにはハッシュの高速化を示しません。

最近のCPU最適化はI/Oや分岐予測などに集中しているのでしょう。ほとんどのプログラムはメモリアクセス、比較、分岐の集まりで、長い間数学の計算をし続けることはめったにありません。

最新のSVNバージョンにはkhash/s表示があります。プロセッサあたり約400 khash/sが典型的です。
