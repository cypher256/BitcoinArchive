---
title: "Re: [bitcoin-list] Bitcoin v0.1.5 リリース"
date: 2009-03-04T16:59:12.000Z
source: bitcoin-list
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/21740046/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoによるBitcoin v0.1.5スレッドへの返信。Hal Finneyとの議論で、NAT環境でのマルチノード運用、タイムスタンプ機能、ライブラリインターフェースについて。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/27/"
translationStatus: complete
---

Hal Finney wrote:
> それは良いですね。単一のNATアドレスの背後にある複数のマシンで
> 複数のコイン/ブロック生成器を実行できるようにもしたいです。
> まだ試していないので、現在のソフトウェアで動作するかわかりません。

現在のバージョンで問題なく動作します。それぞれがインターネット経由で接続し、着信接続はポート8333がルーティングされているホストにのみ届きます。

最適化として、特定のアドレスにのみ接続する「-connect=1.2.3.4」というスイッチを作ります。追加のノードをプライマリノードに接続させ、プライマリのみがインターネットに接続するようにできます。今のところはそれほど重要ではありません。帯域幅が些細な量を超えるほどネットワークが巨大にならなければならないからです。

> ところで、この話をしたか覚えていませんが、先日セキュアタイムスタンプに
> ついて話している人たちがいました。ある文書が過去のある時点に存在した
> ことを証明したいということです。bitcoinのブロックの積み重ねはこれに
> 最適だと思います。

確かに、Bitcoinはトランザクションのための分散型セキュアタイムスタンプサーバーです。数行のコードで、タイムスタンプが必要なもののハッシュを追加したトランザクションを作成できます。そのような方法でファイルにタイムスタンプを付けるコマンドを追加すべきですね。

> > > その後、あらゆるサーバーサイド言語からウェブサイトに簡単に統合
> > > できるインターフェースを追加したいと考えています。
>
> そうですね、クライアント側でもプログラミング言語やスクリプト言語から
> 呼び出せるライブラリインターフェースがもっとあればと思います。

まさにその通りです。


Satoshi Nakamoto

http://www.bitcoin.org
