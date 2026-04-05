---
title: "Re: アラートシステムの開発"
date: 2010-08-25T17:59:30.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

[Quote from: nelisky on August 25, 2010, 01:28:32 AM](#msg11092)
> [Quote from: satoshi on August 24, 2010, 11:51:12 PM](#msg11074)
> > これについてヒステリックになるほど心配性なのであれば、ステータスバーに警告メッセージが表示されたらウェブサイトとフォーラムを確認するくらい心配性なはずだ。
> >
> > オーバーフローバグのような別のバグが発生した場合、自動化されたウェブサイトが管理者が何が起きているか確認して対応を決定できるまで取引を停止することが重要だと思う。誤報だと判断してリスクを取りたい場合は、「-disablesafemode」スイッチを使える。
>
> では、管理者はbitcoindからどのような警告を受けるのか？debug.logからgrepできるものがあるのか？それともRPC呼び出しが特定のエラーを返すのか？ユニットテストのためにローカルでこれを強制的に発生させる方法はあるのか？

getinfoには、ステータスバーに表示されるアラートメッセージやその他のエラーを表示する新しいフィールドがある。

RPCメソッドは、エラー説明「Safe mode: 」に続いてアラートで指定された追加テキストを含むjson-rpcエラーを返す。

あなたのために「-testsafemode」スイッチを追加した。SVN rev 145だ。

これらは非常に新しいもので、まだ変更される可能性がある。

[Quote from: mizerydearia on August 25, 2010, 12:11:50 AM](#msg11079)
> [Quote from: satoshi on August 24, 2010, 11:51:12 PM](#msg11074)
> > これについてヒステリックになるほど心配性なのであれば、ステータスバーに警告メッセージが表示されたらウェブサイトとフォーラムを確認するくらい心配性なはずだ。
> >
> > オーバーフローバグのような別のバグが発生した場合、自動化されたウェブサイトが管理者が何が起きているか確認して対応を決定できるまで取引を停止することが重要だと思う。誤報だと判断してリスクを取りたい場合は、「-disablesafemode」スイッチを使える。
>
> http://www.bitcoin.org/wiki/doku.php?id=man_page を見つけたが、-disablesafemodeへの言及がない。追加すべきではないか！また、-4wayなど他のオプションも追加すべきだ。

多くのスイッチは意図的にドキュメント化されていない。機能がまだ開発中だったり、名前がまだ確定していなかったり、リリース向けでないテストコードだったりする場合だ。

-4wayは最終的に自動検出に置き換えられるべきだ。
