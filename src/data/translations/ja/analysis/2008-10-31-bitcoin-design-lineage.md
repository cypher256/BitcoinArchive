---
title: "ビットコインは何でできているのか — ホワイトペーパー引用文献の構成要素別の系譜"
date: 2008-10-31T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Bitcoin"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Wei Dai"
    slug: "wei-dai"
description: "ビットコイン v0.1 は、Hashcash から PoW を再利用、汎用 CS 部品（マークルツリー等）を借用、残り（UTXO、報酬発行、2,100 万上限、P2P、ECDSA）は独自合成。"
isSatoshi: false
tags:
  - "bitcoin"
  - "whitepaper"
  - "design-lineage"
  - "proof-of-work"
  - "hashcash"
  - "b-money"
  - "merkle-tree"
  - "analysis"
  - "satoshi-identity"
secondarySources:
  - name: "Bitcoin whitepaper — references list"
    url: "https://bitcoin.org/bitcoin.pdf"
  - name: "Adam Back — Hashcash paper (1997, revised 2002)"
    url: "http://www.hashcash.org/papers/hashcash.pdf"
  - name: "Wei Dai — b-money proposal (1998)"
    url: "http://www.weidai.com/bmoney.txt"
  - name: "Ralph Merkle — Protocols for public key cryptosystems (1980)"
    url: "https://www.merkle.com/papers/Protocols.pdf"
  - name: "Bitcoin Magazine — Adam Back's Complete Emails with Satoshi Nakamoto"
    url: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
relatedEntries:
  - analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis
  - analysis/2013-12-05-szabo-satoshi-identity-hypothesis
  - aftermath/1997-03-28-adam-back-hashcash-announcement
  - aftermath/1998-12-06-adam-back-b-money-monetary-critique
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper
  - correspondence/adam-back/2008-08-20-satoshi-to-adam-back
  - correspondence/adam-back/2008-08-21-adam-back-to-satoshi
  - correspondence/adam-back/2008-08-22-satoshi-to-adam-back-b-money
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2009-01-09-satoshi-code-analysis
inlineLinkKeywords:
  - "ビットコイン設計系譜"
  - "ビットコインは何でできているのか"
  - "ホワイトペーパー引用区分"
translationStatus: complete
---

ビットコイン v0.1 は、引用されたサイファーパンクシステム（Hashcash）から 1 つの暗号学的基本要素（プルーフ・オブ・ワーク）を再利用し、複数の汎用コンピューターサイエンス構成要素（マークルツリー、連鎖タイムスタンプ、確率論）を引用文献を経由するか否かを問わず借用し、残りの大半（分散型合意形成、UTXO モデル、マイニング報酬による発行、2,100 万通貨上限、P2P 伝播、ECDSA トランザクション、難易度調整）を独自設計として合成している。[ビットコインのホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/) には番号付きの引用文献が 8 件あるが、それぞれの役割は同じではない。本エントリーは、ビットコインの実際の中身と各構成要素の由来を、構成要素別に整理し、開発中の使用が一次資料で確定しているものと、後付けでの引用追加が確定しているものと、汎用知識の再利用と、独自合成を区別する。

## 1. 引用の区分

ホワイトペーパーの 8 引用を区分する前に、サトシの記録された開発過程の特徴を 1 つ確認しておく必要がある。なぜならそれが各区分の名前付けに影響するからである。サトシは [2008 年 11 月 10 日](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-re-bitcoin-p2p-e-cash-paper-satoshi-finney/)、ハル・フィニーが暗号学メーリングリストで最初の技術的質問を投げかけた翌日に、こう書いている：

> 質問はありがたい。実は私はこれを逆順でやった。全問題を解けると自分で納得するためにまず全コードを書く必要があり、それから論文を書いた。詳細仕様を書くよりもコードを公開する方が早いと思う。

これはホワイトペーパーがサトシの過程の*終わり*に位置することを示す — *始まり*ではない。論文は動作するコードベースを文書化したものであり、引用文献はその文書化された仕事を既存の文献に位置づけるために集められたものである。「開発期間」 という慣習的な意味（コード以前の独立した段階）は本エントリーの枠組みでは正確ではない — サトシは概念的な仕事をコードと一緒に進めていた。以下では「**開発期間**」 という用語で、サトシがビットコインを構築していた期間（コードを書き、設計上の問題を解決し、最終的にその結果を文書化する論文を書いた期間）を指す。

この枠組みのもと、ホワイトペーパーの 8 引用は、サトシの記録された過程との関係で 3 つの区分に分かれる。第 4 の区分 — 独自構成要素 — は引用するべき先行が存在しないため、引用文献リストには現れない。

