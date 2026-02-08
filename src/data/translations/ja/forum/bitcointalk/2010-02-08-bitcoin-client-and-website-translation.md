---
title: "Bitcoinクライアントとウェブサイトの翻訳"
date: 2010-02-08T01:27:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=47.msg279#msg279"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoの投稿：「Bitcoinクライアントとウェブサイトの翻訳」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/48/"
threadId: "bt-bitcoin-client-and-website-translation"
threadTitle: "Bitcoin client and website translation"
threadPosition: 1
translationStatus: complete
---

翻訳のお手伝いの申し出ありがとうございます。おそらくそれが最も役立つ協力方法でしょう。

まずコードを翻訳対応にする必要があります。wxWidgetsにはロケールサポートがあり、ほとんどの文字列は既にラップされた生成コード内にあるので、それほど難しくないはずです。UTF-8サポートのためにwxWidgets-2.9.0へのアップグレードも完了させる必要があります。2.9.0でテストビルドを行い、修正すべきバグが1つ残っています。

どのオペレーティングシステムをお使いですか？Windows、Linux 32ビット、64ビット？

[別のスレッド](https://www.bitcoin.org/smf/index.php?topic=44)から分離。
sirius-m
