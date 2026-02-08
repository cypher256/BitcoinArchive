---
title: "Re: -datadirの指定で問題が発生"
date: 2010-07-28T20:58:26.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=601.msg6268#msg6268"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが-datadirの相対パス指定時のデータベースエラーを再現し、フルパスへの解決が必要と説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/284/"
threadId: "bt-having-problems-specifing-datadir"
threadTitle: "Having problems specifing -datadir"
threadPosition: 1
translationStatus: complete
---

これを再現できました。データベースは相対パスを好まないようです。

「bitcoind -datadir=./subdir getinfo」は実行中のデーモンに対しては動作しますが、「bitcoind -datadir=./subdir」としてデーモンを起動しようとすると、その例外が発生します。

データベースに渡す前にフルパスに解決すべきでしょう。

-datadirで相対パスを使ったのはあなたが初めてのようです。
