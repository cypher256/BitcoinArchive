---
title: "Re: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-08-14T04:22:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9159#msg9159"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが thash のアラインメントを提案し、MinGW GCC 3.4.5 がおそらく問題の原因であることを特定。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/359/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "tcatm"
    personSlug: "tcatm"
    date: "2010-08-13T15:53:07.000Z"
    sourceEntryId: "forum/bitcointalk/topic-648/2010-08-14-tcatm-msg9147"
---

まだであれば、thash のアラインを試してみてほしい。効果があるかもしれない。損にはならない。

<!-- quote: q1 -->
<!-- tone-skip -->
> ツリーオプティマイザーでコンパイラーのバグを引き起こしているようだ。-O0 でコンパイルしてみてくれないか？
<!-- /tone-skip -->

-O0 でも効果なし、同じエラーだ。

MinGW は GCC 3.4.5 だ。おそらくそれが問題だ。

新しいバージョンの MinGW を入手できるか試してみる。
