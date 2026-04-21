---
title: "サトシがビットコインのジェネシスブロックを採掘（2009-01-03）"
date: 2009-01-03T18:15:05Z
type: "forum-post"
source: "sourceforge"
sourceUrl: "https://sourceforge.net/projects/bitcoin/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがビットコインブロックチェーンのジェネシスブロック（ブロック0）を採掘し、今や有名なThe Times紙の見出し「Chancellor on brink of second bailout for banks（財務大臣、銀行への二度目の救済措置を検討）」を埋め込んだ。"
isSatoshi: true
tags:
  - "sourceforge"
  - "genesis-block"
  - "historic"
  - "blockchain"
secondarySources:
  - name: "Block 0 on mempool.space"
    url: "https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
  - name: "Block 0 on Blockstream Explorer"
    url: "https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
relatedEntries:
  - aftermath/2008-10-31-satoshi-nakamoto-biography
  - analysis/2009-01-03-genesis-block-hardcode-analysis
  - aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery
  - aftermath/2022-10-06-serhack-alternative-genesis-block
  - aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis
translationStatus: complete
featured: true
---

2009年1月3日、サトシ・ナカモトはビットコインブロックチェーンの最初のブロックを採掘した。ジェネシスブロックまたはブロック0として知られるこのブロックのコインベーストランザクションには、以下のテキストが埋め込まれていた：

「The Times 03/Jan/2009 Chancellor on brink of second bailout for banks」

このメッセージは、その日に発行された The Times 紙の一面の見出しであり、二重の目的を果たしている。このブロックが 2009 年 1 月 3 日より前に採掘されたものではないことを証明するタイムスタンプとして機能すると同時に、従来の銀行システムの不安定性 —— まさにビットコインが解決するために設計された問題 —— に対する鋭い論評を提供している。なお同じ見出しは後年の分析で、サトシの所在地を推定する[地理的証拠として扱われている](/BitcoinArchive/ja/entries/aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis/)（英国紙という点から）。

ジェネシスブロックは[ビットコインソフトウェアにハードコード](/BitcoinArchive/ja/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/)されており、ブロックチェーン全体が構築される基盤となっている。後続のすべてのブロックとは異なり、ジェネシスブロックのコインベーストランザクションからの 50 BTC 報酬は、元のコードの bootstrap 初期化構造により使用不可能となっている。

ブロックハッシュは以下の通りである：

000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f

ジェネシスブロックは、次のブロック（ブロック1）が 2009 年 1 月 9 日に採掘されるまでの 6 日間の間隔を置いて採掘された。1 月 9 日はビットコイン v0.1 が一般公開された日でもある。この間隔の原因は、ジェネシス分析で[ハードコード・タイムスタンプのアーティファクト](/BitcoinArchive/ja/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/)として検討されており、[Pete Rizzo の 2024 年 Bitcoin Magazine 記事](/BitcoinArchive/ja/entries/aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery/)では複数の有力な仮説が整理されている。
