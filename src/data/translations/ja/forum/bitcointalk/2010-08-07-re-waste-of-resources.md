---
title: "Re: トランザクションとスクリプト：DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-17T22:46:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1611#msg1611"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがBitcoinのスクリプトシステムの本質を説明し、真または偽に評価される述語として様々なトランザクションタイプを可能にすることを解説。"
isSatoshi: true
tags:
  - "script"
  - "transactions"
  - "smart-contracts"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/110/"
threadId: "bt-transactions-and-scripts-dup-hash160-equalverify-c"
threadTitle: "Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"
threadPosition: 1
translationStatus: complete
---

スクリプトは実際には述語です。真または偽に評価される単なる方程式です。述語（predicate）は長くて馴染みのない言葉なので、スクリプトと呼びました。

Bitcoinの性質上、バージョン0.1がリリースされた時点で、コアの設計はその生涯にわたって不変となりました。そのため、考えられるすべてのトランザクションタイプをサポートするように設計したいと思いました。問題は、各機能には使用されるかどうかに関わらず特別なサポートコードとデータフィールドが必要で、一度に一つの特殊ケースしかカバーできないことでした。特殊ケースの爆発的増加になっていたでしょう。解決策はスクリプトで、問題を一般化して、取引当事者がトランザクションをノードネットワークが評価する述語として記述できるようにしました。

ノードは、送信者の条件が満たされているかどうかを評価する範囲でのみトランザクションを理解する必要があります。
