---
title: "ビットコインのアーキテクチャー進化 — サトシ時代 v0.1 と現行 v27 以降基準の比較"
date: 2009-01-03T00:00:00Z
type: "design"
source: "bitcoin-pdf"
sourceUrl: "https://bitcoin.org/bitcoin.pdf"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "すべてのサブシステムを横断するアーキテクチャー比較: サトシの v0.1（2009 年 1 月）と現行 Bitcoin Core v27 以降を分割図と領域別表で並置する。"
isSatoshi: false
tags:
  - "design"
  - "architecture"
  - "satoshi-tooling"
relatedEntries:
  - design/2009-01-03-bitcoin-system-design-overview
  - analysis/2026-05-24-satoshi-design-vs-current-reality
  - analysis/2009-01-09-satoshi-code-analysis
  - analysis/2009-01-09-satoshi-windows-development-environment
translationStatus: complete
---

## 本ページの位置付け

本ページは[設計文書シリーズ](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-system-design-overview/)の第 9 ページ（L2 第 9 編）— 3 つの横断的深掘りの最初である。各 L1 ページが 1 つのサブシステムを末尾に簡潔な「二時代比較」節を添えて端から端まで検証するのに対して、本ページはそれらの比較を 8 つのドメインすべてにわたって並置し、単一のドメインページでは提供できない分割アーキテクチャー図を追加する。

**範囲。** すべての比較は 2 つの固定参照点を使用する: サトシの v0.1 リリース（2009 年 1 月 3 日）と現行の Bitcoin Core v27 以降基準。中間バージョンは構造的変更を導入した場合にのみ言及する。本ページは社会的・経済的層での設計のずれは扱わない — それらは[設計意図と現実の分析](/BitcoinArchive/ja/entries/analysis/2026-05-24-satoshi-design-vs-current-reality/)で分析される。以下の各節には分割図（左が v0.1、右が v27 以降）と比較表があり、L1 の番号付けに対応する。

## 1. システム全体のアーキテクチャー

v0.1 と v27 以降の間で最も目に見える変化はアーキテクチャーの分解である。サトシはウォレット、マイナー、GUI、検証エンジン、ネットワーク層を単一データベースに支えられた 1 つのプロセスに融合した単一バイナリーを出荷した。現行の Bitcoin Core はこれらの関心事を異なるモジュール、プロセス、ストレージバックエンドに分離している。

```mermaid
flowchart TB
    subgraph V01["v0.1 — monolithic (January 2009)"]
        direction TB
        MONO["Single binary<br/>(bitcoin.exe)"]
        MONO --> GUI_0["Built-in GUI<br/>(wxWidgets)"]
        MONO --> MINE_0["Built-in CPU miner"]
        MONO --> VALID_0["Validation + relay"]
        MONO --> WALL_0["Wallet (random keys)"]
        MONO --> BDB["Berkeley DB<br/>(all state in one DB)"]
    end

    subgraph V27["v27+ — modular"]
        direction TB
        NODE["bitcoind<br/>(node)"]
        NODE --> P2P_N["P2P network layer"]
        NODE --> VALID_N["Validation engine"]
        NODE --> MEMPOOL_N["Mempool"]
        NODE --> STORE_N["Storage layer"]
        STORE_N --> LEVEL["LevelDB<br/>(UTXO set + block index)"]
        STORE_N --> FLAT["Flat files<br/>(blk*.dat / rev*.dat)"]
        WALL_N["bitcoin-wallet<br/>(optional separate process)"]
        WALL_N --> SQL["SQLite<br/>(descriptor wallet)"]
        NODE -- "IPC" --- WALL_N
        QT["bitcoin-qt<br/>(optional GUI)"]
        NODE --- QT
        EXT_MINE["External miner<br/>(via getblocktemplate /<br/>Stratum v2)"]
        NODE --- EXT_MINE
    end
```

