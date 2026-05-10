---
title: "マイク・ハーンからサトシへ：ビットコインに関する追加の質問（2010-12-27）"
date: 2010-12-27T20:21:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "マイク・ハーンが、Android 向け Java SPV 実装に取り組みながら、2100 万枚のコイン上限の由来、10分間のブロック目標、500KB のブロックサイズ制限について質問する。"
isSatoshi: false
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
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

<!-- speaker: Mike Hearn -->
メリークリスマス、サトシ。君が世界のどこにいるのかも、祝う習慣があるのかも分からないけど :-)

私は Android 携帯で動作するクライアントの構築を視野に入れて、簡易支払い検証の Java 実装に取り組んでいる。そのため、ストレージ要件と BitCoin のスケーラビリティについて多く考えてきたが、論文では答えられていないいくつかの疑問が生じた（論文の新版を出してもいいかもしれない。現在では内容の一部が古くなっていると思う）。

具体的には、BitCoin にはさまざまなマジックナンバーがあり、コードにも論文にもその由来が説明されていない。例えば、2100 万枚のコインが発行されるとインフレーションが停止するという事実。この数字は何らかの方法で導き出されたはずだが、どのようにして決められたのか分からない。

もう一つは 10分間のブロック目標だ。これはトランザクションがネットワーク全体に伝播できるように選ばれたと理解している。しかし、BGP のような既存の大規模 P2P ネットワークは、新しいデータを 1分未満で世界中に伝播できる。

最後に気になる数字は、ブロックサイズの 500kb 制限だ。Wikipedia によると、Visa だけで 2009年に 620 億件の取引を処理した。割り算すると平均で毎秒2000 トランザクション、ピーク時はおそらくその倍の毎秒4000 トランザクションになる。10分間のブロック目標では、ピーク時にブロックは 240 万トランザクションを含む必要があるが、これは 500kb には収まらない。この 500kb は公式クライアントから徐々に撤廃される一時的な制限なのか、それともより根本的なものなのか？
