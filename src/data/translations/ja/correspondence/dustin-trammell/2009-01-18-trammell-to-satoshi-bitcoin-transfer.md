---
title: "ビットコイン送金 - 受信トランザクションに関する混乱"
date: 2009-01-18T09:23:02Z
source: correspondence
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルが自分の2つのビットコインインスタンス間で送った100BTCの送金について混乱を報告した。トランザクションの詳細に「Satoshi」というラベルが表示されたため、サトシがコインを送ったのか、それともブロック生成に由来するラベルなのか疑問に思った。"
isSatoshi: false
threadId: "satoshi-dustin-trammell"
threadPosition: 15
tags:
  - "correspondence"
  - "early-adopter"
  - "transaction"
  - "address-book"
  - "usability"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

トランメルは不可解なトランザクションについて新しいメールスレッドを開始した。職場のビットコインクライアントから自宅のクライアントに、IPアドレスではなくビットコインアドレスを使って100BTCを自分自身に送金したが、トランザクションの詳細に予期しないラベルが表示された：

> After that first transfer of 25.00, you didn't send me another 100.00 did you? I sent myself 100.00 from my BitCoin application at work to my one at home using the BitCoin address rather than by IP. My application at home has a 100.00 transfer received, however it's transaction details say "Received with: Satoshi 12higDjoCCNXSA95xZMWUdPvXNmkAduhWv". That is not my BitCoin address from work, so I assume this means that I received the payment encoded with a block that was computed by your client?

トランメルは表示されたビットコインアドレスに覚えがなく、アプリケーションに名前を入力した記憶もないのにソフトウェアがどうしてサトシの名前を知っているのか不思議に思った。この混乱は、ビットコインのアドレス帳とトランザクション表示における初期のユーザビリティの問題を浮き彫りにし、サトシが返信で対処することになる。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
