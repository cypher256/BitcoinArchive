---
title: "ダン・カミンスキーによるレン・サスマンへのビットコインブロックチェーン追悼"
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
description: "サイファーパンクで暗号学者のレン・サスマンが 2011 年 7 月 3 日に亡くなった後、セキュリティ研究者のダン・カミンスキーは、ビットコインのブロックチェーンに ASCII アートの追悼を埋め込んだ。発表は 2011 年 7 月 30 日、公的な発表は Black Hat USA 2011（ラスベガス）。これはビットコインの恒久的な台帳に刻まれた最初期の大規模な追悼碑のひとつであり、貨幣記録ではなく恒久的な文化アーティファクトとしてのブロックチェーン利用例として記録される。"
isSatoshi: false
tags:
  - "dan-kaminsky"
  - "len-sassaman"
  - "blockchain"
  - "memorial"
  - "obituary"
  - "historic"
secondarySources:
  - name: "Wikipedia — Len Sassaman"
    url: "https://en.wikipedia.org/wiki/Len_Sassaman"
  - name: "Black Hat USA 2011 — Black Ops of TCP/IP（カミンスキー資料）"
    url: "https://www.slideshare.net/dakami/black-ops-of-tcpip-2011-black-hat-usa-2011"
relatedEntries:
  - aftermath/2011-07-03-len-sassaman-biography
  - aftermath/2011-10-10-dan-kaminsky-bitcoin-security
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
translationStatus: complete
---

[レン・サスマン](/BitcoinArchive/ja/participants/len-sassaman/) — サイファーパンク、暗号学者、Mixmaster 匿名リメイラーのリード開発者、KU ルーヴェン大学の博士課程在籍者 — は [2011 年 7 月 3 日に死去した](/BitcoinArchive/ja/participants/len-sassaman/)。妻で暗号学者・研究者のメレディス・パターソンは、死因が自殺であることを公的に確認した。

数週間のうちに、[ダン・カミンスキー](/BitcoinArchive/ja/participants/dan-kaminsky/) — 以前にビットコイン v0.1 のコードをレビューし [「これはチームで作ったか、天才の仕業だ」と結論づけた](/BitcoinArchive/ja/entries/aftermath/2011-10-10-dan-kaminsky-bitcoin-security/)セキュリティ研究者 — は、サスマンへの ASCII アート追悼をビットコインブロックチェーンに直接埋め込んだ。発表は 2011 年 7 月 30 日、公的なお披露目は Black Hat USA 2011（ラスベガス）。

技法としては、ブロックチェーンを耐久性のある検閲耐性のある媒体として、貨幣記録以外のコンテンツのために用いた。追悼文はトランザクション出力にまたがる形でエンコードされ、そのデータは消費されることが想定されない出力であっても、すべてのフルノードのコピーに永続的に残る。これは `OP_RETURN` がビットコインコアに小さなペイロード埋め込みのための公式な仕組みとして追加される（2014 年）数年前の出来事であり、カミンスキーのエンコードは当時存在したトランザクションスクリプトの仕組みを通して実現された。

**意義：**

- ビットコインブロックチェーンに刻まれた最初期の規模ある文化的な刻印のひとつとして、公式な `OP_RETURN` 機構の登場に先行する。
- 「ブロックチェーンを恒久的な追悼の媒体として使う」というパターンを確立した — このパターンはその後、芸術作品、献辞、政治的なメッセージ、NFT など多くの目的に使われている。
- ビットコイン初期環境の二つの異なる流れを結びつけた：v0.1 の最も著名な外部セキュリティ評価者としてのカミンスキー、そして 20 年にわたるリメイラー・匿名性ツールの開発を通じてサイファーパンク運動の中核に位置していたサスマン。

**サトシの正体問題について：**

このブロックチェーン追悼そのものは、サトシの正体に関する推論とは独立した出来事である。カミンスキーの刻印は、サイファーパンクコミュニティ内の同僚（かつ暗号学的な同輩）による追悼であり、サスマンがビットコインの設計に関与していたかどうかについては、暗黙の主張を一切含まない。これとは別の正体仮説（サスマン＝サトシ）は、その後の年月を経て公的に提案されたものである（最古は 2013 年 3 月の BitcoinTalk スレッド、2021 年のエヴァン・ハッチの記事が代表的な定式化）。本アーカイブでは、その仮説は [独立した編集分析エントリー「サスマン＝サトシ仮説」](/BitcoinArchive/ja/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/) として別途扱う。本エントリーは追悼イベントそのもののみを記録する。

*[編者注：本エントリーはカミンスキー → サスマンのブロックチェーン追悼を独立した史実として記録するためのもの。発表日（2011 年 7 月 30 日）と Black Hat USA 2011 でのお披露目に関する Wikipedia の引用が一次的な根拠であり、今後の調査で具体的なブロック高、トランザクションハッシュ、刻印された全文が判明した場合は、本エントリーを更新してそれを含めるべきである。現在の記述は、編者が直接検証していない具体的なブロックチェーン座標を過剰に主張せず、公的な記録が支える水準でイベントを記述する形に留めている。]*
