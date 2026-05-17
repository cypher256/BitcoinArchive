---
title: "サトシの保有量は約 112.5 万 BTC — Whale Alert 独立分析「The Satoshi Fortune」"
date: 2020-07-20T00:00:00Z
type: "article"
source: "medium"
sourceUrl: "https://whale-alert.medium.com/the-satoshi-fortune-e49cf73f9a9b"
author: "Whale Alert"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Whale Alert は、サトシが最初の 54,316 ブロックのうち 22,503 ブロックで 1,125,150 BTC をマイニングしたと確認（48 台説は後にラーナー単一 PC で反証）。"
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "satoshi-fortune"
  - "hashrate"
  - "blockchain-analysis"
  - "network-security"
secondarySources:
  - name: "CoinDesk — Whale Alert Identifies 1.125 Million BTC as Satoshi's Stash"
    url: "https://www.coindesk.com/tech/2020/07/20/whale-alert-identifies-1125-million-btc-as-satoshis-stash/"
  - name: "Cointelegraph — $10.9 Billion Bitcoin Stash Proves Satoshi Is Still the Biggest Whale"
    url: "https://web.archive.org/web/20260315115000/https://cointelegraph.com/news/109-billion-bitcoin-stash-proves-satoshi-is-still-the-biggest-whale"
  - name: "Sergio Demian Lerner — The Well Deserved Fortune of Satoshi Nakamoto (2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Sergio Demian Lerner — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
translationStatus: complete
---

2020年7月、ブロックチェーン追跡サービス Whale Alert は「The Satoshi Fortune」を発表した。[セルジオ・デミアン・ラーナー](/BitcoinArchive/ja/participants/sergio-demian-lerner/)の先行 Patoshi 研究を概ね裏付ける独立分析であるが、[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)のマイニング環境について独自の解釈を導入した。

**主要な発見：**

- サトシはブロック 54,316 までに **1,125,150 BTC** をマイニング
- 最初の 54,316 ブロックのうち **22,503 ブロック** が Patoshi マイナーによるもの
- うち使用済みはわずか **50 ブロック（907 BTC）** のみ。残りの **1,122,693 BTC** は未使用のまま
- 発表時点の推定価値：少なくとも **109 億ドル**

**マイニング行動：**

Whale Alert の分析によると、サトシはネットワークの成長に伴い、約 **48 台のコンピューター** （または CPU スレッド）を使用して、ネットワークハッシュレートの約 **60%** を安定的に維持していた。サトシは処理能力を体系的に調整し、1時間あたり約 **3.6 ブロック** をマイニングすることで、ネットワークがまだ脆弱な時期に 51%攻撃から防御するのに十分なハッシュレートを確保していた。

**「48 台のコンピューター」主張に関する注記：** 本レポートの 1 か月後、セルジオ・デミアン・ラーナーが[「The Patoshi Mining Machine」](/BitcoinArchive/ja/entries/aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine/)（2020年8月22日）を発表し、再マイニングシミュレーションにより Patoshi マイナーが 48 台以上の独立したコンピューターではなく、 **5 つの並列スレッドを持つ単一の高性能 CPU** を使用していたことを実証した。ラーナーはナンス空間が 5 つのサブレンジに分割され、各サブレンジ内で順次スキャンが行われていたことを示し、78%の高値バイアスが独立したマシンとは整合しないことを証明した。ジェイムソン・ロップの 2022年の分析もこの単一 PC 説を支持している：「ダブルヘリックス」期間（ブロック 1400-1916）で 2 つのマイニングインスタンスが同じ CPU コアを奪い合い、別マシンなら 100%増のところ 28%の増加しか見られなかった。現在の研究コンセンサスは単一のマルチスレッド PC を支持している。

**意図的な制限：**

分析では、時間の経過に伴う意図的なハッシュレート低下パターンが特定された。他のマイナーがネットワークに参加しても、サトシは支配権を競うことなく、マイニング速度を段階的に下げていった。Patoshi マイナーは **2010年5月** に完全に停止された。サトシの最後の通信の数か月前のことである。

**結論：**

報告書は結論として述べている：「停止のタイミング、マイニング行動、体系的なマイニング速度の低下、そして支出の欠如は、サトシが若いネットワークの成長と保護にのみ関心を持っていたことを強く示唆している。」1,125,150 BTC は一度も使われておらず、サトシが個人的利益のためではなくネットワークの立ち上げのためにマイニングしていたという解釈を強化している。
