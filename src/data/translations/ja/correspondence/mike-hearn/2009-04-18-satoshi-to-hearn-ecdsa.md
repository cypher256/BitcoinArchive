---
title: "BitCoinに関する質問"
date: 2009-04-18T18:16:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshiがコインを返送し、EC-DSAはRSAのようにメッセージを暗号化できないため、トランザクションコメントが不可能であることを説明する。"
isSatoshi: true
threadId: "satoshi-mike-hearn-questions"
threadTitle: "Questions about BitCoin"
threadPosition: 10
tags:
  - "correspondence"
  - "transaction"
  - "ecdsa"
  - "encryption"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

32.51と50.00を返送しました。

間接送金にコメントを含める方法を何とか見つけたかったのですが、どうしても方法がありませんでした。BitcoinはEC-DSAを使用しています。これは署名がRSAより桁違いに小さいため、現在の技術でブロックチェーンを実用的なサイズにするために不可欠でした。しかしEC-DSAはRSAのようにメッセージを暗号化することはできず、署名の検証にしか使用できません。
