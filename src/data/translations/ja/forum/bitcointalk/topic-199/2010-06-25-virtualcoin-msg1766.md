---
title: "Re: 0.3 ほぼ完成 — Mac バージョンをテストしてください！"
date: 2010-06-25T10:29:54.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1766#msg1766"
author: "virtualcoin"
participants:
  - name: "virtualcoin"
    slug: "virtualcoin"
description: "BitcoinTalk トピック 199 における virtualcoin の文脈投稿。after msg1760, サトシを引用."
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
> 64 ビット版は 32 ビット版より速くないはずだが、2 つの Linux バージョンを並べて比較して確認してもらえると素晴らしい。SHA-256 は 32 ビットアルゴリズムであり、BitcoinMiner では 64 ビットはまったく使用していない。

だがこれを見てくれ。

**Ubuntu 10.04 上の 32-bit Linux 版**

4 cores: 2500 khash/s
3 cores: 1900 khash/s
2 cores: 1260 khash/s
1 core: 630 khash/s

**Ubuntu 10.04 上の 64-bit Linux 版（新しい計測）**

4 cores: 2880 khash/s
3 cores: 2150 khash/s
2 cores: 1450 khash/s
1 core: 720 khash/s

（といっても、まだ 1 コインも生成できていない。bitcoin を 4 コアで丸一日動かすことはなくて、1 コアでさえそうしていないのだが……）

@Joozero — Intel i7 860 は 2.8 Ghz だったよな？ 自分の Phenom II は 3 Ghz だから、それも重要な事実だと思う。同じマシンの Windows 7 でも後で bitcoin を試してみる。

/edit

**Windows 7 64-bit 上の 32-bit Win 版**

4 cores: 2310 khash/s
3 cores: 1740 khash/s
2 cores: 1160 khash/s
1 core: 580 khash/s
