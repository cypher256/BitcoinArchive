---
title: "Re: アラートシステムの開発"
date: 2010-08-25T15:17:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=898.msg11150#msg11150"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「アラートシステムの開発」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/414/"
threadId: "bt-development-of-alert-system"
translationStatus: complete
---

リモートで任意のアクションを実行することはできない。アラートシステムにもっと多くのことをさせるべきだと提案した他の投稿者に反応しているのかもしれないな？

アラートがある場合、以下のjson-rpcメソッドがエラーを返す：
sendtoaddress
getbalance
getreceivedbyaddress
getreceivedbylabel
listreceivedbyaddress
listreceivedbylabel

残りの14メソッドは通常通り機能する。

より安全なオプションがデフォルトで有効であるべきだと考えている。サーバーが取引を続け、受信しているお金がオーバーフローバグのお金のようなものかもしれないというアラートを無視したい場合は、スイッチを使えるが、お金を失っても他人を責めないでほしい。

アラートを有効にしたままの最悪のケースでは、アップグレードするか-disablesafeモードスイッチを追加するまでサイトが取引を停止する。

ノードが本来リスクにさらされるはずの時に一時的なダウンタイムで驚かされる方が、泥棒に在庫をすべて奪われて驚かされるよりましだ。

いつか、長期間新しいバグが見つからず、何も見つからないまま徹底的なセキュリティレビューが行われた時には、これを縮小できる。これが永遠の恒久的な方法だと主張しているわけではない。まだベータソフトウェアだ。
