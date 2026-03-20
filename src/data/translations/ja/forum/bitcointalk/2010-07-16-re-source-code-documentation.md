---
title: "Re: ソースコードのドキュメント"
date: 2010-07-16T15:37:00.000Z
type: "forum-post"
source: "bitcointalk"
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
threadPosition: 2
translationStatus: complete
---

外部APIのライブラリではそれが好きだが、コードから察せるように、内部関数に対しては好みではない。各関数の大きな義務的コメントヘッダーはコードを間延びさせ、コメントヘッダーが関数より大きくなるような小さな関数の作成をためらわせる。メンテナンスの手間もかかり、関数の変更にはコメントヘッダーの重複した変更が必要になる。コードをコンパクトに保ち、画面上でより多くのコードを一度に見られるようにしたいのだ。

今の段階でそれらを追加しても、関数を見れば明らかなことしか書かれないだろう。

外部APIはrpc.cppにあり、使用方法のドキュメントはヘルプ文字列に記載されている。

せっかくの提案に水を差してすまない。
