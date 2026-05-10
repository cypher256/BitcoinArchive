---
title: "ジェイムソン・ロップがサトシ・ナカモトは「欲張りなマイナー」だったかを分析"
date: 2022-09-16T00:00:00Z
type: "article"
source: "lopp-blog"
sourceUrl: "https://blog.lopp.net/was-satoshi-a-greedy-miner/"
author: "Jameson Lopp"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Jameson Lopp"
    slug: "jameson-lopp"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "ジェイムソン・ロップが、サトシが意図的にマイニング能力を制限し、フル稼働なら約 219 万 BTC のところを約 110 万 BTC に留めたことを示した。"
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "satoshi-fortune"
  - "hashrate"
  - "decentralization"
  - "incentives"
secondarySources:
  - name: "Sergio Demian Lerner — The Well Deserved Fortune of Satoshi Nakamoto (2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Sergio Demian Lerner — The Patoshi Mining Machine (2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
relatedEntries:
  - "analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-satoshi-identification-asymmetry"
  - "analysis/2008-10-31-satoshi-anonymity-architecture"
  - "aftermath/2013-04-17-sergio-lerner-patoshi-analysis"
  - "aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery"
  - "aftermath/2019-04-16-sergio-lerner-patoshi-naming"
  - "aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine"
  - "aftermath/2021-09-30-plos-one-patoshi-anomaly-study"
  - "aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis"
  - "analysis/2009-01-10-satoshi-launch-environment"
  - "aftermath/2023-10-21-lopp-hal-finney-not-satoshi"
translationStatus: complete
---

2022年9月16日、ジェイムソン・ロップは「Was Satoshi a Greedy Miner?（サトシは欲張りなマイナーだったか？）」をブログに発表し、[ビットコインの創設者](/BitcoinArchive/ja/participants/satoshi-nakamoto/)がネットワーク初期にコインを利己的に溜め込んだという説に真っ向から反論した。

**主要データ：**

- サトシは 14 か月間で約 22,000 ブロック、約 **110 万 BTC** （総供給量の約 5%）をマイニング
- 最大ハッシュレート能力： **6 Mhps** — 実測値： **4.35 Mhps**
- ネットワークハッシュレートの 50%以上を占めていたが、2009年10月に自発的にマイニング能力を減少
- サトシのブロックのうち使われたのはわずか **0.09%**
- サトシの連続ブロック間隔は 5分未満で、マイニングラウンド間で意図的に一時停止していたことを示唆

**反実仮想分析：**

ロップは 2 つの代替シナリオをモデル化した：
1. **フル稼働（休止なし）：** 実測 4.35 Mhps で連続マイニングした場合、~**31,783 ブロック / ~159 万 BTC** — 実際の約 1.5倍
2. **最大能力：** マシンの最大 6 Mhps でマイニングした場合、~**43,829 ブロック / ~219 万 BTC** — 実際のほぼ 2倍

連続ブロック間の約 300秒の休止と、利用可能なハッシュレートの 72.5%のみの意図的使用は、サトシが個人的利益よりもネットワークの立ち上げと分散化を優先していたことを示している。

[セルジオ・デミアン・ラーナー](/BitcoinArchive/ja/participants/sergio-demian-lerner/)の Patoshi パターン研究を基に、ロップの分析はサトシのマイニング行動が搾取的ではなく利他的であったことの定量的証拠を提供した。記事は次のように締めくくる：「サトシが欲張りだったと主張する人は、単に計算をしていないだけだ。」
