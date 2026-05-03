---
title: "ウェイ・ダイはサトシだったか — b-money の作者かつ Crypto++ 開発者という仮説の検討"
date: 2008-08-22T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Wei_Dai"
author: "Bitcoin Institute"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
isSatoshi: false
description: "ウェイ・ダイ（b-money 著者、ホワイトペーパー参考文献 [1]、Crypto++ 作者）= サトシ仮説。反証: 2008-08-22 メールが第三者応答／2014 AALWA で自己否定。"
tags:
  - "satoshi-identity"
  - "wei-dai"
  - "b-money"
  - "crypto-plus-plus"
  - "cypherpunk"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "Wikipedia — Wei Dai"
    url: "https://en.wikipedia.org/wiki/Wei_Dai"
  - name: "ウェイ・ダイ — b-money 提案（1998 年 11 月）"
    url: "http://www.weidai.com/bmoney.txt"
  - name: "ウェイ・ダイ — LessWrong AALWA スレッド（2014 年 1 月 12 日）"
    url: "https://www.lesswrong.com/posts/YdfpDyRpNyypivgdu/aalwa-ask-any-lesswronger-anything"
    note: "ウェイ・ダイによる 2014 年 1 月 12 日の「Ask any LessWronger anything」 スレッドでの回顧。サトシは「学術暗号学またはサイファーパンクのコミュニティで以前から積極的に活動していた人物ではない」 と述べ、サトシが b-money 論文を知る前に b-money の中心的アイデアを独自に再発明した経緯を記述している。公的記録上、最も多く引用されるウェイ・ダイの自己否定。"
  - name: "Gwern's Archive — ウェイ・ダイ／サトシ・ナカモトのメール"
    url: "https://gwern.net/doc/bitcoin/2008-nakamoto"
    note: "記録された 3 通のメール: サトシ → ウェイ・ダイ（2008 年 8 月 22 日）、ウェイ・ダイ → サトシ（日付未指定、b-money 公開履歴を返答）、サトシ → ウェイ・ダイ（2009 年 1 月 10 日）。サトシの 2009 年 1 月メッセージ: 「b-money 論文で解決しようとしていた目標のほぼ全てを達成している」。"
  - name: "Crypto++ ライブラリ"
    url: "https://www.cryptopp.com/"
  - name: "Bitcoin Magazine — The Genesis Files: Wei Dai's b-Money"
    url: "https://bitcoinmagazine.com/technical/genesis-files-if-bitcoin-had-a-first-draft-wei-dais-b-money-was-it"
relatedEntries:
  - aftermath/2008-08-22-wei-dai-biography
  - aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - correspondence/adam-back/2008-08-21-adam-back-to-satoshi
  - analysis/2008-10-31-bitcoin-design-lineage
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis
  - aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency
inlineLinkKeywords:
  - "ウェイ・ダイ仮説"
  - "ウェイ・ダイ = サトシ"
translationStatus: complete
---

