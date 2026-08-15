---
title: "Re: レイテンシーと局所性"
date: 2010-08-06T23:32:05.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=723.msg8013#msg8013"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 723 におけるギャビン・アンドレセンの文脈投稿。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "Red"
    personSlug: "red"
    date: "2010-08-06T23:08:28.000Z"
    sourceEntryId: "forum/bitcointalk/topic-723/2010-08-06-red-msg8007"
---

<!-- quote: q1 -->
<!-- tone-skip -->
<!-- audit:quote-skip -->
> つまり、新しいトランザクションを検証するには、そのトランザクションの各 in-point に最も近い 5 つのノードに送信する。それらはトランザクションを記録し、二重支払いを検出したかどうかを即座に通知する。もし検出されていれば、それは不正なトランザクションであり、他の近くのノードにブロードキャストされる。
<!-- /tone-skip -->

どちらのトランザクションが先だったかについて意見が分かれたらどうなるのか？多数決か？誰が多数派を決定するのか、そして 5 つのノードのうち 4 つがネットワークを離れ、別の 5 つのノードに置き換わった場合、結果は変わりうるのか？

また、大きなトランザクションを作成しようとしていることが分かっている場合、そのトランザクション（まだ送信していない）が自分の支配下にあるノードにハッシュされるよう、ノード ID を事前計算することはできないのか？トランザクションを保存するすべてのノードを支配していれば、「はい、間違いなく、そのトランザクションは有効で二重支払いはありません」と回答するだけで済む……

Bitcoin の背後にある素晴らしい洞察は、分散型タイムスタンプの仕組みだ。全員がトランザクションの順序に合意する。あなたの方式がその問題をどう解決するのか、私には分からない。
