---
title: "ビットコインのシステム設計概観 — 全体構造、データフロー、設計文書索引"
date: 2009-01-03T00:00:00Z
type: "design"
source: "bitcoin-pdf"
sourceUrl: "https://bitcoin.org/bitcoin.pdf"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ビットコインの全体構造、レイヤーモデル、データフローの俯瞰図。12 ページからなる設計文書シリーズへの入口。"
isSatoshi: false
tags:
  - "architecture"
  - "system-overview"
  - "analysis"
relatedEntries:
  - "emails/cryptography/2008-10-31-bitcoin-whitepaper-final"
  - "analysis/2026-05-23-how-bitcoin-works-visual-glossary"
  - "analysis/2008-10-31-bitcoin-design-lineage"
  - "analysis/2026-05-24-satoshi-design-vs-current-reality"
  - "analysis/2009-01-09-satoshi-code-analysis"
  - "aftermath/2009-01-03-genesis-block"
  - "design/2009-01-03-bitcoin-transaction-design"
  - "design/2009-01-03-bitcoin-block-chain-design"
  - "design/2009-01-03-bitcoin-consensus-design"
  - "design/2009-01-03-bitcoin-p2p-network-design"
  - "design/2009-01-03-bitcoin-monetary-design"
  - "design/2009-01-03-bitcoin-cryptography-design"
  - "design/2009-01-03-bitcoin-storage-design"
  - "design/2009-01-03-bitcoin-wallet-design"
  - "design/2009-01-03-bitcoin-architecture-evolution"
  - "design/2009-01-03-bitcoin-ecosystem-design"
  - "design/2009-01-03-bitcoin-security-model"
inlineLinkKeywords:
  - "ビットコインシステム設計"
  - "設計文書シリーズ"
  - "ビットコインアーキテクチャー"
  - "ビットコインレイヤーモデル"
translationStatus: complete
---

![暗い背景の技術図で、光る六角形のハブがユーザー・ピアノード・マイナーの各アイコンとつながっている。その脇には 5 層の帯状パネルが積み重なり、連結したブロックのアイコン列と、下部には円形ノードが並ぶ 6 段階のパイプラインが描かれている。](/BitcoinArchive/images/analysis/2009-01-03-bitcoin-system-design-overview-hero.png)

## 本文書シリーズについて

これは Bitcoin Institute が執筆したビットコインの技術設計書であり、システムを構成要素に分解してそれらがどのように組み合わさるかを説明する全 12 ページのシリーズである。プロトコル仕様ではなく、規範的な権威を持つものでもない。[ホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/2008-10-31-bitcoin-whitepaper-final/)、[仕組み図解](/BitcoinArchive/ja/entries/analysis/2026-05-23-how-bitcoin-works-visual-glossary/)、および参照実装のソースコードを補完する分析的ガイドである。

**基準線。** 特に断りのない限り、「現行の Bitcoin Core」は v27 以降のコードベースを指す。サトシ時代の記述は v0.1（2009 年 1 月）を指す。両者の挙動が異なる場合は、両方を記す。

**範囲。** 本シリーズはビットコインのプロトコルとその参照実装を対象とする。レイヤー 2 システム（Lightning Network、サイドチェーン）やアプリケーション層のソフトウェア（ウォレット、取引所、インデクサー）は接続境界で言及するが、詳細な分解は行わない。

本ページは設計文書シリーズの **L0 — システム全体設計** である。システム全体像を示し、各ドメインページへのリンクを提供する。

## 1. システム構造

以下の図は主要なサブシステムとそれらの間のデータパスを示す。各ボックスはシリーズ内の 1 つ以上のページに対応する。

```mermaid
graph TB
    subgraph External["外部アクター"]
        User["ユーザー / ウォレット"]
        Peer["ピアノード"]
        Miner["マイナー"]
    end

    subgraph Node["フルノード"]
        NET["ネットワーク層<br/>（P2P メッセージ処理）"]
        MEMPOOL["メモリープール<br/>（未承認 tx プール）"]
        VALID_TX["トランザクション検証"]
        VALID_BLK["ブロック検証"]
        CONSENSUS["合意エンジン<br/>（最多ワークチェーン<br/>選択）"]
        CHAIN["チェーン状態<br/>（UTXO セット + ブロックインデックス）"]
        STORE["ストレージ層<br/>（ブロックと undo データのディスク保存）"]
        SCRIPT["スクリプト<br/>インタープリター<br/>（署名 + ロック検証）"]
        POLICY["ポリシーフィルター<br/>（中継 / メモリープールルール）"]
    end

    User -- "tx 配信" --> NET
    Peer -- "ブロック / tx / addr" --> NET
    Miner -- "ブロック提出" --> NET

    NET --> POLICY
    POLICY --> VALID_TX
    VALID_TX --> SCRIPT
    VALID_TX -- "受理" --> MEMPOOL
    MEMPOOL -- "ブロックテンプレート" --> Miner

    NET -- "新ブロック" --> VALID_BLK
    VALID_BLK --> SCRIPT
    VALID_BLK --> CONSENSUS
    CONSENSUS --> CHAIN
    CHAIN --> STORE
```

