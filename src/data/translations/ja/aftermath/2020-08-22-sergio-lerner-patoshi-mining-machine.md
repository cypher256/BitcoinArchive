---
title: "セルジオ・デミアン・ラーナーがPatoshiマイナーは単一のマルチスレッドPCであることを実証 — 数十台のコンピューターではない"
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
description: "ラーナーが「The Patoshi Mining Machine」を発表し、再マイニングシミュレーションにより、サトシが50台以上のネットワーク接続されたコンピューターではなく、5つの並列スレッドを持つ単一の高性能CPUでマイニングしていたことを実証。ナンス空間が5つのサブレンジに分割され、各サブレンジ内で順次スキャンされ、78%の高値バイアスが独立したマシンとは整合しないことを証明した。Whale Alertの2020年7月の約48台のコンピューターという主張を直接否定。"
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
translationStatus: complete
---

2020年8月22日、[セルジオ・デミアン・ラーナー](/BitcoinArchive/ja/participants/sergio-demian-lerner/)は自身のブログBitslogに「The Patoshi Mining Machine」を発表した。[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)のマイニング環境のハードウェアとソフトウェアに関する最も技術的に厳密な分析である。Whale Alertの「The Satoshi Fortune」レポートがサトシが約48台のコンピューターを使用したと主張した1か月後の発表であった。

**再マイニングシミュレーション：**

ラーナーは実際のブロックチェーンデータに対してPatoshiのマイニングアルゴリズムをシミュレートする再マイニング実験を実施した。これにより、サトシのハードウェア構成に関する競合する仮説を検証することが可能となった。

**主要な発見：**

- Patoshiマイナーはナンス探索空間を **5つのサブレンジ** に分割していた：各サブレンジは約6億5500万のナンス値をカバー
- 各サブレンジ内では、ナンスは **高い値から低い値へ順次スキャン** された（「Inner Negative」アルゴリズム）
- この順次スキャンにより、ブロック解として選択されるナンスに **78%の高値バイアス** が生じた — 48台以上の独立したマシンがそれぞれランダムな範囲をスキャンする場合とは整合しない統計的指紋
- 5つのサブレンジは **並列に** スキャンされており、単一のマルチコアCPU上の5スレッドと整合
- マイニングソフトウェアは **標準のBitcoin v0.1クライアントではなく** 、SHA-256のSSE2最適化を施したカスタムビルドのツール

**ネットワークではなく、単一のPC：**

ラーナーの結論は、Patoshiマイナーが50台以上のネットワーク接続されたコンピューターではなく、 **マルチスレッディングを備えた単一の高性能CPU** を使用していた、というものであった。複数の証拠がこれを支持している：

1. **ナンス分布** ：サブレンジ内の78%の高値バイアスは順次スキャンを必要とする — 独立したマシンがランダムな範囲をスキャンすれば50%の分布になるはず
2. **タイムスタンプの一貫性** ：22,000以上のPatoshiブロック間でタイムスタンプ逆転がゼロ（2019年の分析で確立済み）であり、単一のシステムクロックを証明
3. **ハッシュレート** ：このマシンは他の初期マイナーより約 **4.3倍速い** 性能を示した。これはSSE2最適化した5スレッドのクアッドコアCPUと、標準クライアントのシングルスレッド・非最適化マイニングの差に整合

**意義：**

この分析はWhale Alertの約48台の独立したコンピューターという主張を直接否定した。この区別は重要である：カスタムソフトウェアを実行する単一のPCは、ネットワークを立ち上げる一人の個人と整合するが、48台のマシンによるオペレーションは組織的なリソースを示唆する。ラーナーの発見は、サトシが消費者向けハードウェアで単独に作業する技術的に優れた個人であるという像を強化した。
