---
title: "PLOS ONEがPatoshiマイニング異常を確認する査読付き論文を掲載"
date: 2021-09-30T00:00:00Z
source: aftermath
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
description: "レイキャビク大学の研究者がPatoshiパターンに関する最初の査読付き学術論文をPLOS ONEに発表。「P異常」（拡張Patoshi）と「Z異常」（ゼロノンス）の2つの独立したノンス異常を特定し、決定的な発見としてP異常が最初の64ブロック「すべて」に出現することを示した。これにはExtraNonce分析で非PatoshiとされていたBlock 12も含まれる。"
isSatoshi: false
aftermathType: "academic"
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
translationStatus: complete
---

2021年9月30日、レイキャビク大学コンピュータサイエンス学部のMaria OskarsdottirとJacky Mallettは、PLOS ONEに「Strangely mined bitcoins: Empirical analysis of anomalies in the bitcoin blockchain transaction network」を発表した（DOI: 10.1371/journal.pone.0258001）。これは、Sergio Demian Lernerが2013年にブログで最初に特定したPatoshiマイニングパターンを正式に分析した、最初の査読付き学術論文であった。

**2つの独立した異常の特定：**

論文はビットコインのコインベーストランザクションにおける2つの独立したノンス異常を特定した：

1. **P異常（拡張Patoshi異常）：** ブロックノンスの最初の16進ニブルが、0〜Fに一様分布するはずのところ、0〜3の範囲に不均衡に多くの値を示す。これはLernerのオリジナルのノンスLSB分析の拡張と形式化である。

2. **Z異常（ゼロノンス異常）：** ノンスの最後から2番目の位置が、マイニングの最初の18か月間に異常に多くのゼロを示す。

**決定的な発見 — 最初の64ブロック：**

Patoshi議論において最も重要な発見は、**ノンスの最初のニブルにおける拡張Patoshi異常が、マイニングされた最初の64ブロック「すべて」に出現する**ことであった。これは注目に値する。なぜなら、Lernerのオリジナルの2013年ExtraNonceベースの分類では、ExtraNonce勾配の相違に基づいてBlock 12を「別のユーザー」がマイニングした最初のブロックと特定していたからである。

PLOS ONEの発見は、Block 12がExtraNonceパターンとは異なるにもかかわらずPatoshiノンス署名を示すことを意味する。これは、サトシがカスタムPatoshiマイニングソフトウェアと標準Bitcoin v0.1クライアントを同時に実行していたと解釈するのが最も整合的である。ノンス分割の署名は両方の設定で持続するが、ExtraNonceのインクリメント挙動は異なる。

**異常の規模：**

論文は、最初の難易度レベルでマイニングされたすべてのコインの約3分の1がこれらの異常を示すブロックからのものであることを発見した。2018年までの全研究期間にわたって、ノンスの特徴を持つブロックから300万BTC以上が得られた（この大きな数字にはZ異常と、オリジナルのPatoshi分析範囲を超える拡張期間が含まれる）。

**意義：**

Patoshiマイニングに関する最初の査読付き学術研究として、この論文はブログ投稿やコミュニティ分析からの議論を正式な学術文献に格上げした。最初の64ブロックすべてがPatoshiノンスの指紋を共有するという発見は、初期の非Patoshiブロック（ExtraNonce分類による）が依然としてサトシによってマイニングされたものであり、他の参加者によるものではないという主張を強化した。
