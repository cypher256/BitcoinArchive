---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-07-31T13:42:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg6810#msg6810"
author: "em3rgentOrdr"
participants:
  - name: "em3rgentOrdr"
    slug: "em3rgentordr"
description: "BitcoinTalkトピック648におけるem3rgentOrdrの文脈投稿。msg6751の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

うーん…パッチを適用できなかった（初心者なんだ）。自分がbitcoin-0.3.6/srcから実行したコマンドはこれだ # patch < XN1JDb53.txt

出力：

1 out of 1 hunk ignored
(Stripping trailing CRs from patch.)
patching file main.cpp
Hunk #1 FAILED at 2555.
Hunk #2 FAILED at 2701.
2 out of 2 hunks FAILED
(Stripping trailing CRs from patch.)
patching file makefile.unix
Hunk #1 FAILED at 45.
Hunk #2 FAILED at 58.

linuxでは正しくはどういうコマンドを打てばいいんだ？ それとも、linux用のバイナリはあるか？
