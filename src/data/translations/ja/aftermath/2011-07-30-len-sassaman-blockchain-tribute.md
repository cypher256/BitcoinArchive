---
title: "ダン・カミンスキーによるレン・サッサマンへのビットコインブロックチェーン追悼"
date: 2011-07-30T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Len_Sassaman"
author: "Dan Kaminsky"
participants:
  - name: "Dan Kaminsky"
    slug: "dan-kaminsky"
  - name: "Len Sassaman"
    slug: "len-sassaman"
description: "サッサマン死去後、ダン・カミンスキーがビットコインブロックチェーンに ASCII アート追悼を埋め込む。Black Hat USA 2011 で公表。"
isSatoshi: false
tags:
  - "dan-kaminsky"
  - "len-sassaman"
  - "blockchain"
  - "memorial"
  - "obituary"
  - "historic"
secondarySources:
  - name: "Black Hat USA 2011 — Black Ops of TCP/IP（カミンスキー資料）"
    url: "https://www.slideshare.net/dakami/black-ops-of-tcpip-2011-black-hat-usa-2011"
relatedEntries:
  - aftermath/2011-07-03-len-sassaman-biography
  - aftermath/2021-02-22-evan-hatch-sassaman-satoshi-cypherpunk-history
  - aftermath/2011-10-10-dan-kaminsky-bitcoin-security
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
  - aftermath/2012-07-22-luke-dashjr-biography
translationStatus: complete
---

![紺色の背景に連なる台帳のようなブロックが並び、中央付近の一つだけ金色の枠と小さな点々の模様で縁取られ、その脇には灯る蝋燭が置かれ、上方にはうっすら重なる封筒の輪郭が浮かび、列の両端には簡素な人型のシルエットが立っている。](/BitcoinArchive/images/analysis/2011-07-30-len-sassaman-blockchain-tribute-hero.png)

[レン・サッサマン](/BitcoinArchive/ja/participants/len-sassaman/) — サイファーパンク、暗号学者、Mixmaster 匿名リメイラーのリード開発者、KU ルーヴェン大学の博士課程在籍者 — は [2011 年 7 月 3 日に死去した](/BitcoinArchive/ja/participants/len-sassaman/)。妻で暗号学者・研究者のメレディス・パターソンは、死因が自殺であることを公的に確認した。

数週間のうちに、[ダン・カミンスキー](/BitcoinArchive/ja/participants/dan-kaminsky/) — 以前にビットコイン v0.1 のコードをレビューし [「これはチームで作ったか、天才の仕業だ」と結論づけた](/BitcoinArchive/ja/entries/aftermath/2011-10-10-dan-kaminsky-bitcoin-security/)セキュリティ研究者 — は、サッサマンへの ASCII アート追悼をビットコインブロックチェーンに直接埋め込んだ。発表は 2011 年 7 月 30 日、公的なお披露目は Black Hat USA 2011（ラスベガス）。

Wikipedia の引用および Black Hat USA 2011 のプレゼン資料によれば、刻印はトランザクション出力にまたがってエンコードされ、データはすべてのフルノードのコピーに残るとされる。本技法は `OP_RETURN`（小さなペイロードを埋め込むために Bitcoin Core に公式に追加された機構、2014 年）以前のもの。この機構をめぐっては後年、繰り返し制限論争が起きており、その経緯は OP_RETURN 系のデータ運搬出力をより積極的にフィルタリングする Bitcoin Knots を維持する[ルーク・ダッシュジュニアの経歴](/BitcoinArchive/ja/participants/luke-dashjr/)に詳しい。具体的なブロック高、トランザクションハッシュ、刻印された ASCII アートの全文は本アーカイブが独立に検証していない — 技法は二次資料が支える水準で記述している。

## 文脈

- 本追悼は、Bitcoin Core の公式な `OP_RETURN` 機構（2014 年 3 月追加）に先行する。
- 本イベントは、ビットコイン初期環境の二つの異なる流れを結びつけた：v0.1 の最も著名な外部セキュリティ評価者としてのカミンスキー、そして約 20 年にわたるリメイラー・匿名性ツールの開発を通じてサイファーパンク運動の中核に位置していたサッサマン。

## サトシの正体問題について

このブロックチェーン追悼そのものは、サトシの正体に関する推論とは独立した出来事である。カミンスキーの刻印は、サイファーパンクコミュニティ内の同僚（かつ暗号学的な同輩）による追悼であり、サッサマンがビットコインの設計に関与していたかどうかについては、暗黙の主張を一切含まない。これとは別の正体仮説（サッサマン＝サトシ）は、その後の年月を経て公的に提案されたものである（最古は 2013 年 3 月の BitcoinTalk スレッド、2021 年のエヴァン・ハッチの記事が代表的な定式化）。本アーカイブでは、その仮説は[独立した編集分析エントリー「サッサマン＝サトシ仮説」](/BitcoinArchive/ja/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/) として別途扱う。本エントリーは追悼イベントそのもののみを記録する。
