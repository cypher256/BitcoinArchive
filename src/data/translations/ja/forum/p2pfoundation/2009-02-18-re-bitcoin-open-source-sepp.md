---
title: "返信: ビットコイン：P2P通貨のオープンソース実装"
date: 2009-02-18T20:50:00Z
source: p2pfoundation
sourceUrl: "http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sepp Hasslberger"
    slug: "sepp-hasslberger"
description: "Satoshi NakamotoがSepp Hasslbergerのビットコインに関する質問に回答し、コインの生成プロセスと通貨単位の初期分配の仕組みについて説明しています。"
isSatoshi: true
tags:
  - "generation"
  - "distribution"
  - "mining"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/2/"
translationStatus: complete
---

Seppの書き込み：
> 実際にコインを入手する方法はありますか？

現在、コインを手に入れる方法は二つあります。インターネット経由で誰かにコインを送り、見返りに何かを送ってもらうことができます。あるいは、運よくブロックを見つけることができれば、現在50コインが付与されます。

新しいコインの生成速度はスケジュールに基づいて時間とともに遅くなります。これはコインが予測可能なペースで生成されることを保証するためです。コインの総数が2100万に達すると、それ以上は生成されません。

システムはネットワークノードがブロックを生成するたびにコインを分配し、その量は4年ごとに半減します：

最初の4年間: 10,500,000コイン
次の4年間: 5,250,000コイン
次の4年間: 2,625,000コイン
次の4年間: 1,312,500コイン
以下同様...

それが尽きた場合、システムは必要に応じて取引手数料をサポートできます。これは公開市場の競争に基づいており、おそらく常に無料で取引を処理してくれるノードが存在するでしょう。
