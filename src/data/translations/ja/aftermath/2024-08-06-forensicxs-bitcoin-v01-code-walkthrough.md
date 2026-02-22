---
title: "Bitcoin Core v0.1 コードウォークスルー — 31,794行を分析"
date: 2024-08-06T00:00:00Z
source: aftermath
sourceUrl: "https://www.forensicxs.com/bitcoin-core-v0-1-a-code-walkthrough/"
author: "Forensicxs"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Forensicxsがビットコインv0.1の31,794行のソースコードの包括的な行単位ウォークスルーを公開した。サトシ・ナカモトのオリジナルコードベースの最も詳細な公開分析の一つであり、暗号学、ブロックチェーン操作、ネットワーキング、ウォレット管理、GUIにわたる全31ファイルを網羅した。"
isSatoshi: false
aftermathType: "blog"
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
translationStatus: complete
---

2024年8月6日、サイバーセキュリティ研究者Forensicxsが「Bitcoin Core v0.1: a code walkthrough」を公開した — 2009年1月9日にリリースされたサトシ・ナカモトのオリジナルのビットコインソースコードの包括的な分析である。

**範囲:** Bitcoin v0.1コードベースの全**31,794行**、31ファイルを分析。C++で記述され、MIT X11ライセンスの下でリリースされている。

**主な発見：**

- **コード分布:** wxWidgets GUIの実装が約18,000行（最大の単一コンポーネント）を占めた。ブロックチェーン操作、データベース管理、ネットワーキング、スクリプティングが残りの約13,000行を構成した。

- **アーキテクチャ:** 分析はコードベースを以下のカテゴリに分類した：
  - **暗号学:** Base58アドレスエンコーディング、楕円曲線鍵管理（secp256k1）、SHAハッシュ
  - **ブロックチェーン:** トランザクション検証、ブロック処理、難易度調整（2,016ブロックごと）、初期報酬50 BTCが210,000ブロックごとに半減するマイニング
  - **ネットワーキング:** P2P通信、IRCベースのノード発見、メッセージ処理
  - **ウォレット:** トランザクション管理、コイン選択、残高計算
  - **スクリプトシステム:** プログラマブルなトランザクション条件のためのオペコードを持つForthベースのスタック言語

- **v0.1にハードコードされた技術パラメータ:** コインベース成熟度100ブロック；難易度調整幅25%〜400%；目標ブロック間隔10分。

31,794行というコード行数は、The New Yorkerの2011年10月の記事でJoshua DavisがDan Kaminskyのコード分析で記述した「roughly 31,000 lines」と一致している。
