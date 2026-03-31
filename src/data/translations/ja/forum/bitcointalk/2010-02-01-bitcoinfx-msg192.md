---
title: "Re: TORとI2P"
date: 2010-02-01T22:08:54.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg192#msg192"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalkトピック22におけるBitcoinFXの文脈投稿。msg223の前。"
isSatoshi: false
threadId: "bt-tor-and-i2p"
tags: []
translationStatus: complete
---

よし、Torを使った擬似匿名暗号「Bitcoin Bank」の実験を試みた。Grin

標準の9050 socksポート「デフォルト設定」、つまりTor経由で他のBitcoinノードへの接続は得られたので、おおむね成功だった。しかし、様々な問題と複数の警告メッセージに遭遇した。

「Your application (using socks5 on port xxxx) is giving Tor only an IP address. Applications that do DNS resolves themselves may leak information. Consider
using Socks4A (e.g. via polipo or socat) instead.」

https://wiki.torproject.org/noreply/TheOnionRouter/TorFAQ#IkeepseeingthesewarningsaboutSOCKSandDNSandinformationleaks.ShouldIworry.3F

最終的にPrivoxyとStunnelを使って修正した（そちらの方が慣れているので）。もっとも、polipoとStunnelを使うこともできる。

しかし、ポート8333（Bitcoinの「デフォルト」として予想通り）と6667（間違いでなければIRCポートだ！？）で時折警告が出る。

Tor経由でBitcoinを接続すると、[scrubbed]アドレスへの「欠落した」接続を確立しようとしてTorが繰り返し出口ノードを変更する。最初はTorの出口ノードがポート8333や6667をブロックしているのかと思ったが、ほとんどの場合そうではない！

Tor経由の他のP2Pアプリケーションは、接続できないIPアドレスを「無視」でき、「警告」なしにアプリケーションは問題なく機能する。しかし、Bitcoinはブロックを見逃していないか確認するためにすべてのノードに接続を試み*なければならない*！つまり、Bitcoinノードが1つだけ稼働しているIP範囲がTor出口ノードをブロックしている場合、おそらくこれは常にそうなるのだろうか？

これは多くの理由で問題がある。Huh
