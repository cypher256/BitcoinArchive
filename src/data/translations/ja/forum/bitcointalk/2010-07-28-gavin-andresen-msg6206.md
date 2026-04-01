---
title: "Re:（Gavin Andresenの文脈投稿）"
date: 2010-07-28T15:18:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=604.msg6206#msg6206"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック604におけるGavin Andresenの文脈投稿。msg6273の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

I get:
Code:/var/folders/n7/n7Do3Krz2RWPeE+1YxvhUU+++TM/-Tmp-//cc8PgHsQ.s:879:suffix or operands invalid for `call'
... compiling cryptopp/sha.cpp (latest SVN source) on my Mac (gcc version 4.2.1).

I fixed it by adding -DCRYPTOPP_DISABLE_ASM  to my makefile; perhaps somebody with more experience compiling C++ on a Mac can figure out a better fix.
