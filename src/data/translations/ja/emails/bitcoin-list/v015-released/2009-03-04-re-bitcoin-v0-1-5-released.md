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
description: "サトシ・ナカモトによるBitcoin v0.1.5スレッドへの返信。ハル・フィニーとの議論で、NAT環境でのマルチノード運用、タイムスタンプ機能、ライブラリインターフェースについて。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/27/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Hal Finney"
---

<!-- speaker: Hal Finney -->
<!-- quote: q1 -->
<!-- tone-skip -->
> それは良いね。単一のNATアドレスの背後にある複数のマシンで
> 複数のコイン/ブロック生成器を実行できるようにもしたい。
> まだ試していないので、現在のソフトウェアで動作するかわからない。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
現在のバージョンで問題なく動作する。それぞれがインターネット経由で接続し、着信接続はポート8333がルーティングされているホストにのみ届く。

最適化として、特定のアドレスにのみ接続する「-connect=1.2.3.4」というスイッチを作る。追加のノードをプライマリノードに接続させ、プライマリのみがインターネットに接続するようにできる。今のところはそれほど重要ではない。帯域幅が些細な量を超えるほどネットワークが巨大にならなければならないからだ。

<!-- speaker: Hal Finney -->
> ところで、この話をしたか覚えていないが、先日セキュアタイムスタンプに
> ついて話している人たちがいた。ある文書が過去のある時点に存在した
> ことを証明したいということだ。bitcoinのブロックの積み重ねはこれに
> 最適だと思う。

<!-- speaker: Satoshi Nakamoto -->
確かに、Bitcoinはトランザクションのための分散型セキュアタイムスタンプサーバーだ。数行のコードで、タイムスタンプが必要なもののハッシュを追加したトランザクションを作成できる。そのような方法でファイルにタイムスタンプを付けるコマンドを追加すべきだろう。

<!-- speaker: Hal Finney -->
> > > その後、あらゆるサーバーサイド言語からウェブサイトに簡単に統合
> > > できるインターフェースを追加したいと考えている。
>
> そうだね、クライアント側でもプログラミング言語やスクリプト言語から
> 呼び出せるライブラリインターフェースがもっとあればと思う。

<!-- speaker: Satoshi Nakamoto -->
まさにその通りだ。


Satoshi Nakamoto

http://www.bitcoin.org
