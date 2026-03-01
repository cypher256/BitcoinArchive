---
title: "BitCoinに関する質問"
date: 2009-04-19T02:14:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshiがbitcoin-listメーリングリストの情報を提供し、Mikeのマイクロペイメントアプローチに同意し、セキュリティ上の理由からprotocol buffersではなくカスタムシリアライゼーション形式を選んだ理由を説明する。"
isSatoshi: true
threadId: "satoshi-mike-hearn-questions"
threadTitle: "Questions about BitCoin"
threadPosition: 14
tags:
  - "correspondence"
  - "mailing-list"
  - "micropayments"
  - "protocol-buffers"
  - "sourceforge"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

メーリングリストは以下の通りです：
bitcoin-list@lists.sourceforge.net
購読/解除ページ：
http://lists.sourceforge.net/mailman/listinfo/bitcoin-list
アーカイブ：
http://sourceforge.net/mailarchive/forum.php?forum_name=bitcoin-list

新しいバージョンは常にそこでアナウンスします。自動更新、または少なくとも新バージョンの通知は、確実に予定リストに入っています。将来的に、アップグレードするまで誰もあなたと通信したがらないような必要な変更が発生する可能性があり、古いバージョンのコードでそのことをユーザーに伝える必要があります。これは誰も信頼しないという文脈では、すべてがさらに難しくなります。

マイクロペイメントへのあなたのアプローチは正しいと思います。最初は、ユーザーが慣れて自動設定にする準備ができるまで、デフォルトで許可を求める方が良いかもしれません。しかし最終目標は、あなたが描くような、携帯電話の1分あたりの料金をあまり考えずに使うのと同様のものになるべきです。

昨年Google protocol buffersがリリースされた時に調べましたが、その時にはすべてをすでに書き終えていました。私がやったのはBoost Serialisationに似たものでした。このアプリケーションでは、プロトコルをハッキングする極めて大きなインセンティブを持つ見知らぬ人からのメッセージを解析していたため、すべてのコードの行を這うようにチェックして気密性を確信できるよう、できるだけ基本的なものにする必要がありました。バイナリ形式における不要な自由度が、攻撃の潜在的な角度を倍増させることが明らかになりました。しかし、社内でprotocol buffersを標準化したのは本当に正しいことです。一般的なケースでは最適なソリューションだと思います。
