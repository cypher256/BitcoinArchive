---
title: "サトシからハル・フィニーへ：自分のホストでは外部からの接続を受けられない旨を伝える（2009-01-12）"
date: 2009-01-12T00:00:00Z
type: "article"
source: "coindesk"
sourceUrl: "https://www.coindesk.com/markets/2020/11/26/previously-unpublished-emails-of-satoshi-nakamoto-present-a-new-puzzle"
sourceNote: "CoinDesk が 2020 年 11 月 26 日に公開し、送信日を 2009 年 1 月 12 日としている。同記事が扱うサトシとフィニーの間の他のメールと違い、このメールについてはヘッダーの時刻が公開されておらず、日付だけが分かっている。"
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
relatedEntries:
  - analysis/2009-01-10-satoshi-launch-environment
  - analysis/2008-08-20-satoshi-self-statements
  - aftermath/2013-03-19-bitcoin-and-me-hal-finney
  - aftermath/2009-06-05-satoshi-to-bohm-port-forwarding
  - analysis/2008-08-18-anonymousspeech-bitcoin-org-intermediary
translationStatus: complete
---

![ファイアウォールの内側にあるネットワークノードから複数のピアノードへ向けて外向きの接続だけが伸び、内向きの接続はブロックされている様子を描いたイラスト。メールを象徴する封筒のアイコンも添えられている。](/BitcoinArchive/images/analysis/2009-01-12-satoshi-to-finney-connections-hero.png)

<!-- speaker: narrator -->
ビットコインネットワークの最初期に送られたこのメールで、サトシは技術的な制約を明かした。

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> 残念ながら、今いる場所からは外部からの接続を受け付けることができず、そのせいで作業がより困難になっている。

<!-- speaker: narrator -->
この告白は、サトシがファイアウォールまたは NAT の背後で運用しており、ポート 8333 への外部からの TCP 接続がブロックされていたことを示している。そのため、サトシ自身のノードは他のピアへの発信接続に依存せざるを得なかった。これは、[5 か月後に別のユーザーの診断を手伝うことになる、その同じ着信接続のボトルネック](/BitcoinArchive/ja/entries/aftermath/2009-06-05-satoshi-to-bohm-port-forwarding/)でもあった。ノードがわずか数台しかなかったネットワーク黎明期において、デバッグやテストをより困難にしていたはずである。「今いる場所」という表現は、リリース週におけるサトシの公開活動の濃密さと併せて、[サトシのリリース期環境分析](/BitcoinArchive/ja/entries/analysis/2009-01-10-satoshi-launch-environment/)で詳しく検討されている。

メールヘッダーには UTC+8 のタイムゾーンが含まれており、サトシの所在地に関する憶測を呼んだ。しかし、Chain Bulletin のジャーナリスト、ドンチョ・カライヴァノフは、UTC+8 のタイムスタンプはサトシのローカルマシンではなく、AnonymousSpeech.com のメール中継サーバーに由来すると論じた。ウェブメールの Date ヘッダーが映すのはサーバーの時計であって、送信者の時計ではない（「1996 年から東京拠点」は同サービス自身のサイトの自己紹介で、ヘッダーに残る中継サーバーの IP はマレーシアのホスティング事業者への割当。いずれにせよサーバー側の設定である）。

このメールは、ハル・フィニーの個人コンピューターのファイルから復元された非公開メールの一部である。フィニーは[『Bitcoin and me』の投稿](/BitcoinArchive/ja/entries/aftermath/2013-03-19-bitcoin-and-me-hal-finney/)で、より広範なやり取りについて次のように述べている。「その後数日間、サトシとメールのやり取りを続けた。主に私がバグを報告し、彼がそれを修正するという内容だった。」これらの非公開メールのうち公開されたのは 3 通のみであり、残りはフラン・フィニーが 2014年3月にジャーナリストのナサニエル・ポッパーに提供したファイルの中に存在すると推定される。
