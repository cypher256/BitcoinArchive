---
title: "Re: NAT環境下での複数Bitcoinマシンの設定"
date: 2011-05-18T12:07:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=54.msg127146#msg127146"
author: "Dominic Sayers"
participants:
  - name: "Dominic Sayers"
    slug: "dominic-sayers"
description: "BitcoinTalkトピック54におけるDominic Sayersの文脈投稿。サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-16T01:34:56.000Z"
    sourceEntryId: "forum/bitcointalk/topic-54/2010-02-16-re-setting-up-multiple-bitcoin-machines-behind-nat"
translationStatus: complete
---

<!-- quote: q1 -->
> NATのポートフォワード先は、コンピューターのうち1台にしか設定できない。
>
>
>
> 1台目が落ちた場合の冗長化のためには、外向きに接続する2台を用意し、残りはその両方に接続させればいい。最初の2台は普通に起動し、残りはこのように起動する。
> bitcoin -connect= -connect=

最初の主張（ポートを1台にしかフォワードできないという点）には同意する。

したがって、2つ目の主張がよくわからない。これでどうやって冗長化が達成されるんだ？2台のうち1台しかフォワードされたトラフィックを受け取れない。その1台が落ちたら接続が失われる（私の知る限りでは）。

私が馬鹿なんだろうか？
