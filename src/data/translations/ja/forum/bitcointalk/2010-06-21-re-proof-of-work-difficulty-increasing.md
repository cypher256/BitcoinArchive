---
title: "Re: Proof-of-work難易度の上昇"
date: 2010-06-21T18:09:17.000Z
type: "forum-post"
source: "bitcointalk"
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
threadPosition: 8
translationStatus: complete
---

ハッシュメーターのアイデアをSVNバージョンに統合した。ステータスバーの左側セクションにkhash/sを表示する。

2つの新しいログメッセージ:
21/06/2010 01:23 hashmeter   2 CPUs    799 khash/s
21/06/2010 01:23 generated 50.00

debug.logで"generated"をgrepすると生成したものが確認でき、"hashmeter"をgrepするとパフォーマンスが確認できる。Windowsでは以下を使用してほしい:
 findstr "hashmeter generated" "%appdata%\bitcoin\debug.log"

ハッシュメーターメッセージは1時間に1回にしている。どのくらいの頻度がいいと思うか？
