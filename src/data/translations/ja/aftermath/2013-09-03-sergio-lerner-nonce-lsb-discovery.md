---
title: "Sergio Demian Lernerがサトシのマイニングに第二の指紋を発見 — ノンスLSBパターン"
date: 2013-09-03T00:00:00Z
source: aftermath
sourceUrl: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "ExtraNonce分析から5か月後、Lernerはサトシのノンス値の最下位バイト（LSB）が非ランダムな分布を示すことを発見 — [0..9]と[19..58]の約50個の値に制限されていた。ExtraNonceとは独立した第二の指紋であり、サトシがノンス空間を分割した独自のマイニングソフトウェアを使用していたことを証明した。"
isSatoshi: false
aftermathType: "blog"
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
translationStatus: complete
---

2013年9月3日、Sergio Demian Lernerは「A New Mystery about Satoshi Hidden in the Bitcoin Block-Chain」を発表し、5か月前に発表したExtraNonce勾配分析とは独立した、サトシの初期マイニングにおける第二の指紋を明らかにした。

**発見：**

Lernerは最初の36,288ブロックのノンス値の最下位バイト（LSB）を分析した。標準的なマイニング実装では、ノンスのバイトは一様に分布するはずである。しかしサトシのブロックは顕著な非ランダムパターンを示していた：

- **値0〜9：** 高頻度（各247〜324回）
- **値10〜18：** ほぼゼロの頻度（各2〜6回のみ） — 決定的なギャップ
- **値19〜58：** 再び高頻度（最大201回）
- **値59〜255：** まばらな分布

このパターンは未使用のコインベース（サトシのブロック）にのみ存在し、他の初期参加者がマイニングしたブロックには見られなかった。

**意義：**

**256個中約50個の値**（[0..9] ∪ [19..58]）へのLSB制限は、ExtraNonce分析とは完全に独立した証拠であった。支配的なマイナーが、重複作業を避けるためにノンス探索空間を分割し、異なるスレッドやプロセスに異なるLSB範囲を割り当てるカスタムソフトウェアを使用していたことを証明した。

**初期の仮説：**

Lernerは4つの説明を提示した：パースエラー、グレイコードを使用する専用ハードウェア、SHA-2の脆弱性、または意図的な指紋。コミュニティメンバーの「Eyal0」がすぐに正解を提案した：サトシは約50個の並列マイニングスレッドを実行し、各スレッドにノンス衝突を防ぐための固有のLSB識別子を割り当てていた。

**続報（2013年9月4日）：**

「Satoshi's Machine」でLernerはLSBとExtraNonceの関連を確認し、サトシのコンピュータが他の初期マイナーのマシンより約**4.3倍速い**ことを明らかにした — ネットワーク接続された複数のコンピュータではなく、数十の並列スレッドを実行する単一の高性能CPUと一致する。

Lernerはこう述べた：「我々はLOSTの映画の中にいる：一つの謎が解けたように見えるたびに、別の謎が現れる。」
