---
title: "Re: JSON-RPC パスワード"
date: 2010-07-19T16:20:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4268#msg4268"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPC パスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/248/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-19T03:02:39.000Z"
---

~/.bitcoin ディレクトリに設定ファイルを置くということだな、それは良さそうだ。「パスワードが設定されていない」の警告で、ファイルの場所と何をすべきかを伝えることができる。

最も普及していて一般的な設定ファイル形式は何だろうか？

HTTP ベーシック認証を検討すべきだ。ただし実際には、HTTP や JSON-RPC のラッパーの追加パラメーターを通じてパスワードを指定する方法を理解するのは、パラメーターリストの先頭に追加パラメーターを付けるよりもウェブ開発者にとって手間がかかる。どう思うか？HTTP ベーシック認証には追加のメリットがあるか？パラメーターリストから移動しても、より難解な場所で指定する必要があるのでは、純粋な改善とは言えないかもしれない。

<!-- quote: q1 -->
<!-- tone-skip -->
> パスワードがコマンドラインでは最後に指定するのに、JSON-RPC のパラメーターリストでは最初になるので少し混乱した。コマンドラインのパスワードをファイルから読み取る方が便利で安全だという意見には同意する。
<!-- /tone-skip -->

あなたにも混乱させられている。どういう意味だ？何か意図しない動作があったのか？
