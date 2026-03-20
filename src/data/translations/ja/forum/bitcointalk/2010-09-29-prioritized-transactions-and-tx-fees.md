---
title: "優先トランザクションと取引手数料"
date: 2010-09-29T11:13:30.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1314.msg14616#msg14616"
author: "jgarzik"
participants:
  - name: "jgarzik"
    slug: "jgarzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "jgarzikがスレッドを開始: 優先トランザクションと取引手数料"
isSatoshi: false
threadId: "bt-prioritized-transactions-and-tx-fees"
threadPosition: 1
tags: []
translationStatus: complete
---

[このWikiページ](http://www.bitcoin.org/wiki/doku.php?id=transaction_fee)および[このサトシの投稿](http://bitcointalk.org/index.php?topic=795.msg8960#msg8960)に記載されている通り、-paytxfeeスイッチを使用することで、送信トランザクションに「優先度」を付与することができる。

優先トランザクションとは、たとえブロックが非常に大きい場合（バイト数またはトランザクション数の面で）であっても、トランザクションがブロックに含まれる可能性を高めるものとして定義されているようである。

ブロックの99.9%がトランザクション手数料が発生する範囲外であることを考えると、現時点ではトランザクション手数料はほとんど無意味であると言える。しかし、興味深い疑問が浮かぶ……

ビットコインのクライアントやネットワークにおいて、トランザクション手数料に基づいてトランザクションを優先処理できる他の領域はあるだろうか？ 例えば：
ネットワークに送信すべきトランザクションのリストがある場合、優先度の高いものをより多くの接続ノードに送信する。優先トランザクションが到着した場合はマイニング作業を即座に再開するが、無料トランザクションの場合はしばらく既存のブロックの作業を続行する。
また、ビジネスマンの立場から言えば、ビットコインを扱うあらゆるビジネスにとって、安全策としてデフォルトで-paytxfee=0.02を使用するのが賢明な慣行であろう。これにより、極端なネットワーク負荷の場合でも、既存のネットワークおよび既存のクライアントにおいて優先処理が保証される。

トランザクション手数料の活用方法について、他にもご意見があれば歓迎する……健全なトランザクション手数料の仕組みは、ビットコインP2Pネットワークの長期的な健全性にとって重要であると強く確信している。
