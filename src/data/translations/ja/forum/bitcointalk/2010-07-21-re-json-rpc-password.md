---
title: "Re: JSON-RPCパスワード"
date: 2010-07-21T00:05:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4577#msg4577"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/250/"
threadId: "bt-json-rpc-password"
threadPosition: 4
translationStatus: complete
---

Linuxで最も一般的な設定ファイル形式が何かまだ知りたい。標準のファイル拡張子はあるか？JSONを使った設定ファイルは見たことがなく、すべてをクォートで囲む必要があり（キーも含めて）、人間にとってあまり親切には見えない。私がよく見るのはこのような形式だ:
# コメント
setting=value

Boostに設定ファイル関連のものはあるか？

コマンドラインからクライアントとしてbitcoindを使ってコマンドを発行する場合、その時も設定ファイルからパスワードを取得できるようにできるか？

Gavinに指摘されたが、CommandLineRPCの数字の列をインクリメントするのを忘れていたため、現在の-rpcpw=の実装はコマンドラインからの文字列以外のパラメータでは正しく動作しない。（JSON-RPCは問題ない）まだ開発中だ。
