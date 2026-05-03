---
title: "ピーター・ウィーユ（生年不明）— BIP-32、libsecp256k1、SegWit、Taproot を手がけた Bitcoin Core 開発者"
date: 2011-03-17T21:58:07Z
type: "biography"
source: "github"
sourceUrl: "https://github.com/sipa"
author: "Pieter Wuille"
participants:
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
description: "ベルギーのソフトウェア技術者（sipa）。BIP-32、SegWit、Schnorr、Taprootの著者/共著者、libsecp256k1発起人、Blockstream共同創業。"
isSatoshi: false
tags:
  - "pieter-wuille"
  - "biography"
  - "bitcoin-core"
  - "libsecp256k1"
  - "segwit"
  - "taproot"
  - "bip-32"
  - "historic"
secondarySources:
  - name: "Pieter Wuille on GitHub"
    url: "https://github.com/sipa"
  - name: "Who Controls Bitcoin Core? — Jameson Lopp"
    url: "https://blog.lopp.net/who-controls-bitcoin-core/"
relatedEntries:
  - aftermath/2013-03-05-gregory-maxwell-biography
  - bip/2012-02-11-bip-0032
  - bip/2015-12-21-bip-0141
  - bip/2020-01-19-bip-0340
  - bip/2020-01-19-bip-0341
  - aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012
  - aftermath/2011-09-13-bitcoin-github-migration-committers
translationStatus: complete
---

ピーター・ウィーユ（GitHub と IRC 上のハンドル名 **sipa** で広く知られる）はベルギーのソフトウェア技術者で、サトシ離脱後の Bitcoin Core で最も生産的かつ影響力のある貢献者の一人となった。公に流通している個人伝記的情報は、彼の公開された職業活動以上には多くない。

**初期の貢献（2011年）：**
ウィーユのアーカイブにおける最初の貢献は、[2011年3月17日の PR #122](/BitcoinArchive/ja/entries/forum/github/pr-122/2011-03-17-pr-122-spent-per-txout/) である。ウォレット構造の変更により、トランザクション出力ごとに使用済み状態を個別に追跡できるようにし、部分的な使用を可能にする変更だった。2011年5月1日、[ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/)が彼に [GitHub コミット権限を付与](/BitcoinArchive/ja/entries/aftermath/2011-09-13-bitcoin-github-migration-committers/)した。これによりウィーユは、アンドレセン自身の次、そして[ウラジミール・ファン・デル・ラーン](/BitcoinArchive/ja/participants/wladimir-van-der-laan/)よりも前の、長期メンテナーとして2人目の地位を得た。

**Bitcoin Improvement Proposals：**
ウィーユはサトシ離脱後の Bitcoin 進化の驚くほど広い範囲をカバーする4本の BIP の著者または共著者である。

- **[BIP-32](/BitcoinArchive/ja/entries/bip/2012-02-11-bip-0032/)**（2012年）— 階層的決定性ウォレット（HDウォレット）。1つのマスターシードから鍵ツリー全体を導出することで「頻繁なウォレットバックアップ」問題を解消。現代のあらゆる Bitcoin ウォレットの基盤。
- **[BIP-141](/BitcoinArchive/ja/entries/bip/2015-12-21-bip-0141/)**（2015年、エリック・ロンブロゾ・ジョンソン・ラウと共著）— Segregated Witness（SegWit）。トランザクションの Malleability を修正し、Lightning を可能にし、実効ブロック容量を増加。
- **[BIP-340](/BitcoinArchive/ja/entries/bip/2020-01-19-bip-0340/)**（2020年）— secp256k1 曲線上のシュノア署名。
- **[BIP-341](/BitcoinArchive/ja/entries/bip/2020-01-19-bip-0341/)**（2020年）— Taproot。2021年11月に有効化。

**libsecp256k1：**
2013年3月5日、ウィーユは当初 GLV 手法エンドモーフィズムの性能実験として [libsecp256k1](/BitcoinArchive/ja/entries/aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012/) を開始した。まもなく[グレゴリー・マクスウェル](/BitcoinArchive/ja/participants/gregory-maxwell/)が参加し、ライブラリーは OpenSSL の secp256k1 実装を目的別にフルリプレースするものへと成長した。2016年1月15日、Bitcoin Core v0.12 でデフォルトのバックエンドとして出荷された。

**Blockstream と Chaincode Labs：**
ウィーユは2014年、グレゴリー・マクスウェルらとともに Blockstream を共同創業し、後に Chaincode Labs にも参画した。一貫して Bitcoin Core の最も継続的なレビュアーであり、暗号設計者でもあり続けている。

**意義：**
4本の BIP と libsecp256k1 を合わせれば、ウィーユの直接的な設計作業は、現代のあらゆる Bitcoin ウォレットが鍵を導出する方法、あらゆる現代のトランザクションが署名を検証する方法、あらゆる現代の決済がオンチェーン Malleability を逃れる方法、あらゆる Taproot 出力が得る privacy とスクリプト柔軟性──その全ての下地となっている。プロトコル自体にこれほど広い影響面を持つサトシ離脱後の貢献者はごく少ない。
