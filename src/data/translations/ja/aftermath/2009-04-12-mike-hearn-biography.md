---
title: "マイク・ハーン（生没年不明） — サトシとメールを交わした初期ビットコイン貢献者の Google エンジニア"
date: 2009-04-12T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Mike_Hearn"
author: "Mike Hearn"
participants:
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Google エンジニア（Maps、Earth、Gmail スパム対策）。2009年4月にサトシへ連絡し、初期貢献者となる。BitcoinJ を開発、メールは 2017年に公開。"
isSatoshi: false
tags:
  - "mike-hearn"
  - "biography"
  - "google"
  - "bitcoinj"
  - "email-archive"
  - "published-correspondence"
  - "historic"
secondarySources:
  - name: "Mike Hearn's published Satoshi emails"
    url: "https://plan99.net/~mike/satoshi-emails/thread1.html"
  - name: "BitcoinJ — GitHub"
    url: "https://github.com/bitcoinj/bitcoinj"
  - name: "YourStory — Techie Tuesday: Mike Hearn"
    url: "https://yourstory.com/2021/02/techie-tuesday-mike-hearn-google-maps-gmail-bitcoin-startup-r3"
  - name: "Mike Hearn — 'The resolution of the Bitcoin experiment' (Medium, January 2016)"
    url: "https://blog.plan99.net/the-resolution-of-the-bitcoin-experiment-dabb30201f7"
  - name: "CoinDesk — Mike Hearn Steps Down from R3 (February 2021)"
    url: "https://www.coindesk.com/business/2021/02/12/former-bitcoin-developer-mike-hearn-steps-down-from-enterprise-blockchain-firm-r3"
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
  - name: "Vice/Motherboard — Satoshi Nakamoto Emails (August 2017)"
    url: "https://www.vice.com/en/article/former-bitcoin-developer-shares-early-satoshi-nakamoto-emails/"
relatedEntries:
  - correspondence/mike-hearn/questions/2009-04-12-hearn-to-satoshi-questions
  - aftermath/2011-04-23-mike-hearn-satoshi-email-exchange
  - aftermath/2017-08-11-mike-hearn-publishes-emails
  - analysis/2008-08-20-satoshi-self-statements
  - analysis/2008-10-31-satoshi-anonymity-architecture
translationStatus: complete
---

2009 年 4 月 12 日、Google のエンジニアだったマイク・ハーンは[ビットコインホワイトペーパー](/BitcoinArchive/ja/entries/emails/cryptography/2008-10-31-bitcoin-whitepaper-final/)を読み、[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)に[メールを送った](/BitcoinArchive/ja/entries/correspondence/mike-hearn/questions/2009-04-12-hearn-to-satoshi-questions/)。その後 2 年間で技術的なメールが続いた —— スケーリング、簡易決済検証、長期的なマイニングの形。ハーンはサトシが送信した最後の私的メールの一つを受け取った相手である:

<!-- speaker: Satoshi Nakamoto -->
> 「他のことに取り組むことにした。ギャビンたちに任せれば、安心だ。」

それから 5 年近く経った 2016 年 1 月 14 日、ハーンは Medium に[「The resolution of the Bitcoin experiment」](/BitcoinArchive/ja/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/)を公開した。冒頭は 1 行だった:

> 「ビットコインは失敗した」

ハーンは保有する全ビットコインを売却、プロジェクトから離脱、エンタープライズ向けブロックチェーンコンソーシアム R3 に参加して分散台帳プラットフォーム Corda の開発を共同主導した。[2017 年 8 月にサトシとのメールを公開](/BitcoinArchive/ja/entries/aftermath/2017-08-11-mike-hearn-publishes-emails/)、これはサトシの技術的思考を記録した最大級の一次資料群となった。2024 年 2 月、[COPA 対ライト裁判で証言](/BitcoinArchive/ja/entries/aftermath/2024-02-22-mike-hearn-copa-trial-testimony/)。

ハーンは Google で Google Maps、Google Earth、Gmail のスパム対策システムに従事していた。[BitcoinJ](https://github.com/bitcoinj/bitcoinj) —— プロトコルの Java 実装 —— を開発し、これは元の C++ クライアントに対する最初の主要な代替実装、そして多くの Android ビットコインウォレットの基盤となった。

```mermaid
timeline
    2009 : ホワイトペーパー読了、 サトシに 最初の連絡 (4月12日)
    %% link: /BitcoinArchive/ja/entries/correspondence/mike-hearn/questions/2009-04-12-hearn-to-satoshi-questions/
    2010 : サトシとの 技術メール継続 (スケーリング / SPV / マイニング)
    %% link: /BitcoinArchive/ja/entries/correspondence/mike-hearn/more-questions/2010-12-27-hearn-to-satoshi-more-questions/
    2011 : サトシ最後のメールの一つ 「他のことに 移った」 (4月23日)
    %% link: /BitcoinArchive/ja/entries/correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on/
    2012 : BitcoinJ 開発 (ビットコイン Java 実装)
    2016 : 「The resolution of the Bitcoin experiment」 公開、 BTC 全売却 (1月14日)
    %% link: /BitcoinArchive/ja/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/
         : R3 参加、 Corda 開発共同主導
    2017 : サトシとの メール公開 (8月11日)
    %% link: /BitcoinArchive/ja/entries/aftermath/2017-08-11-mike-hearn-publishes-emails/
    2021 : R3 退任 (2月)
    2024 : COPA 対ライト裁判 証言 (2月22日)
    %% link: /BitcoinArchive/ja/entries/aftermath/2024-02-22-mike-hearn-copa-trial-testimony/
```

### サトシとのメール

2009 年 4 月から 2011 年 4 月にかけて、ハーンとサトシは技術的なメールを継続的に交わした。話題は、システムのスケーリング、簡易決済検証（SPV）クライアントの動作、CPU から専門ハードウェアへのマイニングの進化など。ハーンは初期のサイファーパンクサークル外からビットコインに本格的な技術的関心を寄せた最初期の人物の一人であり、公開された往復メールは、サトシが公の投稿には残さなかった技術的思考を記録している。

### ビットコインからの離脱

2016 年 1 月の「ビットコインは失敗した」 エッセイは、主に二つの不満を挙げていた。1 メガバイトのブロックサイズ上限引き上げに開発コミュニティが合意できなかったこと、そして本来分散型であるべきシステム内に「システム上重要な機関」 が現れたとハーンが評したこと。ハーンは公開と同時に保有 BTC を売却した。
