---
title: "Re:（The Madhatterの文脈投稿）"
date: 2009-12-12T06:34:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg51#msg51"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalkトピック12におけるThe Madhatterの文脈投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

Mac OS X 10.4.11/Intel上でsvn 0.2のコンパイルがほぼ完了した（PPC970マシンもあるのでPPCビルドも可能だ）。ウィンドウ表示はwxwidgets経由のネイティブCarbonだ！速い！ 😉 新しいmakefile（makefile.osx、もちろんmakefile.unixベース……autoconfの使用は検討した？）を作成し、header.hにいくつかifdefを入れた。パッチがある。引き続きいじってみる。次はFreeBSDで試すかもしれない。

TORとI2Pのノードを大量に運用しているので、このアプリを同じサーバーに追加するのは簡単だ。😊

Bitcoinを2つのアプリに分割するのが理想的だと思う。wxwidgetsフロントエンド（大部分はすでにある）と、制御用TCPソケットにバインドするバックエンドだ。ソースコードを読んで分割がどれだけ難しいか検討しているが、かなり簡単にできると思う。もちろんAPIの開発が必要になるが。

ソースコードをいじり続けて、何ができるか見てみる。

😊
