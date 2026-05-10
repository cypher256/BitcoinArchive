---
title: "Re: bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合の APPDATA アクセス不具合"
date: 2010-07-08T18:24:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2068#msg2068"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合の APPDATA アクセス不具合」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/171/"
translationStatus: complete
---

それを発見してくれてありがとう。0.2 では ANSI を使用していたが、バージョン 0.3 で UTF-8 に切り替えたので、それに関連しているはずだ。

確認のために、非ラテン文字のユーザー名でログインし、まだ appdata/Bitcoin ディレクトリがない状態で Bitcoin を実行し、データベースをゼロから作成させた場合、動作するか、しないか？
