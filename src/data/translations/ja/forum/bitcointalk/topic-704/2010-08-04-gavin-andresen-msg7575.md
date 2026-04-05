---
title: "Faucetを使い果たしているスペイン人は誰だ？"
date: 2010-08-04T20:40:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=704.msg7575#msg7575"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック704におけるGavin Andresenの文脈投稿。msg7703に引用。"
isSatoshi: false
tags: []
translationStatus: complete
---

freebitcoins.appspot.comをシャットダウンした。スペインの誰かが、新しいIPアドレスとビットコインアドレスを取得し、CAPTCHAを解いて、それを何度も繰り返しているようだ：

Code:79.154.133.217 - - [04/Aug/2010:12:46:55 -0700]
"POST / HTTP/1.1" 200 1294 "https://freebitcoins.appspot.com/"
"Opera/9.80 (Windows NT 6.0; U; es-LA) Presto/2.6.30 Version/10.60,gzip(gfe)"

79.146.112.13 - - [04/Aug/2010:12:45:20 -0700]
"POST / HTTP/1.1" 200 1294 "https://freebitcoins.appspot.com/"
"Opera/9.80 (Windows NT 6.0; U; es-LA) Presto/2.6.30 Version/10.60,gzip(gfe)"

81.44.159.81 - - [04/Aug/2010:12:42:20 -0700]
"POST / HTTP/1.1" 200 1294 "https://freebitcoins.appspot.com/"
"Opera/9.80 (Windows NT 6.0; U; es-LA) Presto/2.6.30 Version/10.60,gzip(gfe)"これらのIPアドレスはすべてTelefonica de Espanaにマッピングされる。もしあなたなら：返してほしい、お願いだ：15VjRaDX9zpbA8LVnbrCAFzrVzN7ixHNsC

5ビットコインがかなりの価値を持つようになったので、もっと不正対策が必要だと思い始めている。4つの対策を考えた：

1. IPアドレスの最初のバイトに基づくレート制限（この場合79.や81.）。
2. USER-AGENT文字列に基づくレート制限（この場合"Opera/9.8..."）。
3. IPアドレスの逆引きDNSの最後の2ドメインに基づくレート制限（この場合rima-tde.net）。
4. 標準配布額を0.5ビットコインに減額（Faucet開始以来ビットコインの価値は10倍に上昇した）。

レート制限された場合、明日再試行してくださいというメッセージが表示される。

BitcoinFX：Faucetへの寄付に改めて感謝する。新しい不正対策が整うまで一時的にFaucetを500コイン以下にドレインし、対策が整った後にあなたの寄付で補充する。
