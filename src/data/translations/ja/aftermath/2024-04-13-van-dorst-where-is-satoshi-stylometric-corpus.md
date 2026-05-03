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
description: "2024 年 4 月 13 日、バス・ヴァン・ドルスト「Where is Satoshi?」 公開。サトシの執筆を 75,000 人超の暗号学メーリングリスト書き手と比較する文体計量データセット。"
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
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
  - analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates
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
- **バローズ・デルタ** — 計算文体計量における標準的な距離指標。
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
| **ヴァン・ドルスト** | **2024** | **75,000+** | **公表上は指名なし**（[Bitcoin Institute による再分析](/BitcoinArchive/ja/entries/analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates/)では名指し候補 5 名中サボが首位） | **可（CSV/XLSX 計 280 MB）** |

ヴァン・ドルストが候補を公的に指名せず、物語的研究は指名している事実 — そして名指し候補研究を Bitcoin Institute による再分析と併せて読むと、4 件のうち 3 件がサボに収束し、カフィエロ／カレイロウのみがアダム・バックを首位とする外れ値である事実 — は、それ自体が方法論的観察である：サトシの文体計量による特定はコーパス選定・距離指標・候補者の事前選定に感受性を持つ一方、手法を横断して最も持続する信号は名指し候補内でサボを最上位に置く。

**本コーパスからの候補別値（Bitcoin Institute による再分析）：**

ヴァン・ドルストは順位の公表を拒否しているが、基底の数値データは公開されており、名指しのサトシ正体候補をその中で特定することは可能である。[Bitcoin Institute による再分析（2026 年 5 月）](/BitcoinArchive/ja/entries/analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates/)は、公開された `comparison.xlsx` から最も多く引用されるサトシ正体候補 5 名のバローズ・デルタ値を抽出し、コーパス内の「執筆量 10 チャンク以上の著者」 12,739 名に対して順位付けし、データに照らしてヴァン・ドルストの「100% 確信できない」 留保を読み解いた：ニック・サボが上位 4.67% で名指し候補内首位、ハル・フィニーとアダム・バックが 0.85 標準偏差以内で続き、サボより近い無名著者が 594 人 — コーパスの見かけ上の最近接マッチの大半は精査するとノイズ（EC アカウント、匿名リメイラー転送、使い捨てアカウント）であって信号ではない。候補別表、コーパス Top 20 ノイズの議論、ヴァン・ドルストの名前公表拒否がデータに対して誠実な立場である理由の 4 通りの読み解きについては、[分析エントリー](/BitcoinArchive/ja/entries/analysis/2026-05-03-van-dorst-corpus-reanalysis-named-candidates/)を参照。

サトシ特定における文体計量手法のより広い分析的扱いについては、関連する正体仮説エントリーを参照：[ニック・サボ](/BitcoinArchive/ja/entries/analysis/2013-12-05-szabo-satoshi-identity-hypothesis/)、[アダム・バック](/BitcoinArchive/ja/entries/analysis/2026-04-08-adam-back-satoshi-identity-hypothesis/)、[正体仮説の概観](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)。
