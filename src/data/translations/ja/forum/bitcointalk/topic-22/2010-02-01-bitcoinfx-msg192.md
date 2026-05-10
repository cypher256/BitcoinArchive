---
title: "Re: TOR と I2P"
date: 2010-02-01T22:08:54.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg192#msg192"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalk トピック 22 における BitcoinFX の文脈投稿。msg223 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

さて、Tor を使って疑似匿名の暗号「Bitcoin 銀行」実験をセットアップしてみた。😄

標準の 9050 socks ポート「デフォルト設定」を使えばほぼ成功した。つまり、Tor を通じて他の Bitcoin ノードへの接続は確保できた。しかし、様々な問題と複数の警告メッセージに遭遇した。

「Your application (using socks5 on port xxxx) is giving Tor only an IP address. Applications that do DNS resolves themselves may leak information. Consider
using Socks4A (e.g. via polipo or socat) instead.」

https://wiki.torproject.org/noreply/TheOnionRouter/TorFAQ#IkeepseeingthesewarningsaboutSOCKSandDNSandinformationleaks.ShouldIworry.3F

最終的に Privoxy と Stunnel（そちらの方が慣れているので）を使って修正した。ただし、polipo と Stunnel でも可能だ。

しかし、ポート 8333（Bitcoin の「デフォルト」として想定通り）と 6667（間違っていなければ IRC ポートだ！？）について、時折警告が出る。

Tor 経由で Bitcoin に接続すると、Tor が [scrubbed]アドレスへの「欠落した」接続を確立しようとして、繰り返し出口ノードを変更する。最初は Tor の出口がポート 8333 や 6667 をブロックしているためだと思ったが、ほとんどの場合そうではなかった！

Tor 経由の他の P2P アプリケーションは、接続できない IP アドレスを「無視」でき、「警告」なしに動作を続行できる。しかし、Bitcoin はブロックの漏れがないか確認するために、すべてのノードに接続を試みなければ*ならない*！ したがって、Bitcoin ノードが 1 つだけ稼働している IP 範囲が Tor 出口ノードをブロックしている場合、これは常にそうなるのだろうか？

これは多くの理由で問題がある。😕
