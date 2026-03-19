---
title: "wallet.datの自動バックアップ"
date: 2010-08-24T18:52:13.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11107#msg11107"
author: "nelisky"
participants:
  - name: "nelisky"
    slug: "nelisky"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "neliskyがスレッドを開始: wallet.datの自動バックアップ"
isSatoshi: false
threadId: "bt-auto-backing-up-of-wallet-dat"
threadPosition: 1
tags: []
translationStatus: complete
---

他の多くの方と同様に、wallet.datのバックアップが必要である。そしてこれはサーバー上にあるため、無人で実行される必要がある。また、このサーバーは宝くじに使用されているため、bitcoindを停止してはならない。

今のところ単にファイルをコピーしており、破損したファイルに耐えられるよう頻繁に行っている。しかしこれは理想的ではない。すべてのトランザクション後にバックアップすべきである（送信時のみ正しいか？ 送金の受信時には新しいアドレスは作成されないはずだが）。あるいは新しいアドレスを作成するたびにバックアップすべきである。

そのため、ファイルをコピーする代わりに、db_dumpを使用して内容をダンプし、念のため-rフラグを使用することを考えた。これは機能するだろうか？

理想的な解決策は、以下のいずれかを行うRPC呼び出しである：
- フラッシュして、新しいRPC呼び出し（どの呼び出しでもよく、ロック解除コマンドである必要はない）が来るまで更新をロックする
- フラッシュしてwallet.datを別のファイルにコピーする
- フラッシュしてjsonrpc経由でダンプする。各鍵が配列内で個別に返されれば、'lastseen=X'を指定して新しい鍵のみを取得できる

これは実現可能だろうか？ どれが最も適しているだろうか？
