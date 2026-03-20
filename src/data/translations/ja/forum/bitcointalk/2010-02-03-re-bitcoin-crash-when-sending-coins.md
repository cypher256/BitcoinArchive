---
title: "Re: コイン送信時のBitcoinクラッシュ"
date: 2010-02-03T23:29:57.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=27.msg219#msg219"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コイン送信時のBitcoinクラッシュ」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/39/"
threadId: "bt-bitcoin-crash-when-sending-coins"
threadPosition: 4
translationStatus: complete
---

この修正をSVNにアップロードした。使用済みコインを監視し、読み込み時およびブロックが入ってくるたびに継続的にウォレットを更新する。より良いエラーメッセージも入れたが、使用済みコインを事前に常に見つけるため、2台のコンピュータで同時に同じお金を使わない限り、このエラーに遭遇することはないはずだ。

試してみたい方は、PMまたはメールで送信先のメールアドレスとOS（Windows、Linux 32ビット、Linux 64ビット）を知らせてほしい。
