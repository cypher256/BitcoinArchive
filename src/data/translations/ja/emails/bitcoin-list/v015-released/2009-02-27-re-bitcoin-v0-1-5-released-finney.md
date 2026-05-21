---
title: "Re: [bitcoin-list] ビットコイン v0.1.5 リリース"
date: 2009-02-27T20:00:12Z
type: "mailing-list"
source: "bitcoin-list"
sourceUrl: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/threads/9/"
sourceNote: "SourceForge の bitcoin-list への投稿。 サトシナカモト研究所のスレッドページが現存する正典写し。 この Hal Finney の返信には個別の永続リンクが存在しない。"
author: "Hal Finney"
participants:
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ハル・フィニーが単一 NAT 配下で複数のブロック生成を動かす要望、 安全な時刻認証はブロック連鎖に適すると指摘、 クライアント側の図書館型窓口も要望する。"
isSatoshi: false
tags:
  - "mailing-list"
  - "timestamping"
  - "nat"
  - "api"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    sourceEntryId: "emails/bitcoin-list/v015-released/2009-02-22-re-bitcoin-v0-1-5-released"
translationStatus: complete
---

2009 年 2 月 22 日 ( 日 ) 09:35、 サトシ・ナカモトは次のように書いている。

<!-- quote: q1 -->
>> 次は何だ ?
>
> v0.1.6 の次の課題は、 ブロック生成で多重処理器を活かすこと。
> 今は一本の処理糸しか起動していない。 Core Duo や Quad のような
> 多核処理器なら、 生成量を二倍・四倍にできる。

それは良さそうだ。 単一 NAT 住所の背後で複数のコイン・ブロック生成プロセスを複数台の機械で動かせるようにもしたい。 まだ試していないので、 現状の実装で動くかどうかは分からない。

ところで、 話したことがあるかは覚えていないが、 先日、 安全な時刻認証について話している人たちがいた。 ある文書が過去のある時点に存在していたことを証明できるようにしたい、 ということだ。 ビットコインのブロック連鎖はその用途にぴったりだと思う。

> いずれサーバー側の言語からウェブサイトに容易に組み込めるよう、
> 接続窓口を追加したい。

そうだね、 そして、 クライアント側でも台本言語などから呼び出せる図書館型の窓口がほしい。

Hal
