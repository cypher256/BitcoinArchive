---
title: "UI の改善"
date: 2010-02-21T21:48:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=60.msg426#msg426"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「UI の改善」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/66/"
translationStatus: complete
---

いくつかの UI 変更をバージョン 0.2.5 として SVN にアップロードした。

View->Show Generated の代わりに、タブを追加した：
- 全トランザクション
- 送信/受信
- 送信
- 受信

これにより、受信タブに切り替えて支払いを確認するのがずっと簡単になる。

「あなたのアドレス」帳をメインのアドレス帳の中に移動した。アドレス帳が 2 つあるのは紛らわしかった。

「From: unknown, To: (あなたの Bitcoin アドレスの 1 つ)」の「To:」がまだ紛らわしいと感じたので、「From: unknown, Received with:」に変更した。Bitcoin アドレスは省略表示されるので、アドレス帳の受信タブで設定したラベルが見えるようになる。

wxWidgets 2.9.0 へのアップグレードによるいくつかの UI 不具合を修正した。

非 UI が欲しい人たちのことは忘れていないが、ビルド作業の苦労をする前に、楽しいことをやらせてもらった。
