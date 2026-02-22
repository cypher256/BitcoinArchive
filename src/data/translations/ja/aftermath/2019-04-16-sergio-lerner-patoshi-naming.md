---
title: "Sergio Demian Lernerが「Patoshi」を命名し、推定を~22,000ブロック / ~110万BTCに更新"
date: 2019-04-16T00:00:00Z
source: aftermath
sourceUrl: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "最初の分析から6年後、Lernerは「The Return of the Deniers and the Revenge of Patoshi」を発表。「Patoshi」（Pattern + Satoshi）という用語を定着させ、推定を~22,000ブロック / ~110万BTCに更新。新証拠として、Patoshiブロック間のタイムスタンプ逆転がゼロ（非Patoshiでは224回）であることを示し、単一PCクロックを証明した。"
isSatoshi: false
aftermathType: "blog"
tags:
  - "patoshi"
  - "mining"
  - "satoshi-fortune"
  - "nonce-analysis"
  - "timestamp"
  - "blockchain-forensics"
secondarySources:
  - name: "Bitslog — The Well Deserved Fortune of Satoshi Nakamoto (April 17, 2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Bitslog — A new mystery about Satoshi (September 3, 2013)"
    url: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
  - name: "Bitslog — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
translationStatus: complete
---

2019年4月16日、Sergio Demian Lernerは「The Return of the Deniers and the Revenge of Patoshi」を発表した。6年間の研究成果を統合し、今や標準的となった「Patoshi」という用語を導入した重要な更新論文である。

**「Patoshi」の命名：**

Lernerは**「Patoshi」** — 「Pattern」と「Satoshi」を組み合わせた造語 — を使い、2013年から研究してきた特徴的なマイニング署名を呼んだ。この名称は、その後のサトシのマイニング行動に関するすべての学術的・コミュニティ議論における標準的な呼称となった。

**更新された推定：**

- Patoshiパターンに帰属する**~22,000ブロック**（27,680のノンス制限ブロック「セットM」の中に含まれる）
- **~110万BTC** — 2013年の当初推定~100万BTCから上方修正
- Patoshiブロックの**99.9%**が未使用のまま（他の初期ブロックでは約10%のみ）

**タイムスタンプ逆転分析：**

最も強力な新証拠は、最初の50,000ブロックのタイムスタンプ分析であった。Lernerは以下を発見した：

- 連続するPatoshiブロック間のタイムスタンプ逆転：**ゼロ**
- 連続する非Patoshiブロック間のタイムスタンプ逆転：**224回**

タイムスタンプ逆転とは、後のブロックが前のブロックより早いタイムスタンプを持つ現象で、異なるマイナーのクロックが微妙にずれている場合に発生する。Patoshiブロックでの逆転の完全な不在は、**単一のPCクロックで単一のソフトウェアが動作していた**ことを証明し、複数のマイナーが同期していたという仮説を統計的に不可能にした。

**統計的証明：**

Lernerは、セットMの27,680ブロックすべてのノンスがランダムにLSB制限範囲Rに収まる確率を計算した：**2^-36,000未満** — パターンが意図的であったことの数学的証明に等しい、消えるほど小さな数値。

**結論：**

この2019年の論文は、Patoshi研究を経験的観測の集合からほぼ確実性へと変えた：一つのエンティティが、単一のコンピュータ上のカスタムマイニングソフトウェアを使い、ビットコインの総供給量の約5%を蓄積し — そしてそれを一度も使わなかった。
