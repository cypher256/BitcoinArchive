---
title: "UIの改善"
date: 2010-02-21T21:48:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=60.msg426#msg426"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoの投稿：「UIの改善」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/66/"
threadId: "bt-ui-improvements"
threadTitle: "UI improvements"
threadPosition: 1
translationStatus: complete
---

いくつかのUI変更をバージョン0.2.5としてSVNにアップロードしました。

View->Show Generatedの代わりに、タブを追加しました：
- 全トランザクション
- 送信/受信
- 送信
- 受信

これにより、受信タブに切り替えて支払いを確認するのがずっと簡単になります。

「あなたのアドレス」帳をメインのアドレス帳の中に移動しました。アドレス帳が2つあるのは紛らわしかったです。

「From: unknown, To: (あなたのBitcoinアドレスの1つ)」の「To:」がまだ紛らわしいと感じたので、「From: unknown, Received with:」に変更しました。Bitcoinアドレスは省略表示されるので、アドレス帳の受信タブで設定したラベルが見えるようになります。

wxWidgets 2.9.0へのアップグレードによるいくつかのUI不具合を修正しました。

非UIが欲しい人たちのことは忘れていませんが、ビルド作業の苦労をする前に、楽しいことをやらせてもらいました。
