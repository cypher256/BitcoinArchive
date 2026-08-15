---
title: "Re: [bitcoin-list] Bitcoin v0.1.5 リリース"
date: 2009-03-04T16:59:12.000Z
type: "mailing-list"
source: "bitcoin-list"
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/21740046/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトによる Bitcoin v0.1.5 スレッドへの返信。ハル・フィニーとの議論で、NAT 環境でのマルチノード運用、タイムスタンプ機能、ライブラリインターフェースについて。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/27/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Hal Finney"
    personSlug: "hal-finney"
    date: "2009-02-27T20:00:12Z"
    sourceEntryId: "emails/bitcoin-list/v015-released/2009-02-27-re-bitcoin-v0-1-5-released-finney"
---

<!-- speaker: Hal Finney -->
<!-- quote: q1 -->
<!-- tone-skip -->
> それは良さそうだ。単一 NAT アドレスの背後で複数のコイン・ブロック生成プロセスを複数台の機械で動かせるようにもしたい。
> まだ試していないので、現状の実装で動くかどうかは分からない。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
現在のバージョンで問題なく動作する。それぞれがインターネット経由で接続し、着信接続はポート 8333 がルーティングされているホストにのみ届く。

最適化として、特定のアドレスにのみ接続する「-connect=1.2.3.4」というスイッチを作る。追加のノードをプライマリノードに接続させ、プライマリのみがインターネットに接続するようにできる。今のところはそれほど重要ではない。帯域幅が些細な量を超えるほどネットワークが巨大にならなければならないからだ。

<!-- speaker: Hal Finney -->
> ところで、話したことがあるかは覚えていないが、先日、安全な時刻認証について話している人たちがいた。
> ある文書が過去のある時点に存在していたことを証明できるようにしたい、ということだ。
> ビットコインのブロック連鎖はその用途にぴったりだと思う。

<!-- speaker: Satoshi Nakamoto -->
確かに、ビットコインはトランザクションのための分散型セキュアタイムスタンプサーバーだ。数行のコードで、タイムスタンプが必要なもののハッシュを追加したトランザクションを作成できる。そのような方法でファイルにタイムスタンプを付けるコマンドを追加すべきだろう。

<!-- speaker: Hal Finney -->
> > > その後、あらゆるサーバーサイド言語からウェブサイトに簡単に統合
> > > できるインターフェースを追加したいと考えている。
>
> そうだね、そして、クライアント側でもスクリプト言語などから呼び出せるライブラリインターフェースがほしい。

<!-- speaker: Satoshi Nakamoto -->
まさにその通りだ。


Satoshi Nakamoto

http://www.bitcoin.org
