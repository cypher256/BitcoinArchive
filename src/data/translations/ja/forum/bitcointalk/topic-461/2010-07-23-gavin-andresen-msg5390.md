---
title: "Re: JSON-RPCパスワード"
date: 2010-07-23T21:18:05.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5390#msg5390"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるギャビン・アンドレセンの文脈投稿。after msg5383, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-07-23T20:39:03.000Z"
    sourceEntryId: "forum/bitcointalk/topic-461/2010-07-23-sni260-re-json-rpc-password"
translationStatus: complete
---

<!-- quote: q1 -->
> ところで、まだ試していないが、confファイルで rpcpassword= とだけ書くのは有効だと思う。-server や -daemon、bitcoind を使う場合にだけ警告つきで失敗するはずだ。パスワードが不要なら問題ないはずだ。そうだよね？

そう、その通りだ。rpcpasswordが必須なのは-serverや-daemon、bitcoindを使う場合だけだ（念のためたった今テストした）。

RE: プログラマが古いCOBOLコードでHTTP認証をどうやればいいか分からない場合は？
それなら、「rpcpasswordを空にしたら認証が切れる」というマジカルな仕様より、RPC認証を明示的に切るための別の設定項目をconfファイルに用意する方がいいと思う。ただ、誰かが実際に困るか、認証手段が複数になる（いつかhttps対応とか）まではこれを実装するつもりはないね。

lachesis、HTTP Basic認証に対応するのは君にとって問題かい？
