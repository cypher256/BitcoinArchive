---
title: "レイ・ディリンジャー — ビットコインの公開リリース前にコードをレビューした暗号学者"
date: 2008-11-06T05:14:37Z
type: "biography"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2216771.0"
author: "Ray Dillinger"
participants:
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
description: "コンピューター科学者（ハンドル名 bear / cryddit）。ハル・フィニーとともにビットコインのソースコードを公開前にレビュー。1MB ブロックサイズ制限に関与。"
isSatoshi: false
tags:
  - "ray-dillinger"
  - "code-review"
  - "pre-release"
  - "block-size"
  - "cypherpunk"
  - "historic"
secondarySources:
  - name: "Ray Dillinger — Bitcoin P2P e-cash paper (Cryptography Mailing List, November 2008)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/14/"
  - name: "CoinDesk — The Man Who Helped Audit Bitcoin's Code Before Launch"
    url: "https://www.coindesk.com/"
  - name: "Satoshi Nakamoto Institute — Cryptography Mailing List Emails"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/"
  - name: "cryddit (Ray Dillinger) — BitcoinTalk post on the 1MB limit's origin (February 2015)"
    url: "https://bitcointalk.org/index.php?topic=946236.msg10388435#msg10388435"
relatedEntries:
  - aftermath/2017-09-20-ray-dillinger-if-id-known
  - aftermath/2018-10-01-ray-dillinger-interview
  - aftermath/2009-01-09-bitcoin-v01-released
  - analysis/2015-08-15-block-size-war-2015-2017-overview
translationStatus: complete
---

![顔のないシルエット 2 体が、監査完了のチェックマークが灯るコードパネルを両側から挟み、傍らに浮動小数点と整数の対比図、そして 1 MB ブロックサイズ上限をめぐる分岐した年表が配置されている。](/BitcoinArchive/images/analysis/2008-11-06-ray-dillinger-biography-hero.png)

2009 年 1 月の Bitcoin v0.1 公開リリース前にソースコードを監査したと知られているのは、[ハル・フィニー](/BitcoinArchive/ja/participants/hal-finney/)とレイ・ディリンジャーの 2 人だけである。ディリンジャーは約 2 週間かけて脆弱性と攻撃ベクトルを精査した。

彼はまた、後に 2015〜2017 年のブロックサイズ戦争の中心となる 1 MB ブロックサイズ上限の起源において自身が果たした役割を語っている。ただし上限が採用された時期についての彼の説明は、記録されているコミット履歴と食い違う。

ディリンジャーは、オンラインハンドル **bear** および **cryddit** で知られるコンピューターサイエンティスト。カンザス大学でコンピューターサイエンスを学び、数十年にわたり暗号学およびサイファーパンクコミュニティで活動してきた。

## 公開前のコードレビュー
2008年後半、サトシ・ナカモトは 2009年1月の公開リリース前に、少数の人々にビットコインのソースコードを非公開で共有した。ディリンジャーはコードのセキュリティ監査を実施し、潜在的な脆弱性と攻撃ベクトルを検査した。ハル・フィニーは同時に別の観点からコードをレビューした。後の BitcoinTalk の投稿で、ディリンジャーはシステムが悪用される可能性に焦点を当て、約 2 週間かけてコードをレビューしたと回想している。ホワイトペーパー 10 周年の [2018 年のインタビュー](/BitcoinArchive/ja/entries/aftermath/2018-10-01-ray-dillinger-interview/)では、そのレビューの技術的な中身として、浮動小数点か整数かという会計方式の発見と satoshi 精度の分析について語っている。

## ブロックサイズ制限
2015 年 2 月の BitcoinTalk 投稿で、ディリンジャーはビットコインの歴史で最も議論されたパラメーターの一つである 1 MB ブロックサイズ制限の起源について、ハル・フィニーの発案だったと述べている。フィニーはサービス拒否攻撃の可能性を懸念しており、ディリンジャーとサトシはともに 1 MB では拡張性がないと異議を唱えたが、三者とも暫定的な上限が必要だという点では一致したという。ディリンジャーの説明によれば「1MB の上限はビットコインがローンチした時点で既に存在していた」。ビットコインのローンチは 2009 年 1 月である。

この時期の主張は、記録されている経緯と食い違う。ソースコードおよびブロックチェーンの記録によれば、サトシが 1 MB 上限を単独で、告知なしに追加したのは、ローンチから約 20 か月後の 2010 年 9 月である。上限が記録上いつ生まれ、その後どのような論争を招いたかは[ブロックサイズ戦争総括](/BitcoinArchive/ja/entries/analysis/2015-08-15-block-size-war-2015-2017-overview/)を参照。ディリンジャーの回想とコミット履歴の記録との食い違いは、未解決のままである。

## メーリングリストへの参加
ディリンジャーは 2008年11月、暗号学メーリングリストでのビットコインに関する議論に「レイ・ディリンジャー」の名前で参加した。彼の投稿はビットコインの設計の技術的詳細、インセンティブ構造やセキュリティモデルに関する質問に取り組んだ。

## 後の振り返り
2017年9月、ディリンジャーは BitcoinTalk に[「今わかっていることを当時知っていたら」](/BitcoinArchive/ja/entries/aftermath/2017-09-20-ray-dillinger-if-id-known/)と題した回顧的な投稿を公開し、ビットコインの将来の重要性を理解していたら何を違うようにしたかを論じた。初期のコードレビュープロセスとビットコインの開発を形作った設計決定について振り返った。2022年10月のセキュリティ研究者 SerHack とのインタビューでは、公開前のレビュープロセスとサトシとの初期のやり取りについて追加の詳細を提供した。
