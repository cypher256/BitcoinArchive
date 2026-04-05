---
title: "Re:（ギャビン・アンドレセンの引用投稿）"
date: 2010-07-14T02:20:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2721#msg2721"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック286におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: spaceshaker on July 14, 2010, 01:52:00 AM](#msg2714)
> [Quote from: gavinandresen on July 14, 2010, 12:42:32 AM](#msg2696)
> > [Quote from: Insti on July 13, 2010, 11:34:03 PM](#msg2678)
> > > [Quote from: knightmb on July 13, 2010, 10:08:58 PM](#msg2663)
> > > > [Quote from: TopSoil on July 13, 2010, 09:37:33 PM](#msg2656)
> > > > > 経済の議論はたぶん別スレッドでやるべきだから、これくらいにしておく。新しいスレッドを立てようとしたら、この人が自分の言いたいことをもっとうまく言ってくれていた：[topic 57](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-57/2010-02-21-re-current-bitcoin-economic-model-is-unsustainable/)
[Quote from: gavinandresen on July 14, 2010, 12:42:32 AM](#msg2696)
> [Quote from: Insti on July 13, 2010, 11:34:03 PM](#msg2678)
> > [Quote from: knightmb on July 13, 2010, 10:08:58 PM](#msg2663)
> > > [Quote from: TopSoil on July 13, 2010, 09:37:33 PM](#msg2656)
> > > > 経済の議論はたぶん別スレッドでやるべきだから、これくらいにしておく。新しいスレッドを立てようとしたら、この人が自分の言いたいことをもっとうまく言ってくれていた：[topic 57](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-57/2010-02-21-re-current-bitcoin-economic-model-is-unsustainable/)

私のイメージはこうだ：

軽量クライアントはコインの入ったウォレット（公開鍵+秘密鍵のペア）を持つ。

そして、常時接続の超高速ヘビー級ノードとの間で安全にメッセージを送受信する方法を持つ。

軽量クライアントは送金時に：
  トランザクションを作成する（秘密鍵でコインに署名する）
  署名済みトランザクションを超高速サーバーに安全に送信し、サーバーがネットワークに流す
  トランザクションが有効で送信されたことの確認を受け取り、ウォレットを更新する（コインを使用済みにする）
   （またはサーバーから「そのコインはすでに使用済みだ」というエラーを受け取る）

軽量クライアントは受け取り時に：
  定期的にサーバーにポーリングして「ウォレット内のこれらのBCアドレスへの支払いはあるか？」と尋ねる
   …またはBCアドレスのリストへのトランザクションを検知した時（あるいはN回の確認が得られた関連トランザクションを検知した時）に通知するようサーバーに依頼する
  トランザクションが発生したら、軽量クライアントはウォレットを更新する（コインを追加する）

サーバーを信頼する必要はない。サーバーは秘密鍵を持つことはない。

まあ、サーバーがトランザクションの有効性について嘘をつかないことは信頼する必要があるが、サーバーがなぜそんな嘘をつくのか？
