---
title: "Re: オーバーフローバグ深刻"
date: 2010-08-16T01:02:24.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9624#msg9624"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/380/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "kosovito"
    personSlug: "kosovito"
    date: "2010-08-15T15:39:17.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-kosovito-msg9615"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> すべての手順を実行した。今、クライアントは0.3.10でブロック 74638で停止した。これで問題ないのか？
<!-- /tone-skip -->

まだ74638ブロックと表示されているなら、0.3.10のノードに接続されていない。

今日のところは、以下のパラメーターを追加してみてほしい：
-addnode=75.158.131.108 -addnode=99.27.237.13 -addnode=68.68.99.14

参照
[http://bitcointalk.org/index.php?topic=828](http://bitcointalk.org/index.php?topic=828)
