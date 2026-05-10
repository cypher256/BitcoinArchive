---
title: "サトシからマイク・ハーンへ：ECDSA 曲線の選択（2009-04-18）"
date: 2009-04-18T18:16:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "サトシがコインを返送し、EC-DSA は RSA のようにメッセージを暗号化できないため、トランザクションコメントが不可能であることを説明する。"
isSatoshi: true
tags:
  - "correspondence"
  - "transaction"
  - "ecdsa"
  - "encryption"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
relatedEntries:
  - aftermath/2023-10-21-lopp-hal-finney-not-satoshi
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
32.51 と 50.00 を返送した。

間接送金にコメントを含める方法を何とか見つけたかったのだが、どうしても方法がなかった。ビットコインは EC-DSA を使用している。これは署名が RSA より桁違いに小さいため、現在の技術でブロックチェーンを実用的なサイズにするために不可欠だった。しかし EC-DSA は RSA のようにメッセージを暗号化することはできず、署名の検証にしか使用できない。
