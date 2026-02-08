---
title: "返信: 機能リクエスト: 接続数の制限"
date: 2010-07-02T22:20:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=223.msg1929#msg1929"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「機能リクエスト: 接続数の制限」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/165/"
threadId: "bt-feature-request-limiting-connections"
threadTitle: "Feature Request: Limiting Connections"
threadPosition: 2
translationStatus: complete
---

RC4で最大アウトバウンド接続を15から8に減らしました。

15は冗長性のために必要な数をはるかに超えていました。8でも十分な冗長性があります。

ノードがこのバージョンにアップグレードするにつれて、インバウンドを受け入れるノードが受ける接続数は半減します。

8以上の接続が必要な方は、ファイアウォールでポート8333を開けてください。
