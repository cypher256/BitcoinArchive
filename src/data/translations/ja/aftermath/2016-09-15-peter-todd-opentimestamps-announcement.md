---
title: "ピーター・トッドがOpenTimestampsを発表"
date: 2016-09-15T00:00:00Z
type: "article"
source: "petertodd-org"
sourceUrl: "https://petertodd.org/2016/opentimestamps-announcement"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "ピーター・トッドがOpenTimestampsを発表。Bitcoinブロックチェーンを利用して暗号タイムスタンプを作成するオープンソースのインフラストラクチャ。マークルツリーの集約により、単一のBitcoinトランザクションで無制限のドキュメントにタイムスタンプを付与でき、特定の時点でデータが存在したことの無料でスケーラブル、トラスト最小化された証明を提供する。"
isSatoshi: false
tags:
  - "peter-todd"
  - "opentimestamps"
  - "timestamping"
  - "merkle-tree"
  - "bitcoin-application"
secondarySources:
  - name: "OpenTimestamps — 公式サイト"
    url: "https://opentimestamps.org/"
  - name: "Peter Todd — Carbon Dating the Internet Archive with OpenTimestamps"
    url: "https://petertodd.org/2017/carbon-dating-the-internet-archive-with-opentimestamps"
  - name: "W3C — Open Timestamps discussion"
    url: "https://lists.w3.org/Archives/Public/public-blockchain/2016Sep/0078.html"
relatedEntries:
  - aftermath/2010-12-07-peter-todd-biography
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify
  - aftermath/2015-12-04-peter-todd-bip-125-replace-by-fee
  - aftermath/2016-10-22-peter-todd-zcash-trusted-setup
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
translationStatus: complete
---

<!-- speaker: narrator -->
2016年9月15日、[ピーター・トッド](/BitcoinArchive/ja/participants/peter-todd/)はOpenTimestampsを発表した。Bitcoinブロックチェーンにタイムスタンプをアンカリングすることで、特定の時点でデータが存在したことの暗号学的証明を作成するシステムである。

**仕組み：**

<!-- speaker: narrator -->
OpenTimestampsはマークルツリーの集約を使い、無制限のドキュメントハッシュを単一のBitcoinトランザクションにまとめる。各タイムスタンプは、マークルツリーを通じてBitcoinブロックヘッダーに至るパスに過ぎない。公開カレンダーサーバーが保留中のハッシュを収集し、定期的にツリーにマージすることで、タイムスタンプは無料かつほぼ瞬時（1秒以下）に作成できる。

**設計原則：**

<!-- speaker: narrator -->
- **トラスト最小化：** 中央当局への依存なし——Bitcoinの公開監査可能なブロックチェーンが時間証明として機能する
- **スケーラブル：** 集約により1トランザクションあたり無制限のタイムスタンプが可能
- **利便性：** ブロック確認を待たずに約1秒でタイムスタンプを作成可能
- **検証可能：** Bitcoinノードがあれば誰でもオフラインで独立にタイムスタンプを検証できる

**ユースケース：**

<!-- speaker: narrator -->
- セキュリティ侵害後のレコード完全性の検証
- 開発者鍵が失効した場合のソフトウェア署名の検証
- ウェブサイトスナップショットの作成時期の証明
- Gitコミットのタイムスタンプによる開発履歴の証明

**資金と開発：**

<!-- speaker: narrator -->
プロジェクトはVerisart（美術品の来歴証明）とBTCC（Bitcoinマイニング企業）の資金提供を受けた。トッドは2012年の初期タイムスタンプ作業の書き直しであると述べた。2017年にはInternet Archiveの「カーボン・デーティング」を実演し、Wayback Machineの大部分にタイムスタンプを付与した。

<!-- speaker: narrator -->
*[編者注：OpenTimestampsは、サトシがBitcoin自体に組み込んだ核心的な洞察を反映している。ブロックチェーンは本質的にタイムスタンプシステムであるということだ。Bitcoinホワイトペーパーのタイトルは「P2P電子キャッシュシステム」だが、セクション3のタイトルは「タイムスタンプサーバー」である。トッドのプロジェクトはこのタイムスタンプ機能を抽出し、任意のデータに対して一般化したものだ。]*
