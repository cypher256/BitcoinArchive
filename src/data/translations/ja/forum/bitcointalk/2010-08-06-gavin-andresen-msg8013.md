---
title: "Re: （ギャビン・アンドレセンの引用投稿）"
date: 2010-08-06T23:32:05.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=723.msg8013#msg8013"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック723におけるギャビン・アンドレセンの引用投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: Red on August 06, 2010, 11:08:28 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-08-06-red-msg8007/)
> つまり、新しいトランザクションを検証するには、そのトランザクションの各in-pointに最も近い5つのノードに送信する。それらはトランザクションを記録し、二重支払いを検出したかどうかを即座に通知する。もし検出されていれば、それは不正なトランザクションであり、他の近くのノードにブロードキャストされる。

どちらのトランザクションが先だったかについて意見が分かれたらどうなるのか？多数決か？誰が多数派を決定するのか、そして5つのノードのうち4つがネットワークを離れ、別の5つのノードに置き換わった場合、結果は変わりうるのか？

また、大きなトランザクションを作成しようとしていることが分かっている場合、そのトランザクション（まだ送信していない）が自分の支配下にあるノードにハッシュされるよう、ノードIDを事前計算することはできないのか？トランザクションを保存するすべてのノードを支配していれば、「はい、間違いなく、そのトランザクションは有効で二重支払いはありません」と回答するだけで済む……

Bitcoinの背後にある素晴らしい洞察は、分散型タイムスタンプの仕組みだ。全員がトランザクションの順序に合意する。あなたの方式がその問題をどう解決するのか、私には分からない。
