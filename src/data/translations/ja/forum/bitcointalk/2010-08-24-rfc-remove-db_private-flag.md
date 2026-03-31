---
title: "RFC: DB_PRIVATEフラグの削除"
date: 2010-08-24T16:03:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=920.msg11087#msg11087"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Jeff Garzikがスレッドを開始: RFC: DB_PRIVATEフラグの削除"
isSatoshi: false
threadId: "bt-rfc-remove-db-private-flag"
tags: []
translationStatus: complete
---

ウォレットのバックアップやその他のDB検査は、安全でアトミックかつトランザクショナルな方法で容易に実行可能である……ただし、DB_PRIVATEフラグが削除された場合に限る。

Code:
