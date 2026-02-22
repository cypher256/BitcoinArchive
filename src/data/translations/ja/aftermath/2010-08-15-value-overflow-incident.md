---
title: "Value overflow事件 — Block 74638で1,840億BTCが生成される"
date: 2010-08-15T18:08:00Z
source: aftermath
sourceUrl: "https://bitcointalk.org/index.php?topic=822.0"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "整数オーバーフローバグ（CVE-2010-5139）が悪用され、Block 74638の単一トランザクションで184,467,440,737.09551616 BTCが生成された。サトシ・ナカモトは発見から5時間以内に修正を公開し、修正チェーンは15時間以内に無効なチェーンを追い越した。ビットコイン史上最も深刻な危機だった。"
isSatoshi: false
aftermathType: "retrospective"
tags:
  - "overflow-bug"
  - "block-74638"
  - "CVE-2010-5139"
  - "security"
  - "soft-fork"
  - "historic"
secondarySources:
  - name: "Bitcoin Wiki — Value overflow incident"
    url: "https://en.bitcoin.it/wiki/Value_overflow_incident"
  - name: "Blockchain Explorer — Block 74638"
    url: "https://www.blockchain.com/explorer/blocks/btc/74638"
  - name: "Decrypt — The Day Someone Created 184 Billion Bitcoin"
    url: "https://decrypt.co/39750/184-billion-bitcoin-anonymous-creator"
translationStatus: complete
---

2010年8月15日18:08 UTC頃、ビットコイン開発者Jeff GarzikがBlock 74638で異常を発見し、BitcoinTalkフォーラムに投稿した：

> 奇妙な block 74638 — 92233720368.54277039 BTC？UINT64_MAXかな？

Block 74638の単一トランザクションが**184,467,440,737.09551616 BTC**を生成していた — 92,233,720,368.54277039 BTCの出力が2つ — ビットコインの総発行予定量2,100万BTCの約9,000倍である。

**バグの内容:** トランザクション検証コードは個々の出力が非負であることを確認していたが、出力の合計における整数オーバーフローをチェックしていなかった。64ビット符号付き整数の最大値（INT64_MAX ≈ 9.2 × 10¹⁸）に近い2つの出力を足すと負の値にオーバーフローし、検証チェックを通過した：0.5 BTC入力 ≥ -0.01 BTC出力（オーバーフロー後）。

**対応:** 発見から約5時間以内に、サトシはBitcoin version 0.3.10を公開。`CheckTransaction()`に2つの新しいチェックを追加するソフトフォークだった：

1. 各出力はMAX_MONEY（21,000,000 BTC）を超えてはならない
2. すべての出力の合計はMAX_MONEYを超えてはならない

サトシはIRCで投稿した：「URGENT: 重大なオーバーフローバグを修正。全員直ちに0.3.10にアップグレードしてください。」

**結果:** 修正チェーンは事件発生から約15時間後のBlock 74691で無効なチェーンを追い越した。1,840億BTCはブロックチェーンの承認済み履歴から事実上消去された。

この事件は根本的なパラドックスを露呈した。分散型システムが中央集権的な意思決定によって救われたのだ。コミュニティはサトシの指示に疑問なく従った —「サトシがそう言うなら正しいはず」。この矛盾はその後数か月、サトシの心に重くのしかかることになる。