| サブシステム | 役割 | 設計ページ |
|---|---|---|
| ネットワーク層 | P2P ゴシップ、ピア管理、メッセージ直列化 | [L1 #1 P2P](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-p2p-network-design/) |
| トランザクション層 | UTXO モデル、スクリプト、入力/出力、署名 | [L1 #2 トランザクション](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-transaction-design/) |
| ブロック/チェーン層 | ヘッダー、マークルツリー、チェーン構造、コインベース | [L1 #3 ブロック/チェーン](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-block-chain-design/) |
| 合意形成エンジン | PoW、難易度調整、フォーク処理、検証 | [L1 #4 合意形成](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-consensus-design/) |
| 貨幣層 | 発行計画、手数料市場、マイナーのインセンティブ | [L1 #5 貨幣](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-monetary-design/) |
| 暗号層 | 鍵、署名、ハッシュ、アドレス導出 | [L1 #6 暗号](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-cryptography-design/) |
| ストレージ層 | ブロックファイル、UTXO データベース、チェーン状態 | [L1 #7 ストレージ](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-storage-design/) |
| ウォレット/インターフェース | 鍵管理、コイン選択、PSBT、RPC | [L1 #8 ウォレット](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-wallet-design/) |

## 2. レイヤーモデル

ビットコインの設計は 5 つの層に積層される。各層はその下の層にのみ依存する。

```mermaid
flowchart TB
    APP["アプリケーション層<br/>ウォレット、<br/>エクスプローラー、<br/>Lightning、<br/>取引所"]
    TXN["トランザクション層<br/>UTXO モデル、<br/>Script、署名"]
    CONS["合意層<br/>ブロック検証、<br/>最多ワークチェーン、<br/>難易度調整"]
    NET["ネットワーク層<br/>P2P ゴシップ、ピア発見、<br/>メッセージ中継"]
    STORE["ストレージ層<br/>ブロックファイル、<br/>UTXO データベース、<br/>チェーンインデックス"]

    APP --> TXN
    TXN --> CONS
    CONS --> NET
    CONS --> STORE
```

| 層 | 決定する内容 | 主要データ構造 |
|---|---|---|
| **アプリケーション** | ユーザー向けの挙動: アドレス生成、コイン選択、手数料推定、ペイメントチャネル | HD 鍵ツリー (BIP 32/44/84)、PSBT |
| **トランザクション** | 有効な支払いの形式: 入力、出力、ロックスクリプト、証人データ | `CTxIn`、`CTxOut`、`CScript`、証人スタック |
| **合意形成** | どのブロックが受理され、どのチェーン先端が勝つか | ブロックヘッダー、マークルツリー、難易度ターゲット、`nChainWork` |
| **ネットワーク** | ノードが互いを発見しデータを交換する方法 | `version`、`inv`、`getdata`、`block`、`tx` メッセージ |
| **ストレージ** | 検証済みデータのディスク永続化と取得方法 | LevelDB (UTXO 集合)、`blk*.dat` / `rev*.dat` フラットファイル |

## 3. データフロー: トランザクションからブロックチェーンへ

以下のシーケンスは、ユーザーが署名した 1 件のトランザクションが承認の下に埋まるまでの経路を追う。

```mermaid
sequenceDiagram
    participant W as ウォレット
    participant N1 as ノード A
    participant N2 as ノード B
    participant M as マイナー
    participant BC as ブロックチェーン

    W->>N1: 署名済みトランザクションを配信
    N1->>N1: ポリシー検査（手数料、サイズ、標準スクリプト）
    N1->>N1: 検証（UTXO 存在、署名正当、二重支払いなし）
    N1->>N1: メモリープールに受理

    N1->>N2: inv → getdata → tx で中継
    N2->>N2: 独立に検証
    N2->>N2: メモリープールに受理

    M->>M: メモリープールからブロックテンプレートを構築
    M->>M: プルーフオブワークを解く（ナンスを反復）
    M->>N1: 新ブロックを配信

    N1->>N1: ブロック検証（ヘッダー PoW、全 tx、マークルルート）
    N1->>N1: UTXO セット更新、チェーン状態延長
    N1->>N2: ブロック中継

    N2->>N2: 検証してチェーン延長

    Note over BC: トランザクションが 1 承認
    Note over BC: 以後のブロックごとに 1 承認が加算
```

**このフローに見える主要な設計特性:**

- **中央のチェックポイントが存在しない。** すべてのノードが独立して検証する。すなわち、トランザクションが通過しなければならない権威者は存在しない。
- **二段階の受理。** トランザクションはまずメモリープールに受理され（未承認）、次にブロックに受理される（承認済み）。メモリープールはローカルかつ拘束力を持たない。ブロックへの組み込みだけが合意形成の対象となる。
- **最大作業量チェーンが勝つ。** 2 人のマイナーがほぼ同時にブロックを発見すると、ネットワークは一時的にフォークする。ノードはプルーフ・オブ・ワークの累積量が最大のチェーンに従う。敗れたブロックは失効（孤立）し、そのトランザクションはメモリープールに戻る。

## 4. コンポーネント相互作用マップ

以下のフローチャートは、ノードがネットワークから新規ブロックを受信した際に、主要なコードレベルのコンポーネントがどのように相互作用するかを示す。

```mermaid
flowchart TD
    RECV["ピアから<br/>ブロックメッセージ受信"] --> DESER["ブロックヘッダー +<br/>本体をデシリアライズ"]
    DESER --> HDR{"ヘッダー検査<br/>有効な PoW?<br/>タイムスタンプ妥当?<br/>難易度正しい?"}

    HDR -- 失敗 --> REJECT["ブロック拒否、<br/>ピアにペナルティ"]
    HDR -- 合格 --> DUPTST{"既にチェーン内?"}

    DUPTST -- yes --> DROP["重複を無視"]
    DUPTST -- no --> CTXVAL["全トランザクションを<br/>検証:<br/>• UTXO 検索<br/>• スクリプト実行<br/>• 署名検証<br/>• 金額検査（入力 ≥ 出力）"]

    CTXVAL -- いずれかの tx 無効 --> REJECT
    CTXVAL -- 全合格 --> MERKLE["マークルルートを再計算、<br/>ヘッダーと比較"]

    MERKLE -- 不一致 --> REJECT
    MERKLE -- 一致 --> CONNECT["ブロックを<br/>チェーン状態に接続:<br/>• UTXO 消費（セットから削除）<br/>• 新 UTXO 作成（セットに追加）<br/>• ブロックを<br/>ディスクに書込み<br/>• チェーンインデックス<br/>を更新"]

    CONNECT --> FORK{"現最良チェーンを<br/>延長する?"}
    FORK -- yes --> TIP["チェーン先端を更新、<br/>承認済み tx をメモリープールから除去"]
    FORK -- no --> REORG{"現先端より<br/>累積ワークが多い?"}
    REORG -- no --> STALE["失効ブランチ<br/>として保存"]
    REORG -- yes --> REORGANIZE["再編成:<br/>旧先端ブロックを切断、<br/>新ブランチを接続"]
```

## 5. 二時代比較

以下の表は、サトシ時代の v0.1 実装と現行の Bitcoin Core（v27 以降基準）の構造的な比較を簡潔にまとめたものである。各行は[§ 7](#7-設計文書索引) に記載されたドメインページで詳述される。

| 側面 | サトシ v0.1 (2009 年 1 月) | 現行 Bitcoin Core、v27 以降基準 |
|---|---|---|
| **合意規則の適用** | 単一の `CheckBlock` / `CheckTransaction` パス | 合意形成、ポリシー、検証の各層に分離 |
| **チェーン選択** | 最長チェーン（ブロック高の比較、`nBestHeight`） | 最大作業量チェーン（`nChainWork`）、v0.3.3 以降 |
| **スクリプト系** | `OP_CAT`、`OP_MUL` 等を含む全オペコード集 | 多数のオペコードを無効化（2010 年）。SegWit 証人バージョニングを追加（2017 年） |
| **トランザクション形式** | バージョン 1、証人なし | SegWit 証人フィールド (BIP 141)、バージョン 2 (BIP 68 / 112 / 113) |
| **ブロックサイズ** | v0.1 に明示的上限なし（2010 年に 1 MB 追加） | 4 MWU 重量上限 (BIP 141)、実測約 1.5〜2 MB |
| **ネットワークプロトコル** | 12 種のメッセージ型 | 27 種以上。コンパクトブロック (BIP 152)、addr v2 (BIP 155) |
| **ピア発見** | ハードコードされた IRC チャネル + `addr` メッセージ | DNS シード、`addrv2`、Tor/I2P/CJDNS 対応 |
| **ストレージ** | 索引とウォレットは BDB; 生ブロックはフラットファイル (`blk*.dat`) | LevelDB (UTXO 集合)、フラットブロックファイル (`blk*.dat`)、取消ファイル (`rev*.dat`) |
| **マイニング** | CPU のみ、クライアント内蔵マイナー | `getblocktemplate` (BIP 22/23) 経由で外部化。エコシステムに Stratum v2 |
| **ウォレット** | ノードバイナリに統合、ランダム鍵 | ディスクリプターウォレット (BIP 380 以降)、論理分離（実験的マルチプロセス進行中） |
| **暗号** | ECDSA は OpenSSL; 採掘 SHA-256 は同梱 Crypto++ | libsecp256k1（独自 ECDSA/シュノア）、内蔵 SHA-256 |

*[補足：一次資料を伴う各変化の詳細な比較は[アーキテクチャ進化のエントリー](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-architecture-evolution/)にある。]*

## 6. 読者ガイド

読者の属性によって、シリーズを読み進める最適な順序が異なる。

| 読者層 | 推奨読書順序 |
|---|---|
| **ビットコイン初心者** | まず[仕組み図解](/BitcoinArchive/ja/entries/analysis/2026-05-23-how-bitcoin-works-visual-glossary/)を読み、ここに戻り、L1 #2（トランザクション）→ #3（ブロック）→ #4（合意形成）の順 |
| **開発者** | 本概観 → L1 #2（トランザクション）→ #3（ブロック）→ #4（合意形成）→ #1（P2P）→ #7（ストレージ） |
| **研究者/経済学者** | 本概観 → L1 #5（貨幣）→ #4（合意形成）→ #2（トランザクション）→ L2 #9（構造進化） |
| **セキュリティ監査者** | L1 #2（トランザクション）→ #4（合意形成）→ #1（P2P）→ #6（暗号）→ L2 #11（セキュリティモデル） |

## 7. 設計文書索引

本シリーズは 3 つのレベルで構成される:

- **L0** — 本ページ（システム概観）
- **L1** — 8 つのドメインページ。各ページが 1 つのサブシステムを端から端まで解説
- **L2** — 3 つの横断的深掘りページ

```mermaid
mindmap
  root((ビットコイン<br/>設計書シリーズ))
    L0 全体俯瞰
      L0: システム全体設計
    L1 ドメイン別
      1: P2P ネットワーク
      2: トランザクション
      3: ブロック・チェーン
      4: コンセンサス
      5: 貨幣
      6: 暗号
      7: ストレージ
      8: ウォレット / RPC
    L2 横断・比較
      9: アーキテクチャー進化
      10: エコシステム
      11: セキュリティーモデル
```

### L1 — ドメインページ

| # | ページ | 範囲 |
|---|---|---|
| 1 | [**P2P ネットワーク**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-p2p-network-design/) | ピア発見、接続ライフサイクル、メッセージ形式、ゴシップ中継、コンパクトブロック、BIP 324 トランスポート |
| 2 | [**トランザクション**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-transaction-design/) | UTXO ライフサイクル、トランザクション構造、スクリプト評価、署名 (ECDSA/シュノア)、SegWit、Taproot |
| 3 | [**ブロック/チェーン**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-block-chain-design/) | ヘッダーフィールド、マークルツリー、チェーン構造、最大作業量チェーン選択、ブロック重量、コインベース |
| 4 | [**合意形成**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-consensus-design/) | PoW の仕組み、難易度調整、ブロック検証、フォーク種別、有効化メカニズム、ファイナリティモデル |
| 5 | [**貨幣**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-monetary-design/) | 2,100 万枚上限の算術、半減期スケジュール、手数料市場、マイナーのインセンティブ、手数料のみの将来 |
| 6 | [**暗号**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-cryptography-design/) | secp256k1、ECDSA/シュノア、SHA-256d、アドレス導出、HD ウォレット、量子耐性 |
| 7 | [**ストレージ**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-storage-design/) | ブロックファイル、UTXO データベース (LevelDB)、チェーン状態、メモリープール、剪定、assumeUTXO |
| 8 | [**ウォレット / RPC**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-wallet-design/) | ディスクリプターウォレット、コイン選択、PSBT、手数料推定、RPC/REST/ZMQ インターフェース |

### L2 — 横断的深掘り

| # | ページ | 範囲 |
|---|---|---|
| 9 | [**構造進化**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-architecture-evolution/) | v0.1 対 v27 以降の全 8 ドメイン横断比較 |
| 10 | [**エコシステム**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-ecosystem-design/) | Lightning Network、サイドチェーン (Liquid)、L1 拡張 (Ordinals)、マイニングプール |
| 11 | [**セキュリティモデル**](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-security-model/) | 信頼の前提、攻撃分類、防御層、経済的安全性、量子脅威 |
