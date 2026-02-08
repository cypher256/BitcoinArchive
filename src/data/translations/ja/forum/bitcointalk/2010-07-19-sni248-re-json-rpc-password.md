---
title: "Re: JSON-RPCパスワード"
date: 2010-07-19T16:20:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4268#msg4268"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/248/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 3
translationStatus: complete
---

~/.bitcoinディレクトリに設定ファイルを置くということですね、それは良さそうです。「パスワードが設定されていません」の警告で、ファイルの場所と何をすべきかを伝えることができます。

最も普及していて一般的な設定ファイル形式は何ですか？

HTTPベーシック認証を検討すべきです。ただし実際には、HTTPやJSON-RPCのラッパーの追加パラメータを通じてパスワードを指定する方法を理解するのは、パラメータリストの先頭に追加パラメータを付けるよりもウェブ開発者にとって手間がかかります。どう思いますか？HTTPベーシック認証には追加のメリットがありますか？パラメータリストから移動しても、より難解な場所で指定する必要があるのでは、純粋な改善とは言えないかもしれません。

[Quote from: gavinandresen on July 19, 2010, 12:02:39 PM](https://bitcointalk.org/index.php?topic=461.msg4215#msg4215)パスワードがコマンドラインでは最後に指定されるのに、JSON-RPCのパラメータリストでは最初に来るので、少し混乱しました。コマンドラインのパスワードをファイルから読み取る方が便利で安全だという意見に同意します。
あなたにも混乱させられています。どういう意味ですか？何か意図しない動作がありましたか？
