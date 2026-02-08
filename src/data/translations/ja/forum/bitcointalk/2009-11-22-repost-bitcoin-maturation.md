---
title: "再投稿：Bitcoinの成熟"
date: 2009-11-22T18:31:44.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=6.msg29#msg29"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoの投稿：「再投稿：Bitcoinの成熟」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/6/"
translationStatus: complete
---

--------------------
bitcoinbitcoin:
Bitcoinの成熟
投稿日：2009年10月1日（木）（14:12 UTC）

ユーザーの視点から見ると、Bitcoinの成熟プロセスは8つの段階に分けることができます。

1. 最初に「コインを生成」をクリックしたときに発生する最初のネットワークトランザクション。
2. その最初のネットワークトランザクションから、Bitcoinのエントリが「全トランザクション」リストに表示される準備ができるまでの時間。
3. Bitcoinのエントリが「全トランザクション」フィールドの外から中に変わること。
4. Bitcoinが「全送金」リストに表示されてから、説明が「Generated (50.00 matures in x more blocks)」に変更される準備ができるまでの時間。
5. 説明が「Generated (50.00 matures in x more blocks)」に変わること。
6. 説明が「Generated (50.00 matures in x more blocks)」と表示されてから、「Generated」に変更される準備ができるまでの時間。
7. 説明が「Generated」に変わること。
8. 説明が「Generated」に変わった後の時間。

どの段階でネットワーク接続、大量のローカルCPU使用、および/または大量のリモートCPU使用が必要ですか？これらの段階に名前はありますか？

--------------------
sirius-m:
Re: Bitcoinの成熟
投稿日：2009年10月22日（木）（02:36 UTC）

私の知る限り、「コインを生成」をクリックしてもネットワークトランザクションは発生しません。コンピュータが次のproof-of-workの計算を開始するだけです。コインを生成している間、CPU使用率は100%になります。

この例では、ネットワーク接続は、あなたが作成したproof-of-workブロック（新しいコインを受け取る権利を与えるもの）の情報をブロードキャストする際に使用されます。コインの生成に成功するには常時接続が必要です。これは、誰かが先に現在のブロックを獲得した場合に、次のブロックの作業をすぐに開始できるようにするためです。
