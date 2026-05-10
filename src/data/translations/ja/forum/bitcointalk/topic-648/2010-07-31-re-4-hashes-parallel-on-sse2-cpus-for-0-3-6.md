---
title: "Re: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-07-31T00:29:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg6751#msg6751"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが 128 ビットレジスターを使用した 4 つの 32 ビットデータの SIMD 並列処理のアイデアに感銘を受け、加算の桁上がり問題について言及。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/302/"
translationStatus: complete
---

すごい……

つまり、128 ビットレジスターを使って 4 つの 32 ビットデータを一度に SIMD 処理しているということか？ 長い間それを考えていたが、加算の桁上がりが隣の値に影響するため、不可能だと思っていた。
