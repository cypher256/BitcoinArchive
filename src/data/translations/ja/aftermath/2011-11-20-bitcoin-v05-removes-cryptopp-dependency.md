---
title: "ビットコイン v0.5 が Crypto++ 依存を撤去、OpenSSL SHA-256 に置換"
date: 2011-11-20T00:00:00Z
type: "article"
source: "bitcoin-core"
sourceUrl: "https://github.com/bitcoin/bitcoin/commit/6ccff2cbdebca38e4913b679784a4865edfbb12a"
author: "Bitcoin Institute"
participants:
  - name: "Nils Schneider"
    slug: "nils-schneider"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "2011 年 11 月 20 日、ビットコイン v0.5 が Crypto++ SHA-256 サブセットを撤去し OpenSSL に置換。v0.1 以来のウェイ・ダイ依存が消滅した。"
isSatoshi: false
tags:
  - "nils-schneider"
  - "gavin-andresen"
  - "wei-dai"
  - "cryptopp"
  - "openssl"
  - "bitcoin-core"
  - "cryptography"
  - "code-quality"
secondarySources:
  - name: "Commit 6ccff2cbde — remove cryptopp dependency (Nils Schneider, 2011-09-27)"
    url: "https://github.com/bitcoin/bitcoin/commit/6ccff2cbdebca38e4913b679784a4865edfbb12a"
  - name: "Merge commit b898c8fce6 — Merge branch 'no-cryptopp' (Gavin Andresen, 2011-10-05)"
    url: "https://github.com/bitcoin/bitcoin/commit/b898c8fce687de9320bfae8dd2392e92c5464831"
  - name: "Bitcoin v0.5.0 release (2011-11-20)"
    url: "https://github.com/bitcoin/bitcoin/releases/tag/v0.5.0"
  - name: "Commit 977cdadea8 — Add a built-in SHA256/SHA512 implementation (Pieter Wuille, 2014-04-20)"
    url: "https://github.com/bitcoin/bitcoin/commit/977cdadea8a77eed04f1f0fd341ba9dedc3fa783"
relatedEntries:
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/2010-06-11-gavin-andresen-biography"
  - "aftermath/2010-12-19-andresen-lead-maintainer-announcement"
  - "aftermath/2011-04-26-satoshi-final-known-email"
  - "aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012"
  - "analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis"
translationStatus: complete
---

2011 年 11 月 20 日、ビットコイン v0.5.0 がリリースされ、[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)が 2010 年 7 月 (SVN rev 114) に追加した Crypto++ SHA-256 サブセットがコードベースから撤去された。以降、ビットコインは同じ処理を OpenSSL の SHA-256 ルーチンで実行する。Crypto++ — [ウェイ・ダイ](/BitcoinArchive/ja/participants/wei-dai/)の C++ 暗号ライブラリで、サトシ正体候補が著作した唯一のビットコイン本体への直接コード依存ライブラリ — は Bitcoin Core から消滅した。

**コミットとマージ。**

変更はサトシ時代の貢献者プールの外側から来た。**ニルス・シュナイダー** (BitcoinTalk ハンドル `tcatm`) — [2010 年の v0.3.6 リリースアラート](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-626/2010-07-29-alert-upgrade-to-0-3-6/) でサトシがマイニングのミッドステートキャッシュ最適化の功績を認めた同じ貢献者 — が `no-cryptopp` ブランチを開いた。実体的なコミット (`6ccff2cb`) は **2011 年 9 月 27 日** で、`src/main.cpp` の `SHA256Transform()` を Crypto++ の `CryptoPP::SHA256::Transform` から OpenSSL の `SHA256_Init` / `SHA256_Update` 呼び出しに書き換え、`using CryptoPP::ByteReverse` インポートを削除し、`src/cryptopp/` ディレクトリツリー全体 (16 ファイル: `sha.cpp`、`sha.h`、`cryptlib.h`、`config.h`、`cpu.cpp`、`cpu.h`、`iterhash.h`、`misc.h`、`obj/.gitignore`、`pch.h`、`secblock.h`、`simple.h`、`smartptr.h`、`stdcpp.h`、`License.txt`、`Readme.txt`) を削除した。

