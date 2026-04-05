---
title: "Re: テストネットワークで行ったテストとその発見。"
date: 2010-11-08T23:57:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg20778#msg20778"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック1668におけるGavin Andresenの文脈投稿。msg21896の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: ByteCoin on November 08, 2010, 02:31:22 AM](#msg20570)
> [Quote from: gavinandresen on November 07, 2010, 02:14:29 AM](#msg20419)

いや、できない。送るたびに「新しい」ものになり、優先度は年齢に金額を掛けたものだからだ：
Code:// Priority is sum(valuein * age) / txsize  (valuein is the size of the bitcoin input, age is # of blocks deep, and txsize is the number of bytes the transaction takes up)

ウォレット内のコインをいじればいじるほど、（他の全員に比べて）それらは新しくなり、優先度は低くなる。深く考えてはいないが、コインをそのままにして必要に応じてお釣りを作る方がおそらく最善だと思う。しかし、ぜひ自分のクライアントを作成してテストネットワークで何かを壊してみてほしい！
