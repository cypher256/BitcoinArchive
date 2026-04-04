---
title: "BitcoinをGTKに変換：賛成？反対？wxの方が良い？"
date: 2010-08-19T07:23:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=867.msg10216#msg10216"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "mizerydearia がスレッドを開始: BitcoinTalkトピック867。"
isSatoshi: false
tags: []
translationStatus: complete
---

公式のLinux版BitcoinクライアントをwxからGTKに変換できるスキルを持っている人はいるだろうか？

この開発は追求する価値や需要があるのか、それともwxで問題ないのか？

質問：ちょっと待ってくれ。自分が望む変換に対して誰かが報奨金を出すのを求めているのか？（報奨金のアイデアは奇妙/変だと思われたため却下）
回答：自分が望んでいるわけではない。GTKはQTやその他のものより良いのか？よく分からない。

「BitcoinがwxWidgetsの代わりにGTKを使ってくれたら嬉しいが、その変更がどれほど難しいか簡単かについてまったく見当がつかないとは言わない」

誰か：wxは今のところ問題なく動いているように見える
別の誰か：wxは完全な悪夢だ

質問：なぜSatoshiのフロントエンドを「変換」するのか？RPCコールを使って新しいものを構築すればいいのでは？

実際、bitcoindのメソッドをGUIと同じことができるほど便利にするために必要なことはそれほど多くない：
特に：
 * 送金アドレスの一覧表示
 * listtransactionsで未承認ブロックを表示する（おそらく）
 * 表示するトランザクションの範囲を選択する
