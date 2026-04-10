---
title: "Re: プライバシー vs 安全性：おつりの扱い"
date: 2010-08-12T12:52:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=434.msg8882#msg8882"
author: "throughput"
participants:
  - name: "throughput"
    slug: "throughput"
description: "BitcoinTalkトピック434におけるthroughputの文脈投稿。サトシを引用."
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

<!-- quote: q1 -->
> 新しいアドレスが必要になったときに使うために、事前に作成したアドレスの在庫をウォレットにキューしておくべきだ。アドレスはそれほど大きくないので、たくさん持っていても害はない。これは、誰かがバックアップを取ってから新しいアドレスを要求し、それで大きな支払いを受けるケースもより一般的にカバーする。アドレスへの一種類の需要が他の用途のために枯渇しないように、別々のキューを用意すべきかもしれない。
>
> アドレスは通常の場所に作成して保存されるが、作成済みだが未使用のアドレスの別リストにも掲載される。アドレスが要求されたとき、未使用キューの先頭のアドレスが払い出され、新しいアドレスが作成されて末尾に追加される。
>
> ブロック読み込みコードには、誰かがwallet.datをコピーしたケースを修復するために作られた、ある種の再スキャンがある。再スキャンが、すでに受信済みだがウォレットが復元されたため忘れられたブロックの中の受信支払いを再発見するケースを処理するかどうか確認する必要がある。

PGPで行われているように、鍵ペアをテキスト形式でエクスポートし、また戻ってインポートできるようにする方が良いだろう。
また、例えばno-warranty-expert-modeで、トランザクション出力（および入力）に対するさらなる制御を追加するのも便利だろう。
俺はtx入力の手動選択とtx出力の指定を要望する。-do-as-i-sayオプション付きのコマンドラインモードでのみ存在させればいい。
