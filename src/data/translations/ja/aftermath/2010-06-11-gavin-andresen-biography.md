---
title: "ギャビン・アンドレセン（1966–） — サトシ離脱後のビットコイン・リードメンテナー"
date: 2010-06-11T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Gavin_Andresen"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "ソフトウェア開発者（1966-）、Wasabi Software創業者、Bitcoin Faucet作成者。サトシから引き継ぎ、2011-2014年リードメンテナー。"
isSatoshi: false
tags:
  - "gavin-andresen"
  - "biography"
  - "lead-developer"
  - "bitcoin-faucet"
  - "wasabi-software"
  - "bitcoin-foundation"
  - "leadership"
  - "transition"
  - "historic"
secondarySources:
  - name: "Gavin Andresen — Bitcoin Wiki"
    url: "https://en.bitcoin.it/wiki/Gavin_Andresen"
  - name: "GavinTech Blog"
    url: "https://gavinthink.blogspot.com/"
  - name: "CoinMarketCap — Satoshi Files: Gavin Andresen"
    url: "https://coinmarketcap.com/academy/article/satoshi-files-gavin-andresen"
  - name: "Gavin Andresen — 'Eleven years ago today...' (April 2022)"
    url: "https://gavinandresen.ninja/eleven-years-ago-today"
  - name: "CoinDesk — Gavin Andresen Steps Down as Bitcoin's Lead Developer (April 2014)"
    url: "https://www.coindesk.com/markets/2014/04/08/gavin-andresen-steps-down-as-bitcoins-lead-developer"
  - name: "CoinGeek — How Gavin Andresen gave away 19,700 bitcoins in 2010"
    url: "https://coingeek.com/how-gavin-andresen-gave-away-19700-bitcoins-in-2010-the-bitcoin-faucet-turns-12/"
  - name: "Gavin Andresen on Twitter — CIA talk (June 14, 2011)"
    url: "https://x.com/gavinandresen/status/80785477342478336"
relatedEntries:
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-08-20-satoshi-self-statements
  - analysis/2009-01-09-satoshi-code-analysis
  - aftermath/2010-11-19-wladimir-van-der-laan-biography
  - correspondence/gavin-andresen/2010-06-11-andresen-bitcoin-faucet
  - correspondence/gavin-andresen/2011-04-26-satoshi-to-andresen-alert-key
  - correspondence/gavin-andresen/2011-04-26-andresen-to-satoshi-cia-visit
  - aftermath/2016-05-02-gavin-andresen-satoshi-retrospective
  - aftermath/2010-08-15-value-overflow-incident
  - correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on
  - aftermath/2011-04-20-forbes-crypto-currency
  - aftermath/2010-09-01-satoshi-andresen-other-projects-notice
  - aftermath/2010-12-19-andresen-lead-maintainer-announcement
  - aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency
  - analysis/2014-03-19-bitcoin-core-rebrand-authority-effects
translationStatus: complete
---

ギャビン・アンドレセン（本名ギャビン・ベル、1966年オーストラリア・メルボルン生まれ）は、[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)の離脱後にビットコインのリードメンテナーとなったソフトウェア開発者である。アメリカで育ち、1988年にプリンストン大学でコンピューターサイエンスの学位を取得。その後、3DグラフィックスソフトウェアのWasabi Softwareを設立した。

```mermaid
timeline
    2010 : Bitcoin Faucet 公開 - 最初期の普及ツール (6月)
    %% link: /BitcoinArchive/ja/entries/correspondence/gavin-andresen/2010-06-11-andresen-bitcoin-faucet/
         : サトシからの 最初の メールでの 撤退シグナル (9月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2010-09-01-satoshi-andresen-other-projects-notice/
         : 引き継ぎ - SVN アクセス + リードメンテナー公式宣言 (12月)
    %% link: /BitcoinArchive/ja/entries/aftermath/2010-12-19-andresen-lead-maintainer-announcement/
    2011 : サトシの最後のメール - CAlert キー譲渡 (4月)
    %% link: /BitcoinArchive/ja/entries/correspondence/gavin-andresen/2011-04-26-satoshi-to-andresen-alert-key/
         : CIA / In-Q-Tel カンファレンス、 サトシ沈黙後 (6月)
    %% link: /BitcoinArchive/ja/entries/correspondence/gavin-andresen/2011-04-26-andresen-to-satoshi-cia-visit/
    2012 : Bitcoin Foundation 共同設立 - アンドレセンは チーフサイエンティスト 就任 (9月)
    2014 : リードメンテナー退任 - ヴラディーミル・ ヴァン・デア・ラーンへ 引き継ぎ (4月)
```

### ビットコインとの出会い
アンドレセンは2010年にビットコインを知った。すぐに最も活発な貢献者の一人となり、Bitcoin Faucet — 無料でビットコインを配布し、人々がこの技術を学び使い始めるのを支援するウェブサイト — を作成した。[2010年6月11日にBitcoinTalkフォーラムでBitcoin Faucetを発表](/BitcoinArchive/ja/entries/correspondence/gavin-andresen/2010-06-11-andresen-bitcoin-faucet/)。これはビットコイン普及を促進する最初期の取り組みの一つだった。

