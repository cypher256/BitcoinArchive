---
title: "Re: JSON-RPCパスワード"
date: 2010-07-23T15:11:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5296#msg5296"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるGavin Andresenの文脈投稿。msg5338の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

RPC wikiページを更新して、Bitcoin 0.3.3でのパスワード機能の仕組みを説明した。

1つの良い副作用：今すぐ変更に備えることができる。bitcoin.confファイルにユーザー名とパスワードを作成し、JSON-RPCコードをHTTP Basic認証に対応するよう修正すればいい。古いコードは.confファイルとAuthorization: HTTPヘッダーを単に無視する。

皆に質問：HTTP Basic認証の詳細な方法をwikiページに追加すべきだろうか？PHPとPythonでは非常に簡単だ——http://user:pass@host:port/ のURL構文を使うだけだ。HTTP Basic認証のWikipediaページをただ複製したくはない。
