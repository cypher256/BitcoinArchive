---
title: "Re: JSON-RPCパスワード"
date: 2010-07-23T20:39:03.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5383#msg5383"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/260/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 11
translationStatus: complete
---

confファイルがない場合や設定ファイルに「rpcpassword」が含まれていない場合に認証をデフォルトで無効にすべきではないと思いますが、「rpcpassword=」を含む場合はどうでしょうか？

両方の意見がわかります。

プログラマーが使用する言語（Fortranなど）でHTTP認証のやり方がわからない場合や、JSON-RPCライブラリでサポートされていない場合はどうでしょうか？パスワード要件を明示的に無効にできるようにすべきでしょうか？

一方で、テンプレートのconfファイルがあって、
rpcpassword=  # ここにパスワードを入力
と書いてある場合はどうでしょうか？

パスワードなしではログインできないシステムは多くあります。例えばこのフォーラムがそうです。Gavinの意見の方が説得力がありそうです。

ところで、テストはしていませんが、confファイルにrpcpassword=があっても有効であることを願います。-serverや-daemonやbitcoindを使う場合のみ警告付きで失敗すべきです。パスワードが不要な場合は問題ないはずです。合っていますか？
