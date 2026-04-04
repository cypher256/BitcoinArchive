---
title: "Re: JSON-RPCパスワード"
date: 2010-07-23T17:56:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5342#msg5342"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるGavin Andresenの文脈投稿。msg5383の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: satoshi on July 23, 2010, 05:07:40 PM](#msg5337)
> <!-- tone-skip -->
> [Quote from: gavinandresen on July 23, 2010, 03:11:45 PM](#msg5296)
> > RPC wikiページを更新して、Bitcoin 0.3.3でのパスワード機能の仕組みを説明した。
> >
> > 1つの良い副作用：今すぐ変更に備えることができる。bitcoin.confファイルにユーザー名とパスワードを作成し、JSON-RPCコードをHTTP Basic認証に対応するよう修正すればいい。古いコードは.confファイルとAuthorization: HTTPヘッダーを単に無視する。
> >
> > 皆に質問：HTTP Basic認証の詳細な方法をwikiページに追加すべきだろうか？PHPとPythonでは非常に簡単だ——http://user:pass@host:port/ のURL構文を使うだけだ。HTTP Basic認証のWikipediaページをただ複製したくはない。
> <!-- /tone-skip -->
>
> はい、各開発者が自分で調べなくて済むように、それは本当に良いと思う。Python、PHP、Javaそれぞれでjson-rpcライブラリをインポートしてgetinfoなどを実行する簡単な例が必要だ。HTTP認証部分も含めて。

分かった。PythonとPHPは書いた。Javaについては知っている限りのことを追加した。Java JSON-RPCを使ったことのある人、動く例でwikiページを更新してもらえないか？
