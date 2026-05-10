---
title: "Re: tcatm の 4-way SSE2 Linux 32/64 ビット版が 0.3.10 に搭載"
date: 2010-08-16T04:34:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9674#msg9674"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "BitcoinTalk トピック 820 における Ground Loop の文脈投稿。msg9676 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
他の 3 台の Intel マシンでも 4way の勝者はいなかった：

Intel(R) Core(TM)2 Duo CPU     E8500 @ 3.16GHz（64 ビット Linux）
4way: 1565  標準: 3002

Intel(R) Xeon(TM) CPU 3.00GHz（32 ビット Linux）
4way: 1243  標準: 2048

Intel(R) Core(TM)2 CPU          6300  @ 1.86GHz
4way: 932   標準: 1733

（すべて 0.3.10、-1 proclimit で実行）
proclimit の実験でもそれ以上にはならなかった。
