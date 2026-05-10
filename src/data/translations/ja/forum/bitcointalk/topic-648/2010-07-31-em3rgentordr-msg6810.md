---
title: "Re: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-07-31T13:42:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg6810#msg6810"
author: "em3rgentOrdr"
participants:
  - name: "em3rgentOrdr"
    slug: "em3rgentordr"
description: "BitcoinTalk トピック 648 における em3rgentOrdr の文脈投稿。msg6751 の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

うーん…パッチを適用できなかった（初心者なんだ）。自分が bitcoin-0.3.6/src から実行したコマンドはこれだ # patch < XN1JDb53.txt

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

linux では正しくはどういうコマンドを打てばいいんだ？ それとも、linux 用のバイナリはあるか？
