---
title: "Re: テストネットワークで行ったテスト、私の発見"
date: 2010-11-08T23:57:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg20778#msg20778"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック1668におけるギャビン・アンドレセンの文脈投稿。msg21896の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "ByteCoin"
    personSlug: "bytecoin"
    date: "2010-11-07T17:31:22.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 高額トランザクションを優先しても、大量のビットコインを自分のアドレス間で無限に送ることでスパムすることは完全に可能なので、問題の解決にはならない。
<!-- /tone-skip -->

いや、できない。送るたびに「新しい」ものになり、優先度は年齢に金額を掛けたものだからだ：
Code:// Priority is sum(valuein * age) / txsize  (valuein is the size of the bitcoin input, age is # of blocks deep, and txsize is the number of bytes the transaction takes up)

ウォレット内のコインをいじればいじるほど、（他の全員に比べて）それらは新しくなり、優先度は低くなる。深く考えてはいないが、コインをそのままにして必要に応じてお釣りを作る方がおそらく最善だと思う。しかし、ぜひ自分のクライアントを作成してテストネットワークで何かを壊してみてほしい！
