---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T22:05:11.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9556#msg9556"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalkトピック823におけるNewLibertyStandardの文脈投稿。msg9548の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "davidonpda"
    date: "2010-08-15T22:02:05.000Z"
translationStatus: complete
---

バグ修正には0.3.9 rc2の4-way SSE2パッチも含まれるだろうか？含まれていることを教えてくれてありがとう、theymos。もし含まれていないなら、時間があるときに別のリリース候補を出してほしい。

<!-- quote: q1 -->
> 74000から無効ブロックまでのトランザクションはどうなる？それらも今や全部無効なのか？

無効なのは、その不正ブロック自身とそれ以降のブロックだけだ。それより前のブロックはすべて有効だ。
