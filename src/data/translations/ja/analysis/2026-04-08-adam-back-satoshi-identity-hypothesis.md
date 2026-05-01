---
title: "アダム・バックはサトシだったのか — Hashcash 発明者をめぐる正体仮説"
date: 2026-04-08T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Adam_Back"
author: "Bitcoin Institute"
participants:
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "公的議論で繰り返し提案される仮説、すなわちアダム・バック（イギリスの暗号学者、Hashcash の発明者、サトシ・ナカモトが最初に接触した既知の人物）がサトシ・ナカモトの仮名の中の人だった、という仮説の記録。本仮説の最も目立つ近年の定式化は、2026 年 4 月のニューヨーク・タイムズによる John Carreyrou の調査記事で、サイファーパンクメーリングリスト・アーカイブの文体計量分析に基づく。本エントリーは、支持論点（NYT による文体計量結果、Hashcash の発明者としての関連、サイファーパンクとしての経歴と英語水準）と反証（2008 年 8 月のメール通信そのものが第三者応答として読める構造、バックが 2024 年 2 月の COPA 対ライト裁判で完全な通信記録を宣誓のもと証拠提出した事実、文体計量分析が委託先の言語学者自身により「不確定」 と評された事実、NYT 公開後インタビューでのバックの自己整理）を同じ詳細度で示す。"
isSatoshi: false
tags:
  - "satoshi-identity"
  - "adam-back"
  - "cypherpunk"
  - "hashcash"
  - "stylometric-analysis"
  - "new-york-times"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "Wikipedia — Adam Back"
    url: "https://en.wikipedia.org/wiki/Adam_Back"
  - name: "The New York Times (@nytimes) — 調査記事の告知投稿"
    url: "https://x.com/nytimes/status/2041824640071323724"
    note: "John Carreyrou による NYT の調査記事は 2026 年 4 月 8 日に公開され、ビットコイン以前の暗号学メーリングリストに 10 件以上投稿していた 620 人の書き手のうちでバックがサトシの文体に最も近い一致を示すと特定した。X 投稿は記事の安定したポインターとして使用。"
  - name: "Yahoo Finance — Adam Back explains why he's not bitcoin creator Satoshi Nakamoto（2026 年 4 月 10 日）"
    url: "https://finance.yahoo.com/markets/crypto/article/adam-back-explains-why-hes-not-bitcoin-creator-satoshi-nakamoto-172837820.html"
    note: "NYT 調査への応答としてのバックの直接の発言の出典。"
  - name: "TechCrunch — British cryptographer Adam Back denies NYT report（2026 年 4 月 8 日）"
    url: "https://techcrunch.com/2026/04/08/british-cryptographer-adam-back-denies-nyt-report-that-he-is-bitcoin-creator-satoshi-nakamoto/"
  - name: "CNBC — Latest investigation into bitcoin founder ties identity to Blockstream CEO Adam Back（2026 年 4 月 8 日）"
    url: "https://www.cnbc.com/2026/04/08/latest-investigation-of-bitcoin-founder-ties-identity-to-blockstream-ceo-adam-back.html"
  - name: "NPR — After years of speculation, a reporter claims to have uncovered the founder of Bitcoin（2026 年 4 月 13 日）"
    url: "https://www.npr.org/2026/04/13/nx-s1-5778501/after-years-of-speculation-a-reporter-claims-to-have-uncovered-the-founder-of-bitcoin"
  - name: "Bitcoin Magazine — Adam Back's Complete Emails with Satoshi Nakamoto"
    url: "https://bitcoinmagazine.com/technical/bitcoin-adam-backs-complete-emails-satoshi-nakamoto"
  - name: "Satoshi Nakamoto Institute — Adam Back Emails"
    url: "https://satoshi.nakamotoinstitute.org/emails/adam-back/"
relatedEntries:
  - aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation
  - aftermath/2008-08-20-adam-back-biography
  - correspondence/adam-back/2008-08-20-satoshi-to-adam-back
  - correspondence/adam-back/2008-08-21-adam-back-to-satoshi
  - correspondence/adam-back/2008-08-22-satoshi-to-adam-back-b-money
  - correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai
  - aftermath/2024-02-21-adam-back-retrospective-testimony
  - aftermath/2014-01-12-wei-dai-retrospective-on-satoshi
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
  - analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis
  - analysis/2024-10-08-todd-satoshi-identity-hypothesis
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-10-31-cypherpunk-independent-arrival
inlineLinkKeywords:
  - "アダム・バック仮説"
  - "バック＝サトシ"
  - "NYT 2026 調査"
translationStatus: complete
---

本エントリーは、[アダム・バック](/BitcoinArchive/ja/participants/adam-back/) — イギリスの暗号学者、Hashcash の発明者（1997 年）、Blockstream の CEO、2008 年 8 月 20 日にサトシ・ナカモトが最初に接触した既知の人物 — がサトシ・ナカモトの仮名の中の人だった、と公的議論で繰り返し提案される仮説を記録する。本仮説の最も目立つ近年の定式化は、2026 年 4 月 8 日のピューリッツァー賞受賞ジャーナリスト John Carreyrou によるニューヨーク・タイムズの調査記事で、サイファーパンクメーリングリスト・アーカイブの文体計量分析を用いて、ビットコイン公開以前に暗号学メーリングリストに 10 件以上投稿した 620 人の書き手のうち、バックがサトシの文体に最も近いと特定した。バックは複数のインタビューで本特定を否定している。主張を提示し、支持論者の論じ方をそのまま描写し、反証を同じ詳細度で示す。判断は読者に委ねる。

## 1. 仮説が主張する内容

仮説の主張は、バックがサトシ・ナカモトの仮名でビットコインを設計・実装したというもの。バックの「サトシ」 との文書化された公的記録上のやり取り — [2008 年 8 月のメール通信](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/)や[2024 年 2 月の COPA 対ライト裁判での証言](/BitcoinArchive/ja/entries/aftermath/2024-02-21-adam-back-retrospective-testimony/) — は仮名を維持するための演出であった、という読みになる。この読みのもと、バックは設計期間（2007 年央以降）からサトシの撤退（2011 年）までビットコインの単独または主要な作者であり、2014 年以降 Blockstream を運営しつつ公的には著作を否定し続けている、ということになる。

## 2. 仮説が依拠する論点

### 2.1 2026 年ニューヨーク・タイムズの文体計量調査

本仮説の最も目立つ近年の定式化は、[2026 年 4 月の John Carreyrou によるニューヨーク・タイムズ調査記事](/BitcoinArchive/ja/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/)で、サイファーパンクメーリングリスト・アーカイブの文体計量比較を用いて、ビットコイン公開以前に暗号学メーリングリストに 10 件以上投稿した 620 人の書き手のうち、バックがサトシの文体に最も近いと特定した。方法論の詳細 — 3 つの文体的指標（句点後の二重スペース、英国式綴り、ハイフン誤用）、325 件の非標準ハイフンとの比較、Florian Cafiero による独立した言語学的レビュー、ビットコイン告知前後のバックのオンライン活動の「目立つ空白」、バックの応答 — は同 aftermath エントリーに記録されている。

仮説の重み付けに直接関わる 2 つの結果：(a) Cafiero の分析でバックが 12 名の候補のうち最上位、(b) 同分析は内部で「不確定」 と評され、ハル・フィニーがほぼ並んだ。前者は仮説を支持し、後者は限定する。

### 2.2 Hashcash の発明者としての関連（長年の論点）

Hashcash はビットコインがマイニングと合意形成で再利用するプルーフ・オブ・ワーク基本要素であり、[ビットコインのホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/)で主要な先行事例として引用されている。引用された基本要素の作者と、それを再利用した新しいシステムの作者の相関は、公的記録と構造的に整合する。

**「Hashcash の作者＝ビットコインの作者」 論点の射程。** Hashcash の名前から想起される印象より、実際の Hashcash の中身は遥かに狭い。「Hashcash」 の `cash` は**計算コストとしての対価**の比喩 — アダム・バックの 1997 年論文がスパム対策（DoS 防止）として提案した「計算上の郵便代」 — であって、通貨ではない。Hashcash は単独完結する PoW スタンプ機構であり、台帳・送金・合意形成・通貨供給・残高の概念を一切持たない。ビットコインは Hashcash から PoW 基本要素のみを再利用し、それ以外はほぼすべて再設計または独自に追加している：

