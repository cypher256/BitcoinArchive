---
title: "PLOS ONE 査読済み研究が Patoshi マイニング異常を確認 — ビットコイン初期の採掘パターン"
date: 2021-09-30T00:00:00Z
type: "article"
source: "plos"
sourceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0258001"
author: "Maria Oskarsdottir"
participants:
  - name: "Maria Oskarsdottir"
    slug: "maria-oskarsdottir"
  - name: "Jacky Mallett"
    slug: "jacky-mallett"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "レイキャビク大学が Patoshi パターンに関する最初の査読論文を PLOS ONE に発表。「P 異常」 と「Z 異常」 を特定し、P 異常が最初の 64 ブロックすべてに出現することを示した。"
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "nonce-analysis"
  - "blockchain-forensics"
  - "academic"
  - "peer-review"
secondarySources:
  - name: "PubMed (PMID: 34591921)"
    url: "https://pubmed.ncbi.nlm.nih.gov/34591921/"
  - name: "PMC Full Text (PMC8483420)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8483420/"
  - name: "Bitslog — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
  - name: "Bitslog — The Return of the Deniers and the Revenge of Patoshi (April 16, 2019)"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
relatedEntries:
  - aftermath/2013-04-17-sergio-demian-lerner-biography
  - aftermath/2013-04-17-sergio-lerner-patoshi-analysis
  - aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery
  - aftermath/2019-04-16-sergio-lerner-patoshi-naming
  - aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine
  - aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis
  - aftermath/2022-09-16-lopp-was-satoshi-greedy-miner
translationStatus: complete
---

2021年9月30日、レイキャビク大学コンピューターサイエンス学部のマリア・オスカルスドッティルとジャッキー・マレットは、PLOS ONE に「Strangely mined bitcoins: Empirical analysis of anomalies in the bitcoin blockchain transaction network」を発表した（DOI: 10.1371/journal.pone.0258001）。これは、[セルジオ・デミアン・ラーナー](/BitcoinArchive/ja/participants/sergio-demian-lerner/)が 2013年にブログで最初に特定した [Patoshi マイニングパターン](/BitcoinArchive/ja/entries/aftermath/2013-04-17-sergio-lerner-patoshi-analysis/)を正式に分析した、最初の査読付き学術論文であった。

**2 つの独立した異常の特定：**

論文はビットコインのコインベーストランザクションにおける 2 つの独立したナンス異常を特定した：

1. **P 異常（拡張 Patoshi 異常）：** ブロックナンスの最初の 16 進ニブルが、0〜F に一様分布するはずのところ、0〜3 の範囲に不均衡に多くの値を示す。これはラーナーのオリジナルの[ナンス LSB 分析](/BitcoinArchive/ja/entries/aftermath/2013-09-03-sergio-lerner-nonce-lsb-discovery/)の拡張と形式化である。

2. **Z 異常（ゼロナンス異常）：** ナンスの最後から 2番目の位置が、マイニングの最初の 18 か月間に異常に多くのゼロを示す。

**決定的な発見 — 最初の 64 ブロック：**

Patoshi 議論において最も重要な発見は、 **ナンスの最初のニブルにおける拡張 Patoshi 異常が、マイニングされた最初の 64 ブロック「すべて」に出現する** ことであった。これは注目に値する。なぜなら、ラーナーのオリジナルの 2013年 ExtraNonce ベースの分類では、ExtraNonce 勾配の相違に基づいてブロック 12 を「別のユーザー」がマイニングした最初のブロックと特定していたからである。

PLOS ONE の発見は、ブロック 12 が ExtraNonce パターンとは異なるにもかかわらず Patoshi ナンス指紋を示すことを意味する。これは、[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)がカスタム Patoshi マイニングソフトウェアと標準 [Bitcoin v0.1 クライアント](/BitcoinArchive/ja/entries/sourceforge/2009-01-09-bitcoin-v01-released/)を同時に実行していたと解釈するのが最も整合的である。ナンス分割の指紋は両方の設定で持続するが、ExtraNonce のインクリメント挙動は異なる。

**異常の規模：**

論文は、最初の難易度レベルでマイニングされたすべてのコインの約 3分の 1 がこれらの異常を示すブロックからのものであることを発見した。2018年までの全研究期間にわたって、ナンスの特徴を持つブロックから 300 万 BTC 以上が得られた（この大きな数字には Z 異常と、オリジナルの Patoshi 分析範囲を超える拡張期間が含まれる）。

**意義：**

Patoshi マイニングに関する最初の査読付き学術研究として、この論文はブログ投稿やコミュニティ分析からの議論を正式な学術文献に格上げした。最初の 64 ブロックすべてが Patoshi ナンスの指紋を共有するという発見は、初期の非 Patoshi ブロック（ExtraNonce 分類による）が依然としてサトシによってマイニングされたものであり、他の参加者によるものではないという主張を強化した。
