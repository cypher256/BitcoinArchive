---
title: "返信: bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合のAPPDATAアクセス不具合"
date: 2010-07-08T18:24:19.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2068#msg2068"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合のAPPDATAアクセス不具合」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/171/"
threadId: "bt-bitcoin-0-3-win64-broken-access-to-appdata-if-non-"
threadTitle: "bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"
threadPosition: 1
translationStatus: complete
---

それを発見していただきありがとうございます。0.2ではANSIを使用していましたが、バージョン0.3でUTF-8に切り替えたので、それに関連しているはずです。

確認のために、非ラテン文字のユーザー名でログインし、まだappdata/Bitcoinディレクトリがない状態でBitcoinを実行し、データベースをゼロから作成させた場合、動作しますか、しませんか？
