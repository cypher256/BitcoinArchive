---
title: "Re: 常にトランザクション手数料を支払う？"
date: 2010-09-07T16:32:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=994.msg12168#msg12168"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「常にトランザクション手数料を支払う？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/439/"
threadId: "bt-always-pay-transaction-fee"
threadTitle: "Always pay transaction fee?"
threadPosition: 1
translationStatus: complete
---

もう一つの選択肢は、トランザクション手数料が必要になる前にブロックごとに許可される無料トランザクションの数を減らすことです。ノードはブロックごとに一定KBの無料トランザクションしか受け付けず、それを超えると最低0.01のトランザクション手数料を要求し始めます。

閾値はおそらく現在よりも低くすべきでしょう。

閾値を0にすべきではないと思います。常に少なくとも一部の無料トランザクションは許可すべきです。
