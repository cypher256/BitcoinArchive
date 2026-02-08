---
title: "Re: bitcoindがRPCに応答しない"
date: 2010-07-24T01:15:58.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=548.msg5419#msg5419"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoindがRPCに応答しない」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/262/"
threadId: "bt-bitcoind-not-responding-to-rpc"
threadTitle: "bitcoind not responding to RPC"
threadPosition: 2
translationStatus: complete
---

HTTP経由のJSON-RPCで、応答がエラーの場合にステータス500を使うべきかどうか、確認できる方はいますか？どこでそれを知ったか思い出せず、間違っているかもしれません。HTTPリクエスト自体のメカニズムに問題がない限り、200の方が理にかなっているように思えます。（もしかしたら、そういう意味だったのに忘れて500をすべてのエラーレスポンスに適用してしまったのかもしれません）
