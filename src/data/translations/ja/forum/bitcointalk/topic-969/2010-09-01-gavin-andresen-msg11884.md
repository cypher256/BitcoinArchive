---
title: "JSON-RPC API からの HTTP ステータスコード"
date: 2010-09-01T20:28:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=969.msg11884#msg11884"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "ギャビン・アンドレセンがスレッドを開始: BitcoinTalk トピック 969。"
isSatoshi: false
tags: []
translationStatus: complete
---

Bitcoin が JSON RPC over HTTP の仕様に準拠し、JSON-RPC 1.1/2.0 の仕様で標準化されたエラーコードを使用するようにするパッチを Satoshi に提出した。

JSON-RPC コールで直接 Bitcoin と通信している場合、新しい HTTP ステータスコードと JSON レスポンスの'error'メンバーの新しいフォーマットを認識するようにコードを変更する必要があるかもしれない。例えば：

変更前：{"id":"123", "method": "nosuchmethod", "params": &#91;] } を送信した場合のレスポンス：

```
HTTP/1.1 500 Internal Server Error
...

{"result":null,"error":"Method not found.","id":"123"}変更後：Code:HTTP/1.1 404 
...

{"result":null,"error":{"code":-32601,"message":"Method not found"},"id":"123"}
```

コードを簡素化するために、壊れていた'Batch'サポートも削除した。JSON-RPC 2.0 のバッチサポートを正しく動作させていたが、JSON-RPC 2.0 は今のところ Bitcoin がサポートするには先進的すぎるため（JSON-RPC のグルーライブラリでまだサポートしているものがなく、仕様もまだ少し変わっている）、それらの変更を取り消した。
