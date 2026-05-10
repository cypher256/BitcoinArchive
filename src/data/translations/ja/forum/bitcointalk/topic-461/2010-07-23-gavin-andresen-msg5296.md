---
title: "Re: JSON-RPC パスワード"
date: 2010-07-23T15:11:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5296#msg5296"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 461 におけるギャビン・アンドレセンの文脈投稿。msg5338 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

RPC wiki ページを更新して、Bitcoin 0.3.3 でのパスワード機能の仕組みを説明した。

1 つの良い副作用：今すぐ変更に備えることができる。bitcoin.conf ファイルにユーザー名とパスワードを作成し、JSON-RPC コードを HTTP Basic 認証に対応するよう修正すればいい。古いコードは.conf ファイルと Authorization: HTTP ヘッダーを単に無視する。

皆に質問：HTTP Basic 認証の詳細な方法を wiki ページに追加すべきだろうか？PHP と Python では非常に簡単だ——http://user:pass@host:port/ の URL 構文を使うだけだ。HTTP Basic 認証の Wikipedia ページをただ複製したくはない。
