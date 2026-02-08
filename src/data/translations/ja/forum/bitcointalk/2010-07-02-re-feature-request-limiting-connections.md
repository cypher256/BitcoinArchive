---
title: "返信: 機能リクエスト: 接続数の制限"
date: 2010-07-02T19:21:36.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=223.msg1924#msg1924"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「機能リクエスト: 接続数の制限」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/161/"
threadId: "bt-feature-request-limiting-connections"
threadTitle: "Feature Request: Limiting Connections"
threadPosition: 1
translationStatus: complete
---

フィードバックをいただきありがとうございます。

一つの方法として、アウトバウンド接続を15から10、あるいは5に減らすことができます。15という選択は恣意的でした。冗長性と高速な指数関数的メッセージ伝播に十分な数があれば良いのです。10でもまだ十分です。5でも問題ないはずです。10はきれいな切りの良い数字として良いので、ユーザーは意図的に止まったことが分かります。

UPnPを実装すれば、インバウンドを受け入れるノードが増えるので助けになるでしょう。接続数は、インバウンドを受け入れるノードとアウトバウンドのみのノードの比率に15を掛けたものです。インバウンド接続を受け入れる人をもっと増やすよう奨励する必要があります。

一定の接続数に達したらインバウンド接続の受け入れを停止する機能を実装する予定です。

どのバージョンをお使いですか？

BitTorrentのような典型的なP2Pソフトウェアで接続数が最大何になるか知っている方はいますか？
