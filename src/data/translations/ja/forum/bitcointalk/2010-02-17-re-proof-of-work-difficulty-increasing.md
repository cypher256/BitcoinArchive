---
title: "Re: Proof-of-work難易度の上昇"
date: 2010-02-17T17:58:03.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg388#msg388"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Proof-of-work難易度の上昇」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/61/"
threadId: "bt-proof-of-work-difficulty-increasing"
threadTitle: "Proof-of-work difficulty increasing"
threadPosition: 5
translationStatus: complete
---

[Sabunirの2010年2月16日 08:51:51 AMの投稿より引用](https://bitcointalk.org/index.php?topic=43.msg372#msg372)おそらく接続の非常に高いレイテンシー（平均2000ms以上）に関係しているかもしれません。
往復2秒のレイテンシーは、生成成功率を1%未満しか低下させないはずです。

[Sabunirの2010年2月16日 08:51:51 AMの投稿より引用](https://bitcointalk.org/index.php?topic=43.msg372#msg372)および/または高いパケットロス（時に最大10%のロス）？
おそらく大丈夫ですが、確信はありません。プロトコルは次のメッセージに再同期するように設計されており、メッセージは受信されるまで接続している他のすべてのノードから再リクエストされます。ブロックを見逃した場合、別のブロックが入ってきてギャップがあることを確認するたびにリクエストし続けます。最初のリリース前に、高負荷の下で4つに1つのランダムなメッセージをドロップするテストを行い、一晩中実行してどのノードも停止しないことを確認しました。
