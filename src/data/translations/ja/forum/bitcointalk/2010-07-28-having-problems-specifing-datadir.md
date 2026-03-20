---
title: "-datadirの指定で問題が発生"
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
description: "psyvenrixがスレッドを開始: -datadirの指定で問題が発生"
isSatoshi: false
threadId: "bt-having-problems-specifing-datadir"
threadPosition: 1
tags: []
translationStatus: complete
---

致命的な問題ではありませんが、datadirオプションにピリオド文字（カレントディレクトリ）以外のものを指定すると、コンソールとdebug.logから一貫して以下のエラーメッセージが出力されるのが不思議です。
これはArch Linuxのターミナルセッションでbitcoindプログラムを使用しています。GUIはまったく使っていません（SSH経由でアクセスするヘッドレスマシンです）。

コンソールの出力：
************************
EXCEPTION: 22DbRunRecoveryException
DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery
bitcoin in AppInit()

terminate called after throwing an instance of 'DbRunRecoveryException'
  what():  DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery

datadir内のdebug.logの出力：

Bitcoin version 0.3.4.0 beta
Default data directory /home/psyvenrix/.bitcoin
Bound to port 8333
Loading addresses...
dbenv.open strLogDir=./datadir2/database strErrorFile=./datadir2/db.log

************************
EXCEPTION: 22DbRunRecoveryException
DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery
bitcoin in AppInit()

これはSVNビルドです。メインサイトのtar.gzはopenssl 0.9.8辺りに対してリンクされていると思いますが、私のArch Linuxシステムは1.0.0だと思うので、最新のSVNソースを取得してビルドしました（Makefileの微調整を除けば、正常にコンパイルできました）。

バイナリを含むディレクトリと上述のdatadirの両方のパーミッションを確認しましたが、すべて私のログインユーザーで書き込み可能です（バックグラウンドでのACL/SELinuxのトリックもありません）。

ビットコインを使い始めたばかりなので、そのディレクトリの中身が新規生成されたもの（つまり、すべてをrm -rfしてから、存在しない新しいディレクトリでbitcoindを起動し、必要なファイルが作成されるのを確認した後にクラッシュする）であるのにリカバリ系のエラーが出るのは不思議です。

何かお考えはありますか？
