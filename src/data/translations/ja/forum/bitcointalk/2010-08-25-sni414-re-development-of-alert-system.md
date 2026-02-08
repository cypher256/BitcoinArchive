---
title: "Re: アラートシステムの開発"
date: 2010-08-25T15:17:37.000Z
source: bitcointalk
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
threadTitle: "Development of alert system"
threadPosition: 4
translationStatus: complete
---

リモートで任意のアクションを実行することはできません。アラートシステムにもっと多くのことをさせるべきだと提案した他の投稿者に反応しているのかもしれませんね？

アラートがある場合、以下のjson-rpcメソッドがエラーを返します：
sendtoaddress
getbalance
getreceivedbyaddress
getreceivedbylabel
listreceivedbyaddress
listreceivedbylabel

残りの14メソッドは通常通り機能します。

より安全なオプションがデフォルトで有効であるべきだと考えています。サーバーが取引を続け、受信しているお金がオーバーフローバグのお金のようなものかもしれないというアラートを無視したい場合は、スイッチを使えますが、お金を失っても他人を責めないでください。

アラートを有効にしたままの最悪のケースでは、アップグレードするか-disablesafeモードスイッチを追加するまでサイトが取引を停止します。

ノードが本来リスクにさらされるはずの時に一時的なダウンタイムで驚かされる方が、泥棒に在庫をすべて奪われて驚かされるよりましです。

いつか、長期間新しいバグが見つからず、何も見つからないまま徹底的なセキュリティレビューが行われた時には、これを縮小できます。これが永遠の恒久的な方法だと主張しているわけではありません。まだベータソフトウェアです。
