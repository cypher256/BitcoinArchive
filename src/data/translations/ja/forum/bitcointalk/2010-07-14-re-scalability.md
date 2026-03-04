---
title: "Re: スケーラビリティ"
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
threadPosition: 2
translationStatus: complete
---

設計では、完全なブロックチェーンを必要としない軽量クライアントの概要が示されている。設計PDFでは簡易支払い検証（Simplified Payment Verification）と呼ばれている。軽量クライアントはトランザクションの送受信ができるが、ブロックの生成はできない。支払いの検証にノードを信頼する必要はなく、自分で検証できる。

軽量クライアントはまだ実装されていないが、必要になった時に実装する計画だ。今のところ、全員がフルネットワークノードを実行している。

ノード数は10万を超えることはないと予想しており、おそらくそれ以下だろう。それ以上のノードが参加する価値がない均衡点に達する。残りは軽量クライアントになり、数百万になる可能性がある。

均衡サイズでは、多くのノードはサーバーファームとなり、1つか2つのネットワークノードがLAN経由でファームの残りに供給する。
