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
translationStatus: complete
---

何が起きたかわかったと思う。生成されたトランザクションをダブルクリックしてくれ。おそらく 0.01 未満のトランザクション手数料が含まれている。

誰かが 0.00000010 のトランザクション手数料を支払っている。-paytxfee でそれを設定できるとは思えない。おそらくコードを修正する必要があるだろう。あなたの生成されたブロックは 50.00000010 の価値があるため、全額を送信しようとするとお釣りに 0.00000010 が残り、それがダストスパムの 0.01 手数料をトリガーする。

このコーナーケースを除けば通常は無害だ。これを処理するために CreateTransaction に特別なケースを追加すべきだ。
