---
title: "グレゴリー・マクスウェル（生年不明）— Blockstream 共同創業者、CoinJoin と Confidential Transactions の設計者"
date: 2013-03-05T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Blockstream"
author: "Gregory Maxwell"
participants:
  - name: "Gregory Maxwell"
    slug: "gregory-maxwell"
description: "Bitcoin Core貢献者（gmaxwell）、Blockstream共同創業、libsecp256k1共同開発、CoinJoinおよびConfidential Transactions設計者。"
isSatoshi: false
tags:
  - "gregory-maxwell"
  - "biography"
  - "bitcoin-core"
  - "blockstream"
  - "coinjoin"
  - "confidential-transactions"
  - "libsecp256k1"
  - "historic"
secondarySources:
  - name: "Blockstream — Wikipedia"
    url: "https://en.wikipedia.org/wiki/Blockstream"
relatedEntries:
  - aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012
  - aftermath/2011-03-17-pieter-wuille-biography
translationStatus: complete
---

グレゴリー・マクスウェル（オンライン名 **gmaxwell**）は長年にわたる Bitcoin Core 貢献者で、個人の伝記的情報はあまり公表されていない。彼は、BitcoinTalk・IRC・Bitcoin Core GitHub リポジトリー上での技術的に密度の高い文章を長年にわたって蓄積することで知名度を得て、2014年には[アダム・バック](/BitcoinArchive/ja/participants/adam-back/)らとともに [Blockstream](https://en.wikipedia.org/wiki/Blockstream) を共同創業した。

**libsecp256k1：**
[ピーター・ウィーユ](/BitcoinArchive/ja/participants/pieter-wuille/)が2013年3月5日に [libsecp256k1 ライブラリー](/BitcoinArchive/ja/entries/aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012/)を開始した直後、マクスウェルはこの取り組みに参加した。二人の共同作業のもとで、ライブラリーは性能実験から、OpenSSL の secp256k1 実装を専用に置き換える存在へと拡大し、2016年1月15日に Bitcoin Core v0.12 のデフォルトバックエンドとして出荷された。

**CoinJoin と Confidential Transactions：**
マクスウェルが最も広く引用されるプライバシー関連の貢献は、**CoinJoin** 構成──複数ユーザーの支払いを1つのトランザクションに結合することで、単純な入力→出力ヒューリスティックを無効化する手法──と、**Confidential Transactions**──Pedersen コミットメントの背後にトランザクション金額を隠しつつ、価値保存の検証可能性を維持するスキーム──である。いずれも Bitcoin のベースレイヤーには実装されていないが、Wasabi、JoinMarket、Liquid など一世代分の Bitcoin プライバシー関連の仕事と、より広い暗号通貨プライバシー研究を方向づけた。

**Blockstream：**
2014年、マクスウェルは[アダム・バック](/BitcoinArchive/ja/participants/adam-back/)、[ピーター・ウィーユ](/BitcoinArchive/ja/participants/pieter-wuille/)らとともに Bitcoin インフラ企業 Blockstream を共同創業した。Blockstream はサイドチェーン（Liquid）、衛星ブロック配信、そして Bitcoin Core 開発の継続的支援などと関連してきた。

**意義：**
マクスウェルは Bitcoin の暗号工学と開発者文化の交点に位置する──長文のフォーラム・メーリングリスト投稿を通じて微妙なプロトコル挙動を教える教師であり、現代の Bitcoin スタックが依拠するライブラリーと基礎プリミティブの著者でもある、生産的なレビュアーである。彼のプライバシー構成は特に、ベースプロトコル自体がそれらを取り込まない選択をした場合でも、秘匿性レイヤーで Bitcoin が「なり得た」姿の多くを素描したものと言える。
