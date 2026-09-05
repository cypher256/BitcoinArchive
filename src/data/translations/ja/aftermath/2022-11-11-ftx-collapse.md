---
title: "FTX が破産申請 — 顧客資金 80 億ドルが消失"
date: 2022-11-11T00:00:00Z
type: "article"
source: "cnbc"
sourceUrl: "https://www.cnbc.com/2022/11/11/sam-bankman-frieds-cryptocurrency-exchange-ftx-files-for-bankruptcy.html"
author: "CNBC"
participants:
  - name: "Sam Bankman-Fried"
    slug: "sam-bankman-fried"
description: "世界第 2 位の暗号通貨取引所 FTX が連邦破産法第 11 章を申請。創業者サム・バンクマン＝フリードは辞任し、約 80 億ドルの顧客資金流用が判明。後に禁固 25 年。"
isSatoshi: false
tags:
  - "ftx"
  - "sam-bankman-fried"
  - "exchange-collapse"
  - "fraud"
  - "bankruptcy"
secondarySources:
  - name: "CoinDesk — FTX Files for Bankruptcy Protections in US"
    url: "https://www.coindesk.com/policy/2022/11/11/ftx-files-for-bankruptcy-protections-in-us"
  - name: "Bankruptcy of FTX — Wikipedia"
    url: "https://en.wikipedia.org/wiki/Bankruptcy_of_FTX"
  - name: "ABC News — A Timeline of FTX's Historic Collapse"
    url: "https://abcnews.com/Business/timeline-cryptocurrency-exchange-ftxs-historic-collapse/story?id=93337035"
relatedEntries:
  - aftermath/2014-02-28-mt-gox-bankruptcy
  - analysis/2026-05-24-satoshi-design-vs-current-reality
  - analysis/2026-06-02-bitcoin-iconic-losses-overview
inlineLinkKeywords:
  - "FTX 崩壊"
translationStatus: complete
---

![積み上げられたトークンが崩れて砕け散り、倒れていくドミノが並ぶ手前に、金庫の扉が開いて数十億ドル分の消失資金を象徴する砕けた数字が光を放ち、奥には裁判所のシルエットと、影響を受けていない別のネットワークを示す小さな紋章が描かれているイラスト。](/BitcoinArchive/images/analysis/2022-11-11-ftx-collapse-hero.png)

2022年11月11日、FTX Trading Ltd.は、Alameda Research および 130 以上の関連会社と共に、米国破産裁判所に連邦破産法第 11 章の適用を申請した。創業者サム・バンクマン＝フリード（SBF）は CEO を辞任した。

```mermaid
flowchart LR
    REPORT["2022年11月2日<br/>CoinDeskが<br/>Alamedaの<br/>FTT偏重を報道"] --> CZSELL["2022年11月6日<br/>CZがBinanceの<br/>FTT売却を発表"]
    CZSELL --> HALT["2022年11月8日<br/>出金停止<br/>Binanceが<br/>LOI署名"]
    HALT --> WITHDRAW["2022年11月9日<br/>Binanceが<br/>買収から撤退"]
    WITHDRAW --> BANKRUPTCY["2022年11月11日<br/>破産申請<br/>SBFが辞任"]
    BANKRUPTCY -.->|"数週間後"| ARREST["2022年12月12日<br/>SBFがバハマで逮捕"]
    ARREST --> CONVICTED["2023年11月2日<br/>7つの罪すべてで<br/>有罪判決"]
    CONVICTED --> SENTENCED["2024年3月28日<br/>禁固25年の<br/>刑を宣告"]
```

約 **80 億ドル** の顧客資金が流用されていた。連邦検察はこれを「アメリカ史上最大級の金融詐欺」と呼んだ。破産手続きを監督する新 CEO に任命された John J. Ray III は、これまで見た中で最悪のコーポレートガバナンスの失敗、それも Enron よりも酷いと表現した。

再びメディアは暗号通貨の死を宣告した。再びビットコインのプロトコルは影響を受けなかった。FTX は中央集権型の仲介者だった。ビットコインが排除するために設計された、まさにそのタイプの信頼される第三者である。この崩壊はビットコインの設計に組み込まれた原則を改めて強化した：「Don't trust, verify.」 [失われたビットコイン横断総括](/BitcoinArchive/ja/entries/analysis/2026-06-02-bitcoin-iconic-losses-overview/)では、 FTX を不正流用による保管崩壊事例として QuadrigaCX (単独保管者詐欺) や Mt. Gox (運用失敗 + 盗難) と並べて読み、パスワード忘却型・物理喪失型 (ステファン・トーマス、ハウエルズ) と対置する。

本 FTX 崩壊は[サトシ設計対現状分析](/BitcoinArchive/ja/entries/analysis/2026-05-24-satoshi-design-vs-current-reality/)によって、中核的な保管軸の例として扱われる。同分析は FTX を [Mt. Gox 倒産](/BitcoinArchive/ja/entries/aftermath/2014-02-28-mt-gox-bankruptcy/)と並べて、プロトコルが防ぐよう設計された銀行型破綻モードの代表例として用いる。影響を受けた利用者はいかなるコインに対するプロトコル層の請求権も持たず、倒産企業に対する契約上の請求権しか持たなかった。
