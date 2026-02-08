---
title: "返信: ビットコインのURIスキーム"
date: 2010-06-16T00:15:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1596#msg1596"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビットコインのURIスキーム」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/123/"
threadId: "bt-uri-scheme-for-bitcoin"
threadTitle: "URI-scheme for bitcoin"
threadPosition: 3
translationStatus: complete
---

[http://127.0.0.1:8330/?to=domain.com&amount=200.00&comment=order_12345](http://127.0.0.1:8330/?to=domain.com&amount=200.00&comment=order_12345)
または
[http://127.0.0.1:8330/?to=](http://127.0.0.1:8330/?to=)<bitcoinaddress><separatorchar>1.2.3.4&amount=200.00

しかし、リンクがすでに入力を代行してくれる以上、ビットコインアドレスの代わりにドメインアドレスを使うことにそれほどの利点があるとは思えません。ビットコインアドレスであれば、ユーザーは身元不明の支払いを送ることができません。正しいビットコインアドレスが与えられるまで支払いを送ることができないのです。

ドメインで送信する良い点は、送信先を視覚的に確認できることです。

より重要な問題は、ブラウザが127.0.0.1に接続することを許可されていない場合はどうなるかということです:
[http://bitcointalk.org/index.php?topic=63.msg1589#msg1589](http://bitcointalk.org/index.php?topic=63.msg1589#msg1589)

そして、もしそうだとすると、127.0.0.1が含まれていたFreenetリンクの例はどうなるのでしょうか？
