---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-16T01:12:05.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9628#msg9628"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ 深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/381/"
threadId: "bt-overflow-bug-serious"
threadTitle: "overflow bug SERIOUS"
threadPosition: 10
translationStatus: complete
---

[Quote from: trebronics on August 16, 2010, 01:02:35 AM](https://bitcointalk.org/index.php?topic=823.msg9625#msg9625)クライアントを実行しているほとんどの人はこのメッセージスレッドを読んでいません。では...素朴な質問です：

1) これはバージョン3.8.1（大災害前）の不正なブロックチェーンを持つクライアントにどのような影響を与え続けますか？
2) 3.8.10にアップグレードしたがブロックチェーンファイルを削除しないクライアントにどのような影響がありますか？
1) ノードパワーの50%以上がアップグレードされ、正しいチェーンが不正なチェーンを追い越せば、0.3.10ノードは不正なトランザクションが確認を得ることを困難にします。
2) blk*.datファイルを削除しなかった場合、その50%への貢献にはなっておらず、正しいチェーンが不正なチェーンを追い越すまで不正なトランザクションが表示され続けます。
