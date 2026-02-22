---
title: "Re: あなたのb-moneyページの引用について — Bitcoin v0.1リリース"
date: 2009-01-10T11:17:00Z
source: correspondence
sourceUrl: "https://gwern.net/doc/bitcoin/2008-nakamoto"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Wei Dai"
    slug: "wei-dai"
description: "SatoshiがWei DaiにBitcoin v0.1のリリースを告知し、b-moneyのほぼすべての目標を達成したと述べている。Hal Finneyのシステム概要を引用。"
isSatoshi: true
threadId: "satoshi-wei-dai"
threadTitle: "Satoshi ↔ Wei Dai Correspondence"
threadPosition: 3
tags:
  - "b-money"
  - "bitcoin-release"
  - "hal-finney"
  - "origins"
secondarySources:
  - name: "Gwern's Archive"
    url: "https://gwern.net/doc/bitcoin/2008-nakamoto"
translationStatus: complete
---

お知らせしたかったのですが、数か月前にお送りした論文の完全な実装、Bitcoin v0.1をリリースしました。詳細、ダウンロード、スクリーンショットは www.bitcoin.org にあります。

あなたのb-money論文で提示された目標のほぼすべてを達成していると思います。

システムは完全に分散型で、サーバーや信頼できる第三者は存在しません。ネットワークインフラはエスクロー取引や契約の全範囲をサポートできますが、今のところ基本的な通貨と取引に焦点を当てています。

暗号学メーリングリストで設計についての議論がありました。Hal Finneyが良い概要を述べています：

> 一つ言及しておきたいのは、bitcoinは多くの点で二つの独立したアイデアだということです。Jamesがここで挙げている種類の問題を解決する方法、つまりグローバルに一貫性がありながら分散型のデータベースを作ること。そしてそれをWei Daiのb-money（論文中で参照されている）に類似したシステムに使うこと、ただしアカウントベースではなくトランザクション/コインベースです。グローバルで大規模に分散されたデータベース問題を解決することが、Jamesが強調するように、おそらくより難しい部分です。この目的のためのプルーフ・オブ・ワークの使用は、私見ではさらなる検討に値する新しいアイデアです。

Satoshi
