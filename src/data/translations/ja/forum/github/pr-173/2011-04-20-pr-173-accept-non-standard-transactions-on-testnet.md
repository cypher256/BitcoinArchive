---
title: "testnetで非標準トランザクションを受け入れる"
date: 2011-04-20T15:28:25.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/173"
author: "gavinandresen"
participants:
  - name: "gavinandresen"
    slug: "gavinandresen"
description: "gavinandresenがbitcoin/bitcoin PR #173でスレッドを開始。"
isSatoshi: false
translationStatus: complete
tags:
  - "github"
  - "pull-request"
---

これは、-testnetにおいて非標準トランザクションがトランザクションメモリプールに入ることを許可する（したがって、リレーされブロックに書き込まれる）1行の変更である。

サトシがメールでこれを提案してくれたが、良い考えだと同意する。新機能を-testnetで実験することを奨励すべきである。さもなければ、やりたいことを既存の標準トランザクションタイプに無理やり押し込む、より非効率な方法を編み出すことになるだろう。