| ビットコインの構成要素 | Hashcash に含まれるか | 由来 |
|---|---|---|
| プルーフ・オブ・ワーク | ✅ あり | Hashcash |
| ブロックチェーン（台帳） | ❌ なし | ビットコイン |
| 分散型合意形成 | ❌ なし | ビットコイン |
| UTXO モデル | ❌ なし | ビットコイン |
| マイニング報酬による発行 | ❌ なし | ビットコイン |
| 通貨供給上限（2,100 万） | ❌ なし | ビットコイン |
| P2P ネットワーク伝播 | ❌ なし | ビットコイン |
| 公開鍵トランザクション（ECDSA） | ❌ なし | ビットコイン（公開鍵電子キャッシュの先行研究はサイファーパンク文献にあるが、Hashcash には含まれない） |
| 難易度調整 | ❌ なし | ビットコイン |
| ブロックタイムスタンプとチェーン順序 | ❌ なし | ビットコイン |

Hashcash の作者であることは、ビットコインの多数の構成要素のうち一つを設計したことを意味する — マイニングの基盤としてビットコインが転用したスパム抑止スタンプ機構である。フォレンジック整合論は、その一つを「ビットコインに必要だった設計思想」 と数えるか、「ビットコインに必要だった設計思想の一つ」 と数えるかで強さが変わる。

候補集合の射程からの反論：ホワイトペーパーはウェイ・ダイの b-money も引用している。同じフォレンジック整合論によれば、ウェイ・ダイも並列の候補となる。本論点は「サトシが明示的に引用したサイファーパンク」 を候補集合として選ぶが、その中からバックを特定的に選び出すわけではない（[正体仮説の概観](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)はこの理由でバックとウェイ・ダイをグループ A として一緒に扱っている）。

### 2.3 サイファーパンク経歴・能力・英語水準

バックは長期にわたるサイファーパンクで、暗号プロトコル設計に関する記録された経験（Hashcash 1997 年、それ以前の匿名性システム関連の仕事）、エクセター大学での計算機科学博士号、ネイティブのイギリス英語の背景を持つ — これらはビットコイン v0.1 が示すものと整合し、サトシの英国式綴りパターンとも整合する。

反論：このプロファイルは当該時期の多くの長期サイファーパンクに当てはまる。候補集合を実質的に絞るが、ウェイ・ダイ・ハル・フィニー・ニック・サボなどの他候補に対してバックを特定的に選び出すわけではない。これらの候補のいくつかは、Cafiero の「ハル・フィニーがほぼ並んだ」 という文体計量結果にも適合する。

## 3. 反証

### 3.1 2008 年のメール通信そのものが第三者応答として読める

最強のアーカイブ内反証は、[2008 年 8 月 20〜22 日のメール通信](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/)そのものの構造である：

- 8 月 20 日：サトシからバックへ — 初期のビットコイン構想を説明し、Hashcash の正しい引用形式と関連する先行研究について尋ねる。
- 8 月 21 日：[バックからサトシへ](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-21-adam-back-to-satoshi/) — 求められた引用情報を提供し、ウェイ・ダイの b-money 提案を見るよう示唆。
- 8 月 22 日：[サトシからバックへ](/BitcoinArchive/ja/entries/correspondence/adam-back/2008-08-22-satoshi-to-adam-back-b-money/) — 「b-money のページは知らなかった」 と返信し、同日付で[ウェイ・ダイにメール](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/)を送信。

バックがサトシの仮名でビットコインを設計・実装したのなら、この構造は自然には成立しない：バックが「バック」 に引用ガイダンスを尋ねる必要はないし、自分から自分への紹介経由で b-money を「発見する」 必要もない。シンプルな読みは、通信が見たままのもの — サトシがバックに助けを求め、バックが第三者として関連するポインターを返し、サトシがそれを追ったというもの。

### 3.2 2024 年 2 月 COPA 対ライト裁判での宣誓証言

[2024 年 2 月、バックはロンドンの COPA 対ライト裁判で証言](/BitcoinArchive/ja/entries/aftermath/2024-02-21-adam-back-retrospective-testimony/)し、サトシとの完全なメール通信を宣誓のもと証人証拠として提出した。証言は法廷での主要な知的財産訴訟の一部として行われた。バックは複数のインタビュー・講演・法的手続を通じて、サトシは別人であると一貫して公的に主張してきた。

仮説が真であるためには、2024 年の証言は偽証であり、宣誓のもとの法廷手続における持続的な欺瞞であり、さらに「サトシ」 と「バック」 のメール通信がそうした瞬間に備えて 16 年前に偽造または自作自演されたものでなければならない、ということになる。

### 3.3 文体計量の不確定性と確証バイアスのリスク

