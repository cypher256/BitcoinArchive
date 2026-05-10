---
title: "Re: Proof-of-work 難易度の上昇"
date: 2010-06-21T18:09:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg1648#msg1648"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Proof-of-work 難易度の上昇」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/132/"
translationStatus: complete
---

ハッシュメーターのアイデアを SVN バージョンに統合した。ステータスバーの左側セクションに khash/s を表示する。

2 つの新しいログメッセージ:
21/06/2010 01:23 hashmeter   2 CPUs    799 khash/s
21/06/2010 01:23 generated 50.00

debug.log で"generated"を grep すると生成したものが確認でき、"hashmeter"を grep するとパフォーマンスが確認できる。Windows では以下を使用してほしい:
 findstr "hashmeter generated" "%appdata%\bitcoin\debug.log"

ハッシュメーターメッセージは 1時間に 1回にしている。どのくらいの頻度がいいと思うか？
