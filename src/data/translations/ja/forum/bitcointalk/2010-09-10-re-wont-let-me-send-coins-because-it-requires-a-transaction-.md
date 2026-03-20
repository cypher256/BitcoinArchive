---
title: "Re: トランザクション手数料が必要なためコインを送れない？"
date: 2010-09-10T00:23:24.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1013.msg12341#msg12341"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「トランザクション手数料が必要なためコインを送れない？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/445/"
threadId: "bt-won-t-let-me-send-coins-because-it-requires-a-tran"
threadPosition: 2
translationStatus: complete
---

これが起きたバージョンは何だ？リリースビルドか、自分でビルドしたものか？どのオペレーティングシステムだ？

IPアドレスで送信したか、それともBitcoinアドレスで送信したか？

49.99を送信した時、0.01の手数料を支払うよう求められたか？

GetMinFeeに変更があったが、これが原因となるとは思えない。ブロックが巨大になった時にのみ適用され始める。

ブロック番号の違いの理由は、表示される数値が0.3.11で1減らされたためで、その方が理にかなっていたからだ。
