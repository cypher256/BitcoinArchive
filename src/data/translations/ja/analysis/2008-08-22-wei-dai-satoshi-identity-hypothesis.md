---
title: "ウェイ・ダイはサトシだったのか — b-money を書き、ビットコインに Crypto++ を残した男"
date: 2008-08-22T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Wei_Dai"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
isSatoshi: false
description: "b-money はホワイトペーパー参考文献 [1]、Crypto++ は v0.1 に同梱、そしてサトシが 2 番目に接触した相手。ウェイ・ダイ＝サトシの証拠を秤にかける。"
tags:
  - "satoshi-identity"
  - "wei-dai"
  - "b-money"
  - "crypto-plus-plus"
  - "cypherpunk"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "ウェイ・ダイ — b-money 提案（1998 年 11 月）"
    url: "http://www.weidai.com/bmoney.txt"
  - name: "ウェイ・ダイ — LessWrong AALWA スレッド（2014 年 1 月 12 日）"
    url: "https://www.lesswrong.com/posts/YdfpDyRpNyypivgdu/aalwa-ask-any-lesswronger-anything"
    note: "ウェイ・ダイによる 2014 年 1 月 12 日の「Ask any LessWronger anything」スレッドでの回顧。サトシは「学術暗号学またはサイファーパンクのコミュニティで以前から積極的に活動していた人物ではない」と述べ、サトシが b-money 論文を知る前に b-money の中心的アイデアを独自に再発明した経緯を記述している。公的記録上、最も多く引用されるウェイ・ダイの自己否定。"
  - name: "Gwern's Archive — ウェイ・ダイ／サトシ・ナカモトのメール"
    url: "https://gwern.net/doc/bitcoin/2008-nakamoto"
    note: "記録された 3 通のメール: サトシ → ウェイ・ダイ（2008 年 8 月 22 日）、ウェイ・ダイ → サトシ（日付未指定、b-money 公開履歴を返答）、サトシ → ウェイ・ダイ（2009 年 1 月 10 日）。サトシの 2009 年 1 月メッセージ: 「b-money 論文で解決しようとしていた目標のほぼ全てを達成している」。"
  - name: "Crypto++ ライブラリ"
    url: "https://www.cryptopp.com/"
partOf: "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
relatedEntries:
  - aftermath/2008-08-22-wei-dai-biography
  - aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - aftermath/2008-08-21-adam-back-to-satoshi
  - analysis/2008-10-31-bitcoin-design-lineage
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis
  - aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency
  - analysis/2009-01-09-satoshi-windows-development-environment
  - aftermath/1996-02-06-wei-dai-disperse-collect-crypto-plus-plus
  - aftermath/2014-07-19-wei-dai-next-tech-gold-rush
inlineLinkKeywords:
  - "ウェイ・ダイ仮説"
  - "ウェイ・ダイ = サトシ"
translationStatus: complete
---

![封筒アイコンを線で結んだ 3 点の通信図（送信・仲介・著者）、引用元とコード依存関係を示すカード、他の点から 1 点だけ離れた文体計量の散布図、そしてチェックマーク付きの結論パネルを配置した図解](/BitcoinArchive/images/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis-hero.png)

