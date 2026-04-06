---
title: "Re: Proof-of-work難易度の上昇"
date: 2010-02-17T17:58:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg388#msg388"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Proof-of-work難易度の上昇」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/61/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Sabunir"
    date: "2010-02-15T23:51:51.000Z"
  - id: "q2"
    person: "Sabunir"
    date: "2010-02-15T23:51:51.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> ポートはソフトウェアとハードウェアの両方のファイアウォールで開いている。ルーターも適切に処理している。接続のレイテンシが非常に高い（平均2000ms以上）ことや、パケットロスが高い（時に最大10%のロス）ことが原因かもしれない。
<!-- /tone-skip -->
往復2秒のレイテンシーは、生成成功率を1%未満しか低下させないはずだ。

<!-- quote: q2 -->
<!-- tone-skip -->
> パケットロスが高い（時に最大10%のロス）ことが原因かもしれない。
<!-- /tone-skip -->
おそらく大丈夫だが、確信はない。プロトコルは次のメッセージに再同期するように設計されており、メッセージは受信されるまで接続している他のすべてのノードから再リクエストされる。ブロックを見逃した場合、別のブロックが入ってきてギャップがあることを確認するたびにリクエストし続ける。最初のリリース前に、高負荷の下で4つに1つのランダムなメッセージをドロップするテストを行い、一晩中実行してどのノードも停止しないことを確認した。