| 側面 | v0.1（2009 年 1 月） | v27 以降基準 |
|---|---|---|
| **バイナリー** | 単一実行ファイル: ウォレット + マイナー + GUI + ノード | `bitcoind`（ノード）、`bitcoin-wallet`（ウォレット）、`bitcoin-qt`（GUI）— 別々のバイナリー |
| **プロセスモデル** | 1 プロセス、1 アドレス空間 | ノードとウォレットを別プロセスとして実行可能（IPC は Cap'n Proto 経由） |
| **データベース** | Berkeley DB ですべての永続状態を管理 | LevelDB（UTXO セット、ブロックインデックス）+ フラットファイル（ブロック）+ SQLite（ウォレット） |
| **マイニング** | 内部 CPU マイナー、同一プロセス | `getblocktemplate`（BIP 22/23）経由の外部化; エコシステムでは Stratum v2 |
| **インターフェース** | リリース時はなし; 直後に基本的な JSON-RPC を追加 | JSON-RPC（完全な読み書き）、REST（読み取り専用）、ZMQ（プッシュ通知） |
| **暗号ライブラリー** | OpenSSL ですべての操作 | libsecp256k1（ECDSA/シュノア署名）、ハードウェアアクセラレーション付き内部 SHA-256 |

## 2. ネットワーク層

```mermaid
flowchart LR
    subgraph V01_NET["v0.1 — network"]
        direction TB
        IRC["IRC ブートストラップ<br/>(#bitcoin on lfnet.org)"]
        ADDR_0["addr messages<br/>(IPv4 only)"]
        FULL_BLK["Full block relay<br/>(~1 MB per peer)"]
        PLAIN["Plaintext TCP"]
        PEER_0["8 outbound peers"]
    end

    subgraph V27_NET["v27+ — network"]
        direction TB
        DNS["DNS seed ブートストラップ"]
        ADDRV2["addr / addrv2<br/>(IPv4, IPv6, Tor,<br/>I2P, CJDNS)"]
        COMPACT["Compact block relay<br/>(BIP 152, ~20 kB)"]
        ENC["Encrypted transport<br/>(BIP 324, ChaCha20)"]
        PEER_N["8 full-relay +<br/>2 block-relay-only +<br/>feeler + anchor"]
    end
```

| 機能 | v0.1 | v27 以降基準 | 主要な BIP / バージョン |
|---|---|---|---|
| **ピア発見** | IRC チャネル + `addr` | DNS シード + `addrv2` + `peers.dat` キャッシュ | BIP 155（addrv2、v22） |
| **アドレス種別** | IPv4 のみ | IPv4、IPv6、Tor v3、I2P、CJDNS | BIP 155 |
| **アウトバウンドピア** | 8 フルリレー | 8 フルリレー + 2 ブロックリレー専用 + フィーラー + アンカー | v19 以降（ブロックリレー専用） |
| **ブロック中継** | 全ブロックを各ピアに送信（約 1–2 MB） | コンパクトブロック: ヘッダー + 短縮 ID（約 20 kB） | BIP 152（v0.13） |
| **トランスポート** | 平文 TCP | 日和見暗号化トランスポート（ChaCha20-Poly1305） | BIP 324（v26、v27 でデフォルト） |
| **初期同期** | 逐次: ブロックを 1 つずつ | ヘッダー優先: 並列ブロックダウンロード | v0.10 |
| **日食攻撃耐性** | 最小限 | アウトバウンドローテーション、多様な追い出し、アンカーピア、ブロックリレー専用ピア | v19 以降 |

*詳細: [L1 第 1 編 — P2P ネットワーク設計](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-p2p-network-design/)*

## 3. トランザクション層

```mermaid
flowchart LR
    subgraph V01_TX["v0.1 — transaction"]
        direction TB
        LEG["Legacy format<br/>(version + inputs +<br/>outputs + locktime)"]
        ECDSA_0["ECDSA only<br/>(OpenSSL)"]
        P2PK_0["P2PK, P2PKH"]
        SIG_0["Signatures in<br/>scriptSig<br/>(70–72 bytes DER)"]
        MALL["Malleable txid"]
    end

    subgraph V27_TX["v27+ — transaction"]
        direction TB
        SEG["SegWit format<br/>(+ marker/flag +<br/>witness field)"]
        SIG_N["ECDSA + Schnorr<br/>(libsecp256k1)"]
        TYPES["P2PKH, P2SH, P2WPKH,<br/>P2WSH, P2TR"]
        WIT["Signatures in witness<br/>(Schnorr: 64 bytes fixed)"]
        FIXED["Non-malleable txid<br/>(witness excluded)"]
    end
```

