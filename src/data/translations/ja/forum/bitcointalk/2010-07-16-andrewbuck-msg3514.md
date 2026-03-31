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
description: "BitcoinTalkトピック393におけるAndrewBuckの文脈投稿。msg3534の前。"
isSatoshi: false
threadId: "bt-source-code-documentation"
tags: []
translationStatus: complete
---

問題ない。だからこそ書き始める前にドキュメントについて聞いたのだ。それでもドキュメント化はしたいし、あなたが受け入れられるシステムを一緒に見つけられるかもしれない。一つの方法として、自分のコードに対してDoxygenを実行し、説明などを追加せずに自動生成されたドキュメントだけを使うことだ。これならプロジェクトへの影響はなく、自分や他の誰でもいつでもできるが、ドキュメントの有用性は限られる。

2つ目の、おそらくより魅力的な方法は、Doxygenが追加ドキュメントをソースコードと同じファイルに入れる必要がないという事実を活用することだ。関数名へのリンクを含むドキュメントブロックを持つファイルを1つ追加できる。Doxygenはそれをソースから収集した自動生成情報と組み合わせてドキュメントを生成する。

最後に、Doxygenを使うかどうかに関わらず、プログラムが受け付けるコマンドラインオプションを文書化した「manページ」を書きたい。コード内のどこでコマンドラインが処理されているのか？ main.cppを見たが見つからなかった（実際「main」関数すら見つけられなかった）。

-Buck
