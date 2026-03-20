---
title: "Re: トランザクション手数料が必要なためコインを送れない？"
date: 2010-09-10T00:46:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1013.msg12342#msg12342"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「トランザクション手数料が必要なためコインを送れない？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/446/"
threadId: "bt-won-t-let-me-send-coins-because-it-requires-a-tran"
threadPosition: 3
translationStatus: complete
---

何が起きたかわかったと思う。生成されたトランザクションをダブルクリックしてくれ。おそらく0.01未満のトランザクション手数料が含まれている。

誰かが0.00000010のトランザクション手数料を支払っている。-paytxfeeでそれを設定できるとは思えない。おそらくコードを修正する必要があるだろう。あなたの生成されたブロックは50.00000010の価値があるため、全額を送信しようとするとお釣りに0.00000010が残り、それがダストスパムの0.01手数料をトリガーする。

このコーナーケースを除けば通常は無害だ。これを処理するためにCreateTransactionに特別なケースを追加すべきだ。
