---
title: "Re: ブロックチェーンのチェックポイント化"
date: 2010-08-16T20:20:53.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=834.msg9816#msg9816"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ブロックチェーンのチェックポイント化」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/394/"
threadId: "bt-checkpointing-the-block-chain"
threadTitle: "checkpointing the block chain"
threadPosition: 1
translationStatus: complete
---

最大のプルーフ・オブ・ワーク以外に、ソフトウェアがあるチェーンが別のチェーンより優れているかを自動的に判断する方法はありません。設計上、どれだけ遡る必要があっても、より長いチェーンに切り替える必要がありました。

唯一の例外は、私が追加した手動のチェックポイントです。それがなければ、最初のブロックまで遡って再編成することが可能でした。
