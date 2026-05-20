---
title: "Re: Linux build ready for testing ( ブロック数が増えない、 debug.log 添付 )"
date: 2009-11-08T14:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Satoshi と Martti Malmi の往復メール内に引用返信として保存。 2024 年 2 月、 COPA 対 Wright 訴訟での Malmi の証言として GitHub で公開。 Liberty Standard の元メッセージの正確な送信時刻は記録されていない。 上記の時刻は 11 月 8 日の Satoshi 09:08 返信と 17:39 返信の間として逆算した目安。"
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard がブロック数が増えない件で debug.log を添付。 Gnome トレイ検査法と自身の運用も説明。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

そういう意味です。プログラムを動かしている間、 ステータスバーに表示されるブロック数は全く増えませんでした。 debug.log を添付しています。

Gnome でトレイアイコンを検査するには、 通知領域を一度削除してから戻すとよいです。 通知領域を戻した後にアイコンが表示されていれば、 正しく動いているということになります。

普段、 私はアプリケーションの設定でトレイ最小化はオフ、 トレイ終了をオンにしています。 そしてアプリケーションは常時最小化しています。 こうすれば、 誤ってプログラムを閉じる事故もなく、 トレイから開ける利便性も保てます ( タスクバーにはウインドウを表示しませんが、 クリックするとサブメニューで開いているウインドウ一覧を出すアイコンを置いています )。 もしトレイアイコンが消えたら、 設定でアイコン表示をいったん無効にしてから再度有効にすれば戻ります。 ところが、 ビットコインの設定ではこれができません。 トレイ最小化のチェックを入れないと、 トレイ終了のチェックが入れられないからです。
