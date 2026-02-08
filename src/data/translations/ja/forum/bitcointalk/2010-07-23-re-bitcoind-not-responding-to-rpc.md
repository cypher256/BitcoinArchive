---
title: "Re: bitcoindがRPCに応答しない"
date: 2010-07-23T17:23:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=548.msg5339#msg5339"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoindがRPCに応答しない」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/257/"
threadId: "bt-bitcoind-not-responding-to-rpc"
threadTitle: "bitcoind not responding to RPC"
threadPosition: 1
translationStatus: complete
---

正しく覚えていれば、500はJSON-RPCのエラーレスポンスに規定されたステータスコードです。応答のボディにはエラーの説明を含むJSONレスポンスがあり、例えば{"result":"","error":"bitcoin address not found","id":"1"}のようなものです。
