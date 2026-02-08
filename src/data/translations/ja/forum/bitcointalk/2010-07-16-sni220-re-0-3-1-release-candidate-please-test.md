---
title: "Re: 0.3.1リリース候補、テストしてください"
date: 2010-07-16T17:26:17.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=383.msg3536#msg3536"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3.1リリース候補、テストしてください」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/220/"
threadId: "bt-0-3-1-release-candidate-please-test"
threadTitle: "0.3.1 release candidate, please test"
threadPosition: 8
translationStatus: complete
---

良い指摘です。8台以上のLANノードを1つのゲートウェイノードに接続する場合は、ゲートウェイノードが着信接続を受信できるように設定した方が良いです。そうしないと、ゲートウェイノードが8つ以上の接続を持っている間は、新しい外向き接続を追加しようとしません。接続している外部ノードが出入りしても、それらを置き換える新しい外向き接続を作成しません。着信接続を受け入れられるようにすれば、他の多くのノードがあなたに接続してくるので問題ありません。