| 機能 | v0.1 | v27 以降基準 | 主要な BIP / バージョン |
|---|---|---|---|
| **形式** | レガシー: バージョン + 入力 + 出力 + ロックタイム | SegWit: + マーカー/フラグ + Witness | BIP 141（2017） |
| **トランザクション ID** | 完全なシリアライズ済みトランザクションの SHA-256d | `txid` は Witness を除外; `wtxid` は含む | BIP 141 |
| **展性** | あり — 第三者が scriptSig を変更可能 | 修正済み — Witness が txid から除外 | BIP 141 |
| **スクリプト種別** | P2PK、P2PKH | P2PKH、P2SH、P2WPKH、P2WSH、P2TR | BIP 16、141、341 |
| **署名方式** | ECDSA（OpenSSL 経由） | ECDSA + シュノア署名（libsecp256k1 経由） | BIP 340（2021） |
| **オペコード** | 完全セット（後に無効化されたものを含む） | 縮小セット; Tapscript が選択されたオペコードを再有効化 | BIP 342 |
| **タイムロック** | 絶対ロックタイムのみ | 絶対 + 相対（BIP 68）+ スクリプトレベル（`OP_CLTV`、`OP_CSV`） | BIP 65、68、112、113 |
| **手数料置換** | 未実装; 先着順 | 完全 RBF がデフォルト | BIP 125（v24 デフォルト、v28 必須） |
| **コイン選択** | 単純な最大額優先 | BnB + ナップサック + 単一ランダム抽選; 無駄指標 | v27 以降 |

*詳細: [L1 第 2 編 — トランザクション設計](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-transaction-design/)*

## 4. ブロックとチェーン層

```mermaid
flowchart LR
    subgraph V01_BLK["v0.1 — block structure"]
        direction TB
        HDR_0["80-byte header<br/>(version 1)"]
        MERK_0["Single Merkle tree<br/>(full serialized txs)"]
        SIZE_0["No explicit size limit<br/>(1 MB added mid-2010)"]
        SIGOP_0["20,000 sigops/block"]
    end

    subgraph V27_BLK["v27+ — block structure"]
        direction TB
        HDR_N["80-byte header<br/>(BIP 9 version-bits)"]
        MERK_N["Primary Merkle tree +<br/>witness commitment<br/>(in coinbase OP_RETURN)"]
        WEIGHT["4 MWU weight limit<br/>(~1.5–2 MB observed)"]
        SIGOP_N["80,000 sigops/block<br/>(weight-adjusted)"]
    end
```

| 機能 | v0.1 | v27 以降基準 | 主要な BIP / バージョン |
|---|---|---|---|
| **ヘッダー形式** | 80 バイト、バージョン 1 | 80 バイト、同一構造; BIP 9 シグナリングビット | BIP 9 |
| **ブロックバージョン** | 常に 1 | バージョンビット（`0x20000000` ベース + シグナルビット） | BIP 9（2016） |
| **マークルツリー** | 完全なシリアライズ済みトランザクション上の単一ツリー | プライマリーツリー（ストリップ済みトランザクション）+ コインベース内の Witness コミットメント | BIP 141 |
| **サイズ制限** | v0.1 では制限なし; 2010 年に 1 MB 追加 | 4 MWU ウェイト制限 | BIP 141（2017） |
| **Witness ディスカウント** | 存在しない | Witness バイトは 1/4 ウェイト（1 WU 対 4 WU） | BIP 141 |
| **コインベースデータ** | 最大 100 バイトの任意データ | BIP 34: ブロック高の接頭辞が必須 | BIP 34（2013） |
| **署名操作制限** | ブロックあたり 20,000 | ブロックあたり 80,000（ウェイト調整済み）; Tapscript のカウント方法は異なる | BIP 141、342 |

