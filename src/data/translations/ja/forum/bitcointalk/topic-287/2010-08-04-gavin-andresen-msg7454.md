---
title: "Re: フラッド攻撃 0.00000001 BC"
date: 2010-08-04T11:58:58.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7454#msg7454"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック287におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "bytemaster"
    personSlug: "daniel-larimer"
    date: "2010-08-03T21:22:56.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> まあ、現時点では次のようなシステムを作ることを止めるものは何もない：
>
> AがBに1.00000001を送る
> BがAに1.00000000を返す
>
> 差し引きの結果はマイクロペイメントであり、処理手数料はかからない。私は上記と非常に似たことを行うシステムを作っている。実際のところ、「マイクロペイメント」システムはBTCブロックの外部で処理し、支払いを「集計」してから送信すべきだろう。
<!-- /tone-skip -->

…Bが最初にゼロBitcoinで始めた場合を除いて。その場合Bは行き詰まる。1.0を返送することで0.00000001 Bitcoinの「おつり」トランザクションが発生し、それが0.01BTCの手数料を引き起こすが、Bはそれを支払えない（1.0000000001しか持っていないから）。
