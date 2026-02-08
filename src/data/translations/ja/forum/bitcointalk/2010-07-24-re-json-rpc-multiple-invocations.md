---
title: "Re: JSON-RPC複数呼び出し"
date: 2010-07-24T00:59:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=528.msg5416#msg5416"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPC複数呼び出し」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/261/"
translationStatus: complete
---

ヘッダーが繰り返されるのは明らかにバグです。

1.0仕様に従おうとしていました: [http://json-rpc.org/wiki/specification](http://json-rpc.org/wiki/specification)   複数呼び出しが規定されていました。

このようなことを意味していると思いますが、確信はありません:

Post:
{"method": "postMessage", "params": ["Hello all!"], "id": 99}
{"method": "postMessage", "params": ["I have a question:"], "id": 101}

Reply:
{"result": 1, "error": null, "id": 99}
{"result": 1, "error": null, "id": 101}

エラー応答にHTTPステータス500を返すべきだとどこかで見た気がしますが、思い出せません。複数のレスポンスを含み、そのうちの1つがエラーの場合、全体のステータスが500になるのでしょうか。おそらくそうでしょう。常に200を返すべきかもしれません。500が問題を引き起こしているような指摘があったと思います。

これはおそらく0.3.3の後に修正されます。それまでは単一呼び出しを使用してください。JSON-RPCパッケージで複数呼び出しをサポートしているものがあるかどうか疑問ですが、おそらくないでしょう。

修正を試みる前に、複数呼び出しがどのように機能すべきか（そもそも機能すべきなのか）、またエラーレスポンスにHTTPステータス500を返すのが正しいかどうかを、もう少し明確にできると良いのですが。
