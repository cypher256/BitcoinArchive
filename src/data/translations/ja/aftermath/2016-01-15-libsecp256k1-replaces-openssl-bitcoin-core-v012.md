---
title: "Bitcoin Core v0.12 の合意検証で libsecp256k1 が OpenSSL を置換"
date: 2016-01-15T00:00:00Z
type: "article"
source: "bitcoin-core"
sourceUrl: "https://github.com/bitcoin/bitcoin/blob/v0.12.0/doc/release-notes.md"
author: "Bitcoin Institute"
participants:
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
  - name: "Gregory Maxwell"
    slug: "gregory-maxwell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "2016 年 1 月 15 日、Bitcoin Core v0.12 が ECDSA 署名検証で OpenSSL を libsecp256k1（ウィーユ・マクスウェル開発）に置換。"
isSatoshi: false
tags:
  - "libsecp256k1"
  - "openssl"
  - "bitcoin-core"
  - "cryptography"
  - "consensus"
  - "code-quality"
secondarySources:
  - name: "Bitcoin Magazine — The Core Issue: libsecp256k1, Bitcoin's Cryptographic Heart"
    url: "https://bitcoinmagazine.com/print/the-core-issue-libsecp256k1-bitcoins-cryptographic-heart"
  - name: "GitHub — bitcoin-core/secp256k1"
    url: "https://github.com/bitcoin-core/secp256k1"
  - name: "CVE-2014-3570 — ピーター・ウィーユが報告した OpenSSL BN_sqr バグ"
    url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3570"
relatedEntries:
  - analysis/2009-01-09-satoshi-windows-development-environment
  - "aftermath/2011-03-17-pieter-wuille-biography"
  - "aftermath/2013-03-05-gregory-maxwell-biography"
  - "aftermath/2010-11-19-wladimir-van-der-laan-biography"
  - "aftermath/2011-10-10-dan-kaminsky-bitcoin-security"
  - "forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style"
  - "aftermath/2011-09-13-bitcoin-github-migration-committers"
  - "bip/2015-12-21-bip-0141"
  - "bip/2020-01-19-bip-0340"
  - "bip/2020-01-19-bip-0341"
  - "analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies"
  - "aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency"
  - design/2009-01-03-bitcoin-cryptography-design
inlineLinkKeywords:
  - "libsecp256k1"
translationStatus: complete
---

![紺色を背景に、赤い×印で無効化された古い南京錠から、より小さく精密な六角形の錠前へと矢印でつながる図で、グリッド上の緑色の楕円曲線グラフ、速度計を模したバッジ、2015年から 2016年にかけての二点式タイムラインバーが添えられている。](/BitcoinArchive/images/analysis/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012-hero.png)

2016年1月15日、Bitcoin Core v0.12 が合意クリティカルな ECDSA 署名検証の標準バックエンドとして libsecp256k1 を採用し、OpenSSL を置き換えた。OpenSSL は[サトシのオリジナル v0.1 リリース](/BitcoinArchive/ja/entries/aftermath/2009-01-09-bitcoin-v01-released/)以来 7年間、ビットコインの依存ライブラリーであり続けていた。

## 背景

libsecp256k1 プロジェクトは 2013年3月5日、[ピーター・ウィーユ](/BitcoinArchive/ja/participants/pieter-wuille/)によって開始された。当初の動機は性能で、ウィーユは GLV-method endomorphism によって OpenSSL の汎用楕円曲線コードを上回る速度向上が得られるか確かめたかった。1 週間でライブラリーはビットコインの全ブロックチェーンを検証可能になった（当時のブロック高は約 225,000）。

[グレゴリー・マクスウェル](/BitcoinArchive/ja/participants/gregory-maxwell/)が参加し、プロジェクトは性能実験から、OpenSSL の secp256k1 実装を完全に置き換えるビットコイン専用ライブラリーへと拡大していった。

## OpenSSL を置換する理由

2014年までに、合意クリティカルなコードで OpenSSL を使用することの具体的な問題が複数特定されていた：

1. **署名解析の不整合**が予期せぬチェーン分裂を引き起こす可能性。OpenSSL のバージョンが異なると、同じ署名が有効か無効かで判定が割れる場合があり、全ノードが同じ結論に達する必要がある合意システムでは許容できない。
2. **性能**の明確な向上。libsecp256k1 は最終的に署名検証で 2.5〜5.5倍高速で、署名検証は新ブロック検証コストの大部分を占める。
3. **監査可能性**の確保。単一の曲線とビットコインが必要とする操作のみに焦点を絞ることで、ライブラリーは深く査読可能なサイズに収まり、サイドチャネル攻撃に対する定数時間実装も実現できた。

2014年11月、ウィーユは libsecp256k1 のテストを書きながら CVE-2014-3570 を発見・報告した。これは OpenSSL の BN_sqr（二乗）ルーチンの重大なバグで、長年 OpenSSL に潜在していた。

マクスウェルは Bitcoin Magazine の記事で結論をこうまとめた。「OpenSSL はビットコインのような合意クリティカルなシステムには適さないライブラリーだ」

## 展開

- **Bitcoin Core v0.10**（2015年2月）: ウォレット署名の標準として libsecp256k1 を採用。
- **Bitcoin Core v0.12**（2016年1月15日）: 合意クリティカルな ECDSA 署名検証の標準として libsecp256k1 を採用。

[暗号設計エントリー](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-cryptography-design/)も、ビットコインの署名方式の変遷を扱う中でこの 2 段階の展開を記述している。

## 意義

libsecp256k1 が OpenSSL を置き換えたのは、合意の署名検証だった。すべてのノードが同じ判定に達しなければチェーンが分裂する経路である。サトシの v0.1 が OpenSSL を採用したのは、2008年当時としては自明な選択だった。Windows 上の C++ プロジェクト向け標準暗号ライブラリーだったからだ。2016年までに、Bitcoin Core 開発者たちは、合意システムにとって「自明」と「正しい」は同じではないと結論し、3年かけてビットコイン専用の置換実装を作り上げた。

コードベースが成熟するにつれて、サトシの設計選択はビットコイン固有の実装へ段階的に置き換えられていく。このパターンは、Bitcoin Core の進化における繰り返し現れるテーマである。[PR #4641（laanwj、2014）](/BitcoinArchive/ja/entries/forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style/)も同様で、サトシのハンガリアン記法による変数命名規則を新しい Bitcoin Core コードから体系的に削除する動きの始まりだった。

libsecp256k1 移行は、複数の参加者記録と依存関係記録において決定的事件として読まれる。 [ウラジミール・ファン・デル・ラーン伝記](/BitcoinArchive/ja/participants/wladimir-van-der-laan/)は v0.12 のリリース日をリードメンテナーとしての在任期間における定義的な業績として記録する。 [ピーター・ウィーユ伝記](/BitcoinArchive/ja/participants/pieter-wuille/)は、ウィーユが 2013 年に開始した本ライブラリを、貢献記録の根本的な柱の一つとして扱う。 [グレゴリー・マクスウェル伝記](/BitcoinArchive/ja/participants/gregory-maxwell/)も libsecp256k1 の共同著作をマクスウェル記録の二本柱のうちの一つとして据える (もう一本は CoinJoin / Confidential Transactions)。そして [2011 年のビットコイン v0.5 Crypto++ 依存除去エントリ](/BitcoinArchive/ja/entries/aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency/)は同じ依存置換の弧をより早い端点から読む。2011 年の Crypto++ から OpenSSL へ、2016 年の OpenSSL から libsecp256k1 へ。v0.12 のリリース日は、その連鎖の終端行として扱われる。
