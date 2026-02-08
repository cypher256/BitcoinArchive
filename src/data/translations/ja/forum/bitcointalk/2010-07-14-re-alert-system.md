---
title: "返信: バージョン0.3.8"
date: 2010-07-14T22:11:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=260.msg2226#msg2226"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシがビットコインにアラートシステムを導入。重大なバグやネットワークの問題が発生した場合にすべてのノードに警告をブロードキャストするメカニズム。"
isSatoshi: true
tags:
  - "alert-system"
  - "version-update"
  - "safety"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/141/"
translationStatus: complete
---

バージョン0.3.8は重要な安全機能を追加します。

重大なバグやセキュリティ問題をブロードキャストしてユーザーに通知できるアラートシステムが導入されました。

アラートは特定の鍵で署名されます。その鍵で署名されたアラートのみが受け入れられます。これにより、偽のアラートをブロードキャストすることは誰にもできません。

重大な問題が見つかった場合、すべてのノードにアラートがブロードキャストされ、ステータスバーに警告メッセージが表示され、ノードはブロックの処理を停止します。
