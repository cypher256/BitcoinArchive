---
title: "ジェイムソン・ロップ：ハル・フィニーはサトシ・ナカモトではあり得ない"
date: 2023-10-21T00:00:00Z
type: "article"
source: "lopp-blog"
sourceUrl: "https://blog.lopp.net/hal-finney-was-not-satoshi-nakamoto/"
author: "Jameson Lopp"
participants:
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Jameson Lopp"
    slug: "jameson-lopp"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "ビットコイン研究者ジェイムソン・ロップが、ハル・フィニーはサトシ・ナカモトではあり得ないとする詳細な分析を発表。中心的証拠はタイミングのアリバイで、2009年4月18日、サトシがビットコインネットワーク上で活動していたまさに同じ時間帯に、フィニーはサンタバーバラで10マイルのレースを走っていた。ロップは初期デバッグログのIPアドレス分析、コーディングスタイルの差異、ペルソナの不整合など、補強となる議論も提示している。"
isSatoshi: false
tags:
  - "hal-finney"
  - "satoshi-identity"
  - "identity"
  - "analysis"
secondarySources:
  - name: "Andy Greenberg — 'Nakamoto's Neighbor' (Forbes, March 25, 2014)"
    url: "https://www.forbes.com/sites/andygreenberg/2014/03/25/satoshi-nakamotos-neighbor-the-bitcoin-ghostwriter-who-wasnt/"
    note: "ハルの妻フランがレース当日の写真を証拠として最初に見せた、Forbesの先行記事。グリーンバーグの記事はロップの分析より約9年前に発表されており、レース日アリバイの最初の公開ドキュメント。"
relatedEntries:
  - "analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis"
  - "aftermath/2014-03-25-greenberg-forbes-nakamotos-neighbor"
  - "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
  - "analysis/2008-10-31-satoshi-identification-asymmetry"
  - "aftermath/2013-03-19-bitcoin-and-me-hal-finney"
  - "aftermath/2014-08-28-hal-finney-biography"
  - "aftermath/2009-01-12-first-bitcoin-transaction"
  - "correspondence/mike-hearn/questions/2009-04-18-satoshi-to-hearn-ecdsa"
  - "aftermath/2022-09-16-lopp-was-satoshi-greedy-miner"
translationStatus: complete
---

2023 年 10 月 21 日、ビットコイン研究者ジェイムソン・ロップは「ハル・フィニーはサトシ・ナカモトではなかった」と題する分析記事をブログに発表し、[ハル・フィニー](/BitcoinArchive/ja/participants/hal-finney/)がビットコインの創設者の仮名であったという長年の憶測に対し、複数の角度から詳細な反論を展開した。仮説の主張・支持論点・反証の全体扱いは[ハル・フィニー = サトシ仮説エントリー](/BitcoinArchive/ja/entries/analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis/) にあり、本記事はロップの反証側への具体的貢献を文書化する。

**レース日のアリバイ（2009 年 4 月 18 日）：**

ロップの中心的証拠は時系列のアリバイである。ロップによれば、2009 年 4 月 18 日の土曜日、太平洋時間午前 8:00、長距離ランナーであったフィニーは、カリフォルニア州サンタバーバラで 10 マイルのレースをスタートした。ロップは、計時チップのデータ、レース公式カメラマンの画像、さらに妻フランが撮影した別の写真によってこのレースを記録している。フィニーは約 78 分後、太平洋時間午前 9:18 ごろにゴールしたとロップは報告している。

ロップは、まさにこの時間帯に[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)がビットコインネットワーク上で活動していたと論じる — [マイク・ハーン](/BitcoinArchive/ja/participants/mike-hearn/)とメールでやり取りし、トランザクションをブロードキャストしていた。ロップは、レース時間内に該当するサトシからハーン宛のメールとビットコイントランザクションを特定し、同一人物が両方を同時に行うことは不可能だと結論づける。

アーカイブには、[2009 年 4 月 18 日のサトシからハーン宛のメール](/BitcoinArchive/ja/entries/correspondence/mike-hearn/questions/2009-04-18-satoshi-to-hearn-ecdsa/)があり、サトシは「32.51 と 50.00 を返送した」とハーンに伝えている。

*[編者注：レース日のアリバイは、2014 年のアンディ・グリーンバーグによる Forbes 特集記事[「Nakamoto's Neighbor」](/BitcoinArchive/ja/entries/aftermath/2014-03-25-greenberg-forbes-nakamotos-neighbor/) が最初の公開報道で、グリーンバーグは直接フィニー宅を訪問し、フランから提示されたレース当日の写真に基づいて記事を書いた。ロップの 2023 年の分析は、タイムスタンプの表を明示し、独立した補強議論を加える形で、このタイミング問題を改めて検証している。両者は補完関係にある — グリーンバーグが人的・写真的な記録を確立し、ロップがタイムスタンプの議論を構造化された分析として定式化した。]*

**ロップが提示するその他の議論：**

- **IP アドレス分析** — ロップは初期ビットコインのデバッグログに記録された IP アドレスを調べ、それがフィニーの既知のインフラストラクチャと整合しないと報告している。
- **別メールでのサトシによるハル言及** — ロップは、サトシから[マルッティ・マルミ](/BitcoinArchive/ja/participants/martti-malmi/)宛のメールでサトシが「ハル」に言及しており、ロップはこれを自己言及ではなく第三者言及として読めると指摘している。
- **コーディングスタイルの差異** — ロップは、フィニー由来とされるコードとサトシ由来のコードの間で、書式の慣習（タブ vs スペース、インデント、コメントスタイル、命名規則）を比較し、体系的な差異を報告している。
- **活動パターンの差異** — ロップは、サトシの活動期間がハル・フィニーの別途記録された活動の中断・再開と整合しないと指摘している。
- **ペルソナの不整合** — ロップは、フィニーが公的に関心を示してきたトピック（CO₂ 問題、ビットゴールドへの先行知識など）と、サトシの記録上のペルソナを対比する。

**「ナカモトの隣人」という枠組み：**

ハル・フィニーはカリフォルニア州テンプルシティに約 10 年住んでいた — グリーンバーグの 2014 年記事の数週間前に [Newsweek がドリアン・ナカモトをサトシ候補として特定した](/BitcoinArchive/ja/entries/aftermath/2014-03-06-newsweek-dorian-nakamoto/)のと同じ町である。フィニーとドリアン・ナカモトが「数ブロック離れて」住んでいたという地理的偶然 — これがグリーンバーグの記事タイトルの由来であり、フィニーがそもそもサトシ候補として注目された理由の一部でもある。ロップの分析はこの偶然をあくまで偶然として扱い、問いは地理ではなく活動記録によって答えるべきだと論じる。

**結論：**

ロップの主張は、レース日のアリバイと補強証拠の組み合わせにより、フィニー = サトシ説は成立しないというものである。本記事は代替候補を提示するものではなく、特定の身元仮説に対する集中的な反論として位置づけられる。
