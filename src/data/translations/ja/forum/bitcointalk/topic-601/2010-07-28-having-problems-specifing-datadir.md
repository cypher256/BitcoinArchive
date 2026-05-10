---
title: "-datadir の指定で問題が発生"
date: 2010-07-28T04:38:00.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=601.msg6188#msg6188"
author: "psyvenrix"
participants:
  - name: "psyvenrix"
    slug: "psyvenrix"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "psyvenrix がスレッドを開始: -datadir の指定で問題が発生"
isSatoshi: false
tags: []
translationStatus: complete
---

致命的な問題ではありませんが、datadir オプションにピリオド文字（カレントディレクトリ）以外のものを指定すると、コンソールと debug.log から一貫して以下のエラーメッセージが出力されるのが不思議です。
これは Arch Linux のターミナルセッションで bitcoind プログラムを使用しています。GUI はまったく使っていません（SSH 経由でアクセスするヘッドレスマシンです）。

コンソールの出力：
************************
EXCEPTION: 22DbRunRecoveryException
DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery
bitcoin in AppInit()

terminate called after throwing an instance of 'DbRunRecoveryException'
  what():  DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery

datadir 内の debug.log の出力：

Bitcoin version 0.3.4.0 beta
Default data directory /home/psyvenrix/.bitcoin
Bound to port 8333
Loading addresses...
dbenv.open strLogDir=./datadir2/database strErrorFile=./datadir2/db.log

************************
EXCEPTION: 22DbRunRecoveryException
DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery
bitcoin in AppInit()

これは SVN ビルドです。メインサイトの tar.gz は openssl 0.9.8 辺りに対してリンクされていると思いますが、私の Arch Linux システムは 1.0.0 だと思うので、最新の SVN ソースを取得してビルドしました（Makefile の微調整を除けば、正常にコンパイルできました）。

バイナリを含むディレクトリと上述の datadir の両方のパーミッションを確認しましたが、すべて私のログインユーザーで書き込み可能です（バックグラウンドでの ACL/SELinux のトリックもありません）。

ビットコインを使い始めたばかりなので、そのディレクトリの中身が新規生成されたもの（つまり、すべてを rm -rf してから、存在しない新しいディレクトリで bitcoind を起動し、必要なファイルが作成されるのを確認した後にクラッシュする）であるのにリカバリ系のエラーが出るのは不思議です。

何かお考えはありますか？
