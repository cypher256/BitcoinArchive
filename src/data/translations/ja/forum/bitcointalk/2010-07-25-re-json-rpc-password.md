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
threadId: "bt-json-rpc-password"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: lachesis on July 25, 2010, 07:52:35 PM](#msg5738)
> バグと思われるものを見つけた：ユーザー名とパスワードの組み合わせが十分長いと、bitcoindのBase64エンコーダーが以下のようなAuthorizationヘッダーを生成する：
> Code:POST / HTTP/1.1
> User-Agent: json-rpc/1.0
> Host: 127.0.0.1
> Content-Type: application/json
> Content-Length: 40
> Accept: application/json
> Authorization: Basic YWJiYWJiYWFiYmE6aGVsbG93b3JsZGhlbGxvd29ybGRoZWxsb3dvcmxkaGVsbG93
> b3JsZGhlbGxvd29ybGRoZWxsb3dvcmxk
> 64文字ごとに改行が挿入され、Authorizationヘッダーが壊れるため、「bitcoin getinfo」のようなコマンドが失敗する。サーバー側は正しく動作するクライアントからは問題なく動く。
>
> Base64Encode関数の末尾でresultから改行（および'\r'）を除去すれば解決できる：
> Code:result.erase(std::remove(result.begin(), result.end(), '\n'), result.end());
> result.erase(std::remove(result.begin(), result.end(), '\r'), result.end());
> もっとエレガントな解決策があるかもしれないが、これで動く。パッチはこちら：
> http://www.alloscomp.com/bitcoin/patches/bitcoin-svn-109-rpcbug-2010-07-25.patch
<!-- /tone-skip -->

このバグを見つけるほど長いパスワードを使っていたことに+1だ。

SVNにリビジョン110としてアップロードした。
