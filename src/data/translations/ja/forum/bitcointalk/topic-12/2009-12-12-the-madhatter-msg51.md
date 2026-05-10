---
title: "Re: いくつかの提案"
date: 2009-12-12T06:34:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg51#msg51"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalk トピック 12 における The Madhatter の文脈投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

Mac OS X 10.4.11/Intel 上で svn 0.2 のコンパイルがほぼ完了した（PPC970 マシンもあるので PPC ビルドも可能だ）。ウィンドウ表示は wxwidgets 経由のネイティブ Carbon だ！速い！ 😉 新しい makefile（makefile.osx、もちろん makefile.unix ベース……autoconf の使用は検討した？）を作成し、header.h にいくつか ifdef を入れた。パッチがある。引き続きいじってみる。次は FreeBSD で試すかもしれない。

TOR と I2P のノードを大量に運用しているので、このアプリを同じサーバーに追加するのは簡単だ。😊

Bitcoin を 2 つのアプリに分割するのが理想的だと思う。wxwidgets フロントエンド（大部分はすでにある）と、制御用 TCP ソケットにバインドするバックエンドだ。ソースコードを読んで分割がどれだけ難しいか検討しているが、かなり簡単にできると思う。もちろん API の開発が必要になるが。

ソースコードをいじり続けて、何ができるか見てみる。

😊
