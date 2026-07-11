---
title: "Re: 大量の Bitcoin を失った"
date: 2010-08-11T08:10:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=782.msg8705#msg8705"
author: "QuantumMechanic"
participants:
  - name: "QuantumMechanic"
    slug: "quantummechanic"
description: "BitcoinTalk トピック 782 における QuantumMechanic の文脈投稿。サトシを引用."
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
> 新しいアドレスが必要な時に使用するために、事前に作成したアドレスのストックをウォレットにキューしておくべきだ。それほど大きくないので、たくさん持っておいても問題ない。これにより、誰かがバックアップを取った後に新しいアドレスを要求し、それで大きな支払いを受け取るケースもより一般的にカバーできる。あるタイプのアドレス需要が他のタイプのために枯渇しないように、別々のキューを設けるべきかもしれない。
>
> アドレスは通常の場所に作成・保存されるが、「作成済み・未使用」アドレスの別のリストにも記載される。アドレスが要求されると、未使用キューの先頭のアドレスが渡され、新しいアドレスが作成されて末尾に追加される。
>
> ブロック読み込みコードには、wallet.dat をコピーした人のケースを修復するために作られた何らかの再スキャンがある。ウォレットが復元されたために忘れられた、既に受信済みのブロック内の受信支払いを再発見するケースを再スキャンが処理できるか確認する必要がある。
