---
title: "BitCoinに関する質問"
date: 2009-04-18T22:52:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshiが、トランザクションが「from: unknown」と表示される理由と、「Generated (not accepted)」が2つのノードが同時にブロックを発見した際に発生することを説明する。"
isSatoshi: true
threadId: "satoshi-mike-hearn-questions"
threadTitle: "Questions about BitCoin"
threadPosition: 12
tags:
  - "correspondence"
  - "transaction"
  - "generated-not-accepted"
  - "p2p"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

50を受け取りました。

ビットコインアドレスに送られたトランザクションは常に「from: unknown」と表示されます。トランザクションは送信先しか示しません。ビットコインアドレスでの送金にはいくつかの問題がありますが、相手がオンラインかどうかに関係なく誰にでも送金できるフォールバックオプションがあるのは非常に便利です。将来的に改善を試みるアイデアがいくつかあります。現時点では、現実世界のように取引の大多数がマーチャントとの間で行われるなら、マーチャントはほぼ常にIP受信の設定を行うでしょう。P2Pファイル共有ネットワークは、ユーザーの大部分にファイアウォールのポートフォワーディング設定をさせることにかなり成功しているようです。

「Generated (not accepted)」は通常、2つのノードがほぼ同時にブロックを発見した場合に発生し、そのうちの1つは受け入れられません。これは正常であり避けられません。v0.1.6でこれらを非表示にする予定です。混乱を招き煩わしいだけで、ユーザーが見る必要はありません。現在のようにネットワークがまだ小さい場合、着信接続を受信できないと、ブロックの通知を直接受信できないため、より不利になります。
