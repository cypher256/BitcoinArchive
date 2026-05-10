---
title: "Re: bitcoind が RPC に応答しない"
date: 2010-07-24T01:15:58.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=548.msg5419#msg5419"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoind が RPC に応答しない」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/262/"
translationStatus: complete
---

HTTP 経由の JSON-RPC で、応答がエラーの場合にステータス 500 を使うべきかどうか、確認できる方はいるだろうか？どこでそれを知ったか思い出せず、間違っているかもしれない。HTTP リクエスト自体のメカニズムに問題がない限り、200 の方が理にかなっているように思える。（もしかしたら、そういう意味だったのに忘れて 500 をすべてのエラーレスポンスに適用してしまったのかもしれない）
