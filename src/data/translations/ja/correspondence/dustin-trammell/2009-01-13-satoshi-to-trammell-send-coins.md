---
title: "返信: ビットコイン v0.1 リリース - コイン送付の申し出"
date: 2009-01-13T01:55:00Z
source: correspondence
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshiがv0.1.3でバグが修正されたことをTrammellに伝え、IP送金機能を使ってコインを送ることを申し出た。最も初期に知られるビットコインの直接送金の一つ。"
isSatoshi: true
threadId: "satoshi-dustin-trammell"
threadTitle: "Satoshi ↔ Dustin Trammell Correspondence"
threadPosition: 3
tags:
  - "correspondence"
  - "early-adopter"
  - "first-transaction"
  - "send-to-ip"
  - "v0.1.3"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog - Block 286"
    url: "https://blog.dustintrammell.com/block-286-and-satoshis-coins/"
translationStatus: complete
---

このメールで、Satoshiはバージョン0.1.3で修正された通信バグについて議論した。このバグはノードがブロックを適切にブロードキャストすることを妨げていた。そしてTrammellにコインを送ることを申し出た：

> これは0.1.3ですべて修正されています。IPアドレスを教えてくれれば、コインを送ります。

このメッセージは、個人間での最も初期のビットコイン直接送金の一つを記録しているという点で重要である。Satoshiは「IP送金」機能を使用した。この機能により、相手のIPアドレスに接続してノードに直接コインを送ることができた。受信側のクライアントは取引のためにビットコインアドレスを提供する仕組みであった。

Trammellはその日の後ほど（2009年1月13日、UTC 18:40）にIPアドレスを返信した：

> 現在24.28.79.95にいますが、動的なので変わるかもしれません。

翌日の2009年1月14日UTC 19:46に、Satoshiは1回の取引でTrammellに25.0 BTCを送金した（txid: d71fd2f64c0b34465b7518d240c00e83f6a5b10138a7079d1252858fe7e6b577）。この取引はアドレス1Jhk2DHosaaZx1E4CbnTGcKM7FC88YHYv9からTrammellのアドレス1DCbY2GYVaAMCBpuBNN5GVg3a47pNK1wdiへ送られた。

その後のやり取りでは、IPアドレスによるビットコイン送金の安全性の問題についても触れられた。Satoshiはこれらの議論も一因として、最終的にIP送金機能をソフトウェアから完全に削除した。

*出典：2013年11月にDustin Trammellにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。取引の詳細はTrammellのブログに記録されている。*
