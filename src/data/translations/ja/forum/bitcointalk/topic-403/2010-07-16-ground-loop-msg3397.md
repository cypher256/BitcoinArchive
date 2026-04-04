---
title: "The dollar cost of bitmining energy"
date: 2010-07-16T05:42:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=403.msg3397#msg3397"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "BitcoinTalkトピック403におけるGround Loopのコンテキスト投稿。msg3545の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

ソーラー発電の電力でコンピュータを動かしているので、消費電力をかなり細かく管理している。

常時稼働のヘッドレスUbuntuサーバーが1台ある。通常はディスクアレイをスピンダウンしていて、いくつかの中央ネットワーク管理の役割がある。Intel Core2Duo E6300 @ 1.86 GHzで、約950 khash/sでマイニングする。

bitcoindの生成がどのような影響を与えるか気になった。結果はこうだ：

左側の最低レベルがアイドルで、その後のノイズはbitcoindがブロック履歴を取り込んでいるところだ。段差がビットマイナースレッドだ。
要するに、ハッシュによりアイドルフロアが約120Wから160Wに上がった。+40Wだ。

これは月あたり29キロワット時を自家発電から消費し、つまり電力で約3.80ドル少なくなる（限界電力料金0.13ドル/kWh）

現在の難易度で月平均13ブロック生成すると、BTC 650で、コストは約0.005ドル/BTCになる。

要するに、このマシンでコインを生成するよりも取引所でBTCを買った方がいい。参考までに。
