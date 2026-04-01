---
title: "Re: （ギャビン・アンドレセンのコンテキスト投稿）"
date: 2010-06-27T01:55:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=218.msg1826#msg1826"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック218におけるギャビン・アンドレセンのコンテキスト投稿。msg1828の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: HarryS on June 27, 2010, 01:43:37 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-06-27-harrys-msg1825/)
> 実行すると、
> Quote./bitcoind getaddressesbylabel ""
> [
> ]
> 何も返ってこないのは正常だろうか？

うーん、おそらく正常だ。デフォルトのアドレスには空のラベルが付いていると思っていたが、間違いだった。"Your Address"というラベルが付けられている。
なので：Code:./bitcoind getaddressesbylabel "Your Address" でうまくいくはずだ。

または、ラベル付きでもなしでも新しいアドレスを生成すればいい：
Code:./bitcoind getnewaddress
