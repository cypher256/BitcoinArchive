---
title: "Re: tcatmの4-way SSE2（Linux 32/64ビット対応）が0.3.10に搭載"
date: 2010-08-16T04:34:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9674#msg9674"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "BitcoinTalkトピック820におけるGround Loopの文脈投稿。msg9676の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
他の3台のIntelマシンでも4wayの勝者はいなかった：

Intel(R) Core(TM)2 Duo CPU     E8500 @ 3.16GHz（64ビットLinux）
4way: 1565  標準: 3002

Intel(R) Xeon(TM) CPU 3.00GHz（32ビットLinux）
4way: 1243  標準: 2048

Intel(R) Core(TM)2 CPU          6300  @ 1.86GHz
4way: 932   標準: 1733

（すべて0.3.10、-1 proclimitで実行）
proclimitの実験でもそれ以上にはならなかった。