2026 年 NYT 調査の委託言語学者である Florian Cafiero は、文体計量結果を「不確定」 と評した — 同分析でハル・フィニーがバックとほぼ並んだ。方法論はサイファーパンクメーリングリスト書き手の集合内で選択を行うが、この集合は定義上、関心・語彙・参照枠をサトシと共有する人々である。

バックの[公開後インタビュー応答](/BitcoinArchive/ja/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/)はこの異議を直接表明する：方法論には「確証バイアスの要素が含まれる」、「結局、似たような関心を持つ人々を選び出している。…似たような書き方になるのは当然だ」 と。「目立つ空白」 の主張 — バックがビットコイン告知前後にオンラインで静かになったこと — は観察的なものであり直接的に証明的ではない。多くのサイファーパンクメーリングリスト参加者が 2008〜2009 年頃にビットコインと関係ない理由で公的活動を減らしたり方向転換した。

### 3.4 バック自身による問題の枠組み

同じ公開後インタビューで、バックは公的高可視性の人物がサトシでありうるという考え自体に対して問題を整理した：「最もありそうな状況は、サトシはドキュメンタリーの撮影クルーや調査ジャーナリストに話しかける類の人物ではないということだ」。さらに、サトシの匿名性継続はビットコインにとって構造的に有益であると論じた：「ビットコインを発見・資産クラスとして認識させる助けになる」 から。これらの立場はそれ自体として仮説を否定はしない（仮名を維持している人なら、まさにこうした論じ方をすると予想できる）が、公的高可視性の特定がサトシの仮名の目的と整合しないというバック自身の整理を構成している。完全な引用と文脈は [NYT 調査の aftermath エントリー](/BitcoinArchive/ja/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/)にある。

## 4. より広い公開記録の中で

ウェイ・ダイの [2014 年回想](/BitcoinArchive/ja/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/)（AALWA スレッド）は、サトシは設計期間中に可視のサイファーパンクコミュニティで「以前から積極的に活動していた人物ではない」 と論じている — これは 2007〜2008 年にサイファーパンク議論で可視に活動していた候補に対する反証として作用する。バックはサイファーパンクメーリングリスト議論で可視に活動していた（NYT 文体計量分析が依拠するのはまさにこの事実である）ため、[識別性論点](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)はサッサマンや当該時期の他の可視活動候補と並んで、バックを候補とすることに反する。

サトシ自身が 2008 年 8 月にバックへ送った発言「b-money のページは知らなかった」 は独立にバック＝サトシ説を弱める。バックがサトシだったのなら、当該メールは双方にとって可視の利益のない自己欺瞞となる。

他の候補仮説との比較は、[サトシ正体仮説の概観](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)と、[サッサマン](/BitcoinArchive/ja/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/)・[金子勇](/BitcoinArchive/ja/entries/analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis/)・[トッド](/BitcoinArchive/ja/entries/analysis/2024-10-08-todd-satoshi-identity-hypothesis/)の個別仮説エントリーを参照されたい。

## 5. 本エントリーの限界

- 本エントリーは新しい証拠を提示しない。2026 年 NYT 調査・バックの応答・既存アーカイブ資料（2008 年 8 月のメール通信、2024 年 COPA 証言）から得られる材料を整理する。
- 本エントリーは仮説と反証を同じ詳細度で提示し、判断は読者に委ねる。
- 本エントリーは「最も蓋然性の高いサトシ候補」 を指名しない。
- Cafiero の「ハル・フィニーがほぼ並んだ」 結果は、バック特定の*一意性*に対する実質的な反証として扱われる（[ハル・フィニーの概観プロファイル](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)と、フィニーを特定的に否定する [レース当日アリバイ](/BitcoinArchive/ja/entries/aftermath/2023-10-21-lopp-hal-finney-not-satoshi/)を参照）。
- 新たな証拠が出現した場合 — 2008 年 8 月のメール通信を超える直接の文書接続、ビットコイン v0.1 にバックの他の公開コードと一致する技術的指紋、バックがそれまでの公的立場と矛盾する発言 — 本エントリーは更新されるべきである。

*[編者注：本エントリーは 2026 年 4 月の NYT 調査を、長年の仮説の最も目立つ近年の定式化として扱う。枠組みは意図的に保守的にしてある：仮説を提示し、支持論者の論じ方をそのまま描写し、反証を同じ詳細度で示す。本エントリーは仮説の真偽について編集的な結論を引かない。直接の判定を求める読者はそれを得られない。]*
