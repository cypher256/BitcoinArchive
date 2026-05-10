---
title: "アサーション失敗 - Ubuntu Lucid"
date: 2010-07-15T19:30:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=400.msg3384#msg3384"
author: "singpolyma"
participants:
  - name: "singpolyma"
    slug: "singpolyma"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "singpolyma がスレッドを開始: アサーション失敗 - Ubuntu Lucid"
isSatoshi: false
tags: []
translationStatus: complete
---

Ubuntu Lucid（32 ビット）を使用しており、すべてのパッケージは最新です。以前 bitcoin 0.2 を動かしていましたが、0.3 をダウンロードしたばかりです。bitcoind を実行したところ、以下のエラーが出ました：

bitcoin: main.cpp:823: unsigned int GetNextWorkRequired(const CBlockIndex*): Assertion `pindexFirst' failed.
Aborted

そこでビットコインの GUI を起動したところ、既存のコインは表示されましたが、すぐに同じエラーが発生してクラッシュしました。その後、0.2 の GUI に戻って実行してみると、以下のエラーが出ました：

bitcoin: main.cpp:743: unsigned int GetNextWorkRequired(const CBlockIndex*): Assertion `pindexFirst' failed.
Aborted

データベースが破損したのでしょうか？依存関係が壊れているのでしょうか？

ソースから 0.3 をビルドしようとしましたが、多くのエラーが出ました。おそらくいくつかの*-dev パッケージが不足しているのでしょう。これについては後で調べるつもりです。
