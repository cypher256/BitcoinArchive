---
title: "接続制限"
date: 2010-08-09T20:58:45.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=766.msg8424#msg8424"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがSVN rev 125での接続制限の改善と-maxconnectionsスイッチの追加を発表。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/336/"
threadId: "bt-connection-limits"
threadTitle: "Connection limits"
threadPosition: 1
translationStatus: complete
---

SVN rev 125:
- 8つの着信接続がある場合でも常に8つの発信接続を確立
- 発信接続をa.b.?.?の範囲ごとに1つに制限
- スイッチ -maxconnections=#

（現在ドキュメント化されていない）スイッチ -maxconnections=# を追加しました。ルーターが多くの接続を維持できない場合を除いて使用すべきではありません。その場合は -maxconnections=30 を試してください。

-maxconnections はあまりテストしていないので、誰かテストしていただけますか？
