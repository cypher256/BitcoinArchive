---
title: "Re: コイン送信時の Bitcoin クラッシュ"
date: 2010-02-03T23:29:57.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=27.msg219#msg219"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コイン送信時の Bitcoin クラッシュ」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/39/"
translationStatus: complete
---

この修正を SVN にアップロードした。使用済みコインを監視し、読み込み時およびブロックが入ってくるたびに継続的にウォレットを更新する。より良いエラーメッセージも入れたが、使用済みコインを事前に常に見つけるため、2 台のコンピューターで同時に同じお金を使わない限り、このエラーに遭遇することはないはずだ。

試してみたい方は、PM またはメールで送信先のメールアドレスと OS（Windows、Linux 32 ビット、Linux 64 ビット）を知らせてほしい。
