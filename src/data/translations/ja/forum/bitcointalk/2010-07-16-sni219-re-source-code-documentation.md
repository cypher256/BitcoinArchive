---
title: "Re: ソースコードのドキュメント"
date: 2010-07-16T17:15:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3534#msg3534"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ソースコードのドキュメント」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/219/"
threadId: "bt-source-code-documentation"
threadPosition: 3
translationStatus: complete
---

init.cppにある。

wxWidgetsアプリなので、main()関数はない。もうすぐあるかもしれない。bitcoindをwxBaseなしでビルドできるようにするのがかなり近いところまで来ている。（init.cppに入る予定だ）

ファイル名を「main.cpp」にしてしまい申し訳ない。別の選択肢としては「core.cpp」がありえた。今さら変更するには遅すぎる。個人的にはまだmain.cppが好みだ。

JSON-RPC関数の推奨使用方法を示すサンプルコード、例えば典型的なオンラインショップのウェブサイトにおける基本的なアカウントシステムの実装が非常に必要だ。ユーザー名をラベルとして使用するgetreceivedbylabel、そのアカウントに保存されたアドレスが使用済みになったら新しいビットコインアドレスに変更する方法などだ。以前フォーラムでサンプルコードの断片を投稿した。（getreceivedbylabalまたはgetnewaddressで検索してほしい）サンプルコードは、入金と支払い送信ができるプレーンなバニラ銀行サイトにできるだろう。
