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
tags: []
translationStatus: complete
---

自分に返信し続けて申し訳ないが、見つけた小さな断片を投稿していく。現在-dropmessagestestコマンドラインスイッチのドキュメントを作成中で、コードに追加したい小さな改善を見つけた。現在、このスイッチの結果としてメッセージがドロップされると、メッセージがドロップされたことを示すデバッグメッセージがログに出力される。ドロップされたメッセージの内容もログに出力すると便利だろう。そうすれば、ドロップされたメッセージの1つが本当にBitcoinを壊した場合、どのメッセージが問題を引き起こしたかわかる。また、後でその問題を修正したことを確認するために、最初に壊したメッセージのようなものをブロックする受信ネットワークストリームのフィルターを追加して問題を再現できる。

良いアイデアだと思えば、自分で追加することもできるだろう。

-Buck
