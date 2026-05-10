---
title: "サトシからハル・フィニーへ：自分のホストでは incoming 接続を受けられない旨を伝える（2009-01-10）"
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
    note: "CoinDesk、2020年11月26日公開。情報源間に日付の不一致があり、このメールは 2009年1月10日または 1月12日に送信された可能性がある"
  - name: "Bitcoin News - Researcher Publishes Never-Before-Seen Emails"
    url: "https://news.bitcoin.com/researcher-publishes-never-before-seen-emails-between-satoshi-nakamoto-and-hal-finney/"
relatedEntries:
  - analysis/2009-01-10-satoshi-launch-environment
  - analysis/2008-08-20-satoshi-self-statements
translationStatus: complete
---

<!-- speaker: narrator -->
ビットコインネットワークの最初期に送られたこのメールで、サトシは技術的な制約を明かした。

<!-- speaker: Satoshi Nakamoto -->
> 残念ながら、今いる場所からは外部からの接続を受け付けることができず、そのせいで作業がより困難になっている。

<!-- speaker: narrator -->
この告白は、サトシがファイアウォールまたは NAT の背後で運用しており、ポート 8333 への外部からの TCP 接続がブロックされていたことを示している。そのため、サトシ自身のノードは他のピアへの発信接続に依存せざるを得なかった。ノードがわずか数台しかなかったネットワーク黎明期において、デバッグやテストをより困難にしていたはずである。「今いる場所」（"from where I am"）という表現は、リリース週におけるサトシの公開活動の濃密さと併せて、[サトシのリリース期環境分析](/BitcoinArchive/ja/entries/analysis/2009-01-10-satoshi-launch-environment/)で詳しく検討されている。

メールヘッダーには UTC+8 のタイムゾーンが含まれており、サトシの所在地に関する憶測を呼んだ。しかし、Chain Bulletin のジャーナリスト、ドンチョ・カライバノフは、UTC+8 のタイムスタンプがサトシのローカルマシンではなく、AnonymousSpeech.com のメールリレーサーバー（1996年から東京に設置され、Asia/Hong_Kong タイムゾーンを使用）に由来するものであることを実証した。

このメールは、ハル・フィニーの個人コンピューターのファイルから復元された非公開メールの一部である。フィニーは「Bitcoin and me」の投稿で、より広範なやり取りについて次のように述べている。「その後数日間、サトシとメールのやり取りを続けた。主に私がバグを報告し、彼がそれを修正するという内容だった。」これらの非公開メールのうち公開されたのは 3 通のみであり、残りはフラン・フィニーが 2014年3月にジャーナリストのナサニエル・ポッパーに提供したファイルの中に存在すると推定される。
