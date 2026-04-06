---
title: "Re: [p2p-research] ビットコイン：P2P通貨のオープンソース実装"
date: 2009-02-12T19:08:24.000Z
type: "mailing-list"
source: "p2p-research-list"
sourceUrl: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/36/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martien van Steenbergen"
    slug: "martien-van-steenbergen"
description: "P2P Researchメーリングリストにおいて、マルティエン・ファン・ステーンベルゲンの質問に回答し、ビットコインの発行上限2,100万枚とデイビッド・チャウムのシステムとの違いを説明。"
isSatoshi: true
tags:
  - "supply-limit"
  - "privacy"
  - "david-chaum"
  - "double-spending"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/threads/17/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Martien van Steenbergen"
---

<!-- speaker: Martien van Steenbergen -->
<!-- quote: q1 -->
<!-- tone-skip -->
> 非常に興味深い。これはデイビッド・チャウムの匿名デジタルマネーに似ているか？
> 彼のコンセプトでは、マネーが不正使用されない限り匿名性が保たれ、つまり
> 同じマネーが複数回使われた場合、「偽造者」は直ちに公に晒される。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
デジタル署名をコインに使用するという点では似ているが、プライバシーと二重支払い防止のアプローチが異なる。ビットコインの支払いの受取人は、それが最初の支出かどうかを確認でき、二重支払いは受け入れられない。二重支払い者が事後に捕まえられて恥をかかせるオフラインモードはない。それには参加者がアイデンティティを持つ必要があるからだ。

プライバシーを保護するため、鍵ペアは一度だけ使用され、取引ごとに新しいものが使われる。コインの所有者は、その秘密鍵を持っている人だ。

もちろん、最大の違いは中央サーバーがないことだ。それがチャウム式システムのアキレス腱だった。中央の会社が閉鎖されると、通貨も終わった。

<!-- speaker: Martien van Steenbergen -->
> また、ビットコインには限られた通貨供給量があるのか（管理が必要な）？それとも取引の瞬間に通貨が作られるのか？

<!-- speaker: Satoshi Nakamoto -->
通貨供給量には上限がある。流通量は21,000,000コインだ。取引は所有権を移転するだけだ。

ご質問ありがとう。

Satoshi

http://www.bitcoin.org/
