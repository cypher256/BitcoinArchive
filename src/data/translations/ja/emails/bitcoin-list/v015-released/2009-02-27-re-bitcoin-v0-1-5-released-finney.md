---
title: "Re: [bitcoin-list] ビットコイン v0.1.5 リリース"
date: 2009-02-27T20:00:12Z
type: "mailing-list"
source: "bitcoin-list"
sourceUrl: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/threads/9/"
sourceNote: "SourceForge の bitcoin-list への投稿。サトシ・ナカモト研究所のスレッドページが現存する正典写し。この Hal Finney の返信には個別の永続リンクが存在しない。"
author: "Hal Finney"
participants:
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ハル・フィニーが単一 NAT 配下で複数のブロック生成を動かす要望、安全な時刻認証はブロック連鎖に適すると指摘、クライアント側の図書館型窓口も要望する。"
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
    date: "2009-02-22T17:47:52.000Z"
    sourceEntryId: "emails/bitcoin-list/v015-released/2009-02-22-re-bitcoin-v0-1-5-released"
  - id: "q2"
    parent: "q1"
    person: "Nicholas Bohm"
    personSlug: "nicholas-bohm"
    date: "2009-02-18T14:55:50Z"
    sourceEntryId: "emails/bitcoin-list/v015-released/2009-02-18-re-bitcoin-v0-1-5-released-bohm"
translationStatus: complete
---

<!-- quote: q1 -->
<!-- quote: q2 -->
>> 次は何でしょうか？
>
> v0.1.6 で次に予定しているのは、ブロック生成に複数のプロセッサーを
> 活用することだ。現在は 1 つのスレッドしか起動しない。Core Duo や
> Quad のようなマルチコアプロセッサーをお持ちであれば、生産量が
> 2倍または 4倍になる。

それは良さそうだ。単一 NAT 住所の背後で複数のコイン・ブロック生成プロセスを複数台の機械で動かせるようにもしたい。まだ試していないので、現状の実装で動くかどうかは分からない。

ところで、話したことがあるかは覚えていないが、先日、安全な時刻認証について話している人たちがいた。ある文書が過去のある時点に存在していたことを証明できるようにしたい、ということだ。ビットコインのブロック連鎖はその用途にぴったりだと思う。

<!-- speaker: Satoshi Nakamoto -->
> その後、あらゆるサーバーサイド言語からウェブサイトに簡単に統合できるインターフェースを追加したいと考えている。

そうだね、そして、クライアント側でも台本言語などから呼び出せる図書館型の窓口がほしい。

Hal
