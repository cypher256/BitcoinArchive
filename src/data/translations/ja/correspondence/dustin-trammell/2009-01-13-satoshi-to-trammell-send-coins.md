---
title: "Re: ビットコイン v0.1 リリース - コイン送付の申し出"
date: 2009-01-13T01:55:00Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013年11月にダスティン・トランメルにより公開。完全なメールは Bitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。取引の詳細はトランメルのブログに記録されている"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシが v0.1.3 でバグが修正されたことをトランメルに伝え、IP 送金機能を使ってコインを送ることを申し出た。最も初期に知られるビットコインの直接送金の一つ。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-adopter"
  - "first-transaction"
  - "send-to-ip"
  - "v0.1.3"
secondarySources:
  - name: "Dustin Trammell's Blog - ブロック 286"
    url: "https://blog.dustintrammell.com/block-286-and-satoshis-coins/"
relatedEntries:
  - aftermath/2009-01-11-dustin-trammell-biography
translationStatus: complete
---

<!-- speaker: narrator -->
このメールで、サトシはバージョン 0.1.3 で修正された通信バグについて議論した。このバグはノードがブロックを適切にブロードキャストすることを妨げていた。そしてトランメルにコインを送ることを申し出た：

<!-- speaker: Satoshi Nakamoto -->
> これは0.1.3ですべて修正されている。IPアドレスを教えてくれれば、コインを送る。

<!-- speaker: narrator -->
このメッセージは、個人間での最も初期のビットコイン直接送金の一つを記録しているという点で重要である。サトシは「IP 送金」機能を使用した。この機能により、相手の IP アドレスに接続してノードに直接コインを送ることができた。受信側のクライアントは取引のためにビットコインアドレスを提供する仕組みであった。

<!-- speaker: narrator -->
トランメルはその日の後ほど（2009年1月13日、UTC 18:40）に IP アドレスを返信した：

<!-- speaker: Dustin Trammell -->
> 現在は24.28.79.95だが、動的なので変わるかもしれない。

<!-- speaker: narrator -->
翌日の 2009年1月14日 UTC 19:46 に、サトシは 1回の取引でトランメルに 25.0 BTC を送金した（txid: d71fd2f64c0b34465b7518d240c00e83f6a5b10138a7079d1252858fe7e6b577）。この取引はアドレス 1Jhk2DHosaaZx1E4CbnTGcKM7FC88YHYv9 からトランメルのアドレス 1DCbY2GYVaAMCBpuBNN5GVg3a47pNK1wdi へ送られた。

その後のやり取りでは、IP アドレスによるビットコイン送金の安全性の問題についても触れられた。サトシはこれらの議論も一因として、最終的に IP 送金機能をソフトウェアから完全に削除した。
