---
title: "ビットコイン送金 - 受信トランザクションに関する混乱"
date: 2009-01-18T09:23:02Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルにより公開"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルが自身の 2 つのビットコインインスタンス間で送った 100BTC について混乱を報告。トランザクションに「Satoshi」ラベルが現れ、サトシの送金かブロック生成由来かを疑問視した。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-adopter"
  - "transaction"
  - "address-book"
  - "usability"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
relatedEntries:
  - correspondence/dustin-trammell/2009-01-18-trammell-to-satoshi-bitcoin-transfer
  - aftermath/2009-01-11-dustin-trammell-biography
quotes:
  - id: "q1"
    person: "Dustin Trammell"
    personSlug: "dustin-trammell"
    date: "2009-01-18T09:23:02Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-18-trammell-to-satoshi-bitcoin-transfer"
translationStatus: complete
---

<!-- speaker: narrator -->
トランメルは不可解なトランザクションについて新しいメールスレッドを開始した。職場のビットコインクライアントから自宅のクライアントに、IP アドレスではなくビットコインアドレスを使って 100BTC を自分自身に送金したが、トランザクションの詳細に予期しないラベルが表示された：

<!-- quote: q1 -->
<!-- speaker: Dustin Trammell -->
> 最初の 25.00 の送金の後、もう 100.00 を送ってくれたりした？俺は職場のビットコインアプリケーションから自宅のものに、IP ではなくビットコインアドレスを使って 100.00 を自分宛に送金した。自宅のアプリケーションには 100.00 の受信が表示されているが、トランザクション詳細には「Received with: Satoshi 12higDjoCCNXSA95xZMWUdPvXNmkAduhWv」と書いてある。これは職場のビットコインアドレスではないので、あなたのクライアントが計算したブロックにエンコードされた支払いを受け取ったということだと思うんだが？

<!-- speaker: narrator -->
トランメルは表示されたビットコインアドレスに覚えがなく、アプリケーションに名前を入力した記憶もないのにソフトウェアがどうしてサトシの名前を知っているのか不思議に思った。この混乱は、ビットコインのアドレス帳とトランザクション表示における初期のユーザービリティの問題を浮き彫りにし、サトシが返信で対処することになる。
