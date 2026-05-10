---
title: "セルジオ・デミアン・ラーナーが Patoshi マイナーは単一のマルチスレッド PC であることを実証 — 数十台のコンピューターではない"
date: 2020-08-22T00:00:00Z
type: "article"
source: "bitslog"
sourceUrl: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "ラーナー「The Patoshi Mining Machine」 発表。再マイニングシミュレーションで、サトシが 50 台超ではなく 5 並列スレッド単一高性能 CPU でマイニングしたと実証。"
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "nonce-analysis"
  - "hardware"
  - "blockchain-forensics"
secondarySources:
  - name: "Bitslog — The Well Deserved Fortune of Satoshi Nakamoto (2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Bitslog — The Return of the Deniers and the Revenge of Patoshi (2019)"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
  - name: "Whale Alert — The Satoshi Fortune (July 20, 2020)"
    url: "https://whale-alert.medium.com/the-satoshi-fortune-e49cf73f9a9b"
  - name: "CoinDesk — Protection Over Profit: What Early Mining Patterns Suggest About Bitcoin's Inventor"
    url: "https://www.coindesk.com/tech/2020/08/31/protection-over-profit-what-early-mining-patterns-suggest-about-bitcoins-inventor"
relatedEntries:
  - aftermath/2013-04-17-sergio-demian-lerner-biography
  - aftermath/2013-04-17-sergio-lerner-patoshi-analysis
  - aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery
  - aftermath/2019-04-16-sergio-lerner-patoshi-naming
  - aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis
  - aftermath/2021-09-30-plos-one-patoshi-anomaly-study
  - aftermath/2022-09-16-lopp-was-satoshi-greedy-miner
translationStatus: complete
---

2020年8月22日、[セルジオ・デミアン・ラーナー](/BitcoinArchive/ja/participants/sergio-demian-lerner/)は自身のブログ Bitslog に「The Patoshi Mining Machine」を発表した。[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)のマイニング環境のハードウェアとソフトウェアに関する最も技術的に厳密な分析である。Whale Alert の「The Satoshi Fortune」レポートがサトシが約 48 台のコンピューターを使用したと主張した 1 か月後の発表であった。

**再マイニングシミュレーション：**

ラーナーは実際のブロックチェーンデータに対して Patoshi のマイニングアルゴリズムをシミュレートする再マイニング実験を実施した。これにより、サトシのハードウェア構成に関する競合する仮説を検証することが可能となった。

**主要な発見：**

- Patoshi マイナーはナンス探索空間を **5 つのサブレンジ** に分割していた：各サブレンジは約 6 億 5500 万のナンス値をカバー
- 各サブレンジ内では、ナンスは **高い値から低い値へ順次スキャン** された（「Inner Negative」アルゴリズム）
- この順次スキャンにより、ブロック解として選択されるナンスに **78%の高値バイアス** が生じた — 48 台以上の独立したマシンがそれぞれランダムな範囲をスキャンする場合とは整合しない統計的指紋
- 5 つのサブレンジは **並列に** スキャンされており、単一のマルチコア CPU 上の 5 スレッドと整合
- マイニングソフトウェアは **標準の Bitcoin v0.1 クライアントではなく** 、SHA-256 の SSE2 最適化を施したカスタムビルドのツール

**ネットワークではなく、単一の PC：**

ラーナーの結論は、Patoshi マイナーが 50 台以上のネットワーク接続されたコンピューターではなく、 **マルチスレッディングを備えた単一の高性能 CPU** を使用していた、というものであった。複数の証拠がこれを支持している：

1. **ナンス分布** ：サブレンジ内の 78%の高値バイアスは順次スキャンを必要とする — 独立したマシンがランダムな範囲をスキャンすれば 50%の分布になるはず
2. **タイムスタンプの一貫性** ：22,000 以上の Patoshi ブロック間でタイムスタンプ逆転がゼロ（2019年の分析で確立済み）であり、単一のシステムクロックを証明
3. **ハッシュレート** ：このマシンは他の初期マイナーより約 **4.3倍速い** 性能を示した。これは SSE2 最適化した 5 スレッドのクアッドコア CPU と、標準クライアントのシングルスレッド・非最適化マイニングの差に整合

**意義：**

この分析は Whale Alert の約 48 台の独立したコンピューターという主張を直接否定した。この区別は重要である：カスタムソフトウェアを実行する単一の PC は、ネットワークを立ち上げる一人の個人と整合するが、48 台のマシンによるオペレーションは組織的なリソースを示唆する。ラーナーの発見は、サトシが消費者向けハードウェアで単独に作業する技術的に優れた個人であるという像を強化した。
