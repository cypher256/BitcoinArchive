---
title: "Mac での SVN r115 ビルドエラー：回避策"
date: 2010-07-28T15:18:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=604.msg6206#msg6206"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 604 におけるギャビン・アンドレセンの文脈投稿。msg6273 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

以下のエラーが出る：

```
/var/folders/n7/n7Do3Krz2RWPeE+1YxvhUU+++TM/-Tmp-//cc8PgHsQ.s:879:suffix or operands invalid for `call'
……Mac（gccバージョン4.2.1）でcryptopp/sha.cpp（最新SVNソース）をコンパイルしている時だ。
```

makefile に-DCRYPTOPP_DISABLE_ASM を追加して修正した。Mac で C++をコンパイルする経験が豊富な人なら、もっと良い修正を見つけられるかもしれない。