*詳細: [L1 第 3 編 — ブロックとチェーンの設計](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-block-chain-design/)*

## 5. コンセンサス層

```mermaid
flowchart LR
    subgraph V01_CON["v0.1 — consensus"]
        direction TB
        POW_0["SHA-256d proof of work"]
        DIFF_0["Difficulty adjustment<br/>(every 2,016 blocks,<br/>off-by-one bug)"]
        CHAIN_0["Most-work chain<br/>(nChainWork)"]
        ACT_0["Flag-day activation<br/>(direct code change)"]
        CHECK_0["Hardcoded checkpoints<br/>(anti-DoS)"]
    end

    subgraph V27_CON["v27+ — consensus"]
        direction TB
        POW_N["SHA-256d proof of work<br/>(unchanged)"]
        DIFF_N["Same algorithm<br/>(off-by-one preserved<br/>as consensus rule)"]
        CHAIN_N["Most-work chain<br/>(hardened nChainWork)"]
        ACT_N["BIP 9 versionbits /<br/>BIP 8 Speedy Trial"]
        ASSUME["assumevalid<br/>(skip script verification<br/>below trusted hash)"]
    end
```

| 機能 | v0.1 | v27 以降基準 | 主要な BIP / バージョン |
|---|---|---|---|
| **ハッシュ関数** | SHA-256d（二重 SHA-256） | 同一 | — |
| **チェーン選択** | 最多ワークチェーン（`nChainWork`） | 同一ルール; 永続的追跡が堅牢化 | — |
| **難易度調整** | 2,016 ブロックごと; オフバイワンバグ | 同一アルゴリズム; バグは保存（修正 = ハードフォーク） | — |
| **ソフトフォーク有効化** | 直接コード変更（フラグデイ） | BIP 9 バージョンビット / BIP 8 高速試行 | BIP 9、BIP 8 |
| **スクリプト検証** | scriptSig + scriptPubKey の結合実行 | 分離評価; SegWit Witness プログラム; Tapscript | BIP 141、342 |
| **タイムスタンプルール** | 前ブロックのタイムスタンプより大きい | 中央値タイムパスト (MTP): 直前 11 ブロックの中央値より大きい | BIP 113 |
| **チェックポイント** | ハードコードされたブロックハッシュ | `assumevalid` がチェックポイント機能の大部分を置換 | v0.14 以降 |

*詳細: [L1 第 4 編 — コンセンサス設計](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-consensus-design/)*

## 6. 貨幣・インセンティブ層

```mermaid
flowchart LR
    subgraph V01_MON["v0.1 — monetary"]
        direction TB
        SUB_0["50 BTC subsidy<br/>(era 0)"]
        FREE_0["Most transactions free<br/>(priority by coin age)"]
        MINE_0["Internal CPU miner"]
        TMPL_0["Trivial block template"]
    end

    subgraph V27_MON["v27+ — monetary"]
        direction TB
        SUB_N["3.125 BTC subsidy<br/>(era 4, post-halving 2024)"]
        FEE_N["Fee-rate auction<br/>(sat/vB)"]
        MINE_N["External miner via<br/>getblocktemplate / Stratum v2"]
        TMPL_N["Fee-rate-sorted template<br/>with SegWit weight accounting"]
    end
```

| 機能 | v0.1 | v27 以降基準 | 主要な BIP / バージョン |
|---|---|---|---|
| **総供給量上限** | 20,999,999.9769 BTC | 同一 — コンセンサスで凍結された定数 | — |
| **補助金計算** | `nSubsidy >>= (nHeight / 210000)` | 同一の演算; シフト 64 以上のゼロガード | — |
| **手数料の挙動** | 大半のトランザクションは無料; コイン年齢による優先度 | 手数料率オークション（sat/vB）; コイン年齢優先度は廃止 | — |
| **CPFP** | 未実装 | 祖先認識メモリープール; パッケージ評価 | v0.13 以降 |
| **ブロックテンプレート** | 内部マイナー; 素朴な順序 | `getblocktemplate`（BIP 22/23）; 手数料率順ソート | BIP 22、23 |
| **Witness ディスカウント** | 存在しない | Witness バイトは 1/4 ウェイト | BIP 141 |

