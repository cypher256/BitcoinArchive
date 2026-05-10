---
title: "Re: オーバーフローバグ深刻"
date: 2010-08-16T01:12:05.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9628#msg9628"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/381/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "trebronics"
    date: "2010-08-15T16:02:35.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-goldrush-msg9625"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> クライアントを実行しているほとんどの人はこのメッセージスレッドを読んでいない。では...素朴な質問だ：
<!-- /tone-skip -->

1) これはバージョン 3.8.1（大災害前）の不正なブロックチェーンを持つクライアントにどのような影響を与え続けますか？
2) 3.8.10 にアップグレードしたがブロックチェーンファイルを削除しないクライアントにどのような影響がありますか？
1) ノードパワーの 50%以上がアップグレードされ、正しいチェーンが不正なチェーンを追い越せば、0.3.10 ノードは不正なトランザクションが確認を得ることを困難にする。
2) blk*.dat ファイルを削除しなかった場合、その 50%への貢献にはなっておらず、正しいチェーンが不正なチェーンを追い越すまで不正なトランザクションが表示され続ける。
