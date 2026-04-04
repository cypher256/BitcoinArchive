---
title: "非公開メール —— 接続の問題"
date: 2009-01-10T00:00:00Z
type: "correspondence"
source: "coindesk"
sourceUrl: "https://www.coindesk.com/markets/2020/11/26/previously-unpublished-emails-of-satoshi-nakamoto-present-a-new-puzzle"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "サトシがフィニーに対し、自分のいる場所からは外部からの接続を受け付けられないことを明かした。ビットコインネットワーク最初期における運用上の制約が示されている。"
isSatoshi: true
tags:
  - "correspondence"
  - "network"
  - "connections"
  - "hal-finney"
  - "early-network"
  - "timezone-mystery"
secondarySources:
  - name: "Chain Bulletin - Satoshi's timezone analysis"
    url: "https://chainbulletin.com/no-coindesk-satoshis-local-time-zone-wasnt-utc8"
  - name: "Bitcoin News - Researcher Publishes Never-Before-Seen Emails"
    url: "https://news.bitcoin.com/researcher-publishes-never-before-seen-emails-between-satoshi-nakamoto-and-hal-finney/"
translationStatus: complete
---

<!-- speaker: narrator -->
ビットコインネットワークの最初期に送られたこのメールで、サトシは技術的な制約を明かした。

<!-- speaker: Satoshi Nakamoto -->
> 残念ながら、今いる場所からは外部からの接続を受け付けることができず、そのせいで作業がより困難になっている。

<!-- speaker: narrator -->
この告白は、サトシがファイアウォールまたはNATの背後で運用しており、ポート8333への外部からのTCP接続がブロックされていたことを示している。そのため、サトシ自身のノードは他のピアへの発信接続に依存せざるを得なかった。ノードがわずか数台しかなかったネットワーク黎明期において、デバッグやテストをより困難にしていたはずである。

メールヘッダーにはUTC+8のタイムゾーンが含まれており、サトシの所在地に関する憶測を呼んだ。しかし、Chain Bulletinのジャーナリスト、ドンチョ・カライバノフは、UTC+8のタイムスタンプがサトシのローカルマシンではなく、AnonymousSpeech.comのメールリレーサーバー（1996年から東京に設置され、Asia/Hong_Kongタイムゾーンを使用）に由来するものであることを実証した。

このメールは、ハル・フィニーの個人コンピュータのファイルから復元された非公開書簡の一部である。フィニーは「Bitcoin and me」の投稿で、より広範なやり取りについて次のように述べている。「その後数日間、サトシとメールのやり取りを続けた。主に私がバグを報告し、彼がそれを修正するという内容だった。」これらの非公開メールのうち公開されたのは3通のみであり、残りはフラン・フィニーが2014年3月にジャーナリストのナサニエル・ポッパーに提供したファイルの中に存在すると推定される。

*[出典: CoinDesk、2020年11月26日公開。情報源間に日付の不一致があり、このメールは2009年1月10日または1月12日に送信された可能性がある。]*
