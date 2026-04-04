---
title: "Re: Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-17T19:58:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1613#msg1613"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック191におけるギャビン・アンドレセンのコンテキスト投稿。msg1614の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: satoshi on June 17, 2010, 06:46:08 PM](#msg1611)
> スクリプトは実際には述語だ。真または偽に評価される単なる方程式だ。述語（predicate）は長くて馴染みのない言葉なので、スクリプトと呼んだ。
>
> Bitcoinの性質上、バージョン0.1がリリースされた時点で、コアの設計はその生涯にわたって不変となった。そのため、考えられるすべてのトランザクションタイプをサポートするように設計したいと思った。問題は、各機能には使用されるかどうかに関わらず特別なサポートコードとデータフィールドが必要で、一度に一つの特殊ケースしかカバーできないことだった。特殊ケースの爆発的増加になっていただろう。解決策はスクリプトで、問題を一般化して、取引当事者がトランザクションをノードネットワークが評価する述語として記述できるようにした。
>
> ノードは、送信者の条件が満たされているかどうかを評価する範囲でのみトランザクションを理解する必要がある。