*詳細: [L1 第 5 編 — 貨幣設計](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-monetary-design/)*

## 7. 暗号層

```mermaid
flowchart LR
    subgraph V01_CRYPTO["v0.1 — cryptography"]
        direction TB
        OPENSSL["OpenSSL<br/>(all operations)"]
        ECDSA_V0["ECDSA only"]
        UNCOMP["Uncompressed<br/>public keys<br/>(65 bytes)"]
        DER_V0["DER encoding<br/>(variable, 70–72 bytes)"]
        NONCE_V0["OpenSSL PRNG<br/>ナンス generation"]
        ADDR_V0["Base58Check<br/>(P2PKH: 1...)"]
        KEY_V0["Random key pool<br/>(non-deterministic)"]
    end

    subgraph V27_CRYPTO["v27+ — cryptography"]
        direction TB
        LIBSECP["libsecp256k1<br/>(constant-time, audited)"]
        SCHNORR["ECDSA + Schnorr"]
        COMP["Compressed keys<br/>(33 bytes);<br/>x-only (32 bytes, Taproot)"]
        SIG_ENC["DER (ECDSA) +<br/>fixed 64-byte (Schnorr)"]
        NONCE_N["RFC 6979 deterministic<br/>(ECDSA); BIP 340 synthetic<br/>(Schnorr)"]
        ADDR_N["Base58Check + Bech32<br/>(bc1q...) + Bech32m<br/>(bc1p...)"]
        KEY_N["HD derivation<br/>(BIP 32/39/44/84/86);<br/>descriptor wallets"]
    end
```

| 機能 | v0.1 | v27 以降基準 | 主要な BIP / バージョン |
|---|---|---|---|
| **暗号ライブラリー** | OpenSSL | libsecp256k1（定時間演算、公式レビュー済み） | v0.10（2015） |
| **署名方式** | ECDSA のみ | ECDSA（レガシー/SegWit v0）+ シュノア署名（Taproot） | BIP 340（2021） |
| **鍵形式** | 非圧縮公開鍵（65 バイト） | 圧縮（33 バイト）; x-only（32 バイト、Taproot） | BIP 340 |
| **署名展性** | あり — `s` 値を変更可能 | Low-S ルール（BIP 146）で ECDSA を制限; シュノア署名は展性なし | BIP 146 |
| **ナンス生成** | OpenSSL 擬似乱数生成器 | RFC 6979 決定性（ECDSA）; BIP 340 合成（シュノア署名） | RFC 6979 |
| **ハッシュ関数** | SHA-256、SHA-256d、RIPEMD-160（OpenSSL 経由） | 同一アルゴリズム; ハードウェアアクセラレーション付き内部実装（SHA-NI、ARMv8-A） | — |
| **署名ハッシュアルゴリズム** | レガシー署名ハッシュ（入力数に対して二次的） | BIP 143（SegWit v0、線形）+ BIP 341（Taproot、エポックタグ付き） | BIP 143、341 |

*詳細: [L1 第 6 編 — 暗号設計](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-cryptography-design/)*

## 8. ストレージ層

```mermaid
flowchart LR
    subgraph V01_STORE["v0.1 — storage"]
        direction TB
        BDB_S["Berkeley DB<br/>(all state in one DB)"]
        FULL_TX["Full transactions stored<br/>(spent + unspent)"]
        NO_UNDO["No undo data<br/>(reorg = re-validate<br/>from fork point)"]
        NO_PRUNE["No pruning<br/>(store everything)"]
    end

    subgraph V27_STORE["v27+ — storage"]
        direction TB
        MULTI_S["LevelDB (UTXO set +<br/>block index) + flat files<br/>(blocks + undo data)"]
        UTXO_ONLY["Unspent outputs only<br/>(outpoint-indexed)"]
        UNDO_S["Dedicated undo files<br/>(rev*.dat for fast rollback)"]
        PRUNE_S["Pruning (min 550 MiB) +<br/>assumeUTXO ブートストラップ"]
    end
```

