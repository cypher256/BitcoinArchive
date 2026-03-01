---
title: "コントラクトのフォローアップ、Publish/Subscribe、マージドマイニング"
date: 2011-03-09T17:39:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread4.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearnが二重支払い検証の問題を認め、publish/subscribeプロトコル機能について質問し、Satoshiのマージドマイニング提案の明確化を求める。"
isSatoshi: false
threadId: "satoshi-mike-hearn-bitcoinj"
threadTitle: "Open sourced my Java SPV impl"
threadPosition: 3
tags:
  - "correspondence"
  - "contracts"
  - "transaction-replacement"
  - "fees"
  - "publish-subscribe"
  - "merged-mining"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

> 存在するすべてのトランザクションを知らない場合、2)をどうやって実現するか分かりません。他のノードを信頼するしかないでしょう。その信頼は複数のノードに分散させることができます。ノードは有効と認めるトランザクションのみをリレーします。接続しているすべてのノードからトランザクションのinvメッセージを受信した場合、それらのノードはそのトランザクションが有効であり、最初に見た支出であることを証明しています。

おっしゃる通りです。入力の検証について話していたのですが、すべてのオープントランザクションを把握しなければ確かに意味がありません。したがって、CMerkleTxを取得できることは重要ではありません。

> 攻撃対象領域を減らすためだけです。トランザクション手数料の引き上げには役立ちません。トランザクションはnLockTimeから有効になります。ある時点で有効でなくなるトランザクションは機能しません。一度有効になったトランザクションは、永久に有効でなければなりません。
>
> 以下のスレッドを参照してください：
> http://www.bitcoin.org/smf/index.php?topic=1786.msg22119#msg22119
> http://www.bitcoin.org/smf/index.php?topic=2181.msg28729#msg28729

なるほど。つまり現在、手数料は事前に決めなければならないため厄介で、低すぎた場合にトランザクションを修正する方法がなく、ネットワークはいずれ忘れるものの、ウォレットにはコインを使ったと記録されたままになる。これはすでに起こり始めています。

> コントラクトのためです。

なるほど。システムのまだ探索されていない領域全体が目の前に開けました :-) 仲介者を信頼する必要なしに分散コントラクトやエスクロートランザクションを形成するという概念は、BitCoin自体とほぼ同じくらい斬新な概念だと思います。

もっと質問があります！

プロトコルにはpublisher/subscriberチャネルを設定するための未完成の部分があり、ネットワークを介した分散ルーティングを扱っています。これの目的は何でしたか？P2Pマーケットのアイデアでしたか、それとも予想されるトランザクション手数料のブロードキャストなど、何かもっと低レベルの機能でしたか？

数ヶ月前にBitCoinを一般化することについて興味深い議論がありましたが、あなたがそれをどのように達成しようとしていたかを完全に理解するのは難しかったです。複数の独立したチェーンの上に別のmerkleツリーを配置するという概念は理解できたと思います：

http://www.bitcoin.org/smf/index.php?topic=3414.msg48171#msg48171

しかし、後方互換性のために200バイトを持つというあなたのコメントは理解できませんでした。また、これは明らかだと思いますが、念のため確認します。あなたのアイデアでは、代替チェーンはBitCoinとまったく同じ形式と検証ルールのセット（同じスクリプト言語など）を共有し、すべてのマイナーは非金融的な性質のブロックであっても検証できるということですか？そして、別々のブロックチェーンを持つ意味は、単にクライアントモード実装のストレージコストと帯域幅を管理することですか？

ありがとうございます！
