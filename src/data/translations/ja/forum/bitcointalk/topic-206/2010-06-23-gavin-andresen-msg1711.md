---
title: "Bitcoin Faucetの変更"
date: 2010-06-23T14:23:46.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=206.msg1711#msg1711"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "ギャビン・アンドレセンがスレッドを開始: BitcoinTalkトピック206。"
isSatoshi: false
tags: []
translationStatus: complete
---

Bitcoin Faucet（https://freebitcoins.appspot.com/）から5 Bitcoinを無料で受け取った人々のIPアドレスを観察していた。

すると……いくつか興味深いパターンが見えてきた。例えばこのようなコイン取得リクエスト：

Code:79.117.152.158 - - [21/Jun/2010:12:17:02 -0700] "POST / HTTP/1.1" 200 1234 
79.117.159.197 - - [21/Jun/2010:12:16:24 -0700] "POST / HTTP/1.1" 200 1234 
79.117.135.236 - - [21/Jun/2010:12:10:23 -0700] "POST / HTTP/1.1" 200 1234
79.117.163.238 - - [21/Jun/2010:12:08:50 -0700] "POST / HTTP/1.1" 200 1234
79.117.155.23 - - [21/Jun/2010:12:08:07 -0700] "POST / HTTP/1.1" 200 1234 

79.117の範囲のIPアドレスを使っている新しいBitcoinユーザーが実際にたくさんいるなら申し訳ないが……おそらく誰かがそこから自分の分以上の無料Bitcoinを得ていると推測している。

192.38.95.*のアドレスブロックからの怪しいリクエストもいくつかある。

そこでFaucetにいくつかの変更を加えた。不正行為をしようとしない限り気づかないだろうが、不正行為をしようとすると、コインを得るためにCAPTCHAを解く必要がある。

それでも不正行為が収まらない場合は、不正行為の疑いがある場合にCAPTCHAを要求し、ビットニッケル（0.05 Bitcoin）しか配布しないようにコードを修正する……
