---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-14T04:22:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9159#msg9159"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがthashのアラインメントを提案し、MinGW GCC 3.4.5がおそらく問題の原因であることを特定。"
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
---

まだであれば、thashのアラインを試してみてほしい。効果があるかもしれない。損にはならない。

<!-- quote: q1 -->
<!-- tone-skip -->
> ツリーオプティマイザのコンパイラバグを踏んでいるようだ。-O0でコンパイルしてみてくれないか？
<!-- /tone-skip -->

-O0でも効果なし、同じエラーだ。

MinGWはGCC 3.4.5だ。おそらくそれが問題だ。

新しいバージョンのMinGWを入手できるか試してみる。
