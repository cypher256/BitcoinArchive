---
title: "BitCoinに関する追加の質問"
date: 2010-12-27T20:21:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearnが、Android向けJava SPV実装に取り組みながら、2100万枚のコイン上限の由来、10分間のブロック目標、500KBのブロックサイズ制限について質問する。"
isSatoshi: false
threadId: "satoshi-mike-hearn-more-questions"
threadTitle: "More BitCoin questions"
threadPosition: 1
tags:
  - "correspondence"
  - "spv"
  - "android"
  - "scalability"
  - "coin-supply"
  - "block-size"
translationStatus: complete
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Satoshi、メリークリスマス。世界のどこにいるにせよ、お祝いしていると仮定して :-)

私はAndroid携帯で動作するクライアントの構築を視野に入れて、簡易支払い検証のJava実装に取り組んでいます。そのため、ストレージ要件とBitCoinのスケーラビリティについて多く考えてきましたが、論文では答えられていないいくつかの疑問が生じました（論文の新版を出してもいいかもしれません。現在では内容の一部が古くなっていると思います）。

具体的には、BitCoinにはさまざまなマジックナンバーがあり、コードにも論文にもその由来が説明されていません。例えば、2100万枚のコインが発行されるとインフレーションが停止するという事実。この数字は何らかの方法で導き出されたはずですが、どのようにして決められたのか分かりません。

もう一つは10分間のブロック目標です。これはトランザクションがネットワーク全体に伝播できるように選ばれたと理解しています。しかし、BGPのような既存の大規模P2Pネットワークは、新しいデータを1分未満で世界中に伝播できます。

最後に気になる数字は、ブロックサイズの500kb制限です。Wikipediaによると、Visaだけで2009年に620億件の取引を処理しました。割り算すると平均で毎秒2000トランザクション、ピーク時はおそらくその倍の毎秒4000トランザクションになります。10分間のブロック目標では、ピーク時にブロックは240万トランザクションを含む必要がありますが、これは500kbには収まりません。この500kbは公式クライアントから徐々に撤廃される一時的な制限ですか、それともより根本的なものですか？
