---
title: "警告: ウェブブラウジングするマシンで-server や bitcoind を使用しないでください（v0.3.2 以前）"
date: 2010-07-19T16:01:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=479.msg4263#msg4263"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿: \"警告: ウェブブラウジングするマシンで-server や bitcoind を使用しないでください（v0.3.2 以前）\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/247/"
translationStatus: complete
---

ウェブブラウザーを使用するマシンで-server または-daemon スイッチを使用したり、bitcoind を実行したりしないでほしい。127.0.0.1（ローカルループバックアドレス）のポート 8332 を開くが、ウェブブラウザーがそこにクロスサイトアクセスできないと思うかもしれないが、実は可能だ。

JSON-RPC インターフェースにパスワードを付けるリリースに近々取り組んでいるが、それまでは-server スイッチの使用を避け、bitcoind が動作しているのと同じマシンでウェブブラウジングをしないでほしい。

更新:
0.3.3 の JSON-RPC HTTP 認証機能がこの問題を解決する。
