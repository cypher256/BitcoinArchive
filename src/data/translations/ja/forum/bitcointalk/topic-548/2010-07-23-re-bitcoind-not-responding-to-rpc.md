---
title: "Re: bitcoind が RPC に応答しない"
date: 2010-07-23T17:23:47.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=548.msg5339#msg5339"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoind が RPC に応答しない」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/257/"
translationStatus: complete
---

正しく覚えていれば、500 は JSON-RPC のエラーレスポンスに規定されたステータスコードだ。応答のボディにはエラーの説明を含む JSON レスポンスがあり、例えば{"result":"","error":"bitcoin address not found","id":"1"}のようなものだ。
