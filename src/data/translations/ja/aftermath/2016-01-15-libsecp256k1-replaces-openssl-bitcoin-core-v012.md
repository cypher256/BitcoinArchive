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
    slug: "gmaxwell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "2016年1月15日、Bitcoin Core v0.12 は合意クリティカルな ECDSA 署名検証の実装を OpenSSL から libsecp256k1 に置換した。ピーター・ウィユとグレゴリー・マクスウェルは約3年かけて Bitcoin 専用の楕円曲線ライブラリーを書き上げた。OpenSSL の署名解析の不整合が予期せぬチェーン分裂を引き起こす可能性があると結論したためである。検証速度は2.5〜5.5倍高速化し、サトシが選定した暗号ライブラリーの一つが置き換えられた。"
isSatoshi: false
tags:
  - "pieter-wuille"
  - "gmaxwell"
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
  - name: "Bitcoin Core v0.12.0 release notes"
    url: "https://github.com/bitcoin/bitcoin/blob/v0.12.0/doc/release-notes.md"
  - name: "CVE-2014-3570 — ピーター・ウィユが報告した OpenSSL BN_sqr バグ"
    url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3570"
relatedEntries:
  - "aftermath/2008-10-31-satoshi-nakamoto-biography"
  - "aftermath/2011-10-10-dan-kaminsky-bitcoin-security"
  - "forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style"
  - "aftermath/2011-09-13-bitcoin-github-migration-committers"
  - "bip/2015-12-21-bip-0141"
  - "bip/2020-01-19-bip-0340"
  - "bip/2020-01-19-bip-0341"
translationStatus: complete
---

2016年1月15日、[Bitcoin Core v0.12](https://github.com/bitcoin/bitcoin/blob/v0.12.0/doc/release-notes.md) が合意クリティカルな ECDSA 署名検証の標準バックエンドとして libsecp256k1 を採用し、OpenSSL を置き換えた。OpenSSL は[サトシのオリジナル v0.1 リリース](/BitcoinArchive/ja/entries/sourceforge/2009-01-09-bitcoin-v01-released/)以来7年間、Bitcoin の依存ライブラリーであり続けていた。

**背景：**

libsecp256k1 プロジェクトは2013年3月5日、[ピーター・ウィユ](/BitcoinArchive/ja/participants/pieter-wuille/)によって開始された。当初の動機は性能で、ウィユは GLV-method endomorphism によって OpenSSL の汎用楕円曲線コードを上回る速度向上が得られるか確かめたかった。1週間でライブラリーは Bitcoin の全ブロックチェーンを検証可能になった（当時のブロック高は約225,000）。

[グレゴリー・マクスウェル](/BitcoinArchive/ja/participants/gmaxwell/)が参加し、プロジェクトは性能実験から、OpenSSL の secp256k1 実装を完全に置き換える Bitcoin 専用ライブラリーへと拡大していった。

**OpenSSL を置換する理由：**

2014年までに、合意クリティカルなコードで OpenSSL を使用することの具体的な問題が複数特定されていた：

1. **署名解析の不整合**が予期せぬチェーン分裂を引き起こす可能性。OpenSSL のバージョンが異なると、同じ署名が有効か無効かで判定が割れる場合があり、全ノードが同じ結論に達する必要がある合意システムでは許容できない。
2. **性能** — libsecp256k1 は最終的に署名検証で2.5〜5.5倍高速。署名検証は新ブロック検証コストの大部分を占める。
3. **監査可能性** — 単一の曲線と Bitcoin が必要とする操作のみに焦点を絞ることで、ライブラリーは深く査読可能なサイズに収まり、サイドチャネル攻撃に対する定数時間実装も実現できた。

2014年11月、ウィユは libsecp256k1 のテストを書きながら [CVE-2014-3570](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3570) を発見・報告した。これは OpenSSL の BN_sqr（二乗）ルーチンの重大なバグで、長年 OpenSSL に潜在していた。

マクスウェルは Bitcoin Magazine の記事で結論をこうまとめた。「OpenSSL は Bitcoin のような合意クリティカルなシステムには適さないライブラリーだ」

**展開：**

- **Bitcoin Core v0.10**（2015年2月）: ウォレット署名の標準として libsecp256k1 を採用。
- **Bitcoin Core v0.12**（2016年1月15日）: 合意クリティカルな ECDSA 署名検証の標準として libsecp256k1 を採用。

**意義：**

libsecp256k1 は、サトシが当初選定した依存ライブラリーで最も影響力の大きい置換例である。サトシの v0.1 が OpenSSL を採用したのは、2008年当時としては自明な選択だった——Windows 上の C++ プロジェクト向け標準暗号ライブラリーだったからだ。2016年までに、Bitcoin Core 開発者たちは、合意システムにとって「自明」と「正しい」は同じではないと結論し、3年かけて Bitcoin 専用の置換実装を作り上げた。

このパターン——コードベースが成熟するにつれてサトシの設計選択が Bitcoin 固有の実装に段階的に置き換えられていくこと——は、Bitcoin Core の進化における繰り返し現れるテーマである。[PR #4641（laanwj、2014）](/BitcoinArchive/ja/entries/forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style/)も同様で、サトシのハンガリアン記法による変数命名規則を新しい Bitcoin Core コードから体系的に削除する動きの始まりだった。
