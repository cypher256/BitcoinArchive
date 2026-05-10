---
title: "bitcoind が RPC に応答しない"
date: 2010-07-23T03:29:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=548.msg5248#msg5248"
author: "mtgox"
participants:
  - name: "mtgox"
    slug: "mtgox"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "mtgox がスレッドを開始: bitcoind が RPC に応答しない"
isSatoshi: false
tags: []
translationStatus: complete
---

bitcoind が時折 RPC に応答しなくなります。PHP から呼び出しており、以下のエラーが発生します：

Warning: fopen([http://127.0.0.1:8332](http://127.0.0.1:8332)) [function.fopen]: failed to open stream: HTTP request failed! HTTP/1.1 500 Internal Server Error

ローカルの Windows マシンでは頻繁に発生し、Linux サーバーではそれほど頻繁ではありません。

同じ問題を経験した方はいますか？