1. **開発中に使用していた（一次資料で確定）**。サトシが当該文献を意識し、その概念をビットコイン構築中に使用していたことが文書化されている。サトシと[アダム・バック](/BitcoinArchive/ja/participants/adam-back/) の 2008 年 8 月 20〜22 日のメール通信が [Hashcash](http://www.hashcash.org/papers/hashcash.pdf) をこの区分に位置づける。
2. **後付けで引用追加（一次資料で確定）**。サトシは開発期間中、当該文献を**知らなかった**。後に知り、ホワイトペーパーの引用文献リストに追加した。2008 年 8 月 22 日のメール通信が [ウェイ・ダイの b-money](http://www.weidai.com/bmoney.txt) をこの区分に位置づける。
3. **汎用 CS 知識（背景）**。当該文献は、当該時期の見識ある計算機科学者なら誰でも知り得る標準的な暗号学・確率論の知識に属する。サトシが具体的に当該論文を参照したか、それとも一般的な教養から概念に到達したかは、一次資料からは復元できない。マークルツリー（1980 年）、Haber-Stornetta による連鎖タイムスタンプ（1991〜1997 年）、Feller の確率論教科書（1957 年）はここに該当する。
4. **独自構成要素（引用不能）**。ビットコインが先行なしで発明した構成要素。プルーフ・オブ・ワークの重みで決まる最長チェーン規則に基づく分散型合意形成、UTXO モデル、マイニング報酬によるブロック補助金発行、2,100 万通貨上限、難易度調整アルゴリズム、稼働中の P2P ネットワーク。

## 2. 構成要素別の系譜

| ビットコインの構成要素 | 引用文献 | 使用区分 | 注記 |
|---|---|---|---|
| プルーフ・オブ・ワーク | [6] Hashcash（バック 1997 年、2002 年改訂） | 開発中に使用 | 2008 年 8 月 20〜22 日のサトシ↔バックメールで確認 |
| 連鎖タイムスタンプ／チェーン順序 | [2-5] Haber-Stornetta 1991, 1993, 1997 + Massias 1999 | 汎用 CS 知識 | 1990 年代の標準的タイムスタンプ文献。ビットコインの「ブロック連鎖」 概念は連鎖タイムスタンプに類似 |
| ブロックヘッダーのマークルツリー | [7] Merkle 1980 | 汎用 CS 知識 | 標準的な CS 教科書概念。トランザクション集合の効率化に使用 |
| 二重支払いの確率分析 | [8] Feller 1957 | 汎用 CS 知識 | 標準的な確率論教科書。ホワイトペーパー §11 計算 で使用 |
| 分散デジタルキャッシュ概念 | [1] b-money（ウェイ・ダイ 1998） | 設計後に引用追加 | サトシの 8 月 22 日返信「b-money のページは知らなかった」 |
| 分散型合意形成（PoW で重み付けされた最長チェーン規則） | — | 独自 | ビットコインの中核的な発明 |
| UTXO モデル | — | 独自 | ビットコインのトランザクション出力設計 |
| マイニング報酬によるブロック補助金発行 | — | 独自 | ビットコインの貨幣発行機構 |
| 2,100 万通貨上限 | — | 独自 | ビットコインの貨幣政策パラメーター |
| 難易度調整 | — | 独自 | ビットコイン固有のアルゴリズム |
| P2P ネットワーク伝播（稼働中のネットワーク） | — | 独自合成 | 汎用的な P2P 原理を台帳複製に適用 |
| ECDSA／secp256k1 によるトランザクション署名 | — | 標準暗号 | 標準ツール、特定の引用なし |

独自構成要素はホワイトペーパーの引用文献リストに含まれない。先行が存在しないからである。これらはビットコインが設計空間に対して行った貢献である。

## 3. 区分の一次資料的根拠

### 3.1 Hashcash：開発中に使用

サトシの [2008 年 8 月 20 日のアダム・バック宛メール](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) は Hashcash の正しい引用形式を質問している。本文ではビットコインの仕組みを詳しく述べ、Hashcash を「コードで再利用している既存の基本要素」 として参照している。これは Hashcash の使用が**開発中**であって**開発後**ではないことを位置づける。

「Hashcash」 の `cash` は計算コストとしての対価の比喩（バック 1997 年のスパム対策・サービス拒否対抗策）であって通貨ではない。Hashcash の中身はプルーフ・オブ・ワーク基本要素のみで、台帳・送金・合意形成・通貨供給はない。ビットコインは PoW のみを再利用し、それ以外を別途構築する。「Hashcash の作者＝ビットコインの作者」 論点への含意については [アダム・バック仮説 § 2.2](/BitcoinArchive/ja/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/) を参照。

### 3.2 b-money：設計後に引用追加

サトシの [2008 年 8 月 22 日のバック宛返信](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-22-satoshi-to-adam-back-b-money/) は「Thanks, I wasn't aware of the b-money page, but my ideas start from exactly that point.（ありがとう、b-money のページは知らなかった、しかし私のアイデアはまさにその点から始まっている）」 で始まる。これは、b-money がホワイトペーパーの引用文献リストに**設計が実質的に完了した後で**追加されたことの直接の一次資料である。同日付でサトシは [ウェイ・ダイ宛にも直接メール](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/) を送り、提案について述べている。

ホワイトペーパーに現れる引用は文献 [1] — ウェイ・ダイ「b-money」 1998 年。番号順は編集上のもので、内容は遅く加えられた。[ウェイ・ダイの 2014 年 AALWA スレッド回想](/BitcoinArchive/ja/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) はこれと整合する：ウェイ・ダイはサトシが「以前から積極的に活動していた人物ではない」 と示唆しており、これは「b-money を紹介経由で発見せざるを得なかった設計者」 像と整合する。

### 3.3 マークルツリー・タイムスタンプ・確率論：汎用 CS 知識

ホワイトペーパーはブロックヘッダーでマークルツリーを使用し（§7）、タイムスタンプサーバー型のチェーン構築を記述し（§3）、二重支払いの確率分析を行う（§11）。それぞれに引用文献がある。しかし、根底にある概念は当該時期の標準的な 1990〜2000 年代の計算機科学知識であり、相当の大学院レベルの教育を受けた者なら入手可能である。サトシのメール記録には「マークルツリーは知らなかった」 や「連鎖タイムスタンプは知らなかった」 に類する瞬間は含まれない — その不在は、開発中の使用を立証するわけでも、設計後の追加を立証するわけでもない。記録は問いを開いたままにする：サトシは具体的にこれらの論文を参照したかもしれないし、一般的な教養から概念に到達して最も関連する先行として引用を加えたかもしれない。

### 3.4 独自構成要素：引用不能

PoW で重み付けされた最長チェーン規則による分散型合意形成、UTXO モデル、マイニング報酬によるブロック補助金発行、2,100 万通貨上限、難易度調整アルゴリズムは、ホワイトペーパーの引用文献リストに先行を持たない。ビットコイン以前には統合された設計として存在しなかったからである。ホワイトペーパーはこれらをビットコインの貢献として提示している。一部の下位構成要素（最長チェーンの考え方、P2P 合意形成一般など）は分散システム文献に関連する先行があるが、本論点の主張は「具体的な**合成**が独自である」 という点にある。

## 4. サトシ正体仮説への含意

構成要素レベルの分解は、正体仮説の重み付けに直接影響する。具体的な含意 2 点：

- **Hashcash の作者であることは、ビットコインの多数の構成要素のうち一つを設計したことを意味する**。PoW 基本要素は、多数の独自構成要素を含むシステムの中の引用された一つの貢献である。「Hashcash の作者＝ビットコインの作者」 のフォレンジック整合論は、Hashcash を部分的貢献として重み付けできるが、全体の重みを担うことはできない。詳細は [アダム・バック＝サトシ正体仮説エントリー](/BitcoinArchive/ja/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/) を参照。
- **b-money の作者であることも、同様にビットコインの設計者であることを意味しない**。b-money の引用はサトシがバックの紹介で知った後に追加されたもので、b-money の概念は開発期間中はビットコインの設計に影響していない。詳細は [正体仮説の概観のウェイ・ダイ・プロファイル](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) を参照。

他の固有名候補仮説（サッサマン、金子勇、トッド、ライト等）はホワイトペーパーの引用文献の作者性に直接結びついておらず、別の論点（タイミング、能力、可視性、外部的否定）で評価される。詳細は [正体仮説の概観](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) を参照。

## 5. 本エントリーの限界

- 本エントリーはホワイトペーパー引用文献レベルの系譜に限定する。ビットコイン v0.1 のソースコードレベルの再利用 — 例：v0.1 コードベースは特定の暗号ライブラリ（SHA-256 で Crypto++）を import している（これらはホワイトペーパー引用ではない） — は [ソースコード分析エントリー](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-code-analysis/) の射程である。
- 「汎用 CS 知識」 区分は設計中の認識を不確定のままにしている。新たな一次資料（追加のサトシ通信、設計ノート等）が出現すれば、§2 の個別行が区分間で移動する可能性がある。
- 「独自合成」 区分は、合成のレベルでの先行不在のみを主張している。一部の下位構成要素は分散システム文献に関連する先行を持つが、本論点の主張は「具体的な**合成**が独自である」 という点にある。

*[編者注：本エントリーは「ビットコインが何を再利用し何を発明したか」 のアーカイブ内における正典の場所である。仮説エントリーは本表の内容を重複して書くべきではなく、本エントリーを参照し、論点に関係する個別の行を引用するべきである。]*
