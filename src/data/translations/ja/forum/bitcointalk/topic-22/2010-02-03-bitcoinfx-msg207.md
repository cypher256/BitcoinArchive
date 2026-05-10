---
title: "Re: TOR と I2P"
date: 2010-02-03T15:31:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg207#msg207"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "BitcoinTalk トピック 22 における BitcoinFX の文脈投稿。msg223 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

了解、ありがとう riX。

つまり、Bitcoin が少なくとも 1 つのノードに接続されれば、-connect オプションで 6667 の警告を排除できるわけだ。

Bitcoin は何らかの「ピア交換」や DHT を使っているのだろうか？ これでも Tor の「出口」警告が止まらず、そのため Tor が接続のために新しい「出口」ノードを試行し続ける必要がある問題は解決しないようだ。（これは Tor にとって問題であり、Bitcoin ではないが 😉）「しかし、Bitcoin はブロックの漏れがないか確認するために、すべてのノードに接続を試みなければならないのでは？」というのは本当はそういう意味だった。表現が不正確だった。

I2P の方が Bitcoin ユーザーの匿名性を高める実装としてはるかに簡単な解決策に思える。
http://forum.i2p2.de/viewtopic.php?t=3946&sid=213e3cd998db98c4511675ecbba17af4

JonDonym もテストしている。http://anonymous-proxy-servers.net/ （有料サービスのみ socks 対応！）ただし、paysafecards を受け付けており、現在 Bitcoin と交換で購入できる。😄
