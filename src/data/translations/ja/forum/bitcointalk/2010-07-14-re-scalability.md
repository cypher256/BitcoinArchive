---
title: "返信: スケーラビリティ"
date: 2010-07-14T21:10:52.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2947#msg2947"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「スケーラビリティ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/188/"
threadId: "bt-scalability"
threadTitle: "Scalability"
threadPosition: 2
translationStatus: complete
---

設計では、完全なブロックチェーンを必要としない軽量クライアントの概要が示されています。設計PDFでは簡易支払い検証（Simplified Payment Verification）と呼ばれています。軽量クライアントはトランザクションの送受信ができますが、ブロックの生成はできません。支払いの検証にノードを信頼する必要はなく、自分で検証できます。

軽量クライアントはまだ実装されていませんが、必要になった時に実装する計画です。今のところ、全員がフルネットワークノードを実行しています。

ノード数は10万を超えることはないと予想しており、おそらくそれ以下でしょう。それ以上のノードが参加する価値がない均衡点に達します。残りは軽量クライアントになり、数百万になる可能性があります。

均衡サイズでは、多くのノードはサーバーファームとなり、1つか2つのネットワークノードがLAN経由でファームの残りに供給します。
