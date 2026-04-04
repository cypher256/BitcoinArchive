---
title: "Re: JSON-RPCパスワード"
date: 2010-07-23T17:07:40.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5337#msg5337"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/255/"
threadId: "bt-json-rpc-password"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: gavinandresen on July 23, 2010, 03:11:45 PM](#msg5296)
> RPC wikiページを更新して、Bitcoin 0.3.3でのパスワード機能の仕組みを説明した。
>
> 1つの良い副作用：今すぐ変更に備えることができる。bitcoin.confファイルにユーザー名とパスワードを作成し、JSON-RPCコードをHTTP Basic認証に対応するよう修正すればいい。古いコードは.confファイルとAuthorization: HTTPヘッダーを単に無視する。
>
> 皆に質問：HTTP Basic認証の詳細な方法をwikiページに追加すべきだろうか？PHPとPythonでは非常に簡単だ——http://user:pass@host:port/ のURL構文を使うだけだ。HTTP Basic認証のWikipediaページをただ複製したくはない。
<!-- /tone-skip -->

はい、各開発者が自分で調べなくて済むように、それは本当に良いと思う。Python、PHP、Javaそれぞれでjson-rpcライブラリをインポートしてgetinfoなどを実行する簡単な例が必要だ。HTTP認証部分も含めて。
