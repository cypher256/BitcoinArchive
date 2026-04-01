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
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
tags: []
translationStatus: complete
---

[Quote from: ByteCoin on November 08, 2010, 02:31:22 AM](https://bitcointalk.org/index.php?topic=1668.msg20570#msg20570)
> 大きな金額の取引を優先しても問題は本当には解決しない。なぜなら、自分のアドレスの1つから別のアドレスに大量のビットコインを無限に送ることでスパムすることは完全に可能だからだ。

いや、できない。送るたびに「新しい」ものになり、優先度は年齢に金額を掛けたものだからだ：
Code:// Priority is sum(valuein * age) / txsize  (valuein is the size of the bitcoin input, age is # of blocks deep, and txsize is the number of bytes the transaction takes up)

ウォレット内のコインをいじればいじるほど、（他の全員に比べて）それらは新しくなり、優先度は低くなる。深く考えてはいないが、コインをそのままにして必要に応じてお釣りを作る方がおそらく最善だと思う。しかし、ぜひ自分のクライアントを作成してテストネットワークで何かを壊してみてほしい！
