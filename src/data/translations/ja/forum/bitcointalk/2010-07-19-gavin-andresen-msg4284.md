---
title: "Re: JSON-RPCパスワード"
date: 2010-07-19T16:58:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4284#msg4284"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるGavin Andresenの文脈投稿。msg4577の前。"
isSatoshi: false
threadId: "bt-json-rpc-password"
tags: []
translationStatus: complete
---

[Quote from: satoshi on July 19, 2010, 04:20:50 PM](#msg4268)
> ~/.bitcoinディレクトリに設定ファイルを置くということだな、それは良さそうだ。「パスワードが設定されていない」の警告で、ファイルの場所と何をすべきかを伝えることができる。
>
> 最も普及していて一般的な設定ファイル形式は何だろうか？
>
> HTTPベーシック認証を検討すべきだ。ただし実際には、HTTPやJSON-RPCのラッパーの追加パラメータを通じてパスワードを指定する方法を理解するのは、パラメータリストの先頭に追加パラメータを付けるよりもウェブ開発者にとって手間がかかる。どう思うか？HTTPベーシック認証には追加のメリットがあるか？パラメータリストから移動しても、より難解な場所で指定する必要があるのでは、純粋な改善とは言えないかもしれない。
>
> <!-- tone-skip -->
> [Quote from: gavinandresen on July 19, 2010, 12:02:39 PM](#msg4215)
> > パスワードがコマンドラインでは最後に指定されるのに、JSON-RPCのパラメータリストでは最初に来るので、少し混乱しました。コマンドラインのパスワードをファイルから読み取る方が便利で安全だという意見に同意します。
> <!-- /tone-skip -->
>
> あなたにも混乱させられている。どういう意味だ？何か意図しない動作があったのか？

難しい質問だ！最も一般的：おそらくWindows INIファイルだろう。WindowsがOSとして最も普及しているから。

JSONを推したい。JSONは（ほぼ）YAMLのサブセット（YAMLは設定ファイルの一般的な選択肢）なので、JSONまたはYAMLパーサーで読める。
最大の利点は認証をトランスポート層に適切に配置することだと思う。そうすれば将来、本格的なHTTPSと証明書を導入する場合にAPIを変更する必要がない。
いや、単に「command」と「parameter」を混同して、こうしただけだ：

Code:> bitcoind help
error: First parameter must be the password.
> bitcoind <my password> help
error: unknown command: <my password>
>bitcoind help <my password>
 ... that works.
