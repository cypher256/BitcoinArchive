---
title: "BitCoinに関する質問"
date: 2009-04-19T02:14:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "サトシがbitcoin-listメーリングリストの情報を提供し、マイクのマイクロペイメントアプローチに同意し、セキュリティ上の理由からprotocol buffersではなくカスタムシリアライゼーション形式を選んだ理由を説明する。"
isSatoshi: true
threadId: "satoshi-mike-hearn-questions"
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

<!-- speaker: Satoshi Nakamoto -->
メーリングリストは以下の通りだ：<br>
bitcoin-list@lists.sourceforge.net<br>
購読/解除ページ：<br>
http://lists.sourceforge.net/mailman/listinfo/bitcoin-list<br>
アーカイブ：<br>
http://sourceforge.net/mailarchive/forum.php?forum_name=bitcoin-list

新しいバージョンは常にそこでアナウンスする。自動更新、または少なくとも新バージョンの通知は、確実に予定リストに入っている。将来的に、アップグレードするまで誰もあなたと通信したがらないような必要な変更が発生する可能性があり、古いバージョンのコードでそのことをユーザーに伝える必要がある。これは誰も信頼しないという文脈では、すべてがさらに難しくなる。

マイクロペイメントへのあなたのアプローチは正しいと思う。最初は、ユーザーが慣れて自動設定にする準備ができるまで、デフォルトで許可を求める方が良いかもしれない。しかし最終目標は、あなたが描くような、携帯電話の1分あたりの料金をあまり考えずに使うのと同様のものになるべきだ。

昨年Google protocol buffersがリリースされた時に調べたが、その時にはすべてをすでに書き終えていた。私がやったのはBoost Serialisationに似たものだった。このアプリケーションでは、プロトコルをハッキングする極めて大きなインセンティブを持つ見知らぬ人からのメッセージを解析していたため、すべてのコードの行を這うようにチェックして気密性を確信できるよう、できるだけ基本的なものにする必要があった。バイナリ形式における不要な自由度が、攻撃の潜在的な角度を倍増させることが明らかになった。しかし、社内でprotocol buffersを標準化したのは本当に正しいことだ。一般的なケースでは最適なソリューションだと思う。
