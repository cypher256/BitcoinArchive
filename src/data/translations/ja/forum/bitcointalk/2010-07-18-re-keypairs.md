---
title: "Re: 鍵ペアの生成と安全性"
date: 2010-07-18T16:44:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=300.msg2555#msg2555"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシがBitcoinの鍵ペア生成のセキュリティと、アドレス衝突に対する天文学的に低い確率について説明しています。"
isSatoshi: true
tags:
  - "security"
  - "keys"
  - "ecdsa"
  - "cryptography"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/149/"
translationStatus: complete
---

ビットコインアドレスごとに別々の公開鍵/秘密鍵ペアがあります。すべてを解除する単一の秘密鍵を持っているわけではありません。ビットコインアドレスは公開鍵の160ビットハッシュです。衝突の確率は天文学的に小さいです。

鍵空間は非常に大きく、私たちの理解を超えています。地球上のすべての人が宇宙の年齢の間、毎秒新しい鍵を生成したとしても、2人が同じ鍵を生成する確率は実質的にゼロのままです。
