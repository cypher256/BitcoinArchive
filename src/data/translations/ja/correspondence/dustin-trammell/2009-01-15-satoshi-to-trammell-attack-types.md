---
title: "Re: いくつかの考え... — 攻撃の分類とIP送金のセキュリティ"
date: 2009-01-15T13:46:35Z
source: correspondence
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがトランメルの中間者攻撃分析に応答し、攻撃を2つのタイプ（通信経路上の攻撃とインターネット上の誰もが行える攻撃）に分類。IP送金の脆弱性を認め、IPとビットコインアドレスを組み合わせた解決策を提案し、ウォレット暗号化の計画に言及している。"
isSatoshi: true
threadId: "satoshi-dustin-trammell"
threadPosition: 10
tags:
  - "correspondence"
  - "security"
  - "send-to-ip"
  - "man-in-the-middle"
  - "wallet-encryption"
  - "attack-classification"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

トランメルの詳細な中間者攻撃分析に応答して、サトシはビットコインのセキュリティに関する思考に影響を与えることになる攻撃の分類フレームワークを導入した。

> 攻撃を2つのクラスに分類している：
> 1) 実際に通信経路上にいる者のみが実行できる攻撃
> 2) インターネット上のどこからでも誰でも実行できる攻撃

サトシは、タイプ1の攻撃は同じLANまたはISP経路上の人々に影響するのに対し、タイプ2は数十億の潜在的攻撃者にユーザーを晒し、スケールメリットを達成できると説明した。IP送金の脆弱性について認めた。

> IP送金は新しい公開鍵を要求するため、確かにタイプ1の中間者攻撃に対して脆弱である。それが懸念される場合、ビットコインアドレスへの送金にはその脆弱性はないが、若干のプライバシー上のトレードオフがある。

サトシは現実的に、ほとんどの人がSSL非対応のウェブサイトや未署名のメールからビットコインアドレスを取得しており、それらはDNSポイズニングによって既に両方のタイプの攻撃に対して脆弱であると指摘した。

サトシは将来に向けた複合的なアプローチを提案した。

> 一つの解決策は、送金時にIPとビットコインアドレスの両方を使用すること（例えば1.2.3.4-1Kn8iojk...）で、受信者がビットコインアドレスの公開鍵を使って新しい公開鍵に署名し、送金先が意図した相手であることを証明する方法である。

また、ビットコインアドレスへの送金は受信者が発見できるようにトランザクションをブロックチェーンに計算して組み込む仕組みであることを確認し、ウォレット暗号化を将来の機能として言及した。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
