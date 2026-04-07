---
title: "Re: JSON-RPCパスワード"
date: 2010-07-25T21:34:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5767#msg5767"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/273/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "lachesis"
    personSlug: "lachesis"
    date: "2010-07-25T10:52:35.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> バグと思われるものを見つけた：ユーザー名とパスワードの組み合わせが十分長いと、bitcoindのBase64エンコーダーが以下のようなAuthorizationヘッダーを生成する：
>
> ```
> Code:...
> Authorization: Basic YWJiYWJiYWFiYmE6aGVsbG93b3JsZGhlbGxvd29ybGRoZWxsb3dvcmxkaGVsbG93
> b3JsZGhlbGxvd29ybGRoZWxsb3dvcmxk
> ```
> 64文字ごとに改行が挿入されるため、Authorizationヘッダーが壊れ、"bitcoin getinfo"のようなコマンドが失敗する。サーバー自体は正しく動作するクライアントからは問題なく動作する。
>
> これはBase64Encode関数の末尾で改行を除去すれば解決できる：
> ```cpp
> Code:result.erase(std::remove(result.begin(), result.end(), '
> '), result.end());
> result.erase(std::remove(result.begin(), result.end(), '
> '), result.end());
> ```
<!-- /tone-skip -->

このバグを見つけるほど長いパスワードを使っていたことに+1だ。

SVNにリビジョン110としてアップロードした。
