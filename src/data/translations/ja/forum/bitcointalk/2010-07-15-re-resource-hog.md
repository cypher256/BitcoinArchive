---
title: "Re: リソースの大量消費"
date: 2010-07-15T14:59:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=327.msg3162#msg3162"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「リソースの大量消費」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/192/"
threadId: "bt-resource-hog"
threadTitle: "resource hog"
threadPosition: 2
translationStatus: complete
---

その場合、CPU時間はすべて生成スレッドによるものであり、これは確実に最低優先度、アイドル優先度で実行されています。CPUメーターが100%になるのは正常です。アイドル優先度で動作しているため、CPUメーターが100%であっても、実際には他の処理を遅くすることはありません。
