---
title: "Re: *** 警告 *** 至急0.3.6にアップグレード！"
date: 2010-07-30T19:53:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6711#msg6711"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがUbuntu 9.04でのビルド手順と依存関係のインストール方法を詳細に説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/300/"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: knightmb on July 30, 2010, 07:24:07 PM](#msg6702)
> これらのビルドを作るのにどれだけ苦労したか想像できる。自分はUbuntu 9.04上でプログラムをビルドしようとしているが、パッケージをインストールしてソースをコンパイルし続けても、依存関係を全部見つけられない（笑）。
<!-- /tone-skip -->

なぜそんなに苦労しているのか理解できない。build-unix.txtの手順に従っただけだ。Boost 1.37用にちょっとした修正を加えたが、次回SVNを更新する時にアップロードする。以下に記載する：

```
依存関係
------------
sudo apt-get install build-essential
sudo apt-get install libgtk2.0-dev
sudo apt-get install libssl-dev
sudo apt-get install libdb4.7-dev
sudo apt-get install libdb4.7++-dev
sudo apt-get install libboost-all-dev（またはlibboost1.37-dev）

wxWidgets
---------
cd /usr/local
tar -xzvf wxWidgets-2.9.0.tar.gz
cd /usr/local/wxWidgets-2.9.0
mkdir buildgtk
cd buildgtk
../configure --with-gtk --enable-debug --disable-shared --enable-monolithic
make
sudo su
make install
ldconfig
```

makefile.unixにコメントを追加：

```makefile
# boost 1.37の場合、boostライブラリに-mtを追加
LIBS= \
 -Wl,-Bstatic \
   -l boost_system \
   -l boost_filesystem \
   -l boost_program_options \
   -l boost_thread \
   -l db_cxx \
   -l crypto \
 -Wl,-Bdynamic \
   -l gthread-2.0
```
