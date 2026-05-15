---
title: "Re: スケーラビリティ"
date: 2010-07-14T02:20:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2721#msg2721"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 286 におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "spaceshaker"
    personSlug: "spaceshaker"
    date: "2010-07-13T16:52:00.000Z"
    sourceEntryId: "forum/bitcointalk/topic-286/2010-07-14-spaceshaker-msg2714"
  - id: "q2"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-13T15:42:32.000Z"
    parent: "q1"
    sourceEntryId: "forum/bitcointalk/topic-286/2010-07-14-gavin-andresen-msg2696"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> <!-- quote: q2 -->
> > そしてほとんどの人は、ウォレットの保持、トランザクションの署名、そしてすべてのトランザクションを監視している超高速ノードへのトランザクションの送受信だけを行う軽量クライアントを使うことになるだろう。
> 
> 
> これは可能なのか？ どんな感じになる？ 技術的な観点から「軽量クライアント」はどのようなものか？ 私の理解では、Bitcoinクライアントは信頼を確立するためにブロックチェーン全体が必要だ。
<!-- /tone-skip -->

私のイメージはこうだ：

軽量クライアントはコインの入ったウォレット（公開鍵+秘密鍵のペア）を持つ。

そして、常時接続の超高速ヘビー級ノードとの間で安全にメッセージを送受信する方法を持つ。

軽量クライアントは送金時に：
  トランザクションを作成する（秘密鍵でコインに署名する）
  署名済みトランザクションを超高速サーバーに安全に送信し、サーバーがネットワークに流す
  トランザクションが有効で送信されたことの確認を受け取り、ウォレットを更新する（コインを使用済みにする）
   （またはサーバーから「そのコインはすでに使用済みだ」というエラーを受け取る）

軽量クライアントは受け取り時に：
  定期的にサーバーにポーリングして「ウォレット内のこれらの BC アドレスへの支払いはあるか？」と尋ねる
   …または BC アドレスのリストへのトランザクションを検知した時（あるいは N 回の確認が得られた関連トランザクションを検知した時）に通知するようサーバーに依頼する
  トランザクションが発生したら、軽量クライアントはウォレットを更新する（コインを追加する）

サーバーを信頼する必要はない。サーバーは秘密鍵を持つことはない。

まあ、サーバーがトランザクションの有効性について嘘をつかないことは信頼する必要があるが、サーバーがなぜそんな嘘をつくのか？
