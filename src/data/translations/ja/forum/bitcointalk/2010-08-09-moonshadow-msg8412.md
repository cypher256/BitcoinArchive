---
title: "Re: (context post by MoonShadow)"
date: 2010-08-09T20:12:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=760.msg8412#msg8412"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "BitcoinTalkトピック760におけるMoonShadowのコンテキスト投稿。msg8413の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
[Quote from: davidonpda on August 09, 2010, 08:07:26 PM](https://bitcointalk.org/index.php?topic=760.msg8410#msg8410)
> タイムスタンプの問題は、32ビット整数としてのunixタイムスタンプが2038年にオーバーフローすることだ。プログラマーだが、「unix time problem」や「2038」でググればもっと情報が見つかる。

素人の観点からY2038問題は理解している。私が言いたかったのは、Bitcoinの構造内にはY2038問題は存在しないのではないかということだ。タイムスタンプはブロックチェーン内の特定の位置にのみ関連するので、クライアントがブロック内に正確なタイムスタンプを持つ必要はないはずだ。それに、それは何だろう？GMT？自分のクライアントはローカル時間で問題なく動作していると思う。もしそれが生成したブロックの拒否につながるなら、教えてほしい。
