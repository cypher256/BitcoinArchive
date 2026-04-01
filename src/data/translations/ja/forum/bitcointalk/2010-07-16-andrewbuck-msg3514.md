---
title: "Re: ソースコードのドキュメント"
date: 2010-07-16T15:52:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3514#msg3514"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "BitcoinTalkトピック393におけるAndrewBuckのコンテキスト投稿。msg3534の前。"
isSatoshi: false
threadId: "bt-source-code-documentation"
tags: []
translationStatus: complete
---

問題ない。だからこそドキュメントを書き始める前に確認した。それでもドキュメント化したいし、受け入れられるシステムを見つけられるかもしれない。一つの方法は、自分のコードに対してDoxygenを実行し、説明などを追加せずに自動生成されたドキュメントだけを使うことだ。これならプロジェクトに影響はないが、ドキュメントの有用性は制限される。

2つ目の、おそらくより魅力的な方法は、Doxygenがドキュメントしているソースコードと同じファイルに追加ドキュメントを含める必要がないという事実を利用することだ。関数名へのリンクを持つドキュメントブロックを含む単一のファイルを追加できる。Doxygenはこれをソースから収集した自動生成情報と組み合わせてドキュメントを生成する。

最後に、Doxygenを使うかどうかに関係なく、プログラムのコマンドラインオプションを文書化する「manページ」を書きたい。コマンドラインはコードのどこで処理されているだろうか？ main.cppを見たが見つからなかった（実際、"main"関数すら見つからなかった）。

-Buck
