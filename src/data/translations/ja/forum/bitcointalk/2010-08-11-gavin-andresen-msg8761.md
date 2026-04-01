---
title: "Re: (context post by Gavin Andresen)"
date: 2010-08-11T16:10:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=788.msg8761#msg8761"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック788におけるGavin Andresenのコンテキスト投稿。msg8804に引用。"
isSatoshi: false
tags: []
translationStatus: complete
---
BitcoinのP2Pネットワークはさまざまなサービス拒否攻撃を受ける可能性がある。

はい、言った。

修正方法について建設的な提案があるのか、それともできるからという理由で壊すのを楽しむタイプの人間なのか？

頭の中で浮かんでいるアイデアで、うまくいくかもしれないしうまくいかないかもしれないもの：

+ クライアント同士が、単位時間あたりいくつのトランザクションを受け入れるかを相互に伝える。クライアントがそれ以上送ってきたら（多少の誤差範囲内で）、切断する。一般的なユーザーの推定トランザクション数と現在のユーザー数の推定に基づいたデフォルト値をコンパイル時に設定する。

+ クライアント間の接続プロセスの一部としてある程度のプルーフ・オブ・ワークを要求する（「シビル」攻撃の防止に役立つ）。

これは活発な研究分野だ。例えば次を参照：http://scholar.google.com/scholar?q=ddos+attacks+by+subverting+membership
