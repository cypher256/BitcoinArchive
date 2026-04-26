---
title: "ビットコイン送金 - 受信トランザクションに関する混乱"
date: 2009-01-18T09:23:02Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルが自分の2つのビットコインインスタンス間で送った100BTCの送金について混乱を報告した。トランザクションの詳細に「Satoshi」というラベルが表示されたため、サトシがコインを送ったのか、それともブロック生成に由来するラベルなのか疑問に思った。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-adopter"
  - "transaction"
  - "address-book"
  - "usability"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
    note: "2013 年 11 月にダスティン・トランメルにより公開"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

<!-- speaker: narrator -->
トランメルは不可解なトランザクションについて新しいメールスレッドを開始した。職場のビットコインクライアントから自宅のクライアントに、IPアドレスではなくビットコインアドレスを使って100BTCを自分自身に送金したが、トランザクションの詳細に予期しないラベルが表示された：

<!-- speaker: Dustin Trammell -->
> 最初の25.00の送金の後、もう100.00を送ってくれたりした？俺は職場のビットコインアプリケーションから自宅のものに、IPではなくビットコインアドレスを使って100.00を自分宛に送金した。自宅のアプリケーションには100.00の受信が表示されているが、トランザクション詳細には「Received with: Satoshi 12higDjoCCNXSA95xZMWUdPvXNmkAduhWv」と書いてある。これは職場のビットコインアドレスではないので、あなたのクライアントが計算したブロックにエンコードされた支払いを受け取ったということだと思うんだが？

<!-- speaker: narrator -->
トランメルは表示されたビットコインアドレスに覚えがなく、アプリケーションに名前を入力した記憶もないのにソフトウェアがどうしてサトシの名前を知っているのか不思議に思った。この混乱は、ビットコインのアドレス帳とトランザクション表示における初期のユーザービリティの問題を浮き彫りにし、サトシが返信で対処することになる。