サトシの[2011 年 4 月の引き継ぎ](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-final-known-email/)後にプロジェクトのリードメンテナーとなっていた[ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/)が、**2011 年 10 月 5 日**にブランチをマージした (コミット `b898c8fc`、「Merge branch 'no-cryptopp' of https://github.com/tcatm/bitcoin」)。マージにより Bitcoin Core のメインラインは以降 SHA-256 については OpenSSL のみとなった。ビットコイン v0.5.0 は 2011 年 11 月 20 日にタグ付けされ、6 週間後にユーザーへ出荷された。

**削除されたもの、その位置づけ。**

ビットコインは最古の保管リリース以来、Crypto++ SHA-256 サブセットをバンドルしてきた。サトシは [v0.3.6 (2010 年 7 月) で Crypto++ 5.5.2 から Crypto++ 5.6.0 SSE2 最適化アセンブリへの移行を自ら段取りし](/BitcoinArchive/ja/participants/wei-dai/)、自身のコミットメッセージで依存を明示的に追跡していた:「Crypto++ 5.6.0 ライブラリのサブセットを SVN に追加した。SHA と 11 個の汎用依存ファイルだけに削ぎ落とした」。コードアーカイブの観点で平たく言えば、Crypto++ はビットコインがこれまで直接依存した、サトシ正体候補のうち唯一の著作物である。

2011 年までに、Bitcoin Core プロジェクトの重心は Crypto++ コードパスから移動していた。Crypto++ アセンブリサブセットのバンドルを正当化していた 2010 年のマイニング高速化論拠 (CPU SHA-256 スループットによるソロマイニング) は、GPU および FPGA マイニングによって決定的に陳腐化しつつあった。2011 年後半には、ネットワーク相手にリファレンスクライアントの CPU SHA-256 パスを走らせる本格的なマイナーは存在しなかった。Crypto++ サブセットのパフォーマンス重要マイニングコードとしての役割は蒸発し、残ったのはインツリーのサードパーティコピーで、保守コストとライセンスファイルのオーバーヘッドが少なくない。それを撤去して既存のシステム依存 (OpenSSL は ECDSA で既にリンクしていた) に置き換えるのは、コード整理の判断であって、暗号学的方針の変更ではない。置換はプロトコル動作を保存する — OpenSSL の `SHA256_Update` は同じ入力に対して Crypto++ の `SHA256::Transform` と同じダイジェストを生成する。

**その後の経緯。**

OpenSSL SHA-256 パス自身も、2014 年に Bitcoin Core のインツリー実装に置き換えられた。[ピーター・ウィーユ](/BitcoinArchive/ja/participants/pieter-wuille/)のコミット `977cdadea8` (2014 年 4 月 20 日、「Add a built-in SHA256/SHA512 implementation」) が `src/sha2.cpp` に手書きの SHA-256 および SHA-512 ルーチンを導入し、その後のコミットでコンセンサス重要のハッシュ呼び出し箇所を OpenSSL から切り替えた。この時点以降、Bitcoin Core はサードパーティの SHA-256 実装に一切依存しない。OpenSSL の ECDSA 依存はより長く残り、最終的に [Bitcoin Core v0.12 (2016 年 1 月)](/BitcoinArchive/ja/entries/aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012/) で libsecp256k1 に置換された。

置換の連鎖:

| 年 | 構成要素 | 元 | 置換先 | 著者 |
|---|---|---|---|---|
| 2009 | SHA-256 | — | Crypto++ 5.5.2 (インツリーサブセット) | サトシ・ナカモト (v0.1) |
| 2010 | SHA-256 | Crypto++ 5.5.2 | Crypto++ 5.6.0 SSE2 ASM (インツリーサブセット) | サトシ・ナカモト (v0.3.6、BlackEye および tcatm を功績明記) |
| **2011** | **SHA-256** | **Crypto++ 5.6.0** | **OpenSSL** | **ニルス・シュナイダー、ギャビン・アンドレセンがマージ (v0.5.0)** |
| 2014 | SHA-256 | OpenSSL | 組み込み (`sha2.cpp`) | ピーター・ウィーユ |
| 2016 | ECDSA | OpenSSL | libsecp256k1 | ピーター・ウィーユとグレゴリー・マクスウェル (v0.12.0) |

**サトシ正体問題への関連。**

[ウェイ・ダイ＝サトシ仮説](/BitcoinArchive/ja/entries/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis/) はビットコイン v0.1 の Crypto++ 依存を構造的論点として扱う: 名指し候補のうち、ビットコインがソースツリーに実際に含めたライブラリを著作したのはウェイ・ダイのみ、というもの。本論点は時間的に限定されている。ビットコイン v0.5 (2011 年 11 月) では Bitcoin Core はもはや Crypto++ サブセットを保持していない。ウェイ・ダイのライブラリへのソースツリーレベルの構造的コードベース依存は、v0.1 (2009 年 1 月) から v0.4.x までで終わった。変更は暗号学的アイデンティティの根拠で行われたのではない — コミュニティ貢献者 (シュナイダー) によるインツリー保守負担削減を動機とする通常のコード整理であり、サトシ後のメンテナー (アンドレセン) によって承認された — が、その結果として、「ビットコインがソースツリーレベルでウェイ・ダイのライブラリに依存している」 という主張が生きていた 22 か月の窓が確定する。その窓の外では、本主張は稼働中のプロトコルではなく過去のリリースについてのものとなる。

[ウェイ・ダイ＝サトシ仮説エントリ §2.2](/BitcoinArchive/ja/entries/analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis/) はコードベース依存を、ウェイ・ダイが直接的なコード貢献の観点で他候補と構造的に区別不能であるとする帰無仮説に対する反証として枠組みづける。本エントリはその反証の上限を記録する: v0.5.0 で終了する。
