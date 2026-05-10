---
title: "Re: 最速のコンピューターはどれくらいの速さで Bitcoin を生成するのか？"
date: 2010-06-22T04:35:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=197.msg1656#msg1656"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「最速のコンピューターはどのくらい速くビットコインを生成しますか？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/135/"
translationStatus: complete
---

ハッシュ性能は CPU 間で予想ほど差がないことに気づいた。古い CPU と比較して、新しい CPU は一般的なベンチマークほどにはハッシュの高速化を示さない。

最近の CPU 最適化は I/O や分岐予測などに集中しているのだろう。ほとんどのプログラムはメモリーアクセス、比較、分岐の集まりで、長い間数学の計算をし続けることはめったにない。

最新の SVN バージョンには khash/s 表示がある。プロセッサーあたり約 400 khash/s が典型的だ。
