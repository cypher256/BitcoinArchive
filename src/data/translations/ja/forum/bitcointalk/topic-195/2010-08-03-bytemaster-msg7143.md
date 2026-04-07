---
title: "Re: Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-08-03T03:12:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg7143#msg7143"
author: "bytemaster"
participants:
  - name: "bytemaster"
    slug: "bytemaster"
description: "BitcoinTalkトピック195におけるbytemasterの文脈投稿。msg1617の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

色々調べた結果、scriptは拡張性を提供することを意図しているのだと理解できた。

bitcoinが、生成によって分配される23,000,000個の「株式」に分割された一種の資産を表すものだとする。

ユーザーが別のカスタム資産を作れるようにしたい。その資産はグローバルにユニークなhashを持ち、アドレス間で送受信できる。たとえば企業が「株式」を発行し、それをbitcoinで交換・検証できるようにする。ゲームエンジンが独自の通貨を発行して追跡することもできる。

scriptで何か近いことでも実現できるのか、それとも互換性を壊す変更が必要なのか？ そもそも現時点でこういったオプションをサポートするためにネットワークを「アップグレード」することは可能なのだろうか？