| 機能 | v0.1 | v27 以降基準 | 主要バージョン |
|---|---|---|---|
| **主要データベース** | Berkeley DB（すべての状態） | LevelDB（UTXO セット + ブロックインデックス）; フラットファイル（ブロック） | v0.8（2013） |
| **UTXO ストレージ** | 使用済みフラグベクトル付きの完全なトランザクション | 未使用出力のみ; アウトポイント索引、コンパクトシリアライズ | v0.8 |
| **コインキャッシュ** | 分離キャッシュなし; BDB が読み書きを処理 | 専用メモリー上ライトバックキャッシュ（デフォルト 450 MiB） | v0.15 以降 |
| **ブロック保存** | 単一 BDB データベース | 順次フラットファイル（`blk*.dat`、各約 128 MiB） | v0.8 |
| **アンドゥデータ** | 保存なし; 再編成 = フォークポイントからの再検証 | 専用 `rev*.dat` ファイルで高速ロールバック | v0.8 |
| **剪定** | 不可 | 利用可能; 最低保持量 550 MiB | v0.11（2015） |
| **assumeUTXO** | なし | スナップショットベースのブートストラップ、バックグラウンド検証付き | v27 以降 |
| **ディスクサイズ** | 無視できる程度（チェーンが極めて小さかった） | アーカイブで約 650 GB 以上; 剪定で約 10 GB; コイン DB で約 7 GB | — |

*詳細: [L1 第 7 編 — ストレージ設計](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-storage-design/)*

## 9. ウォレットとインターフェース層

```mermaid
flowchart LR
    subgraph V01_WALL["v0.1 — wallet"]
        direction TB
        EMBED["Embedded in node binary<br/>(no interface boundary)"]
        RAND_K["Random key pool<br/>(100 independent keys)"]
        BDB_W["Berkeley DB<br/>(wallet.dat)"]
        BACKUP["Backup = export file<br/>(new keys after backup<br/>are unrecoverable)"]
        NO_FEE["No fee estimation<br/>(transactions free)"]
    end

    subgraph V27_WALL["v27+ — wallet"]
        direction TB
        SEP["Optional separate process<br/>(IPC via Cap'n Proto)"]
        DESC["Descriptor wallets<br/>(deterministic derivation)"]
        SQLITE["SQLite<br/>(wallet.dat, new format)"]
        SEED["One-time seed backup<br/>(covers all derived keys)"]
        EST["Fee estimation +<br/>RBF + PSBT workflow"]
    end
```

| 機能 | v0.1 | v27 以降基準 | 主要な BIP / バージョン |
|---|---|---|---|
| **アーキテクチャー** | 単一バイナリーに組み込み | 論理的に分離; オプションで IPC 経由の別プロセス | v27 以降 |
| **鍵生成** | ランダム鍵プール（100 個の独立した鍵） | 記述子ウォレット: マスターシードからの決定性導出 | BIP 380 以降（v23 でデフォルト） |
| **鍵ストレージ** | Berkeley DB（`wallet.dat`） | SQLite（新形式の `wallet.dat`） | v26（新規ウォレットで BDB 非推奨） |
| **バックアップモデル** | 新しい鍵の生成後に毎回ファイルをエクスポート | 記述子バックアップがすべての導出鍵をカバー（生の BIP 32 シード、BIP 39 ではない） | BIP 32 + 記述子 |
| **署名** | 内部、同一プロセス | 内部、PSBT（BIP 174/370）、またはハードウェアウォレット（HWI 経由） | BIP 174（2018） |
| **マルチデバイス署名** | サポートなし | PSBT ワークフロー: 作成 → 更新 → 署名 → 結合 → 完成 | BIP 174、370 |
| **手数料引き上げ** | 不可 | 手数料置換（`bumpfee`）、CPFP | BIP 125 |
| **インターフェース** | リリース時はなし; 直後に基本的な JSON-RPC を追加 | JSON-RPC（完全）、REST（読み取り専用）、ZMQ（プッシュ通知） | — |
| **プロセスモデル** | モノリシック（ウォレット + ノード + マイナー + GUI） | モジュラー: `bitcoind`、`bitcoin-wallet`、`bitcoin-qt` | v27 以降 |

