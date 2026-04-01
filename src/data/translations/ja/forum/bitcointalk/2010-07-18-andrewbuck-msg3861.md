---
title: "Re: ソースコードのドキュメント"
date: 2010-07-18T01:50:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3861#msg3861"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "BitcoinTalkトピック393におけるAndrewBuckの文脈投稿。msg3999の前。"
isSatoshi: false
threadId: "bt-source-code-documentation"
tags: []
translationStatus: complete
---

これらは本来、一般ユーザー向けのものではないのだろうと思った。しかし、少なくとも今のところは文書化しておくのが有用だと思う。プログラムが有効な入力として受け付けるなら、文書化すべきだ。manページのコマンドに実験的である旨の注意書きを追加するか、単に削除するかだ。私の意見では、実験的とラベル付けして変更される可能性があることを知らせつつ、必要なら使えるようにする方が理にかなっている。makefileの各コマンドの先頭に以下を追加するだけだ：

\fBUnsupported - Behaviour may change in future versions\fR

\fBで太字をオンにし、\fRで通常に戻す。こうすれば開発段階でプログラムを最大限に活用できる。ドキュメントが多すぎて困ることはない、特にオープンソースプロジェクトでは。コードが見えるのだから、どのみちこれらの呼び出しを見つけて使うだろう。文書化して変更可能性が明示されていれば、使うかどうかについて情報に基づいた判断ができる。

例えば、まさに今、IRCで誰かが-printblockコマンドを使ってブロックチェーンの統計情報を生成し、プログラムの動作をよりよく理解しようとしている（実際の環境でどう動くかという意味で）。このコマンドの出力は将来変わるかもしれないので、その上に複雑なフレームワークを構築すべきではないが、ちょっとしたハックが必要な時にその存在を知っているのは良いことだ。また、プログラムがオープンソースなので、あるコマンドラインスイッチに依存するようになれば、それをメンテナンスできる。一時的なデバッグツールだと思っていたものが、結局最も広く使われるスイッチの1つになるかもしれない。

-Buck
