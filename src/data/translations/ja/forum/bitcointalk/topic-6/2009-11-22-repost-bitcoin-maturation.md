---
title: "再投稿：Bitcoin の成熟"
date: 2009-11-22T18:31:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=6.msg29#msg29"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「再投稿：Bitcoin の成熟」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/6/"
translationStatus: complete
---

<!-- tone-skip -->
--------------------<br>
bitcoinbitcoin:<br>
Bitcoin の成熟<br>
投稿日：2009年10月1日（木）（14:12 UTC）

ユーザーの視点から見ると、Bitcoin の成熟プロセスは 8 つの段階に分けることができます。

1. 最初に「コインを生成」をクリックしたときに発生する最初のネットワークトランザクション。
2. その最初のネットワークトランザクションから、Bitcoin のエントリが「全トランザクション」リストに表示される準備ができるまでの時間。
3. Bitcoin のエントリが「全トランザクション」フィールドの外から中に変わること。
4. Bitcoin が「全送金」リストに表示されてから、説明が「Generated (50.00 matures in x more blocks)」に変更される準備ができるまでの時間。
5. 説明が「Generated (50.00 matures in x more blocks)」に変わること。
6. 説明が「Generated (50.00 matures in x more blocks)」と表示されてから、「Generated」に変更される準備ができるまでの時間。
7. 説明が「Generated」に変わること。
8. 説明が「Generated」に変わった後の時間。

どの段階でネットワーク接続、大量のローカル CPU 使用、および/または大量のリモート CPU 使用が必要ですか？これらの段階に名前はありますか？

--------------------<br>
sirius-m:<br>
Re: Bitcoin の成熟<br>
投稿日：2009年10月22日（木）（02:36 UTC）

私の知る限り、「コインを生成」をクリックしてもネットワークトランザクションは発生しません。コンピューターが次の proof-of-work の計算を開始するだけです。コインを生成している間、CPU 使用率は 100%になります。

この例では、ネットワーク接続は、あなたが作成した proof-of-work ブロック（新しいコインを受け取る権利を与えるもの）の情報をブロードキャストする際に使用されます。コインの生成に成功するには常時接続が必要です。これは、誰かが先に現在のブロックを獲得した場合に、次のブロックの作業をすぐに開始できるようにするためです。
<!-- /tone-skip -->
