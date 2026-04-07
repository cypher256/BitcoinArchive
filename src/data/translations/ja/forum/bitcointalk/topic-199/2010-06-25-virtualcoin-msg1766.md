---
title: "Re: 0.3 almost ready -- please test the Mac version!"
date: 2010-06-25T10:29:54.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1766#msg1766"
author: "virtualcoin"
participants:
  - name: "virtualcoin"
    slug: "virtualcoin"
description: "BitcoinTalkトピック199におけるvirtualcoinの文脈投稿。after msg1760, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-06-25T02:17:41.000Z"
    sourceEntryId: "forum/bitcointalk/topic-199/2010-06-25-re-0-3-almost-ready"
translationStatus: complete
---

<!-- quote: q1 -->
> 64-bit版が32-bit版より速いはずはないが、誰かがlinuxの両バージョンを並べて比較・確認してくれたらありがたい。SHA-256は32-bitアルゴリズムで、BitcoinMinerでは64-bitは一切使っていない。

だがこれを見てくれ。

**Ubuntu 10.04上の32-bit Linux版**

4 cores: 2500 khash/s
3 cores: 1900 khash/s
2 cores: 1260 khash/s
1 core: 630 khash/s

**Ubuntu 10.04上の64-bit Linux版（新しい計測）**

4 cores: 2880 khash/s
3 cores: 2150 khash/s
2 cores: 1450 khash/s
1 core: 720 khash/s

（といっても、まだ1コインも生成できていない。bitcoinを4コアで丸一日動かすことはなくて、1コアでさえそうしていないのだが……）

@Joozero — Intel i7 860は2.8 Ghzだったよな？ 自分のPhenom IIは3 Ghzだから、それも重要な事実だと思う。同じマシンのWindows 7でも後でbitcoinを試してみる。

/edit

**Windows 7 64-bit上の32-bit Win版**

4 cores: 2310 khash/s
3 cores: 1740 khash/s
2 cores: 1160 khash/s
1 core: 580 khash/s
