---
title: "Re: RFC: DB_PRIVATEフラグの削除"
date: 2010-08-26T00:33:28.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=920.msg11224#msg11224"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: DB_PRIVATEフラグの削除」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/419/"
threadId: "bt-rfc-remove-db-private-flag"
threadTitle: "RFC: remove DB_PRIVATE flag"
threadPosition: 1
translationStatus: complete
---

DB_PRIVATEを削除すると何が起きるか、もっと詳しく教えていただけますか？

DB_PRIVATEに特定の理由があったか、それともサンプルコードからフラグをコピーしただけか覚えていません。DB_PRIVATEを削除すると、他のプロセスが同時にデータベースを開いても安全になりますか？副作用次第では改善かもしれません。すべての変更を即座に書き出す必要があったり、他の調整が必要になったりして、性能が大幅に低下しますか？追加のロックや調整ファイルが必要になりますか？他に何が変わりますか？DB_PRIVATEの有無で初期ブロックダウンロードの時間を計ってテストできます。ネットワークが要因にならないよう、できればローカルマシンに-connectするとよいでしょう。

どうやら、DB_PRIVATEは期待するような動作をしないようです。つまり、他のプロセスがデータベースを開くことを防ぐのではなく、開くことは許可するものの、開くと問題が起きるだけです。もう一つの選択肢は、方法があれば、データベースファイルをロックして他のプロセスからアクセスできないようにすることです。
