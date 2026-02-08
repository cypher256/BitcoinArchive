---
title: "Re: ソースコードのドキュメント"
date: 2010-07-16T15:37:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3510#msg3510"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ソースコードのドキュメント」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/215/"
threadId: "bt-source-code-documentation"
threadTitle: "Source code documentation"
threadPosition: 1
translationStatus: complete
---

外部APIのライブラリではそれが好きですが、コードから察せるように、内部関数に対しては好みではありません。各関数の大きな義務的コメントヘッダーはコードを間延びさせ、コメントヘッダーが関数より大きくなるような小さな関数の作成をためらわせます。メンテナンスの手間もかかり、関数の変更にはコメントヘッダーの重複した変更が必要になります。コードをコンパクトに保ち、画面上でより多くのコードを一度に見られるようにしたいのです。

今の段階でそれらを追加しても、関数を見れば明らかなことしか書かれないでしょう。

外部APIはrpc.cppにあり、使用方法のドキュメントはヘルプ文字列に記載されています。

せっかくの提案に水を差してすみません。
