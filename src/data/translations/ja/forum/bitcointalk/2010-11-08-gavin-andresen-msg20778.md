---
title: "Re: テストネットワークで行ったテストと結果"
date: 2010-11-08T23:57:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg20778#msg20778"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック1668におけるギャビン・アンドレセンの投稿。msg21896の前。"
isSatoshi: false
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
tags: []
translationStatus: complete
---

> [Quote from: ByteCoin on November 08, 2010, 02:31:22 AM](https://bitcointalk.org/index.php?topic=1668.msg20570#msg20570)
> 高額トランザクションを優先しても問題は解決しない。自分のアドレス間で大量のBitcoinを無限に送り合うことでスパムできてしまうからだ。

いや、できない。送信するたびに「新しい」ものになり、優先度は経過時間と金額の積だからだ：
Code:// Priority is sum(valuein * age) / txsize  (valuein is the size of the bitcoin input, age is # of blocks deep, and txsize is the number of bytes the transaction takes up)

えーと……ウォレット内のコインをいじればいじるほど、そのコインは新しくなり、優先度は下がる（次のブロックにトランザクションを入れたい他の全員と比較して）。深く考えたわけではないが、コインをそのままにしておき、必要に応じておつりを作るのが一番うまくいくと思う。ぜひ自分のクライアントを作って、テストネットワークで壊してみてほしい！
