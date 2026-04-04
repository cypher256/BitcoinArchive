---
title: "Re: BitDNSの手数料に関する混乱"
date: 2010-12-09T21:41:58.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2181.msg28704#msg28704"
author: "RHorning"
participants:
  - name: "RHorning"
    slug: "rhorning"
  - name: "davout"
    slug: "davout"
description: "RHorningがトランザクション置換はバージョンフィールドにより理論的には可能だが、UIには未実装であると説明。トランザクションがブロックに含まれると、キャンセルは事実上不可能になると述べた。"
isSatoshi: false
inReplyTo: "forum/bitcointalk/2010-12-09-davout-re-fees-in-bitdns-confusion"
tags:
  - "transaction-fees"
  - "transaction-replacement"
translationStatus: complete
---

できる。ただし、キャンセルされたトランザクションのプロトコルは、現在の実装においては必ずしも完全ではないと思う。

参照：
http://www.bitcoin.org/wiki/doku.php?id=bitcoins_draft_spec_0_0_1#tx

「バージョン」フィールドを使えば、既存のトランザクションを新しいデータで事実上置き換える新しいトランザクションを送信できる。トランザクションがブロックに受け入れられていない限り、理論上はトランザクションを「呼び戻し」て、どのようにでも変更できる。

前述の通り、これは不完全であり、それを実行するための正確なプロトコルはまだBitcoinに含まれていない。しかし確かに可能性はあり、Bitcoinの将来のバージョンの機能になるかもしれない。

確かにトランザクションを「呼び戻す」機能はUIにはまだ実装されていないし、トランザクションがブロックに受け入れられた後にトランザクションを本当に消す唯一の望みは、そのブロックがメインのブロックチェーンに受け入れられないことを願うことだ。

とはいえ、トランザクションが手数料なしでブロックに受け入れられたなら、手数料を追加するためにトランザクションを呼び戻す問題も意味がなくなるので、問題にはならないはずだ。
