---
title: "Re: RFC: DB_PRIVATE フラグの削除"
date: 2010-08-26T00:33:28.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=920.msg11224#msg11224"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: DB_PRIVATE フラグの削除」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/419/"
translationStatus: complete
---

DB_PRIVATE を削除すると何が起きるか、もっと詳しく教えてもらえるか？

DB_PRIVATE に特定の理由があったか、それともサンプルコードからフラグをコピーしただけか覚えていない。DB_PRIVATE を削除すると、他のプロセスが同時にデータベースを開いても安全になるか？副作用次第では改善かもしれない。すべての変更を即座に書き出す必要があったり、他の調整が必要になったりして、性能が大幅に低下するか？追加のロックや調整ファイルが必要になるか？他に何が変わるか？DB_PRIVATE の有無で初期ブロックダウンロードの時間を計ってテストできる。ネットワークが要因にならないよう、できればローカルマシンに-connect するとよいだろう。

どうやら、DB_PRIVATE は期待するような動作をしないようだ。つまり、他のプロセスがデータベースを開くことを防ぐのではなく、開くことは許可するものの、開くと問題が起きるだけだ。もう一つの選択肢は、方法があれば、データベースファイルをロックして他のプロセスからアクセスできないようにすることだ。
