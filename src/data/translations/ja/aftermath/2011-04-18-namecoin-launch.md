---
title: "Namecoin が最初のアルトコインとしてローンチ — ヴィンセント・ダラムが BitDNS 提案を実装 (2011 年 4 月)"
date: 2011-04-18T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Namecoin"
author: "Vincent Durham"
participants:
  - name: "Vincent Durham"
    slug: "vincent-durham"
description: "ヴィンセント・ダラムが 2011 年 4 月 18 日に Namecoin をローンチ。最初のアルトコインで、BitDNS 提案を実装した分散型の名前登録システム。"
isSatoshi: false
tags:
  - "altcoin"
  - "namecoin"
  - "bitdns"
  - "fork"
  - "merge-mining"
secondarySources:
  - name: "Namecoin — official site"
    url: "https://www.namecoin.org/"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2011-10-13-litecoin-launch
  - aftermath/2013-12-06-dogecoin-launch
---

2011 年 4 月 18 日、ヴィンセント・ダラム — BitcoinTalk のハンドル名 `vinced` を使う開発者 — が Namecoin のジェネシスブロックを公開した。最初のアルトコインで、独立に動作するネットワークを生んだビットコインコードベース最初のフォークである。

Namecoin の設計は [BitcoinTalk の BitDNS スレッド](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-1790/2010-11-14-bitdns-and-generalizing-bitcoin/) から始まった。スレッドはユーザー `appamatto` により 2010 年 11 月 14 日に立てられ、ビットコインを分散型の名前登録システムとして拡張する案を提起していた。検閲も差押えも不可能な、中央集権的 DNS 登録機関への代替である。[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/) 自身もスレッドに参加し、BitDNS はビットコインと採掘作業を共有する別チェーンとして実装できる、と示唆した (後にマージマイニングと呼ばれる手法)。

ダラムはスレッドの想定を超えて先に進めた。Bitcoin Core が名前付け機能を取り込むのを待つのではなく、彼は Bitcoin v0.3 コードベースをフォークし、名前登録の取引型 (`name_new`、`name_firstupdate`、`name_update`) を追加し、2011 年 4 月 18 日に独立のチェーンとしてネットワークをローンチした。

Namecoin のローンチ仕様:

- **コードベース**: Bitcoin v0.3 のフォークに名前記録のオペコードを追加
- **供給上限**: 2,100 万 NMC、ビットコインと同じ排出曲線
- **ブロック時間**: 10 分 (ビットコインと同じ)
- **PoW**: SHA-256 (ビットコインと同じ)
- **マージマイニング**: ブロック 19,200 (2011 年 10 月) で有効化 — ビットコインのマイナーは追加ハッシュレートなしで Namecoin を並行採掘できる

マージマイニングの能力は、Namecoin の設計上もっとも影響を残した選択だった。ビットコインのマイナーに限界費用を発生させないため、Namecoin はビットコインのハッシュレートをセキュリティとして借りられた — ゼロから自前のハッシュレートを構築する必要がない。後続のアルトコインで、ハッシュレート争いを避けつつビットコイン水準のセキュリティを欲するものは、同じ方式を採用した。

Namecoin の主要な機能成果物は `.bit` トップレベルドメインだった — Namecoin 対応の DNS リゾルバ経由でアクセスする、検閲耐性のある命名空間である。普及はニッチに留まった。主要ブラウザーは `.bit` の名前解決を取り込まなかったし、大半のユーザーは通常の閲覧で Namecoin の名前に触れることがなかった。システムは現在も動作しているが、活発な開発はおおむね 2018 年以降縮小している。

Namecoin の意義は、経済的というより構造的なものである。動機を持った開発者であれば誰でもビットコインのコードベースをフォークし、ルールを変更して別チェーンをローンチできる、という型を確立した。これはその後数百のアルトコインを生む型となる。半年後に登場した [Litecoin](/BitcoinArchive/ja/entries/aftermath/2011-10-13-litecoin-launch/) も同じ型の上に立っている。ビットコイン由来チェーンの全系譜は[ビットコイン系譜の分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) に記録されている。
