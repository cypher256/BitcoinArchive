---
title: "Re: 機能リクエスト: 接続数の制限"
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
threadPosition: 1
translationStatus: complete
---

フィードバックありがとう。

一つの方法として、アウトバウンド接続を15から10、あるいは5に減らすことができる。15という選択は恣意的だった。冗長性と高速な指数関数的メッセージ伝播に十分な数があれば良いのだ。10でもまだ十分だ。5でも問題ないはずだ。10はきれいな切りの良い数字として良いので、ユーザーは意図的に止まったことが分かる。

UPnPを実装すれば、インバウンドを受け入れるノードが増えるので助けになるだろう。接続数は、インバウンドを受け入れるノードとアウトバウンドのみのノードの比率に15を掛けたものだ。インバウンド接続を受け入れる人をもっと増やすよう奨励する必要がある。

一定の接続数に達したらインバウンド接続の受け入れを停止する機能を実装する予定だ。

どのバージョンを使っているか？

BitTorrentのような典型的なP2Pソフトウェアで接続数が最大何になるか知っている方はいるか？
