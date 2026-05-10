---
title: "BDB: 環境への DB_PRIVATE フラグの復元"
date: 2012-05-21T01:11:47.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/1367"
author: "jgarzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
description: "jgarzik が bitcoin/bitcoin PR #1367 でスレッドを開始。"
isSatoshi: false
translationStatus: complete
tags:
  - "github"
  - "pull-request"
---

サトシのコミット fdbf76d4f49c220e2ed4412a3d8d8cd6efd74826 および
c8ad9b8375f5308bb46a124f096a80926ea42fba（SVN インポート）は、環境から
DB_PRIVATE フラグを削除した。これにより一部では、bitcoind 以外のプロセスが
アクティブなデータベース環境を検査できるようになった。

しかし、これはアプリケーションメモリー内で完全に動作する場合（DB_PRIVATE）と比較して、
わずかなパフォーマンスペナルティを伴う。bitcointools やその他の BDB 直接アクセスツールは
大多数のユーザーには使用されないため、デフォルトでは DB_PRIVATE を有効にし、
必要に応じて-privdb=0 で無効化できるオプションを設けることが望ましい。
