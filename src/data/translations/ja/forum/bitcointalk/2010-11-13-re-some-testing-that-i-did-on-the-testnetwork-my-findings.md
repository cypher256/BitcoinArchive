---
title: "Re: テストネットワークで行ったテスト、私の発見"
date: 2010-11-13T23:25:26.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg21896#msg21896"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「テストネットワークで行ったテスト、私の発見」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/501/"
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
threadTitle: "Some testing that I did on the testnetwork, my findings."
threadPosition: 1
translationStatus: complete
---

フラッドテストをテストネットに限定していただきありがとうございます。

バージョン0.3.15は、フラッド攻撃中に正当なトランザクションがキューを飛ばすのに役立つ複数の機能を組み合わせています。鍵となったのは、依存関係の経過時間に基づいてトランザクションの優先順位を決めるというGavinのアイデアです。すべてのコインは一定頻度で回転する権利があります。待ち時間が長いほど、より多くの優先度が蓄積されます。優先度は sum(valuein * age) / txsize です。トランザクション手数料は依然として優先度より優先され、優先度は手数料階層内の処理順序を決定します。

優先度機能をサポートするため、SelectCoinsは、それしか残っていない場合の最後の手段としてのみ、自分の0承認トランザクションを使用します。これにより、実際にすべてのコインを急速に回転させることを強制しない限り、コインの急速な回転を防ぐのに役立ちます。
