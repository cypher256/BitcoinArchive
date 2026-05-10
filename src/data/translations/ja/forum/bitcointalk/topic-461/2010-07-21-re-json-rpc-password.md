---
title: "Re: JSON-RPC パスワード"
date: 2010-07-21T00:05:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4577#msg4577"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPC パスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/250/"
translationStatus: complete
---

Linux で最も一般的な設定ファイル形式が何かまだ知りたい。標準のファイル拡張子はあるか？JSON を使った設定ファイルは見たことがなく、すべてをクォートで囲む必要があり（キーも含めて）、人間にとってあまり親切には見えない。私がよく見るのはこのような形式だ:
```
# コメント
setting=value
```

Boost に設定ファイル関連のものはあるか？

コマンドラインからクライアントとして bitcoind を使ってコマンドを発行する場合、その時も設定ファイルからパスワードを取得できるようにできるか？

Gavin に指摘されたが、CommandLineRPC の数字の列をインクリメントするのを忘れていたため、現在の-rpcpw=の実装はコマンドラインからの文字列以外のパラメーターでは正しく動作しない。（JSON-RPC は問題ない）まだ開発中だ。
