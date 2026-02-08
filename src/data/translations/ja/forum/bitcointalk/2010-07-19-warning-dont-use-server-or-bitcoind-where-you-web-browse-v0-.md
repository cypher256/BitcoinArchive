---
title: "警告: ウェブブラウジングするマシンで-serverやbitcoindを使用しないでください（v0.3.2以前）"
date: 2010-07-19T16:01:38.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=479.msg4263#msg4263"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"警告: ウェブブラウジングするマシンで-serverやbitcoindを使用しないでください（v0.3.2以前）\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/247/"
translationStatus: complete
---

ウェブブラウザを使用するマシンで-serverまたは-daemonスイッチを使用したり、bitcoindを実行したりしないでください。127.0.0.1（ローカルループバックアドレス）のポート8332を開きますが、ウェブブラウザがそこにクロスサイトアクセスできないと思うかもしれませんが、実は可能です。

JSON-RPCインターフェースにパスワードを付けるリリースに近々取り組んでいますが、それまでは-serverスイッチの使用を避け、bitcoindが動作しているのと同じマシンでウェブブラウジングをしないでください。

更新:
0.3.3のJSON-RPC HTTP認証機能がこの問題を解決します。
