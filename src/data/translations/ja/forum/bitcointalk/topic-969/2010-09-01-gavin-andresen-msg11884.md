---
title: "JSON-RPC APIからのHTTPステータスコード"
date: 2010-09-01T20:28:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=969.msg11884#msg11884"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "ギャビン・アンドレセンがスレッドを開始: BitcoinTalkトピック969。"
isSatoshi: false
tags: []
translationStatus: complete
---

BitcoinがJSON RPC over HTTPの仕様に準拠し、JSON-RPC 1.1/2.0の仕様で標準化されたエラーコードを使用するようにするパッチをSatoshiに提出した。

JSON-RPCコールで直接Bitcoinと通信している場合、新しいHTTPステータスコードとJSONレスポンスの'error'メンバーの新しいフォーマットを認識するようにコードを変更する必要があるかもしれない。例えば：

変更前：{"id":"123", "method": "nosuchmethod", "params": &#91;] } を送信した場合のレスポンス：
Code:HTTP/1.1 500 Internal Server Error
...

{"result":null,"error":"Method not found.","id":"123"}変更後：Code:HTTP/1.1 404 
...

{"result":null,"error":{"code":-32601,"message":"Method not found"},"id":"123"}

コードを簡素化するために、壊れていた'Batch'サポートも削除した。JSON-RPC 2.0のバッチサポートを正しく動作させていたが、JSON-RPC 2.0は今のところBitcoinがサポートするには先進的すぎるため（JSON-RPCのグルーライブラリでまだサポートしているものがなく、仕様もまだ少し変わっている）、それらの変更を取り消した。
