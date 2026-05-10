---
title: "Bitcoin クライアントとウェブサイトの翻訳"
date: 2010-02-08T01:27:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=47.msg279#msg279"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「Bitcoin クライアントとウェブサイトの翻訳」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/48/"
translationStatus: complete
---

翻訳のお手伝いの申し出ありがとう。おそらくそれが最も役立つ協力方法だろう。

まずコードを翻訳対応にする必要がある。wxWidgets にはロケールサポートがあり、ほとんどの文字列は既にラップされた生成コード内にあるので、それほど難しくないはずだ。UTF-8 サポートのために wxWidgets-2.9.0 へのアップグレードも完了させる必要がある。2.9.0 でテストビルドを行い、修正すべきバグが 1 つ残っている。

どのオペレーティングシステムを使っているか？Windows、Linux 32 ビット、64 ビット？

[別のスレッド](https://www.bitcoin.org/smf/index.php?topic=44)から分離。
sirius-m
