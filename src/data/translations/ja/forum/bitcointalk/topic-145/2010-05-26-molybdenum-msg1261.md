---
title: "Re: CLIでのBitcoin生成"
date: 2010-05-26T23:04:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1261#msg1261"
author: "molybdenum"
participants:
  - name: "molybdenum"
    slug: "molybdenum"
description: "BitcoinTalkトピック145におけるmolybdenumの文脈投稿。msg1256の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

ふむ、r78に更新する際にrpc.cppを眺めていたら見つけた……ちなみに、debian lenny backportsのGCC 4.3.4ではちゃんとコンパイルできない。net.hのDEFAULT_PORTを#defineに変更しなければならなかった。なぜかhtons()が変数宣言で許可されなかったからだ……おそらく最良の解決策ではないが、短期的にはうまくいった 😉
