---
title: "Re: 大量のBitcoinを失った"
date: 2010-08-11T08:10:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=782.msg8705#msg8705"
author: "QuantumMechanic"
participants:
  - name: "QuantumMechanic"
    slug: "quantummechanic"
description: "BitcoinTalkトピック782におけるQuantumMechanicの文脈投稿。サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-07-17T16:27:39.000Z"
    sourceEntryId: "forum/bitcointalk/topic-434/2010-07-17-re-privacy-versus-safety-handling-change"
translationStatus: complete
---

サトシが以下の投稿でこれに対する保護策を提案していたと思う：

<!-- quote: q1 -->
> 新しいアドレスが必要になったときに使うために、事前に作成したアドレスのストックをウォレットにキューしておくべきだ。アドレスはそれほど大きくないので、多めに持っていても問題はない。これは、誰かがバックアップを取った後、新しいアドレスを要求し、それで大きな支払いを受け取った、というケースもより一般的にカバーする。アドレスへの一種類の需要が他の用途のためのストックを枯渇させないように、キューを分けるべきかもしれない。
>
> アドレスは通常の場所に作成・保存されるが、加えて「作成済みで未使用」のアドレスの別リストにも記載される。アドレスが要求されると、未使用キューの先頭にあるアドレスが渡され、新しいアドレスが作成されて末尾に追加される。
>
> ブロック読み込みのコードには、誰かがwallet.datをコピーしたケースを修復するために作られた一種の再スキャンがある。ウォレットが復元されたために忘れられているが、すでに受信されているブロックの中の受領支払いを再発見する、というケースをその再スキャンが処理できるかは確認する必要がある。
