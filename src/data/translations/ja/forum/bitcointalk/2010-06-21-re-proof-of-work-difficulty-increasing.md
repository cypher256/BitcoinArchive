---
title: "返信: Proof-of-work難易度の上昇"
date: 2010-06-21T18:09:17.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg1648#msg1648"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Proof-of-work難易度の上昇」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/132/"
threadId: "bt-proof-of-work-difficulty-increasing"
threadTitle: "Proof-of-work difficulty increasing"
threadPosition: 9
translationStatus: complete
---

ハッシュメーターのアイデアをSVNバージョンに統合しました。ステータスバーの左側セクションにkhash/sを表示します。

2つの新しいログメッセージ:
21/06/2010 01:23 hashmeter   2 CPUs    799 khash/s
21/06/2010 01:23 generated 50.00

debug.logで"generated"をgrepすると生成したものが確認でき、"hashmeter"をgrepするとパフォーマンスが確認できます。Windowsでは以下を使用してください:
 findstr "hashmeter generated" "%appdata%\bitcoin\debug.log"

ハッシュメーターメッセージは1時間に1回にしています。どのくらいの頻度がいいと思いますか？
