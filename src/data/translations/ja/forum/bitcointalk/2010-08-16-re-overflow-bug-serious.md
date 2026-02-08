---
title: "Re: オーバーフローバグ 深刻"
date: 2010-08-16T01:00:45.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9623#msg9623"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「オーバーフローバグ 深刻」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/379/"
threadId: "bt-overflow-bug-serious"
threadTitle: "overflow bug SERIOUS"
threadPosition: 8
translationStatus: complete
---

[Quote from: Ground Loop on August 16, 2010, 12:29:55 AM](https://bitcointalk.org/index.php?topic=823.msg9609#msg9609)影響についての質問：不正なブロックの後、不正なブロックチェーンを使って**トランザクション**を送信しました。

そのトランザクションのステータスはどうなりますか？
見たところ、（更新された）送信側のクライアントウォレットには差し引かれた金額が表示されています。

修正されたチェーンに再統合され、受信者はそれを使えるようになりますか？
はい、修正されたチェーンに再統合されます。トランザクションは消えず、双方で引き続き表示されますが、確認数が0に戻り、再び増え始めます。

ブロック74638以降の不正なチェーンでブロックを生成した場合のみ、そのブロックからの50 BTCが消えます。不正なチェーン内のブロックはまだ成熟していなかったはずです。
