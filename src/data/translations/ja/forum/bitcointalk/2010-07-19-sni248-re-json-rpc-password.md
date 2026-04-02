---
title: "Re: JSON-RPCパスワード"
date: 2010-07-19T16:20:50.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

~/.bitcoinディレクトリに設定ファイルを置くということだな、それは良さそうだ。「パスワードが設定されていない」の警告で、ファイルの場所と何をすべきかを伝えることができる。

最も普及していて一般的な設定ファイル形式は何だろうか？

HTTPベーシック認証を検討すべきだ。ただし実際には、HTTPやJSON-RPCのラッパーの追加パラメータを通じてパスワードを指定する方法を理解するのは、パラメータリストの先頭に追加パラメータを付けるよりもウェブ開発者にとって手間がかかる。どう思うか？HTTPベーシック認証には追加のメリットがあるか？パラメータリストから移動しても、より難解な場所で指定する必要があるのでは、純粋な改善とは言えないかもしれない。

<!-- tone-skip -->
[Quote from: gavinandresen on July 19, 2010, 12:02:39 PM](#msg4215)
> パスワードがコマンドラインでは最後に指定されるのに、JSON-RPCのパラメータリストでは最初に来るので、少し混乱しました。コマンドラインのパスワードをファイルから読み取る方が便利で安全だという意見に同意します。
<!-- /tone-skip -->

あなたにも混乱させられている。どういう意味だ？何か意図しない動作があったのか？