*詳細: [L1 第 8 編 — ウォレット設計](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-wallet-design/)*

## 10. 構造的移行タイムライン

```mermaid
timeline
    title Architectural milestones: v0.1 → v27+
    section 2009–2010
        v0.1 (Jan 2009) : Monolithic binary, BDB, IRC, CPU miner, OpenSSL
        1 MB limit (Sep 2010) : Block-size cap, opcodes disabled
    section 2012–2013
        v0.8 (Mar 2013) : BDB → LevelDB, flat block files, undo data
    section 2015–2017
        v0.10 (2015) : Headers-first sync, libsecp256k1
        SegWit — BIP 141 (Aug 2017) : Witness field, 4 MWU, non-malleable txid
    section 2018–2021
        BIP 174 (2018) : PSBT workflow
        Taproot — BIP 341 (Nov 2021) : Schnorr, tapscript, key/script-path
    section 2023–2025
        v26 (2023) : BIP 324 encrypted transport, BDB deprecated
        v27 baseline (2024) : assumeUTXO snapshot sync
        v28 (2024) : full RBF default
```

## 11. 変わったものと変わらなかったもの

15 年にわたる開発が実装を一変させたが、コンセンサスの核心は正確にサトシが出荷したまま残っている。

**v0.1 以来不変のもの:** SHA-256d プルーフオブワーク -- 最多ワークチェーン選択 -- 2,016 ブロック難易度調整（オリジナルのオフバイワンバグを含む） -- UTXO モデル -- 2,100 万枚の供給上限 -- 210,000 ブロック半減期 -- コインベース成熟期間（100 ブロック） -- secp256k1 曲線 -- 10 分のターゲットブロック間隔 -- 許可不要の参加。

**v0.1 以来変革されたもの:** ストレージエンジン（BDB → LevelDB + フラットファイル + SQLite） -- 暗号ライブラリー（OpenSSL → libsecp256k1） -- 署名方式（ECDSA のみ → ECDSA + シュノア署名） -- ブロック容量（制限なし → 1 MB → 4 MWU） -- トランザクション形式（レガシー → SegWit） -- スクリプトシステム（全オペコード + 結合実行 → 縮小セット + 分離評価 + Tapscript） -- 鍵管理（ランダムプール → HD 導出 + 記述子） -- ピアトランスポート（平文 → 暗号化） -- ピア発見（IRC → DNS シード + addrv2） -- マイニングインターフェース（内部 CPU → getblocktemplate 経由の外部化） -- 初期同期（逐次 → ヘッダー優先 + assumeUTXO） -- 手数料市場（無料 → RBF/CPFP 付き手数料率オークション） -- プロセスアーキテクチャー（モノリシック → モジュラー） -- ソフトフォーク有効化（フラグデイ → BIP 9/8）。

## 12. 本ページの範囲

本ページはすべてのドメインにわたって 2 つの参照点を比較するが、ドメインページの代替にはならない。各サブシステムの完全な解説は、上記各節の末尾にリンクした L1 ページを参照。

範囲外: **社会的・経済的なずれ**（マイニングの集中化、カストディー、ガバナンス、スケーリング — [設計意図と現実の分析](/BitcoinArchive/ja/entries/analysis/2026-05-24-satoshi-design-vs-current-reality/)を参照）-- **セキュリティーモデル**（脅威分析、51% 攻撃の経済学 — [L2 第 11 編セキュリティーモデル](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-security-model/)を参照）-- **エコシステム**（Lightning、サイドチェーン、Ordinals — [L2 第 10 編エコシステム](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-ecosystem-design/)を参照）-- **サトシのコーディングスタイル**（[サトシのコード分析](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-code-analysis/)と [Windows 開発環境](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-windows-development-environment/)エントリーを参照）。
