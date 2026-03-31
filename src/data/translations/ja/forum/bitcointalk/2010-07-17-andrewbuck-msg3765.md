---
title: "Re: ソースコードのドキュメント"
date: 2010-07-17T15:49:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3765#msg3765"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "BitcoinTalkトピック393におけるAndrewBuckの文脈投稿。msg3828の前。"
isSatoshi: false
threadId: "bt-source-code-documentation"
tags: []
translationStatus: complete
---

自分に返信し続けて申し訳ないが、見つけた小さな断片を投稿している。現在 -dropmessagestest コマンドラインスイッチをドキュメント化しているところだが、コードに追加するとよい小さな改善を見つけた。現在、このスイッチの結果としてメッセージがドロップされた場合、メッセージがドロップされたことを示すデバッグメッセージがログに出力される。ドロップされたメッセージの内容もログに出力するとかなり有用だろう。こうすれば、ドロップされたメッセージの1つが本当にBitcoinを壊した場合、どのメッセージが問題を引き起こしたかがわかる。また、最初に壊した時と同じメッセージをブロックする受信ネットワークストリームのフィルターを追加して問題を再現し、後で修正を検証することも可能になる。

良いアイデアだと思えば、おそらく自分でも追加できる。

-Buck
