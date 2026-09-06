---
title: "Re: ルーターの問題 —— ポート 8333 転送のアドバイス"
date: 2009-06-05T00:00:00Z
type: "article"
source: "gwern"
sourceUrl: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
sourceNote: "COPA 対クレイグ・ライト裁判の証拠。ニコラス・ボームの証人陳述書{C/10/1}の一部として提出"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Nicholas Bohm"
    slug: "nicholas-bohm"
description: "サトシがボームに新しいルーターでポート 8333 を転送するよう助言した。オンライン上のノードのいずれも外部接続を受け付けられない場合、ネットワークが機能しなくなることを説明した。"
isSatoshi: true
tags:
  - "correspondence"
  - "network"
  - "port-forwarding"
  - "early-network"
secondarySources:
  - name: "Decashed - Node IP Analysis"
    url: "https://decashed.eth.loan/2025/03/node-ip-disclosed-in-copa-wright-case-likely-belonged-to-dustin-trammel/"
relatedEntries:
  - aftermath/2009-01-12-satoshi-to-finney-connections
translationStatus: complete
---

![ホームルーターでポート 8333 を転送する様子を描いたイラスト。塞がれたゲートウェイの奥へ転送の矢印が伸び、右側にはほとんどのノードで着信接続が閉じたままの疎なピアネットワーク図が並ぶ。下部には日付の異なる 2 つの封筒アイコンと、証拠書類を表すフォルダーアイコンが添えられている。](/BitcoinArchive/images/analysis/2009-06-05-satoshi-to-bohm-port-forwarding-hero.png)

<!-- speaker: narrator -->
[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)は翌日、[ボーム](/BitcoinArchive/ja/participants/nicholas-bohm/)の接続問題に返信し、新しいルーターでポート 8333 を転送するよう助言した。ポート転送がなければ、ボームのノードは他のピアからの着信接続を受け付けられないと説明した。

サトシは、現在オンラインのノードの中で着信接続を受け付けられるものが一つもなければ、ノードはネットワークへの接続に完全に失敗すると指摘した。これは、2009年半ばの時点でアクティブなノードがほんの一握りしかなく、着信接続を受け付けるノードもごく少数しか存在しなかった当時のビットコインネットワークがいかに脆弱であったかを浮き彫りにしている。サトシ自身のノードも、[5 か月前に同一の問題に直面していた](/BitcoinArchive/ja/entries/aftermath/2009-01-12-satoshi-to-finney-connections/)。ハル・フィニーに対し、自分のいる場所からは外部からの接続を受け付けられないと伝えたときである。

*[編者注：記録するのは、メールの具体的な文面ではなく、助言内容 (ポート 8333 転送) と意義である。完全なメール本文は公開されていない。このサトシの返信はボームの証人陳述書 (C/10/1) の一部として COPA 対クレイグ・ライト裁判の証拠材料として提出されたが、メール本文は公開されているメラー判決 PDF (gwern.net/doc/bitcoin/2024-mellor.pdf) にも、Decashed のノード IP 分析等の COPA 証拠の第三者分析にも、本文として再録されていない。ボームの遺族または COPA が後に逐語的なメール本文を公開した場合は、一次資料方針に従って本文を逐語的に更新する。]*
