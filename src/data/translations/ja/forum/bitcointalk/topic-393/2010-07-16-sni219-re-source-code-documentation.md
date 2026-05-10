---
title: "Re: ソースコードのドキュメント"
date: 2010-07-16T17:15:47.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

init.cpp にある。

wxWidgets アプリなので、main()関数はない。もうすぐあるかもしれない。bitcoind を wxBase なしでビルドできるようにするのがかなり近いところまで来ている。（init.cpp に入る予定だ）

ファイル名を「main.cpp」にしてしまい申し訳ない。別の選択肢としては「core.cpp」がありえた。今さら変更するには遅すぎる。個人的にはまだ main.cpp が好みだ。

JSON-RPC 関数の推奨使用方法を示すサンプルコード、例えば典型的なオンラインショップのウェブサイトにおける基本的なアカウントシステムの実装が非常に必要だ。ユーザー名をラベルとして使用する getreceivedbylabel、そのアカウントに保存されたアドレスが使用済みになったら新しいビットコインアドレスに変更する方法などだ。以前フォーラムでサンプルコードの断片を投稿した。（getreceivedbylabal または getnewaddress で検索してほしい）サンプルコードは、入金と支払い送信ができるプレーンなバニラ銀行サイトにできるだろう。