本エントリーは、[ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/) — 中国系米国人の暗号学者、[b-money デジタルキャッシュ提案](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/)（1998 年 11 月）の著者で[ビットコインホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/) で参考文献 [1] として引用、ビットコイン v0.1 が SHA-256 用にバンドルする[Crypto++ ライブラリ](https://www.cryptopp.com/) の作者、ビットコイン公開前にサトシ・ナカモトが接触した 2 番目の人物 — がサトシ仮名の主体だったとする、繰り返し公的に提起される仮説を記録する。本仮説は候補プロファイル群 A（サトシがホワイトペーパーで明示的に引用した人物）の候補の一つで、暗号通貨ジャーナリズムで少なくとも 2010 年以降議論されてきた。ウェイ・ダイは一貫してサトシであることを否定しており、最も顕著な自己否定は[2014 年 1 月の LessWrong AALWA 回顧](/BitcoinArchive/ja/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) である。本エントリーは仮説の主張を提示し、支持論点を提唱者の言い分どおりに記述し、反証を同等の詳細で並べる。判断は読者に委ねる。

## 1. 仮説の主張

仮説は、ウェイ・ダイがサトシ・ナカモト仮名の主体であり、彼が記録した「サトシ」 との公的な関わり — [2008 年 8 月 22 日のサトシからのメール](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/)、ウェイ・ダイの b-money 公開履歴での返答、サトシの 2009 年 1 月 10 日のフォローアップ（「b-money 論文で解決しようとしていた目標のほぼ全てを達成している」） — はすべて仮名を維持するための演出だったとする。この読みのもとでは、ウェイ・ダイは開発期（2007 年央以降）から 2011 年の撤退までサトシとして活動した人物であり、Crypto++ の保守やその他の公的執筆を公開記録上のデコイとして並行させ、[2014 年 1 月の AALWA 回顧](/BitcoinArchive/ja/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) は計算された公的否定だった、ということになる。

## 2. 仮説を支える論点

### 2.1 b-money のビットコインへの概念的近接

ビットコインホワイトペーパーの 8 件の参考文献のうち、[b-money](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) はビットコインの貨幣設計空間に最も直接対応するものである。両者ともプルーフ・オブ・ワークをデジタル希少性の源泉として再利用し、両者とも新コインを伝播する P2P ネットワークを想定し、両者とも明示的な反信頼の貨幣枠組みのなかに設計を位置づけ、両者ともマイニング様の発行機構を含む。b-money 提案は 1998 年 11 月にサイファーパンクメーリングリストで公開され、2 つのプロトコル — 1 つは同期的なブロードキャストチャネルを必要とするもの、もう 1 つは残高を追跡するサーバー群を使用するもの — を概説した。ビットコインのフルノードと SPV クライアントの区別を予感させる構成である。ホワイトペーパーは b-money を参考文献 [1] として引用している。

論点: ビットコイン以前のすべての提案の中で、b-money はビットコインの貨幣機構に最も密接に対応する。フォレンジック整合論の読みでは、b-money を書いた人物が、ビットコインを作った人物の自然な候補となる。ホワイトペーパーの明示的な引用がそれを補強する — サトシは b-money を主要な先行研究として特に挙げた。

反論: 設計近接性は単独で候補を選ばない。同じくホワイトペーパーで引用された[アダム・バックの Hashcash](/BitcoinArchive/ja/entries/aftermath/1997-03-28-adam-back-hashcash-announcement/) は、ビットコインがマイニングに再利用するプルーフ・オブ・ワーク基本要素を提供する。同じフォレンジック整合論で、アダム・バックも並列の候補となる。[仮説概要](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) はウェイ・ダイとアダム・バックを候補プロファイル群 A としてまとめて扱う。ビットコイン v0.1 のコンポーネント別の出所（b-money からも Hashcash からも継承していない部分を含む）については[ビットコイン設計系譜](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-design-lineage/) を参照。

### 2.2 ビットコイン v0.1 の Crypto++ コードベース依存

ウェイ・ダイは[Crypto++](https://www.cryptopp.com/) を作成・保守した。これは暗号アルゴリズムの C++ 無料オープンソースライブラリである。ビットコイン v0.1 は SHA-256 実装に Crypto++ を使用していた: v0.1.3 ALPHA（2009 年初頭）の `src/sha.cpp` および `src/sha.h` には、ルーチンが「Crypto++ Version 5.5.2（2007 年 9 月 24 日リリース）からスタンドアロンのファイルとして切り出された」旨のヘッダーコメントが付いている。`namespace CryptoPP` の帰属表示も保持されている。

| ビットコインバージョン | 日付 | Crypto++ 利用 |
|---|---|---|
| v0.1 | 2009-01-09 | Crypto++ 5.5.2 SHA-256 をスタンドアロン (`sha.cpp`、`sha.h`) としてバンドル |
| v0.3.6 | 2010-07-29 | Crypto++ 5.6.0 SSE2 最適化 SHA-256 を統合 (約 2.5 倍高速化) |
| v0.5.0 | 2011-11-20 | [Crypto++ サブセット撤去、OpenSSL SHA-256 に置換](/BitcoinArchive/ja/entries/aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency/) (ニルス・シュナイダーのコミットをギャビン・アンドレセンがマージ) |

このコードベース依存は 22 か月の稼働窓 (v0.1 2009 年 1 月〜v0.4.x) を持ち、サトシの 2011 年 4 月離脱から約 6 か月後に終了した。下記の論点はこの窓に対して有効であり、現在稼働中の Bitcoin Core には及ばない。これはビットコイン v0.1 が名指し候補の公開コードに対して持つ唯一の直接的なコードベースレベルの依存である。論点: (a) b-money が参考文献 [1]、(b) Crypto++ がビットコインのハッシュ基本要素を提供、(c) ウェイ・ダイが両者の唯一の共著者 — これらの組合せが、他のいずれの候補も占めない構造的位置にウェイ・ダイを置く。

反論: Crypto++ は 2000 年代後半の C++ 暗号ライブラリの事実上の標準であった。当時の C++ プロジェクトで SHA-256 を使うために Crypto++ を選ぶのは通常のエンジニアリング判断であり、自己著者性の信号ではない。v0.3.6 の SSE2 最適化アップグレードは[BitcoinTalk のメンバー「BlackEye」 が提案した](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/) ものであり、サトシ単独の判断ではない。サトシがすべてのコードベース判断を制御する自己演出読みでは、これは整合させにくい事実である。

### 2.3 サイファーパンクの資質と知的系譜

ウェイ・ダイは長期にわたるサイファーパンクであり、1990 年代からサイファーパンクメーリングリストの初期参加者で、隣接コミュニティ（Extropians、SL4）にも積極的に関与してきた。b-money は Hashcash（アダム・バック）、Bit Gold（ニック・サボ）、RPOW（ハル・フィニー）と同じ知的環境で開発された。b-money 後のウェイ・ダイの公的執筆は暗号学および合理性関連の領域で続いており、[LessWrong プロファイル](https://www.lesswrong.com/users/wei-dai) は隣接領域での数十年の知的アウトプットを示している。

反論: サイファーパンクの資質は複数の候補（アダム・バック、ハル・フィニー、ニック・サボ、サッサマン）に当てはまる。この次元は候補集合を絞り込むがウェイ・ダイを一意に選ばない。

### 2.4 能力プロファイル: 暗号学 PhD 水準の能力、計算機科学経歴

ウェイ・ダイはワシントン大学で計算機科学を学び、Microsoft で勤務した。b-money 論文が示す技術能力（学術出版水準の暗号プロトコル設計）と Crypto++ が示す工学能力（学術・商用プロジェクトで広く使われる保守された C++ ライブラリ）は、ビットコイン v0.1 の 19,901 行 C++ コードベースが要求するものと整合する。

反論: このプロファイルは複数の候補と非候補のサイファーパンクに当てはまる。能力は必要条件だが十分条件ではない（[仮説概要の方法論](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) 参照）。

## 3. 反証

### 3.1 2008 年 8 月 22 日のメールのやり取りは第三者応答として読める

最も強いアーカイブ内反証は、[2008 年 8 月 20〜22 日のメール連鎖](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) の構造である:

| 日付 | 方向 | 内容 |
|---|---|---|
| 8 月 20 日 | サトシ → アダム・バック | 来たるホワイトペーパー向けの Hashcash 引用形式について尋ねる |
| 8 月 21 日 | [アダム・バック → サトシ](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-21-adam-back-to-satoshi/) | 引用情報を提供、ウェイ・ダイの b-money を見るよう示唆 |
| 8 月 22 日 | [サトシ → アダム・バック](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-22-satoshi-to-adam-back-b-money/) | 「b-money のページは知らなかった、しかし私のアイデアはまさにその点から始まる」 |
| 8 月 22 日 | [サトシ → ウェイ・ダイ](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/) | 「あなたのアイデアを拡張する論文を発表する準備をしている」 — ホワイトペーパー引用のために b-money 公開日を尋ねる |
| (日付未指定) | ウェイ・ダイ → サトシ | 1998 年公開日と過去の議論アーカイブリンクを提供 |

ウェイ・ダイがサトシだったなら、この構造は自然には成立しない。彼は以下を行うことになる:
- アダム・バックに「サトシ」 として Hashcash 引用について尋ねる
- アダム・バックから自身への紹介を受ける
- 2 日後に「サトシ」 として自身に b-money 公開日詳細を尋ねる
- 自身に公開履歴で返答する

シンプルな読みは、連鎖が見たままのもの — サトシがアダム・バックに引用ガイダンスを求め、アダム・バックが彼が見ていなかった既存の b-money 提案を紹介し、サトシが b-money の著者にフォローアップして引用日を確認した、というもの。ウェイ・ダイの応答（公開履歴とリンクを提供）は、未知の通信相手の仕事に実質的に関与する第三者と整合する。

### 3.2 サトシの「b-money のページは知らなかった」 という自認

2008 年 8 月 22 日のアダム・バック宛メールで、サトシは書いた: *「b-money のページは知らなかった、しかし私のアイデアはまさにその点から始まる」*。この自認は[サイファーパンク独立到達分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/) を支える自己記述である: サトシの b-money 認識を開発後、ホワイトペーパー 2 か月前のアダム・バックの紹介経由として位置づける。

ウェイ・ダイ = サトシの読みのもとでは、この発言は観客のいない自己欺瞞となる — サトシがメールでアダム・バックに、ウェイ・ダイのページを見たことがないと告げる一方で、実際にはその著者である、ということ。シンプルな読みは、サトシがビットコインの設計中に b-money を本当に知らず、2008 年 8 月にアダム・バックの紹介を通じてその存在を知った、というもの。ウェイ・ダイ自身の[2014 年 AALWA 回顧](/BitcoinArchive/ja/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/) はこの読みを支持する: サトシは中心的なアイデアを独自に再発明し、後から b-money を知った。

### 3.3 ウェイ・ダイの 2014 年 1 月 AALWA 回顧

2014 年 1 月 12 日、ウェイ・ダイは LessWrong の「Ask any LessWronger anything」 スレッドに投稿し、サトシ正体への憶測を直接扱った。回顧には仮説に関する 3 つの記述がある:

- サトシは「学術暗号学またはサイファーパンクのコミュニティで以前から積極的に活動していた人物ではない」 — 額面どおり受け取れば、ウェイ・ダイ自身（長期にわたるサイファーパンク）に対する反証となる構造的主張。
- サトシは b-money の中心的なアイデアをアダム・バックの紹介経由でウェイ・ダイの論文を知る前に独自に再発明した。
- ウェイ・ダイは議論を通じて自身とサトシを別人として区別する。

第一点は[識別性論](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/) がこの回顧から抽出し、2007〜2008 年中にサイファーパンクで公的に活動していた他の候補（アダム・バック、ハル・フィニー、ニック・サボ、サッサマン）に適用するものである。同じ論理で、ウェイ・ダイ自身にも適用される — 彼は当該期間中、サイファーパンクリストで活動し、Crypto++ 保守で可視だった。

仮説が真であるためには、2014 年回顧全体が公的な自己欺瞞でなければならず、ウェイ・ダイ自身の候補性に反証する非活動性に関する構造的主張も含まれる。

### 3.4 文体計量での距離

[Bitcoin Institute によるバス・ヴァン・ドルストの 75,000 人著者「Where is Satoshi?」 文体計量コーパスの再分析](/BitcoinArchive/ja/entries/analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates/) は、ウェイ・ダイを上位 22.99%（12,739 人中 2,929 位）に位置づける — 最も多く引用される名指し候補 5 名のうち 4 番目で、ニック・サボ（4.67%）、ハル・フィニー（6.89%）、アダム・バック（7.87%）に次ぐ:

| 文体計量研究 | ウェイ・ダイの結果 |
|---|---|
| Skye Grey 2013（サボ単独仮説検証） | 候補集合に未収録 |
| アストン大学 2014（11 候補） | 順位非公開 |
| ヴァン・ドルスト 2024 / Bitcoin Institute 再分析 | 12,739 中 2,929 位 — 上位 22.99%、名指し候補内 4 位 |
| カフィエロ／カレイロウ NYT 2026（12 候補） | 順位非公開 |

最も多く引用される 4 件の文体計量調査において、ウェイ・ダイがサトシの最近接マッチとして現れたものはない。彼の執筆語調はコーパスの上位四分位には入るものの、サボ、フィニー、アダム・バックよりも測定可能な形でサトシから遠い。フォレンジック整合論（§2.1、b-money 近接）と文体計量論はウェイ・ダイに対して異なる方向を指す。

### 3.5 Crypto++ コードベース依存は両刃

Crypto++ の組み込み（§2.2）は構造的整合だが、著者性の強い証拠ではない。Crypto++ は 2007〜2008 年に C++ で SHA-256 を使うシステムを構築する任意の開発者にとって標準的な選択肢であり、その選択は開発者が誰であるかに関係なく自然なエンジニアリング判断であった。v0.3.6 SSE2 アップグレード（2010 年 7 月）は[BitcoinTalk メンバー「BlackEye」](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/) の提案によるもので、サトシ単独ではない。ウェイ・ダイがサトシだったなら、SHA-256 を独自に実装するか、フォーラムメンバーの提案を待たずに SSE2 判断を自分で行ったはずである。

### 3.6 複数の自己否定発言

ウェイ・ダイは一貫してサトシであることを否定してきた:

- **2014 年 AALWA 回顧**（前述） — 自身とサトシを明示的に区別する。
- **2014 年以降の長文インタビューやフォーラム投稿** — ウェイ・ダイはサトシを別人として扱い、サトシが彼自身であれば自賛になる言葉でサトシの具体的な設計貢献（最長チェーン合意規則、難易度調整アルゴリズム）をしばしば称賛する。
- **2010 年代から 2020 年代を通じて自身の名前で続く Crypto++ と LessWrong の活動** — 同期間に彼がサトシでもあったとすれば、並列のデコイ作業を必要とする持続的な公的プロファイル。

ウェイ・ダイの自己否定は、ニック・サボの[2011 年ブログ投稿](/BitcoinArchive/ja/entries/aftermath/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long/) における「ナカモトが私の設計を改善した」 枠組み（自分自身の仕事に対する具体的な改善をナカモトに帰す）と構造的に類似する: サトシを別の名指しされた別人として扱う持続的な公的枠組み。両方の否定とも、仮説に覆されるためには、持続的な自発的公的自己欺瞞を必要とする。

## 4. 広い記録の中での位置づけ

最も多く引用される 4 件の文体計量調査において、5 名すべてを公的に順位付けする唯一の調査（ヴァン・ドルスト／Bitcoin Institute 再分析）でウェイ・ダイは名指し候補の中でサトシから*最も遠い*位置に置かれている。2008 年 8 月のメールのやり取り、「b-money のページは知らなかった」 という自認、ウェイ・ダイ自身の 2014 年回顧 — 仮説が覆さなければならない一貫した第三者応答の読みを構成する。

ウェイ・ダイの候補空間での構造的位置は他の候補と異なる: 彼は候補集合の構成上候補プロファイル群 A（サトシがホワイトペーパーで明示的に引用）に属するが、引用経路を確立する同じ一次資料メールが、ウェイ・ダイが第三者としてビットコインをサトシから受け取ったこと（彼が起源ではないこと）も同時に確立する。

他の名指し候補仮説との比較については、[サトシ正体仮説概要](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/) および個別エントリーの[アダム・バック](/BitcoinArchive/ja/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/)、[ハル・フィニー](/BitcoinArchive/ja/entries/analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis/)、[サッサマン](/BitcoinArchive/ja/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/)、[金子勇](/BitcoinArchive/ja/entries/analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis/)、[サボ](/BitcoinArchive/ja/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/)、[トッド](/BitcoinArchive/ja/entries/analysis/2024-10-08-todd-satoshi-identity-hypothesis/) を参照。

## 5. このエントリーの限界

- 本エントリーは新しい証拠を提示しない。2008 年 8 月のメールのやり取り、ウェイ・ダイの 2014 年 1 月 AALWA 回顧、Crypto++ の組み込み記録、Bitcoin Institute によるヴァン・ドルストのコーパス再分析、ウェイ・ダイをサトシ候補として論じる公的議論の現状から資料を編集したものである。
- 本エントリーは仮説を公正に提示し、反証も同等の詳細で公正に提示し、判断を読者に委ねる。
- 本エントリーは「最も蓋然性の高いサトシ候補」 を指名しない。
- ウェイ・ダイの仮説は、単一の引き金となる提唱がある候補（ハル・フィニーに対するグリーンバーグ 2014、アダム・バックに対する NYT 2026、トッドに対する HBO 2024）と異なる — ウェイ・ダイはホワイトペーパー引用の効果でビットコイン公開前から構造的候補だったため、単一の主流報道の提唱はない。本エントリーは 2008 年 8 月 22 日の接触日を起点として用いる。これが仮説の構造的条件が確立した日付だからである。
- 新しい証拠が浮上した場合 — 3 通のメール通信を超える直接的な文書的繋がり、標準的な Crypto++ 組み込みを超えるウェイ・ダイの他のコードと一致するビットコイン v0.1 の技術的指紋、2014 年回顧と矛盾するウェイ・ダイの発言等 — 本エントリーは更新されるべきである。

*[編者注：本エントリーは 2008 年 8 月 22 日のサトシとウェイ・ダイの初接触を、単一の引き金となる記事を持たない仮説の構造的起点として用いる。枠組みは意図的に保守的である: 仮説を提示し、支持論点を提唱者の言い分どおりに記述し、反証を同等の詳細で並べる。本エントリーは仮説が真である可能性が高いか低いかについて編集的結論を引き出さない。直接の判決を求める読者は、それを見つけられない。]*
