---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-16T01:00:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9623#msg9623"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ 深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/379/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Ground Loop"
    date: "2010-08-15T15:29:55.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-ground-loop-msg9609"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 影響についての質問：不正なブロックの後、不正なブロックチェーンを使ってトランザクションを送信した。
<!-- /tone-skip -->
ああ、修正されたチェーンに再統合される。トランザクションは消えず、双方で引き続き表示されるが、確認数が0に戻り、再び増え始める。

ブロック74638以降の不正なチェーンでブロックを生成した場合のみ、そのブロックからの50 BTCが消える。不正なチェーン内のブロックはまだ成熟していなかったはずだ。
