---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-16T04:34:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9674#msg9674"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "BitcoinTalkトピック820におけるGround Loopの投稿。msg9676の前。"
isSatoshi: false
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
tags: []
translationStatus: complete
---

他の3台のIntelマシンでも4wayの優位性はなかった：

Intel(R) Core(TM)2 Duo CPU     E8500 @ 3.16GHz (64-bit Linux)
4way: 1565  std: 3002

Intel(R) Xeon(TM) CPU 3.00GHz (32-bit Linux)
4way: 1243  std: 2048

Intel(R) Core(TM)2 CPU          6300  @ 1.86GHz
4way: 932   std: 1733

（すべて0.3.10、-1 proclimitで実行）
proclimitを変えた実験でも改善はなかった。
