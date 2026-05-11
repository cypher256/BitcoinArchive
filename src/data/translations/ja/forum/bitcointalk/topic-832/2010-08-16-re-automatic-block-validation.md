---
title: "Re: [PATCH] ブロックの自動検証"
date: 2010-08-16T17:08:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=832.msg9775#msg9775"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「[パッチ] 自動ブロック検証」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/392/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-16T06:25:54.000Z"
    sourceEntryId: "forum/bitcointalk/topic-832/2010-08-16-satoshi-msg9754"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> チェック後に AddToBlockIndex や Reorganize を開始することはおそらく可能だが、はるかに慎重な注意が必要になる。おそらく AddToBlockIndex の新しいベストブロックを設定する部分を分離すべきだ。おそらく以下のコードの代わりにそうすることになるだろう。
<!-- /tone-skip -->

最終的に SVN rev 139 でそのようにした。

不正なチェーンを削除する代わりに、ConnectBlock に追加の CheckBlock を加えて、不正なブロックが一度排除された後に最良チェーンに戻れないようにした。
