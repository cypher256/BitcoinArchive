---
title: "Re: JSON-RPC メソッドのアイデア：指定された txid より新しいトランザクションをリストする"
date: 2010-12-08T20:41:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28245#msg28245"
author: "mikegogulski"
participants:
  - name: "mikegogulski"
    slug: "mikegogulski"
description: "BitcoinTalk トピック 2151 における mikegogulski の文脈投稿。msg28292 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

davux のリクエストの動機は理解できる。リリースした e コマースプラグインの開発中に、ウォレットに対する「ダンプ」メソッドの使用が長期的に実現可能かどうか疑問に思った。時間が経つにつれ返されるデータは増える一方だからだ。

アカウントやアドレスに JSON-RPC コールバック URL を添付でき、そのアカウントやアドレスの承認やその他のステータス変更のたびに呼び出され、コールバックがクリアされるまで続くのが理想だ。これでウォレットのポーリングの必要が完全になくなる。

それについての「機能リクエスト」投稿をどこかに書いた。
