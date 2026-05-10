---
title: "Re: CLI での Bitcoin 生成"
date: 2010-05-26T23:04:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1261#msg1261"
author: "molybdenum"
participants:
  - name: "molybdenum"
    slug: "molybdenum"
description: "BitcoinTalk トピック 145 における molybdenum の文脈投稿。msg1256 の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

ふむ、r78 に更新する際に rpc.cpp を眺めていたら見つけた……ちなみに、debian lenny backports の GCC 4.3.4 ではちゃんとコンパイルできない。net.h の DEFAULT_PORT を#define に変更しなければならなかった。なぜか htons()が変数宣言で許可されなかったからだ……おそらく最良の解決策ではないが、短期的にはうまくいった 😉
