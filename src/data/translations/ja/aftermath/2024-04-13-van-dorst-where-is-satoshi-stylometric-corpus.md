---
title: "サトシ・ナカモトの文体計量分析「Where is Satoshi?」 — バス・ヴァン・ドルストによる 75,000 人比較オープンソースデータセット（2024 年 4 月 13 日）"
date: 2024-04-13T00:00:00Z
type: "article"
source: "github"
sourceUrl: "https://github.com/basvandorst/where-is-satoshi"
author: "Bas van Dorst"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "2024 年 4 月 13 日、バス・ヴァン・ドルストが「Where is Satoshi?」 を公開した。サトシ・ナカモトの執筆コーパスを 75,000 人を超える暗号学関連メーリングリストの書き手および 70,000 人を超える Reddit /r/Bitcoin の書き手と比較する大規模オープンソース文体計量プロジェクトである。本リポジトリは公開記録上、サトシ対候補者の文体計量比較として最大規模の数値データを公開している：暗号学関連メーリングリスト 10 件以上における 1992〜2000 年の投稿 500,000 件以上、2005〜2019 年の Reddit コメント 7,500,000 件以上、サトシの既知執筆 81,500 語（ホワイトペーパー、メール、BitcoinTalk 投稿、コードコメント）。コーパス全体に対し、n-gram 解析（1/2/3-gram）、Burrows' Delta、ジャッカード類似度、5 種類の読みやすさ指標（Flesch、Gunning Fog、Dale-Chall、Coleman、SMOG）、句読点パターン、語長頻度分布、人称代名詞使用、ハイフン使用、英米綴り変異までを計算している。完全な数値結果は XLSX（40MB）と CSV（240MB）でダウンロード可能。著者は候補者名の指名を意図的に避け（「容疑者リストはあるが、100% 確信できないので名前は出さない」）、特定の主張ではなく方法論とデータの透明性を優先している。本プロジェクトは、サトシの著者性に関する数値的・候補者横断的な文体計量資源として、公開記録上で最も方法論的に厳格な存在である。"
isSatoshi: false
tags:
  - "satoshi-identity"
  - "stylometric-analysis"
  - "methodology"
  - "dataset"
  - "open-source"
  - "investigation"
secondarySources:
  - name: "Michael Chon — 'Stylometric Analysis: Satoshi Nakamoto'（Towards Data Science / Medium）"
    url: "https://medium.com/data-science/stylometric-analysis-satoshi-nakamoto-294926cdf995"
    note: "より小規模で先行する文体計量分析。同種の方法論を採用しており、方法論的参照として有用。"
  - name: "blockchainreporter.net — 'Can We Uncover The Identity Of Satoshi Through Stylometry Analysis?'"
    url: "https://blockchainreporter.net/can-we-uncover-the-identity-of-satoshi-through-stylometry-analysis/"
    note: "サトシ特定のための文体計量研究の概観。ヴァン・ドルストのプロジェクトが明示的に列挙している限界の議論を含む。"
relatedEntries:
  - aftermath/2014-04-16-aston-university-szabo-stylometric-study
  - aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric
  - aftermath/2015-05-15-popper-nyt-szabo-satoshi-investigation
  - aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation
  - analysis/2013-12-05-szabo-satoshi-identity-hypothesis
  - analysis/2026-04-08-adam-back-satoshi-identity-hypothesis
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-10-31-satoshi-anonymity-architecture
translationStatus: complete
---

