---
title: "bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合のAPPDATAアクセス不具合"
date: 2010-07-08T00:33:16.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2052#msg2052"
author: "m0mchil"
participants:
  - name: "m0mchil"
    slug: "m0mchil"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "m0mchilがスレッドを開始: bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合のAPPDATAアクセス不具合"
isSatoshi: false
threadId: "bt-bitcoin-0-3-win64-broken-access-to-appdata-if-non-"
tags: []
translationStatus: complete
---

ユーザーアカウント名に非ラテン文字を使うのが賢い選択ではないことは分かっている。いずれにせよ、0.2ではこの問題は発生しなかった。

以下の方法で検証した。「通常の」新規ユーザーを作成すると、0.3はデータフォルダを正常に開いた。 **新しいデータフォルダ** を作成し、非標準ユーザーにコピーしたところ、0.3はDB_RUN_RECOVERYエラーで失敗した。
