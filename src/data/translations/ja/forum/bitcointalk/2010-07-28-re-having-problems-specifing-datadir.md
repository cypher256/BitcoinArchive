---
title: "Re: -datadirの指定で問題が発生"
date: 2010-07-28T20:58:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=601.msg6268#msg6268"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが-datadirの相対パス指定時のデータベースエラーを再現し、フルパスへの解決が必要と説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/284/"
threadId: "bt-having-problems-specifing-datadir"
threadPosition: 2
translationStatus: complete
---

これを再現できた。データベースは相対パスを好まないようだ。

「bitcoind -datadir=./subdir getinfo」は実行中のデーモンに対しては動作するが、「bitcoind -datadir=./subdir」としてデーモンを起動しようとすると、その例外が発生する。

データベースに渡す前にフルパスに解決すべきだろう。

-datadirで相対パスを使ったのはあなたが初めてのようだ。