2024 年 4 月 13 日、**バス・ヴァン・ドルスト**が[「Where is Satoshi?」](https://github.com/basvandorst/where-is-satoshi)を公開した。[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)の執筆コーパスを 75,000 人を超える暗号学関連メーリングリストの書き手および 70,000 人を超える Reddit /r/Bitcoin の書き手と比較する大規模オープンソース文体計量プロジェクトである。本プロジェクトは、コーパス規模の点でも、データ公開の透明性の点でも、サトシの著者性に関する数値的な多候補文体計量資源として、公開記録上最も厳格である。

**コーパス：**

- **メーリングリストコーパス：** 暗号学関連メーリングリスト 10 件以上における 1992〜2000 年の投稿 500,000 件以上。書き手 75,000 人以上を網羅。
- **Reddit コーパス：** /r/Bitcoin の 2005〜2019 年のコメント 7,500,000 件以上。書き手 70,000 人以上を網羅。
- **サトシコーパス：** [ビットコインホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/)、[BitcoinTalk フォーラム投稿](/BitcoinArchive/ja/participants/satoshi-nakamoto/)、[私的メール](/BitcoinArchive/ja/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/)、[v0.1 ソース公開](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-v0-1-released/2009-01-08-bitcoin-v0-1-released/)のコードコメントを含む 81,500 語。

**文体計量指標：**

書き手と時間窓のすべての組について、本プロジェクトは以下を計算する：

- **n-gram 解析**（1/2/3-gram レベルでの語彙とフレーズパターン）。
- **Burrows' Delta** — 計算文体計量における標準的な距離指標。
- **ジャッカード類似度** — 語彙集合の重なりを測る指標。
- **5 種類の読みやすさ指標**：Flesch、Gunning Fog、Dale-Chall、Coleman、SMOG。
- **句読点パターン**、ハイフン用法、句点後のダブルスペース（後の[カレイロウ NYT 調査](/BitcoinArchive/ja/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/)で強調された指標の一つ）を含む。
- **語長頻度分布**。
- **人称代名詞使用**（一人称単数 vs 複数、有無のパターン）。
- **英米綴り変異** — サトシの執筆に見られる英国式綴りの特徴を含む。複数の特定仮説の根拠となってきた指標。

**データ公開：**

完全な数値出力はダウンロード可能なスプレッドシートとして公開されている：

- `XLSX` 集計版：40 MB。
- `CSV` 生データ（チャンクごと）：240 MB。

これは公開記録上、サトシ対候補者の文体計量比較として最大規模の数値データセットである。本分野で唯一、独立した再分析を可能にする資源でもある：別の距離指標や別の候補者刈り込み戦略を持つ研究者は、同じ基底データに対して自分の順位付けを実行できる。

**著者の枠組み：**

ヴァン・ドルストは首位候補の指名を意図的に避けている：

> 容疑者のショートリストはある。だが 100% 確信できないので、ここで名前を出すつもりはない。

個人的な利害についても透明である：

> サトシの正体に個人的関心はない。2012 年に保有分は売却済みで、それは熱狂が始まる前のことである。

大規模データセット・完全な数値公開・特定主張の不在 — この組み合わせは、特定の候補者を名指しした物語的な文体計量論考（[Skye Grey 2013 のサボ論](/BitcoinArchive/ja/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/)、[Aston University 2014 のサボ研究](/BitcoinArchive/ja/entries/aftermath/2014-04-16-aston-university-szabo-stylometric-study/)、[カレイロウ 2026 NYT 調査](/BitcoinArchive/ja/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/)におけるカフィエロの分析）よりも方法論的に厳格である。

**著者が述べる方法論的留意点：**

- 「高い相関は類似した言語パターンを示すだけである → 高い相関は因果を含意しない」。同じ技術的話題について同じ時代に書く 2 人の著者は、同一人物であろうとなかろうと、語彙と文構造を共有する。
- ビットコインが 2009 年に公開された後にのみ生じた用語の存在により、n-gram 解析は複雑化する。2010 年以降の暗号通貨関連執筆との比較は、ビットコイン特有の語彙によって紛れる可能性がある — 情報を持つ書き手なら誰でも採用するためである。
- メールスレッドの返信抽出は、過去の返信からの引用テキストを誤って著者の言語として取り込む可能性がある。
- 時間窓化された分析の最終チャンクは、しばしば不完全であり、集計結果を歪める可能性がある。

これらの留意点は、すべての文体計量によるサトシ特定研究を制約する構造的限界と同じものである。本プロジェクトの価値は、それらを明示的に述べた上で、批判的検証を可能にする生の数値データを提供している点にある。

**文体計量の系譜上の位置づけ：**

特定候補を名指しした文体計量の系譜と本コーパスの対照：

| 研究 | 年 | 候補範囲 | 首位 | 数値データ公開 |
|---|---|---|---|---|
| [Skye Grey](/BitcoinArchive/ja/entries/aftermath/2013-12-05-techcrunch-skye-grey-szabo-stylometric/) | 2013 | サボ単独（仮説検証型） | サボ | 否（語句リストの叙述のみ） |
| [Aston University](/BitcoinArchive/ja/entries/aftermath/2014-04-16-aston-university-szabo-stylometric-study/) | 2014 | 11 候補 | サボ | 否（プレスリリース上の結論のみ） |
| カフィエロ／[カレイロウ NYT](/BitcoinArchive/ja/entries/aftermath/2026-04-08-nyt-carreyrou-adam-back-satoshi-investigation/) | 2026 | 12 候補（焦点）／620（広範） | アダム・バック（ハル・フィニーがほぼ同点） | 否（NYT 記事内に結果要約） |
| **ヴァン・ドルスト** | **2024** | **75,000+** | **指名なし** | **可（CSV/XLSX 計 280 MB）** |

ヴァン・ドルストが候補を指名せず、物語的研究は指名している事実 — そして指名する研究同士で首位候補が一致しない（サボ vs アダム・バック）事実 — は、それ自体が方法論的観察である：サトシの文体計量による特定は、コーパス選定・距離指標・候補者の事前選定によって答えが変わる感受性を持つ。

**Bitcoin Institute による再分析：ヴァン・ドルストの公開データから抽出した候補別距離値（2026 年 5 月）：**

著者は順位の公表を拒否しているが、基底の数値データは `output/comparison.xlsx`（43 MB、76,407 行 × 76 列の（著者・出典）統計量）として公開されている。Bitcoin Institute は最も多く引用されるサトシ正体候補 5 名（アダム・バック、ウェイ・ダイ、ハル・フィニー、ニック・サボ、レン・サッサマン）の距離値を抽出し、出典横断のチャンク数加重で著者単位に集計した上で、コーパス内の「執筆量 10 チャンク以上の著者」 12,739 名（README が Burrows' Delta が統計的に意味を持つ最低基準として示す閾値）に対する順位を計算した。

| 候補 | 著者ファイル | Burrows Δ | 順位 | 上位 % | チャンク数 |
|---|---|---|---|---|---|
| **ニック・サボ** | szabo_netcom_com.txt | 0.14405 | 595 / 12,739 | 上位 **4.67%** | 130 |
| **ハル・フィニー** | hfinney_shell_portal_com.txt | 0.14411 | 878 / 12,739 | 上位 **6.89%** | 1,336 |
| **アダム・バック** | adam_cypherspace_org.txt | 0.14414 | 1,003 / 12,739 | 上位 **7.87%** | 676 |
| **アダム・バック**（別アドレス） | aba_dcs_ex_ac_uk.txt | 0.14415 | 1,092 / 12,739 | 上位 **8.57%** | 1,474 |
| **ウェイ・ダイ** | weidai_eskimo_com.txt | 0.14428 | 2,929 / 12,739 | 上位 22.99% | 161 |
| **レン・サッサマン** | rabbi_quickie_net.txt | 0.14428 | 3,034 / 12,739 | 上位 23.82% | 65 |

（Burrows' Delta：低いほど近い一致。コーパス平均 = 0.14456、標準偏差 = 0.00027、範囲 0.14128〜0.14617。5 名の名指し候補はすべてコーパス平均より低く、平均的なサイファーパンク時代のメーリングリスト書き手よりサトシの参照プロファイルに近い。）

**ヴァン・ドルストが首位候補の公表を拒む理由（データから読み取れるもの）：**

コーパスの Burrows' Delta 順位の上位を占めるのは、データから明らかに**信号ではなくノイズ**である。最近接 20 名には以下が含まれる：

- イタリア／スペインの EC・公共サービスのアカウントテキスト（`verba_rol_it`、`info_giganetstore_com`、`apoio_giganetstore_com`、`gianluigi_euro_net`）
- 匿名リメイラーの出力（`an250888_anon_penet_fi`、`cypherpunks_alqaeda_net`、`nobody_squirrel_owl_de`、`anonremailer_utopia_hacktic_nl`、`anonymous_freezone_remailer`）
- 使い捨てアカウントのテキスト（`dxnew2001_yahoo_com`、`pro2rat_yahoo_com_au`、`ramonbitcoin`）
- 雑多な無名の書き手（`skaplin_c2_org`、`p_txt_toad_com`、`199604290755_jaa15922_utopia_hacktic_nl`、`hahn_lds_loral_com`、`sion_cs_sunysb_edu`、`kevin_gaec_com`、`insightonthenews_broadbandpublisher_com`、`oa_acm_org`）

上位 20 名 — そして上位数百名 — のなかに、名指しのサトシ候補は誰一人いない。名指し候補が現れるのは順位 595（サボ）からである。

順位の上位はコーパスの構造的な副産物に支配されている：限られた語彙が偶然サトシの参照プロファイルと整合した短文アカウント、属性が名目的であって著者性に由来しない匿名リメイラー転送テキスト、共通単語の重なりが少ないために距離指標が低くなった言語不一致の EC サイトテキスト — いずれも本物のスタイル一致ではない。

**これがヴァン・ドルストの「100% 確信できない」 という留保の経験的内容である。** 公開記述「容疑者のショートリストはある。だが 100% 確信できないので、ここで名前を出すつもりはない」 は 4 通りに読めるが、上記データはそのすべてを裏付ける：

1. **指標のノイズ感受性。** Burrows' Delta 単独では、EC アカウントとリメイラーがすべての名指し候補を上回って首位を占める。本コーパスでこの指標から算出される「首位」 は、追加の絞り込み（主題、時代、著者帰属の精度）を施さない限り信頼できない — まさにその絞り込みが、より小規模なプール研究（Skye Grey、アストン、カフィエロ）の論争的な結果を生んだ。
2. **著者帰属の精度。** README 自身が「一部の著者は複数の名前・メールアドレス・リメイラーサービスで活動していた」「メールスレッドの返信抽出ではテキストが完全にその著者のものである保証はない」 と注意している。著者単位の集計は損失的：同一人物が複数行に分散し、リメイラー行は多人数のトラフィックを混在させる。アダム・バックが `aba_dcs_ex_ac_uk.txt`（エクセター大博士課程のメール、上位 8.57%）と `adam_cypherspace_org.txt`（cypherspace.org のアドレス、上位 7.87%）の両方で出現するのは、複数アドレス問題が表面化した一例である。コーパス内には可視化されていない同様の事例が多数あると推測される。
3. **主題語彙が個人スタイルを支配する。** 1990 年代英語で暗号学について書いた候補同士は互いに混同される。5 名の名指し候補が 0.14405〜0.14428 の範囲（互いに 0.74σ 以内）に集中している事実は、より小規模なプール水準でカフィエロが到達した結果（アダム・バックとハル・フィニーが「ほぼ同点」）と同じ所見であり、カレイロウの委託レビュアーが「不確定」 と評した理由とも一致する。
4. **これらすべて、複合的に。** 4 つの問題は互いに掛け合わさる：ノイズを上位に上げる指標、部分的にエイリアス化され部分的に匿名化された帰属、個人スタイルを洗い流す主題、上位ノイズ層から名指し候補を清潔に分離できないコーパス。単独ではどれも致命的ではないが、組み合わせれば、自信ある首位指名は無責任になる。

**チャンク数加重順位が示すこと、示さないこと：**

示すこと：名指し候補は文体計量的に意味を持つ — 5 名全員が「メーリングリスト活動量 10 チャンク以上の著者」 12,739 名のうち上位 1/4 以内、5 名中 4 名が上位 10% 以内、ニック・サボが上位 4.67% で名指し候補内首位 — Skye Grey 2013 とアストン 2014 の結論と整合する。アダム・バックが唯一の最近接ではない（ハル・フィニーとサボの両方がこの集計ではバックより近い）ことも示しており、これは NYT 調査結果に対するカフィエロの「不確定」 留保と整合する。

示さないこと：名指し候補のいずれかがサトシの執筆の主著者であることは示していない。サボより近い 594 名の無名著者がこの指標で存在する事実は — 明らかなノイズ層を除外した上でも — 文体計量帰属が本コーパスから主張できる構造的天井を表している。したがってヴァン・ドルストの名前公表拒否はデータに対して誠実な立場である：基底の数値比較は名指し候補をランダムなユーザーから分離するが、名指し候補同士やノイズ層から、単一の帰属を正当化できるほど清潔には分離しない。

サトシ特定における文体計量手法の分析的扱いについては、関連する正体仮説エントリーを参照：[ニック・サボ](/BitcoinArchive/ja/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/)、[アダム・バック](/BitcoinArchive/ja/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/)、[正体仮説の概観](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)。
