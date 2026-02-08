---
title: "Re: トランザクション手数料が必要なためコインを送れない？"
date: 2010-09-10T00:23:24.000Z
source: bitcointalk
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
threadTitle: "Won't let me send coins because it requires a transaction fee?"
threadPosition: 1
translationStatus: complete
---

これが起きたバージョンは何ですか？リリースビルドですか、自分でビルドしたものですか？どのオペレーティングシステムですか？

IPアドレスで送信しましたか、それともBitcoinアドレスで送信しましたか？

49.99を送信した時、0.01の手数料を支払うよう求められましたか？

GetMinFeeに変更がありましたが、これが原因となるとは思えません。ブロックが巨大になった時にのみ適用され始めます。

ブロック番号の違いの理由は、表示される数値が0.3.11で1減らされたためで、その方が理にかなっていたからです。