[ウェイ・ダイの b-money](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) は[ビットコインホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/)の参考文献 [1] である。ウェイ・ダイの [Crypto++ ライブラリ](https://www.cryptopp.com/)は SHA-256 のためビットコイン v0.1 に同梱されている。ウェイ・ダイはネットワーク立ち上げ前にサトシが接触した 2 番目の人物である。[ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/)＝サトシの説は、暗号通貨ジャーナリズムで少なくとも 2010 年以降議論されてきた（サトシがホワイトペーパーで明示的に引用した人物である候補プロファイル群 A）。

## 1. 証拠

ウェイ・ダイがサトシ・ナカモトの正体だ。[2008 年 8 月 22 日のサトシからのメール](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/)、ウェイ・ダイの b-money 公開履歴での返答、サトシの 2009 年 1 月 10 日のフォローアップ（「b-money 論文で解決しようとしていた目標のほぼ全てを達成している」）という記録に残る「サトシ」との公的な関わりは、すべて仮名を維持するための演出だった。ウェイ・ダイは開発期（2007 年央以降）から 2011 年の撤退までサトシとして活動し、Crypto++ の保守やその他の公的執筆を公開記録上のデコイとして並行させ、[2014 年 1 月の AALWA 回顧](/BitcoinArchive/ja/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/)は計算された公的否定だった。

| 証拠 | 中心観察 | 反論 |
|---|---|---|
| §1.1 b-money の概念的近接 | b-money はホワイトペーパー参照 [1]、ビットコインの貨幣メカニズムに最も密接対応する事前提案 | 設計近接性は単独で候補を選ばない — Hashcash → アダム・バックも同じ論理で並列候補 |
| §1.2 Crypto++ コードベース依存 | ビットコイン v0.1 が SHA-256 にウェイ・ダイの Crypto++ を使用（v0.4.x まで 22 ヶ月の依存） | Crypto++ は当時の C++ デファクト標準。v0.3.6 SSE2 アップグレードは「BlackEye」提案であり、サトシ単独判断ではない |
| §1.3 サイファーパンクの資質 | 長期にわたるサイファーパンク、メーリングリスト初期参加者、隣接コミュニティでの数十年 | アダム・バック・ハル・フィニー・ニック・サボ・サッサマンにも当てはまる — 候補集合を絞るが一意特定にならず |
| §1.4 能力プロファイル | ワシントン大学計算機科学 + Microsoft 勤務 + Crypto++ 保守 — v0.1 の 19,901 行 C++ と整合 | 多くの候補・非候補に当てはまる。必要条件であり十分条件ではない |
| §1.5 Windows 側環境の重なり | ウェイ・ダイの Crypto++ 形成期は Windows / Microsoft VC++。v0.1 の Visual C++ 6.0 / `.rar` / MingW PGP スタックと一致 | 2000 年代後半の Windows 側 C++ はプロ開発の既定で、同時代の Windows 側 C++ 開発者全員に当てはまる |

### 1.1 b-money のビットコインへの概念的近接

ビットコインホワイトペーパーの 8 件の参考文献のうち、[b-money](/BitcoinArchive/ja/entries/aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement/) はビットコインの貨幣設計空間に最も直接対応するものである。両者ともプルーフ・オブ・ワークをデジタル希少性の源泉として再利用し、新コインを伝播する P2P ネットワークを想定し、明示的な反信頼の貨幣枠組みのなかに設計を位置づけ、マイニング様の発行機構を含む。b-money 提案は 1998 年 11 月にサイファーパンクメーリングリストで公開され、同期的なブロードキャストチャネルを必要とするプロトコルと、残高を追跡するサーバー群を使用するプロトコルの 2 つを概説した。ビットコインのフルノードと SPV クライアントの区別を予感させる構成である。ホワイトペーパーは b-money を参考文献 [1] として引用している。

証拠: ビットコイン以前のすべての提案の中で、b-money はビットコインの貨幣機構に最も密接に対応する。フォレンジック整合論の読みでは、b-money を書いた人物が、ビットコインを作った人物の自然な候補となる。ホワイトペーパーの明示的な引用がそれを補強する。サトシが b-money を主要な先行研究として特に挙げたためだ。

反論: 設計近接性は単独で候補を選ばない。同じくホワイトペーパーで引用された[アダム・バックの Hashcash](/BitcoinArchive/ja/entries/aftermath/1997-03-28-adam-back-hashcash-announcement/) は、ビットコインがマイニングに再利用するプルーフ・オブ・ワーク基本要素を提供する。同じフォレンジック整合論で、アダム・バックも並列の候補となる。[仮説概要](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)はウェイ・ダイとアダム・バックを候補プロファイル群 A としてまとめて扱う。ビットコイン v0.1 のコンポーネント別の出所（b-money からも Hashcash からも継承していない部分を含む）については[ビットコイン設計系譜](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-design-lineage/)を参照。

### 1.2 ビットコイン v0.1 の Crypto++ コードベース依存

ウェイ・ダイは [Crypto++](https://www.cryptopp.com/) を作成・保守した。これは暗号アルゴリズムの C++ 無料オープンソースライブラリである。ビットコイン v0.1 は SHA-256 実装に Crypto++ を使用していた: v0.1.3 ALPHA（2009 年初頭）の `src/sha.cpp` および `src/sha.h` には、ルーチンが「Crypto++ Version 5.5.2（2007 年 9 月 24 日リリース）からスタンドアロンのファイルとして切り出された」旨のヘッダーコメントが付いている。`namespace CryptoPP` の帰属表示も保持されている。

| ビットコインバージョン | 日付 | Crypto++ 利用 |
|---|---|---|
| v0.1 | 2009-01-09 | Crypto++ 5.5.2 SHA-256 をスタンドアロン (`sha.cpp`、`sha.h`) としてバンドル |
| v0.3.6 | 2010-07-29 | Crypto++ 5.6.0 SSE2 最適化 SHA-256 を統合 (約 2.5 倍高速化) |
| v0.5.0 | 2011-11-20 | [Crypto++ サブセット撤去、OpenSSL SHA-256 に置換](/BitcoinArchive/ja/entries/aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency/) (ニルス・シュナイダーのコミットをギャビン・アンドレセンがマージ) |

ビットコインが存在する 10 年以上前、ウェイ・ダイ本人は同じ Crypto++ ライブラリから [1996 年の Disperse/Collect 発表](/BitcoinArchive/ja/entries/aftermath/1996-02-06-wei-dai-disperse-collect-crypto-plus-plus/)を行った。これが、ビットコインが後に依存することになるこのコードベースの、公開記録上もっとも古い記録である。

このコードベース依存は 22 か月の稼働期間 (v0.1 2009 年 1 月〜v0.4.x) を持ち、サトシの 2011 年 4 月離脱から約 6 か月後に終了した。下記の論点はこの期間に対して有効であり、現在稼働中の Bitcoin Core には及ばない。これはビットコイン v0.1 が名指し候補の公開コードに対して持つ唯一の直接的なコードベースレベルの依存である。証拠: (a) b-money が参考文献 [1]、(b) Crypto++ がビットコインのハッシュ基本要素を提供、(c) ウェイ・ダイが両者の唯一の共著者という三点だ。この組合せが、他のどの候補も占めない構造的位置にウェイ・ダイを置く。

反論: Crypto++ は 2000 年代後半の C++ 暗号ライブラリの事実上の標準であった。当時の C++ プロジェクトで SHA-256 を使うために Crypto++ を選ぶのは通常のエンジニアリング判断であり、自己著者性を示す手がかりではない。v0.3.6 の SSE2 最適化アップグレードは [BitcoinTalk のメンバー「BlackEye」が提案した](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/)ものであり、サトシ単独の判断ではない。サトシがすべてのコードベース判断を制御する自己演出読みでは、これは整合させにくい事実である。

### 1.3 サイファーパンクの資質と知的系譜

ウェイ・ダイは長期にわたるサイファーパンクであり、1990 年代からサイファーパンクメーリングリストの初期参加者で、隣接コミュニティ（Extropians、SL4）にも積極的に関与してきた。b-money は Hashcash（アダム・バック）、Bit Gold（ニック・サボ）、RPOW（ハル・フィニー）と同じ知的環境で開発された。b-money 後のウェイ・ダイの公的執筆は暗号学および合理性関連の領域で続いており、[LessWrong プロファイル](https://www.lesswrong.com/users/wei-dai)は隣接領域での数十年の知的成果を示している。

反論: サイファーパンクの資質は複数の候補（アダム・バック、ハル・フィニー、ニック・サボ、サッサマン）に当てはまる。この次元は候補集合を絞り込むがウェイ・ダイを一意に選ばない。

### 1.4 能力プロファイル: 暗号学 PhD 水準の能力、計算機科学経歴

ウェイ・ダイはワシントン大学で計算機科学を学び、Microsoft で勤務した。b-money 論文が示す技術能力（学術出版水準の暗号プロトコル設計）と Crypto++ が示す工学能力（学術・商用プロジェクトで広く使われる保守された C++ ライブラリ）は、ビットコイン v0.1 の 19,901 行 C++ コードベースが要求するものと整合する。

反論: このプロファイルは複数の候補と非候補のサイファーパンクに当てはまる。能力は必要条件だが十分条件ではない（[仮説概要の方法論](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)参照）。

### 1.5 Windows 側開発環境の重なり

[Bitcoin v0.1 は Windows 上で開発された](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-windows-development-environment/)。v0.1 の readme.txt は対応コンパイラーとして Visual C++ 6.0 SP6 と MinGW GCC 3.4.5 を明記、ソースはマイクロソフトのハンガリアン記法、 v0.1.x シリーズは Windows 専用 `.rar` で配布、最終メールの PGP 署名末尾も Windows 専用クライアントを指している。ウェイ・ダイの Crypto++ ライブラリは、形成期にあたる 1990 年代末から 2000 年代を通じて主に Windows 上の Microsoft Visual C++ で開発されてきた。マイクロソフト勤務 (§1.4 上記) もそれと整合する Windows 側の継続を示す。名指しサトシ候補の中でウェイ・ダイは、ハル・フィニーの[長期 Mac 利用](/BitcoinArchive/ja/entries/analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis/)やピーター・トッドの [Linux-FHS リポジトリ記録](/BitcoinArchive/ja/entries/analysis/2024-10-08-todd-satoshi-identity-hypothesis/)のように Bitcoin v0.1 の Windows 側スタックと相違するのではなく、重なる側に位置する数少ない候補の 1 人である。

反論: 2000 年代後半の Windows 側開発環境はプロの C++ 開発では既定であり、複数の候補と多数の非候補開発者にも当てはまる。この次元は支持の像に寄与するが、ウェイ・ダイを一意に選び出さない。同時代の Windows 側 C++ 開発者すべてに同じ重なりが当てはまるためである。

## 2. 反証

| 反証 | 中心観察 | 強度の評価 |
|---|---|---|
| §2.1 2008-08-22 メール構造 | アダム・バック → ウェイ・ダイ → サトシの連鎖は第三者応答として読める。仮説下ではウェイ・ダイが自分宛に自分の論文について書いたことになる | アーカイブ内最強の反証 |
| §2.2 「b-money のページは知らなかった」 | サトシは私的メールでアダム・バックに、紹介前に b-money を知らなかったと開示 | 仮説下では聴衆のない自己欺瞞 |
| §2.3 2014 AALWA 振り返り | ウェイ・ダイは自身をサトシと区別し、サトシは「事前にサイファーパンクで活動的でなかった」と主張 — これは構造的にウェイ・ダイ自身の候補性に反する | 仮説維持には、ウェイ・ダイ自身を排除する構造的主張を含む持続的公的自己欺瞞が必要 |
| §2.4 スタイロメトリ距離 | Bitcoin Institute による van Dorst コーパス再分析: 上位 22.99%、名指し候補 5 名中 4 位（Szabo / Finney / Back の後） | 最も多く引用される 4 つのスタイロメトリ研究を通じて、ウェイ・ダイがトップマッチとなった事例なし |
| §2.5 Crypto++ コードベース依存は両刃 | Crypto++ は当時の C++ 暗号標準。SSE2 アップグレードは「BlackEye」提案 | 仮説下では §1.2 の支持論を弱める方向に作用する |
| §2.6 複数の自己否定 | 2014 AALWA + 長期インタビュー + 自名による継続的 Crypto++ / LessWrong 活動 | 仮説維持には数十年の自発的公的自己欺瞞が必要 |

### 2.1 2008 年 8 月 22 日のメールのやり取りは第三者応答として読める

最も強いアーカイブ内反証は、[2008 年 8 月 20〜22 日のメール連鎖](/BitcoinArchive/ja/entries/aftermath/2008-08-20-satoshi-to-adam-back/)の構造である:

| 日付 | 方向 | 内容 |
|---|---|---|
| 8 月 20 日 | サトシ → アダム・バック | 来たるホワイトペーパー向けの Hashcash 引用形式について尋ねる |
| 8 月 21 日 | [アダム・バック → サトシ](/BitcoinArchive/ja/entries/aftermath/2008-08-21-adam-back-to-satoshi/) | 引用情報を提供、ウェイ・ダイの b-money を見るよう示唆 |
| 8 月 21 日 | [サトシ → アダム・バック](/BitcoinArchive/ja/entries/aftermath/2008-08-21-satoshi-to-adam-back-b-money/) | 「b-money のページは知らなかった、しかし私のアイデアはまさにその点から始まる」 |
| 8 月 22 日 | [サトシ → ウェイ・ダイ](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/) | 「あなたのアイデアを拡張する論文を発表する準備をしている」 — ホワイトペーパー引用のために b-money 公開日を尋ねる |
| (日付未指定) | ウェイ・ダイ → サトシ | 1998 年公開日と過去の議論アーカイブリンクを提供 |

ウェイ・ダイがサトシだったなら、この構造は自然には成立しない。彼は以下をすべて自作自演したことになる:
- アダム・バックに「サトシ」として Hashcash 引用について尋ねる
- アダム・バックから自身への紹介を受ける
- 2 日後に「サトシ」として自身に b-money 公開日詳細を尋ねる
- 自身に公開履歴で返答する

シンプルな読みなら、連鎖は見たままだ。サトシがアダム・バックに引用ガイダンスを求め、アダム・バックが彼が見ていなかった既存の b-money 提案を紹介し、サトシが b-money の著者にフォローアップして引用日を確認した。ウェイ・ダイの応答（公開履歴とリンクを提供）は、未知の通信相手の仕事に実質的に関与する第三者と整合する。この 2009 年 1 月 10 日のフォローアップメールについても、ダイ本人は当時ほとんど注意を払わず 2 年後にようやくマイニングを始めたと[振り返っている](/BitcoinArchive/ja/entries/aftermath/2014-07-19-wei-dai-next-tech-gold-rush/)。説が覆さなければならない第三者応答の読みは、まさにこの本人の回想に基づいている。

### 2.2 サトシの「b-money のページは知らなかった」という自認

2008 年 8 月 22 日のアダム・バック宛メールで、サトシは書いた: *「b-money のページは知らなかった、しかし私のアイデアはまさにその点から始まる」*。この発言は、サトシが b-money を知ったのは開発後、ホワイトペーパーの 2 か月前にアダム・バックの紹介を経由してのことだったと位置づける。詳しくは[サイファーパンク独立到達分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)で検討する。

ウェイ・ダイ = サトシの読みのもとでは、この発言は観客のいない自己欺瞞となる。サトシがメールでアダム・バックに、ウェイ・ダイのページを見たことがないと告げながら、実際にはその著者だったことになるからだ。シンプルな読みなら、サトシはビットコインの設計中に b-money を本当に知らず、2008 年 8 月にアダム・バックの紹介を通じてその存在を知った。ウェイ・ダイ自身の [2014 年 AALWA 回顧](/BitcoinArchive/ja/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/)はこの読みを支持する: サトシは中心的なアイデアを独自に再発明し、後から b-money を知った。

### 2.3 ウェイ・ダイの 2014 年 1 月 AALWA 回顧

2014 年 1 月 12 日、ウェイ・ダイは LessWrong の『Ask any LessWronger anything』スレッドに投稿し、「サトシではないか」という問いに[直接答えた](/BitcoinArchive/ja/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/):

<!-- audit:quote-skip -->
> 「私の推測では、彼は暗号学やサイファーパンクコミュニティで以前活動していた人物ではないと思います。そうでなければ、文体やコーディングスタイルで特定されているはずです」

回顧には説に関する 3 つの記述がある:

- サトシは「学術暗号学またはサイファーパンクのコミュニティで以前から積極的に活動していた人物ではない」と述べている。額面どおり受け取れば、これはウェイ・ダイ自身（長期にわたるサイファーパンク）に対する反証となる構造的主張だ。
- サトシは b-money の中心的なアイデアをアダム・バックの紹介経由でウェイ・ダイの論文を知る前に独自に再発明した。
- ウェイ・ダイは議論を通じて自身とサトシを別人として区別する。

第一点は、2007〜2008 年中にサイファーパンクで公的に活動していた他の候補（アダム・バック、ハル・フィニー、ニック・サボ、サッサマン）にも当てはまる（詳しくは[識別性論](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)を参照）。同じ論理で、ウェイ・ダイ自身にも当てはまる。彼は当該期間中、サイファーパンクリストで活動し、Crypto++ 保守で可視だったからだ。

この説が真であるためには、2014 年回顧全体が公的な自己欺瞞でなければならず、ウェイ・ダイ自身が候補であることを否定する、非活動性についての構造的主張もそこに含まれる。

### 2.4 文体計量での距離

[Bitcoin Institute によるバス・ヴァン・ドルストの 75,000 人著者「Where is Satoshi?」文体計量コーパスの再分析](/BitcoinArchive/ja/entries/analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates/)は、ウェイ・ダイを上位 22.99%（12,739 人中 2,929 位）に位置づける。最も多く引用される名指し候補 5 名のうち 4 番目で、ニック・サボ（4.67%）、ハル・フィニー（6.89%）、アダム・バック（7.87%）に次ぐ順位だ:

| 文体計量研究 | ウェイ・ダイの結果 |
|---|---|
| Skye Grey 2013（サボ単独仮説検証） | 候補集合に未収録 |
| アストン大学 2014（11 候補） | 順位非公開 |
| ヴァン・ドルスト 2024 / Bitcoin Institute 再分析 | 12,739 中 2,929 位 — 上位 22.99%、名指し候補内 4 位 |
| カフィエロ／カレイロウ NYT 2026（12 候補） | 順位非公開 |

最も多く引用される 4 件の文体計量調査において、ウェイ・ダイがサトシの最近接マッチとして現れたものはない。彼の執筆語調はコーパスの上位四分位には入るものの、サボ、フィニー、アダム・バックよりも測定可能な形でサトシから遠い。フォレンジック整合論（§1.1、b-money 近接）と文体計量論はウェイ・ダイに対して異なる方向を指す。

### 2.5 Crypto++ コードベース依存は両刃

Crypto++ の組み込み（§1.2）は構造的整合だが、著者性の強い証拠ではない。Crypto++ は 2007〜2008 年に C++ で SHA-256 を使うシステムを構築する任意の開発者にとって標準的な選択肢であり、その選択は開発者が誰であるかに関係なく自然なエンジニアリング判断であった。v0.3.6 SSE2 アップグレード（2010 年 7 月）は [BitcoinTalk メンバー「BlackEye」](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774/) の提案によるもので、サトシ単独ではない。ウェイ・ダイがサトシだったなら、SHA-256 を独自に実装するか、フォーラムメンバーの提案を待たずに SSE2 判断を自分で行ったはずである。

### 2.6 複数の自己否定発言

ウェイ・ダイは一貫してサトシであることを否定してきた:

- **2014 年 AALWA 回顧**（前述）では、自身とサトシを明示的に区別している。
- **2014 年以降の長文インタビューやフォーラム投稿**でも、ウェイ・ダイはサトシを別人として扱い続け、サトシが彼自身であれば自賛になる言葉でサトシの具体的な設計貢献（最長チェーン合意規則、難易度調整アルゴリズム）をしばしば称賛する。
- **2010 年代から 2020 年代を通じて自身の名前で続く Crypto++ と LessWrong の活動**も、同期間に彼がサトシでもあったとすれば、並列のデコイ作業を必要とする持続的な公的プロファイルとなる。

ウェイ・ダイの自己否定は、ニック・サボの [2011 年ブログ投稿](/BitcoinArchive/ja/entries/aftermath/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long/)における「ナカモトが私の設計を改善した」枠組み（自分自身の仕事に対する具体的な改善をナカモトに帰す）と構造的に類似する: サトシを別の名指しされた別人として扱う持続的な公的枠組み。両方の否定とも、仮説に覆されるためには、持続的な自発的公的自己欺瞞を必要とする。

## 3. 広い記録の中での位置づけ

最も多く引用される 4 件の文体計量調査において、5 名すべてを公的に順位付けする唯一の調査（ヴァン・ドルスト／Bitcoin Institute 再分析）でウェイ・ダイは名指し候補の中でサトシから*最も遠い*位置に置かれている。2008 年 8 月のメールのやり取り、「b-money のページは知らなかった」という自認、ウェイ・ダイ自身の 2014 年回顧の三点が、仮説が覆さなければならない一貫した第三者応答の読みを構成する。

ウェイ・ダイの候補空間での構造的位置は他の候補と異なる: 彼は候補集合の構成上候補プロファイル群 A（サトシがホワイトペーパーで明示的に引用）に属するが、引用経路を確立する同じ一次資料メールが、ウェイ・ダイが第三者としてビットコインをサトシから受け取ったこと（彼が起源ではないこと）も同時に確立する。

他の名指し候補仮説との比較については、[サトシ正体仮説概要](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)および個別エントリーの[アダム・バック](/BitcoinArchive/ja/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/)、[ハル・フィニー](/BitcoinArchive/ja/entries/analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis/)、[サッサマン](/BitcoinArchive/ja/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/)、[金子勇](/BitcoinArchive/ja/entries/analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis/)、[サボ](/BitcoinArchive/ja/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/)、[トッド](/BitcoinArchive/ja/entries/analysis/2024-10-08-todd-satoshi-identity-hypothesis/)を参照。

## 4. このエントリーの限界

- 本エントリーは新しい証拠を提示しない。2008 年 8 月のメールのやり取り、ウェイ・ダイの 2014 年 1 月 AALWA 回顧、Crypto++ の組み込み記録、Bitcoin Institute によるヴァン・ドルストのコーパス再分析、ウェイ・ダイをサトシ候補として論じる公的議論の現状から資料を編集したものである。
- ウェイ・ダイの仮説は、単一の引き金となる提唱がある候補（ハル・フィニーに対するグリーンバーグ 2014、アダム・バックに対する NYT 2026、トッドに対する HBO 2024）と異なる。ウェイ・ダイはホワイトペーパー引用の効果でビットコイン公開前から構造的候補だったため、単一の主流報道の提唱はない。
- 新しい証拠が浮上した場合、本エントリーは更新されるべきである。想定されるのは、3 通のメール通信を超える直接的な文書的繋がり、標準的な Crypto++ 組み込みを超えるウェイ・ダイの他のコードと一致するビットコイン v0.1 の技術的指紋、2014 年回顧と矛盾するウェイ・ダイの発言等だ。

[ウェイ・ダイの伝記](/BitcoinArchive/ja/participants/wei-dai/)が文書上の土台を持っている。学術記録、b-money 提案、サイファーパンクへの参加、そして回顧的発言だ。§1 の証拠と §2 の反証は、それらを秤にかけている。
