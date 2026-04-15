---
title: "BDB: 環境へのDB_PRIVATEフラグの復元"
date: 2012-05-21T01:11:47.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/1367"
author: "jgarzik"
participants:
  - name: "jgarzik"
    slug: "jgarzik"
description: "jgarzikがbitcoin/bitcoin PR #1367でスレッドを開始。"
isSatoshi: false
translationStatus: complete
tags:
  - "github"
  - "pull-request"
---

サトシのコミットfdbf76d4f49c220e2ed4412a3d8d8cd6efd74826および
c8ad9b8375f5308bb46a124f096a80926ea42fba（SVNインポート）は、環境から
DB_PRIVATEフラグを削除した。これにより一部では、bitcoind以外のプロセスが
アクティブなデータベース環境を検査できるようになった。

しかし、これはアプリケーションメモリー内で完全に動作する場合（DB_PRIVATE）と比較して、
わずかなパフォーマンスペナルティを伴う。bitcointoolsやその他のBDB直接アクセスツールは
大多数のユーザーには使用されないため、デフォルトではDB_PRIVATEを有効にし、
必要に応じて-privdb=0で無効化できるオプションを設けることが望ましい。
