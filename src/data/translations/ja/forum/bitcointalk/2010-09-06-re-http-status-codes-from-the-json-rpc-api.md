---
title: "Re: JSON-RPC APIからのHTTPステータスコード"
date: 2010-09-06T21:21:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=969.msg12130#msg12130"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPC APIからのHTTPステータスコード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/435/"
translationStatus: complete
---

これはSVN rev 147に入っています。

これはより標準的であり、json-rpc 1.0ではエラーオブジェクトの形式を指定していませんでしたが、文字列やその他の値ではなく*オブジェクト*であることは指定していたため、正しくするためにこの変更が必要でした。code/messageメンバーは後のjson-rpc仕様で標準になっています。

エラーを検査して文字列を期待するコードがある場合は、変更が必要です。エラーがある場合、エラーメンバーは文字列ではなくオブジェクトになりました。

SVN rev 147にはさらに：
- コマンドラインjson-rpcがエラーコードを終了コードとして返します。unixでは終了コードは0-255のみなので、abs(code)%256です。
- 別のスレッドで議論された「backupwallet <destination>」コマンド。ウォレットをロックしてコピーするため、正しいコピーを確実に取得できます。
