---
title: "返信: ビットコイン v0.1 リリース"
date: 2009-01-24T16:48:03Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2009-January/015036.html"
author: "Hal Finney"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
  - name: "Jonathan Thornburg"
    slug: "jonathan-thornburg"
description: "Hal FinneyがThornburgの規制に関する懸念に反論。ビットコインには単一障害点がない——「召喚状を送って逮捕し、閉鎖できる役員のいる造幣局も会社もない」と主張。「分散型のグローバルで不可逆なトランザクションデータベース」をビットコインの核心的イノベーションとして特定し、後のブロックチェーン運動を先見的に予言した。"
threadId: "bitcoin-v0-1-released"
threadTitle: "Bitcoin v0.1 released"
threadPosition: 5
inReplyTo: "emails/cryptography/2009-01-17-re-bitcoin-v0-1-released-thornburg"
isSatoshi: false
tags:
  - "regulation"
  - "decentralization"
  - "resilience"
  - "blockchain"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/2/"
translationStatus: complete
---

[Jonathan Thornburgの政府規制およびボットネット悪用に関する懸念への返信]

ビットコインには単一障害点がない。召喚状を送って逮捕し、閉鎖できる役員のいる「造幣局」も会社もない。P2Pネットワークに近い存在であり、我々が見てきたように、少なくとも政府の嫌悪にもかかわらず、P2Pネットワークは依然として存在している。

匿名性の低いモードで運用することも考えられる。使い捨ての鍵ではなく、個人に紐づけて送金する方式だ。それでも、大規模で分散型の電子決済システムがあれば有用だろう。

また、ビットコインをリファクタリング・再構築して、核心的な新しいアイデア——**分散型のグローバルで不可逆なトランザクションデータベース**——を分離することも可能かもしれない。そのような機能は他の目的にも有用だろう。一度それが存在すれば、それを使って金銭の移転を記録することは一種の副次的効果となり、閉鎖するのがより困難になるだろう。

[プルーフ・オブ・ワークとコイン生成について]

プルーフ・オブ・ワークの側面は、主にトランザクション台帳の健全性を確保することに向けられている。プルーフ・オブ・ワークによるコイン生成は、数年かけて段階的に廃止される一時的な方策と見なされていた。

[ボットネットとセキュリティのインセンティブについて]

POWトークンが有用になり、特に貨幣になれば、マシンはもはやアイドル状態にならない。ユーザーは自分のコンピュータが収益を生むことを期待するようになる（報酬が運用コストを上回ると仮定して）。ボットネットによって収益を盗まれているコンピュータは、現在よりも所有者に気づかれやすくなる。したがって、その世界ではユーザーがコンピュータのメンテナンスに力を入れ、ボットネットの感染を除去するようになると予想できる。

Hal
