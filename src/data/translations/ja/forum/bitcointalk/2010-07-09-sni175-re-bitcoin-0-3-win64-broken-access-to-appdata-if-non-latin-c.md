---
title: "返信: bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合のAPPDATAアクセス不具合"
date: 2010-07-09T15:37:05.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=246.msg2092#msg2092"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「bitcoin 0.3 win64 - ユーザー名に非ラテン文字がある場合のAPPDATAアクセス不具合」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/175/"
threadId: "bt-bitcoin-0-3-win64-broken-access-to-appdata-if-non-"
threadTitle: "bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"
threadPosition: 3
translationStatus: complete
---

XP上で非下位ASCIIのアカウント名でテストしてバグを確認し、その後新しいGetDefaultDataDirで修正されたことをテストしました。この変更はSVNのリビジョン102です。
