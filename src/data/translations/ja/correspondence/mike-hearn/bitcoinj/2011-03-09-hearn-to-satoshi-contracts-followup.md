---
title: "マイク・ハーンからサトシへ：コントラクト・Publish/Subscribe・マージドマイニング（2011-03-09）"
date: 2011-03-09T17:39:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread4.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "マイク・ハーンが二重支払い検証の問題を認め、publish/subscribeプロトコル機能について質問し、サトシのマージドマイニング提案の明確化を求める。"
isSatoshi: false
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

<!-- speaker: Satoshi Nakamoto -->
> 存在するすべてのトランザクションを知らない場合、2)をどうやって実現するか分からない。他のノードを信頼するしかないだろう。その信頼は複数のノードに分散させることができる。ノードは有効と認めるトランザクションのみをリレーする。接続しているすべてのノードからトランザクションのinvメッセージを受信した場合、それらのノードはそのトランザクションが有効であり、最初に見た支出であることを証明している。

<!-- speaker: Mike Hearn -->
おっしゃる通りだ。入力の検証について話していたのだが、すべてのオープントランザクションを把握しなければ確かに意味がない。したがって、CMerkleTxを取得できることは重要ではない。

<!-- speaker: Satoshi Nakamoto -->
> 攻撃対象領域を減らすためだけだ。トランザクション手数料の引き上げには役立たない。トランザクションはnLockTimeから有効になる。ある時点で有効でなくなるトランザクションは機能しない。一度有効になったトランザクションは、永久に有効でなければならない。
>
> 以下のスレッドを参照してほしい：
> http://www.bitcoin.org/smf/index.php?topic=1786.msg22119#msg22119
> http://www.bitcoin.org/smf/index.php?topic=2181.msg28729#msg28729

<!-- speaker: Mike Hearn -->
なるほど。つまり現在、手数料は事前に決めなければならないため厄介で、低すぎた場合にトランザクションを修正する方法がなく、ネットワークはいずれ忘れるものの、ウォレットにはコインを使ったと記録されたままになる。これはすでに起こり始めている。

<!-- speaker: Satoshi Nakamoto -->
> コントラクトのためだ。

<!-- speaker: Mike Hearn -->
なるほど。システムのまだ探索されていない領域全体が目の前に開けた :-) 仲介者を信頼する必要なしに分散コントラクトやエスクロートランザクションを形成するという概念は、BitCoin自体とほぼ同じくらい斬新な概念だと思う。

もっと質問がある！

プロトコルにはpublisher/subscriberチャネルを設定するための未完成の部分があり、ネットワークを介した分散ルーティングを扱っている。これの目的は何だったのか？P2Pマーケットのアイデアだったのか、それとも予想されるトランザクション手数料のブロードキャストなど、何かもっと低レベルの機能だったのか？

数ヶ月前にBitCoinを一般化することについて興味深い議論があったが、あなたがそれをどのように達成しようとしていたかを完全に理解するのは難しかった。複数の独立したチェーンの上に別のマークルツリーを配置するという概念は理解できたと思う：

http://www.bitcoin.org/smf/index.php?topic=3414.msg48171#msg48171

しかし、後方互換性のために200バイトを持つというあなたのコメントは理解できなかった。また、これは明らかだと思うが、念のため確認する。あなたのアイデアでは、代替チェーンはBitCoinとまったく同じ形式と検証ルールのセット（同じスクリプト言語など）を共有し、すべてのマイナーは非金融的な性質のブロックであっても検証できるということか？そして、別々のブロックチェーンを持つ意味は、単にクライアントモード実装のストレージコストと帯域幅を管理することなのか？

ありがとう！
