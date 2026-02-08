---
title: "Re: *** 警告 *** 至急0.3.6にアップグレード！"
date: 2010-07-30T19:53:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6711#msg6711"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがUbuntu 9.04でのビルド手順と依存関係のインストール方法を詳細に説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/300/"
threadId: "bt-alert-upgrade-to-0-3-6-asap"
threadTitle: "*** ALERT *** Upgrade to 0.3.6 ASAP!"
threadPosition: 4
translationStatus: complete
---

[Quote from: knightmb on July 30, 2010, 07:24:07 PM](https://bitcointalk.org/index.php?topic=626.msg6702#msg6702)これらのビルドを作るのにどれだけ苦労したか想像できます。Ubuntu 9.04の環境でプログラムをビルドしようとしていますが、パッケージをインストールしたりソースをコンパイルしたりしても、すべての依存関係を見つけられません（笑）。
なぜそんなに苦労しているのか理解できません。build-unix.txtの手順に従っただけです。Boost 1.37用にちょっとした修正を加えましたが、次回SVNを更新する時にアップロードします。以下に記載します：

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

makefile.unixにコメントを追加：

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
