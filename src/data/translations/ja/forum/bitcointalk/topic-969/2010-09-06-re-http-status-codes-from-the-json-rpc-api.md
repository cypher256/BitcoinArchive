---
title: "Re: JSON-RPC API からの HTTP ステータスコード"
date: 2010-09-06T21:21:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=969.msg12130#msg12130"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPC API からの HTTP ステータスコード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/435/"
translationStatus: complete
---

これは SVN rev 147 に入っている。

これはより標準的であり、json-rpc 1.0 ではエラーオブジェクトの形式を指定していなかったが、文字列やその他の値ではなく*オブジェクト*であることは指定していたため、正しくするためにこの変更が必要だった。code/message メンバーは後の json-rpc 仕様で標準になっている。

エラーを検査して文字列を期待するコードがある場合は、変更が必要だ。エラーがある場合、エラーメンバーは文字列ではなくオブジェクトになった。

SVN rev 147 にはさらに：
- コマンドライン json-rpc がエラーコードを終了コードとして返す。unix では終了コードは 0-255 のみなので、abs(code)%256 だ。
- 別のスレッドで議論された「backupwallet <destination>」コマンド。ウォレットをロックしてコピーするため、正しいコピーを確実に取得できる。
