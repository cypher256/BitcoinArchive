---
title: "Re: [p2p-research] ビットコイン：P2P通貨のオープンソース実装"
date: 2009-02-12T19:08:24.000Z
source: p2p-research-list
sourceUrl: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/36/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martien van Steenbergen"
    slug: "martien-van-steenbergen"
description: "P2P Researchメーリングリストにおいて、Martien van Steenbergenの質問に回答し、ビットコインの発行上限2,100万枚とDavid Chaumのシステムとの違いを説明。"
isSatoshi: true
tags:
  - "supply-limit"
  - "privacy"
  - "david-chaum"
  - "double-spending"
threadId: "p2p-research-bitcoin-open-source"
threadPosition: 1
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/p2p-research/threads/17/"
translationStatus: complete
---

Martien van Steenbergen wrote:
> 非常に興味深いです。これはDavid Chaumの匿名デジタルマネーに似ていますか？
> 彼のコンセプトでは、マネーが不正使用されない限り匿名性が保たれ、つまり
> 同じマネーが複数回使われた場合、「偽造者」は直ちに公に晒されます。

デジタル署名をコインに使用するという点では似ていますが、プライバシーと二重支払い防止のアプローチが異なります。ビットコインの支払いの受取人は、それが最初の支出かどうかを確認でき、二重支払いは受け入れられません。二重支払い者が事後に捕まえられて恥をかかせるオフラインモードはありません。それには参加者がアイデンティティを持つ必要があるからです。

プライバシーを保護するため、鍵ペアは一度だけ使用され、取引ごとに新しいものが使われます。コインの所有者は、その秘密鍵を持っている人です。

もちろん、最大の違いは中央サーバーがないことです。それがChaumianシステムのアキレス腱でした。中央の会社が閉鎖されると、通貨も終わりました。

> また、ビットコインには限られた通貨供給量がありますか（管理が必要な）？それとも取引の瞬間に通貨が作られるのですか？

通貨供給量には上限があります。流通量は21,000,000コインです。取引は所有権を移転するだけです。

ご質問ありがとうございます。

Satoshi

http://www.bitcoin.org/
