---
title: "BitCoinに関する質問"
date: 2009-04-18T21:25:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "マイク・ハーンが50コインを返送し、「Generated (not accepted)」エラーとトランザクションにメタデータを添付するアイデアについて質問する。"
isSatoshi: false
threadId: "satoshi-mike-hearn-questions"
tags:
  - "correspondence"
  - "transaction"
  - "mining"
  - "metadata"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

<!-- speaker: Mike Hearn -->
ありがとう。50を返送したので、これでおあいこだ。

なぜか、あなたからの送金は、アドレス帳に追加したにもかかわらず「From: unknown」と表示される。

トランザクションリストに「Generated (not accepted)」という行がある。コインの生成の試みが何かうまくいかなかったようだ。何が起きたのか分からない――おそらく私のノードがブロックの解決に成功したものの、ネットワークに送信される前にオフラインになったのだろうか？

トランザクションにメタデータを送信するには、他のメカニズムが必要になると思う。例えば、トランザクションに関連付けられた暗号化メッセージを（仮に）1ヶ月間ブロードキャストして保持し、ノードがメッセージに使用できるストレージ量にある種の予算を設けるといった方法だ。あるいは、受取人が自分にとって意味のある、しかし他の人には不透明な参照番号を生成し、支払人に渡すこともできる。この場合暗号化する必要がなく、ブロックに直接入れることができる。
