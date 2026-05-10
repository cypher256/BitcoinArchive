---
title: "ビットマイニングのエネルギーコスト（ドル換算）"
date: 2010-07-16T05:42:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=403.msg3397#msg3397"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "BitcoinTalk トピック 403 における Ground Loop の文脈投稿。msg3545 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

ソーラー発電の電力でコンピューターを動かしているので、消費電力をかなり細かく管理している。

常時稼働のヘッドレス Ubuntu サーバーが 1 台ある。通常はディスクアレイをスピンダウンしていて、いくつかの中央ネットワーク管理の役割がある。Intel Core2Duo E6300 @ 1.86 GHz で、約 950 khash/s でマイニングする。

bitcoind の生成がどのような影響を与えるか気になった。結果はこうだ：

左側の最低レベルがアイドルで、その後のノイズは bitcoind がブロック履歴を取り込んでいるところだ。段差がビットマイナースレッドだ。
要するに、ハッシュによりアイドルフロアが約 120W から 160W に上がった。+40W だ。

これは月あたり 29 キロワット時を自家発電から消費し、つまり電力で約 3.80 ドル少なくなる（限界電力料金 0.13 ドル/kWh）

現在の難易度で月平均 13 ブロック生成すると、BTC 650 で、コストは約 0.005 ドル/BTC になる。

要するに、このマシンでコインを生成するよりも取引所で BTC を買った方がいい。参考までに。
