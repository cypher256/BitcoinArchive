---
title: "Re: JSON-RPCパスワード"
date: 2010-07-23T20:39:03.000Z
type: "forum-post"
source: "bitcointalk"
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
threadPosition: 11
translationStatus: complete
---

confファイルがない場合や設定ファイルに「rpcpassword」が含まれていない場合に認証をデフォルトで無効にすべきではないと思うが、「rpcpassword=」を含む場合はどうだろうか？

両方の意見がわかる。

プログラマーが使用する言語（Fortranなど）でHTTP認証のやり方がわからない場合や、JSON-RPCライブラリでサポートされていない場合はどうだろうか？パスワード要件を明示的に無効にできるようにすべきだろうか？

一方で、テンプレートのconfファイルがあって、
rpcpassword=  # ここにパスワードを入力
と書いてある場合はどうだろうか？

パスワードなしではログインできないシステムは多くある。例えばこのフォーラムがそうだ。Gavinの意見の方が説得力がありそうだ。

ところで、テストはしていないが、confファイルにrpcpassword=があっても有効であることを願う。-serverや-daemonやbitcoindを使う場合のみ警告付きで失敗すべきだ。パスワードが不要な場合は問題ないはずだ。合っているか？
