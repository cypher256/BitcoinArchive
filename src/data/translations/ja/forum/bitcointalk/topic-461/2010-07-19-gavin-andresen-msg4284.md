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
description: "BitcoinTalkトピック461におけるギャビン・アンドレセンの文脈投稿。msg4577の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "satoshi"
    date: "2010-07-19T07:20:50.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> ~/.bitcoinディレクトリに設定ファイルを置くということだな、それは良さそうだ。「パスワードが設定されていない」の警告で、ファイルの場所と何をすべきかを伝えることができる。
>
<!-- /tone-skip -->

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
