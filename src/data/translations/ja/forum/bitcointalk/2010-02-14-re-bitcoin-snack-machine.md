---
title: "Re: Bitcoinスナック自販機"
date: 2010-02-14T17:47:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=423.msg3819#msg3819"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshiは高速なBitcoin支払いのビジョンを説明し、少額の取引ではゼロ確認トランザクションを受け入れることが実用的かつ十分に安全であると述べている。"
isSatoshi: true
tags:
  - "zero-confirmation"
  - "payments"
  - "vending"
  - "practicality"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/33/"
translationStatus: complete
---

決済処理会社がサービスとして、10秒以内程度の十分なチェックを伴うトランザクションの迅速な配信を提供することが可能になると思います。

ネットワークノードは、生成しようとしているブロックに組み込むために、最初に受信したバージョンのトランザクションのみを受け入れます。トランザクションをブロードキャストした時、他の誰かが同時に二重支払いをブロードキャストした場合、最も多くのノードに最初に伝播する競争になります。一方がわずかに先行していれば、幾何級数的にネットワーク内に広がり、ほとんどのノードに到達します。

大まかな概算：z=-1、ハッシュパワー10%、実際のトランザクションと二重支払い試行の間が10秒の場合、二重支払いが成功する確率は約0.0000001で、無視できるレベルです。
