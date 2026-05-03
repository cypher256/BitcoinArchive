---
title: "セルジオ・デミアン・ラーナーがサトシのマイニングに第二の指紋を発見 — ノンスLSBパターン"
date: 2013-09-03T00:00:00Z
type: "article"
source: "bitslog"
sourceUrl: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "ExtraNonce 分析の 5 か月後、ラーナーがサトシのノンス LSB 分布の非ランダム性（256 中約 50 値に限定）を発見。独自マイニングソフトウェアの第二の指紋。"
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "nonce-analysis"
  - "blockchain-forensics"
  - "extranonce"
secondarySources:
  - name: "Bitslog — Satoshi's Machine (September 4, 2013)"
    url: "https://bitslog.com/2013/09/04/satoshi-machine-one-mystery-is-solved-and-another-opens/"
  - name: "Bitslog — The Well Deserved Fortune of Satoshi Nakamoto (April 17, 2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
relatedEntries:
  - aftermath/2013-04-17-sergio-demian-lerner-biography
  - aftermath/2013-04-17-sergio-lerner-patoshi-analysis
  - aftermath/2019-04-16-sergio-lerner-patoshi-naming
  - aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine
  - aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis
  - aftermath/2021-09-30-plos-one-patoshi-anomaly-study
  - aftermath/2022-09-16-lopp-was-satoshi-greedy-miner
translationStatus: complete
---

2013年9月3日、[セルジオ・デミアン・ラーナー](/BitcoinArchive/ja/participants/sergio-demian-lerner/)は「A New Mystery about [Satoshi](/BitcoinArchive/ja/participants/satoshi-nakamoto/) Hidden in the Bitcoin Block-Chain」を発表し、5か月前に発表した[ExtraNonce勾配分析](/BitcoinArchive/ja/entries/aftermath/2013-04-17-sergio-lerner-patoshi-analysis/)とは独立した、サトシの初期マイニングにおける第二の指紋を明らかにした。

**発見：**

ラーナーは最初の36,288ブロックのナンス値の最下位バイト（LSB）を分析した。標準的なマイニング実装では、ナンスのバイトは一様に分布するはずである。しかしサトシのブロックは顕著な非ランダムパターンを示していた：

- **値0〜9：** 高頻度（各247〜324回）
- **値10〜18：** ほぼゼロの頻度（各2〜6回のみ） — 決定的なギャップ
- **値19〜58：** 再び高頻度（最大201回）
- **値59〜255：** まばらな分布

このパターンは未使用のコインベース（サトシのブロック）にのみ存在し、他の初期参加者がマイニングしたブロックには見られなかった。

**意義：**

**256個中約50個の値** （[0..9] ∪ [19..58]）へのLSB制限は、ExtraNonce分析とは完全に独立した証拠であった。支配的なマイナーが、重複作業を避けるためにナンス探索空間を分割し、異なるスレッドやプロセスに異なるLSB範囲を割り当てるカスタムソフトウェアを使用していたことを証明した。

**初期の仮説：**

ラーナーは4つの説明を提示した：パースエラー、グレイコードを使用する専用ハードウェア、SHA-2の脆弱性、または意図的な指紋。コミュニティメンバーの「Eyal0」がすぐに正解を提案した：サトシは約50個の並列マイニングスレッドを実行し、各スレッドにナンス衝突を防ぐための固有のLSB識別子を割り当てていた。

**続報（2013年9月4日）：**

「Satoshi's Machine」でラーナーはLSBとExtraNonceの関連を確認し、サトシのコンピューターが他の初期マイナーのマシンより約 **4.3倍速い** ことを明らかにした — ネットワーク接続された複数のコンピューターではなく、数十の並列スレッドを実行する単一の高性能CPUと一致する。

ラーナーはこう述べた。

> 「我々はLOSTの映画の中にいる：一つの謎が解けたように見えるたびに、別の謎が現れる。」
