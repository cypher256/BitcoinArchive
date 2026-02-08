---
title: "返信: bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合のAPPDATAアクセス不具合"
date: 2010-07-09T03:01:35.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2077#msg2077"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合のAPPDATAアクセス不具合」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/173/"
threadId: "bt-bitcoin-0-3-win64-broken-access-to-appdata-if-non-"
threadTitle: "bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"
threadPosition: 2
translationStatus: complete
---

問題の場所が分かったと思います。偶然にも、最近、問題の関数の代替を書いたところで、これで修正されるはずです。まだ有効にしていませんが、SVNバージョンではdebug.logに新しいディレクトリ値と古い値を比較用に表示するデバッグメッセージが出力されます。
