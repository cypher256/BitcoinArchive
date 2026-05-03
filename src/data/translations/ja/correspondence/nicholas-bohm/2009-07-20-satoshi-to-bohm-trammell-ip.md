---
title: "Re: 接続なし —— 単一ピアに接続中"
date: 2009-07-20T00:00:00Z
type: "correspondence"
source: "gwern"
sourceUrl: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Nicholas Bohm"
    slug: "nicholas-bohm"
description: "サトシがIP 70.113.114.209に接続中と報告し、ボームが接続できなければ発信接続に問題ありと指摘。同IPは後にテキサス州オースティンのダスティン・トランメルのものと特定された。"
isSatoshi: true
tags:
  - "correspondence"
  - "network"
  - "connectivity"
  - "early-network"
  - "dustin-trammell"
secondarySources:
  - name: "COPA v Wright Judgment [2024] EWHC 1198 (Ch)"
    url: "https://gwern.net/doc/bitcoin/2024-mellor.pdf"
    note: "COPA対クレイグ・ライト裁判の証拠。ニコラス・ボームの証人陳述書{C/10/1}の一部として提出。IPアドレスの分析はDecashed（2025年3月）による"
  - name: "Decashed - Node IP Disclosed in COPA Case Likely Belonged to Dustin Trammell"
    url: "https://decashed.eth.loan/2025/03/node-ip-disclosed-in-copa-wright-case-likely-belonged-to-dustin-trammel/"
translationStatus: complete
---

<!-- speaker: narrator -->
翌日のフォローアップで、[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)はデバッグ情報を提供した。

<!-- speaker: Satoshi Nakamoto -->
> 昨日から70.113.114.209に接続している。

<!-- speaker: narrator -->
彼は、[ボーム](/BitcoinArchive/ja/participants/nicholas-bohm/)がこのIPに接続できていないのであれば、問題はボーム側にあり、発信接続もできない状態であると指摘した。

IPアドレス70.113.114.209は、後に研究者によって（Decashedの分析で文書化）、テキサス州ラウンドロック/オースティン地域に拠点を置いていた[ダスティン・トランメル](/BitcoinArchive/ja/participants/dustin-trammell/)のものである可能性が高いと特定された。これは、トランメルがこの時期に最も安定して稼働していた初期のビットコインノード運用者の一人であったという知見と一致している。

このやり取りは、2009年7月のビットコインネットワークの運用状況を示す貴重なスナップショットを提供している。サトシ自身のノードは、たった一つの他のピアにのみ接続していた——ネットワーク全体で残り数台のアクティブなノードの一つであった。
