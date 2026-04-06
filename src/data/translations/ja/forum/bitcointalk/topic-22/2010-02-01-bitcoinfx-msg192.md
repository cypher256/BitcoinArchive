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
tags: []
translationStatus: complete
---

さて、Torを使って疑似匿名の暗号「Bitcoin銀行」実験をセットアップしてみた。😄

標準の9050 socksポート「デフォルト設定」を使えばほぼ成功した。つまり、Torを通じて他のBitcoinノードへの接続は確保できた。しかし、様々な問題と複数の警告メッセージに遭遇した。

「Your application (using socks5 on port xxxx) is giving Tor only an IP address. Applications that do DNS resolves themselves may leak information. Consider
using Socks4A (e.g. via polipo or socat) instead.」

https://wiki.torproject.org/noreply/TheOnionRouter/TorFAQ#IkeepseeingthesewarningsaboutSOCKSandDNSandinformationleaks.ShouldIworry.3F

最終的にPrivoxyとStunnel（そちらの方が慣れているので）を使って修正した。ただし、polipoとStunnelでも可能だ。

しかし、ポート8333（Bitcoinの「デフォルト」として想定通り）と6667（間違っていなければIRCポートだ！？）について、時折警告が出る。

Tor経由でBitcoinに接続すると、Torが[scrubbed]アドレスへの「欠落した」接続を確立しようとして、繰り返し出口ノードを変更する。最初はTorの出口がポート8333や6667をブロックしているためだと思ったが、ほとんどの場合そうではなかった！

Tor経由の他のP2Pアプリケーションは、接続できないIPアドレスを「無視」でき、「警告」なしに動作を続行できる。しかし、Bitcoinはブロックの漏れがないか確認するために、すべてのノードに接続を試みなければ*ならない*！ したがって、Bitcoinノードが1つだけ稼働しているIP範囲がTor出口ノードをブロックしている場合、これは常にそうなるのだろうか？

これは多くの理由で問題がある。😕
