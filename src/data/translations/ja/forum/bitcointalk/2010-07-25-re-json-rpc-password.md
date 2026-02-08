---
title: "Re: JSON-RPCパスワード"
date: 2010-07-25T21:34:29.000Z
source: bitcointalk
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
threadTitle: "JSON-RPC password"
threadPosition: 12
translationStatus: complete
---

[Quote from: lachesis on July 25, 2010, 07:52:35 PM](https://bitcointalk.org/index.php?topic=461.msg5738#msg5738)バグと思われるものを見つけました: ユーザー名とパスワードの組み合わせが十分に長い場合、bitcoindのBase64エンコーダーが以下のようなAuthorizationヘッダーを生成します:
Code:...
Authorization: Basic YWJiYWJiYWFiYmE6aGVsbG93b3JsZGhlbGxvd29ybGRoZWxsb3dvcmxkaGVsbG93
b3JsZGhlbGxvd29ybGRoZWxsb3dvcmxk
64文字ごとに改行が挿入され、明らかにAuthorizationヘッダーが壊れるため、「bitcoin getinfo」のようなコマンドが失敗します。サーバーは正しく動作するクライアントでは問題なく動作します。

これはBase64Encode関数の結果から改行（およびおそらく''）を削除することで解決できます:
Code:result.erase(std::remove(result.begin(), result.end(), '
'), result.end());
result.erase(std::remove(result.begin(), result.end(), ''), result.end());
このバグを見つけるほど長いパスワードを使っていたことに+1です。

SVNにリビジョン110としてアップロードしました。
