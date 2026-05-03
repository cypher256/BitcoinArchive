---
title: "Bitcoin Core v0.1 コードウォークスルー — Forensicxs による 31,794 行分析"
date: 2024-08-06T00:00:00Z
type: "article"
source: "forensicxs"
sourceUrl: "https://www.forensicxs.com/bitcoin-core-v0-1-a-code-walkthrough/"
author: "Forensicxs"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Forensicxs がビットコイン v0.1 の 31,794 行を行単位でウォークスルー。サトシのオリジナルコードベースに対する最も詳細な公開分析の一つで、全 31 ファイルを網羅。"
isSatoshi: false
tags:
  - "bitcoin-v0.1"
  - "source-code"
  - "code-analysis"
  - "forensicxs"
  - "technical"
secondarySources:
  - name: "GitHub — Original Bitcoin v0.1 Source (trottier)"
    url: "https://github.com/trottier/original-bitcoin"
  - name: "Satoshi Nakamoto Institute — Code"
    url: "https://satoshi.nakamotoinstitute.org/code/"
relatedEntries:
  - "analysis/2009-01-09-satoshi-code-analysis"
  - "analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies"
  - "analysis/2009-01-03-genesis-block-hardcode-analysis"
  - "analysis/2008-10-31-satoshi-anonymity-architecture"
  - "forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style"
translationStatus: complete
---

2024年8月6日、サイバーセキュリティ研究者Forensicxsが「Bitcoin Core v0.1: a code walkthrough」を公開した — [2009年1月9日にリリースされた](/BitcoinArchive/ja/entries/sourceforge/2009-01-09-bitcoin-v01-released/)[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)のオリジナルのビットコインソースコードの包括的な分析である。

**範囲:** Forensicxs は Bitcoin v0.1 コードベースを **31,794 行**（31 ファイル）として分析している。C++ で記述され、MIT X11 ライセンスの下でリリースされている。なお本アーカイブのソースコード分析では、ローカル一次ソース上の v0.1 系 C++/ヘッダー行数は約 19,901 行、v0.3.19 までの成長で 31,909 行として扱う。したがって 31,794 行は Forensicxs 記事内のカウントであり、本アーカイブの基準値ではない（カウント対象ファイル・空行・コメント・wxWidgets ヘッダー扱いなどの差で値がずれる）。

**主な発見：**

- **コード分布:** wxWidgets GUIの実装が約18,000行（最大の単一コンポーネント）を占めた。ブロックチェーン操作、データベース管理、ネットワーキング、スクリプティングが残りの約13,000行を構成した。

- **アーキテクチャ:** 分析はコードベースを以下のカテゴリに分類した：
  - **暗号学:** Base58アドレスエンコーディング、楕円曲線鍵管理（secp256k1）、SHAハッシュ
  - **ブロックチェーン:** トランザクション検証、ブロック処理、難易度調整（2,016ブロックごと）、初期報酬50 BTCが210,000ブロックごとに半減するマイニング
  - **ネットワーキング:** P2P通信、IRCベースのノード発見、メッセージ処理
  - **ウォレット:** トランザクション管理、コイン選択、残高計算
  - **スクリプトシステム:** プログラマブルなトランザクション条件のためのオペコードを持つForthベースのスタック言語

- **v0.1にハードコードされた技術パラメーター:** コインベース成熟度100ブロック、難易度調整幅25%〜400%、目標ブロック間隔10分。

31,794行というコード行数は、The New Yorkerの2011年10月の記事でジョシュア・デイヴィスがダン・カミンスキーのコード分析で記述した「roughly 31,000 lines」と一致している。
