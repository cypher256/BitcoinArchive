---
title: "Re: アラートシステムの開発"
date: 2010-08-25T17:59:30.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=898.msg11158#msg11158"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「アラートシステムの開発」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/417/"
threadId: "bt-development-of-alert-system"
threadTitle: "Development of alert system"
threadPosition: 7
translationStatus: complete
---

[Quote from: nelisky on August 25, 2010, 01:28:32 AM](https://bitcointalk.org/index.php?topic=898.msg11092#msg11092)では、管理者はbitcoindからどのような警告を受け取りますか？debug.logからgrepできるものはありますか？それともRPC呼び出しが特定のエラーを発生させますか？ユニットテストサービスのために、ローカルでこれを強制的に発生させる方法はありますか？
getinfoには、ステータスバーに表示されるアラートメッセージやその他のエラーを表示する新しいフィールドがあります。

RPCメソッドは、エラー説明「Safe mode: 」に続いてアラートで指定された追加テキストを含むjson-rpcエラーを返します。

あなたのために「-testsafemode」スイッチを追加しました。SVN rev 145です。

これらは非常に新しいもので、まだ変更される可能性があります。

[Quote from: mizerydearia on August 25, 2010, 12:11:50 AM](https://bitcointalk.org/index.php?topic=898.msg11079#msg11079)[http://www.bitcoin.org/wiki/doku.php?id=man_page](http://www.bitcoin.org/wiki/doku.php?id=man_page)を見つけましたが、-disablesafemodeへの参照がありません。追加すべきでしょう！また、-4wayなど他のものも追加すべきです。
多くのスイッチは意図的にドキュメント化されていません。機能がまだ開発中だったり、名前がまだ確定していなかったり、リリース向けでないテストコードだったりする場合です。

-4wayは最終的に自動検出に置き換えられるべきです。
