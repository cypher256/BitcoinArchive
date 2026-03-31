---
title: "トランザクション/スパムフラッド攻撃が現在進行中"
date: 2010-11-19T10:02:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1850.msg22870#msg22870"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Jeff Garzikがスレッドを開始: トランザクション/スパムフラッド攻撃が現在進行中"
isSatoshi: false
threadId: "bt-transaction-spam-flood-attack"
tags: []
translationStatus: complete
---

何者かがビットコインのメインネットワークを0.01 BTCのトランザクション（A→AおよびB→B、AとBはランダムな公開鍵）で溢れさせることで「テスト」しているようである。[http://theymos.ath.cx:64150/bbe](http://theymos.ath.cx:64150/bbe) で確認できる。

多くのブロックにわたって無料トランザクションの上限に達している——1ブロックあたり約219件の無料トランザクションと見られる。「実際の」トランザクションは現時点ではDoS攻撃を受けていないようであるが、これはおそらくトランザクション金額に基づいて部分的に優先処理するロジックのおかげであろう。

<soapbox>
無料トランザクションはスパムの恒常的な発生を招いているだけである。たとえ0.001 BTCであっても、各トランザクションにコストを課すべきである。
</soapbox>
