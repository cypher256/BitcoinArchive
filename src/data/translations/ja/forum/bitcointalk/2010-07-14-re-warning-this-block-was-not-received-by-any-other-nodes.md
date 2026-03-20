---
title: "Re: 警告: このブロックは他のノードに受信されませんでした"
date: 2010-07-14T18:56:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=291.msg2913#msg2913"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「警告: このブロックは他のノードに受信されませんでした」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/186/"
translationStatus: complete
---

Microsoft Security Essentialsのライブプロテクションがネットワークとの通信をブロックしている。接続はあるため、Bitcoinは接続されていると勘違いしているが、データがブロックされているため無音状態だ。

bitcoin.exeをライブプロテクションの除外プロセスにする必要がある。

これは一般的な問題になりつつある。誰かが固定スレッドにこれについて書くべきだ。

「警告: このブロックは他のノードに受信されなかった」というメッセージは、Bitcoinがブロックをブロードキャストしたが、誰も受信を確認しなかった場合に発生する。この警告は、まさにこのような状況のためにある。何らかの理由で接続はあるが死んでしまい、誰もあなたの声が聞こえないという場合だ。あなたのブロックは誰も受信していないため、有効にはならない。
