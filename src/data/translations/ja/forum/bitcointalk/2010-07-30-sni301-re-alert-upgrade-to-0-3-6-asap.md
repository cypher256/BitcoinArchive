---
title: "Re: *** 警告 *** 至急0.3.6にアップグレード！"
date: 2010-07-30T21:44:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6728#msg6728"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがBoostのバージョン互換性の問題について説明し、Mac OSX版のリリースを発表。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/301/"
threadId: "bt-alert-upgrade-to-0-3-6-asap"
translationStatus: complete
---

[Quote from: knightmb on July 30, 2010, 08:04:19 PM](#msg6713)
> [Quote from: satoshi on July 30, 2010, 07:53:06 PM](#msg6711)
> > <!-- tone-skip -->
> > [Quote from: knightmb on July 30, 2010, 07:24:07 PM](#msg6702)
> > > これらのビルドを作るのにどれだけ苦労したか想像できます。Ubuntu 9.04の環境でプログラムをビルドしようとしていますが、パッケージをインストールしたりソースをコンパイルしたりしても、すべての依存関係を見つけられません（笑）。
> > <!-- /tone-skip -->
> >
> > なぜそんなに苦労しているのか理解できない。build-unix.txtの手順に従っただけだ。Boost 1.37用にちょっとした修正を加えたが、次回SVNを更新する時にアップロードする。以下に記載する：
> >
> > ```
> > 依存関係
> > ------------
> > sudo apt-get install build-essential
> > sudo apt-get install libgtk2.0-dev
> > sudo apt-get install libssl-dev
> > sudo apt-get install libdb4.7-dev
> > sudo apt-get install libdb4.7++-dev
> > sudo apt-get install libboost-all-dev（またはlibboost1.37-dev）
> >
> > wxWidgets
> > ---------
> > cd /usr/local
> > tar -xzvf wxWidgets-2.9.0.tar.gz
> > cd /usr/local/wxWidgets-2.9.0
> > mkdir buildgtk
> > cd buildgtk
> > ../configure --with-gtk --enable-debug --disable-shared --enable-monolithic
> > make
> > sudo su
> > make install
> > ldconfig
> > ```
> >
> > makefile.unixにコメントを追加：
> >
> > ```makefile
> > # boost 1.37の場合、boostライブラリに-mtを追加
> > LIBS= \
> >  -Wl,-Bstatic \
> >    -l boost_system \
> >    -l boost_filesystem \
> >    -l boost_program_options \
> >    -l boost_thread \
> >    -l db_cxx \
> >    -l crypto \
> >  -Wl,-Bdynamic \
> >    -l gthread-2.0
> > ```
>
> その最後のハイライト部分が原因だった。そのコマンドではすべてのlibboostパッケージをインストールできない（*でも試した）が、問題の一部はlibboostに関する「すべて」をインストールすると文字通りに解釈しすぎたことだ、笑。
>
> 実際には、libboost1.37-devパッケージだけで、すべてのコンパイルエラーが消えた。それ以外は、独自のwxWidgetsのコンパイル、Boost 1.4のコンパイルなど、すべて問題なく動いた。
>
> つまり最後のコマンドは単純に
> **sudo apt-get install libboost1.37-dev**
>
> 余談だが、Ubuntu 64bitシステムでコンパイルしたので、できたプログラムは64bit対応になった。いくつかの64bitシステムでテスト中だ。

**sudo apt-get install libboost1.37-dev**
にすればいい
ただし、それはboost 1.40以降（Ubuntu 10.04）では動作しない。その場合はlibboost-all-devを入手する必要がある。

最近Boostの仕様がいろいろ変わったようで、「-mt」などの問題もあり、大変だ。

ちなみに、Boost 1.34を試したが、boost.interprocessがなかった。

Mac OSX版が利用可能になった。bitcoin.orgまたはSourceForgeのリンクを見てくれ。