### サトシの後継者 — 段階的な引き継ぎ（2010–2011 年）
サトシからアンドレセンへの引き継ぎは、一度の指名ではなく、7 ヶ月にわたる運営権限の段階的な譲渡だった。アーカイブ収録の以下のエントリーで時系列に追える。

| 日付 | 出来事 | 範囲 |
|------|------|------|
| 2010-09-01 | [アンドレセン宛メール「他のプロジェクトに取り組んでいる」](/BitcoinArchive/ja/entries/aftermath/2010-09-01-satoshi-andresen-other-projects-notice/) | 公開記録上最も早い撤退シグナル |
| 2010-12-03 | [マルミ宛メールでアンドレセンを開発・管理の引き継ぎ先として推薦](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-12-03-handover-to-gavin/) | 推薦 |
| 2010-12-12 朝 | [SVN 権限譲渡 + リーダーシップ承認メール](/BitcoinArchive/ja/entries/correspondence/gavin-andresen/2010-12-12-satoshi-handover-to-andresen/) | コードベース + メール承認 |
| 2010-12-12 18:22 UTC | [BitcoinTalk フォーラム最終投稿](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/) | 最後の公開発信 |
| 2010-12-19 | [アンドレセン公的告知「サトシの祝福を受けて」](/BitcoinArchive/ja/entries/aftermath/2010-12-19-andresen-lead-maintainer-announcement/) | 役割の公的引き受け。同日 `bitcoin/bitcoin` GitHub リポジトリを作成 |
| 2011-04-23 | [マイク・ハーン宛メール「他のことに取り組むことにした。ギャビンたちに任せれば、安心だ」](/BitcoinArchive/ja/entries/correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on/) | 撤退表明（アンドレセンへの信任）。当時は非公開、後年公開 |
| 2011-04-26 10:29 UTC | [最後のメール：CAlert キー譲渡](/BitcoinArchive/ja/entries/correspondence/gavin-andresen/2011-04-26-satoshi-to-andresen-alert-key/) | ネットワーク非常停止権限 |

役割と一緒に**渡らなかったもの**：Patoshi マイニングパターンに紐づく約 110 万 BTC（2010 年以降オンチェーンで未移動）、サトシの匿名性そのもの、ジェネシスブロックの coinbase アドレス秘密鍵。

アンドレセンは [2016 年の回想](/BitcoinArchive/ja/entries/aftermath/2016-05-02-gavin-andresen-satoshi-retrospective/) で、この移行の段階性についてこう振り返っている。

> 「彼は僕に一杯食わせたんだ。ビットコインのホームページに僕のメールアドレスを載せていいかと聞かれて、いいよと答えた。気づかなかったのは、僕のアドレスを載せた時に、自分のアドレスを消していたことだ。僕がビットコインについて知りたい人全員からメールを受ける窓口になった。サトシはプロジェクトのリーダーから身を引き始め、僕をリーダーとして前に押し出していった」

### リードメンテナー（2010 年 12 月〜2014 年 4 月）
[2010 年 12 月 19 日のアンドレセンの公的告知](/BitcoinArchive/ja/entries/aftermath/2010-12-19-andresen-lead-maintainer-announcement/) はこう始まった。

> 「サトシの承認を得て、正直かなり気が進まないが、ビットコインのプロジェクト管理にもっと積極的に関わっていくことにする」

アンドレセンはその時点からビットコイン開発を表立って牽引することになり、サトシは 2011 年初頭までメールを続けた。サトシの [2011 年 4 月 23 日のマイク・ハーン宛メール](/BitcoinArchive/ja/entries/correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on/) は——当時は非公開、後年公開——撤退の言葉を残した。

> 「他のことに取り組むことにした。ギャビンたちに任せれば、安心だ」

3 日後、[最後の既知のメール](/BitcoinArchive/ja/entries/correspondence/gavin-andresen/2011-04-26-satoshi-to-andresen-alert-key/) は「私のことを謎めいた影の人物として話し続けるのはやめてほしい」 という一文で締めくくられた——戒めであり、別れの挨拶でもあった。CAlert キーの正式な譲渡を伴っていた。2012 年 9 月に Bitcoin Foundation が設立されると、アンドレセンはチーフサイエンティストに就任した。

### CIAでの講演
2011年6月14日、アンドレセンはバージニア州ラングレーのCIA本部でビットコインについてプレゼンテーションを行った。これはIn-Q-Tel主催の新興技術カンファレンスの一環だった。事前にサトシにこの招待について伝えていたが、その後サトシの通信頻度は減少し、最終的に完全に途絶えた。

### その後
2014年4月8日、アンドレセンはリードメンテナーの役割をウラジミール・ファン・デル・ラーンに引き継いだ。その後もビットコイン開発への貢献を続け、トランザクション処理能力の向上のためブロックサイズ上限の引き上げを提唱した。
