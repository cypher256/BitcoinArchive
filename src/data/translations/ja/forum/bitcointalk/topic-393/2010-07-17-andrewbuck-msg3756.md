---
title: "Re: Source code documentation"
date: 2010-07-17T14:27:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3756#msg3756"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "BitcoinTalkトピック393におけるAndrewBuckの文脈投稿。msg3534の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

manページの作業をまだ続けていて、かなり良い感じになってきた。だが、いくつか問題に出くわした。まず、「-printtodebugger」というコマンドラインオプションがある。-h を指定したときの「usage」情報に追加したし、manページにも追加したが、コードを見ても何をするものなのか分からない――windowsマシンでしか使われていない、ということ以外は。

第二に、OutputDebugStringF() 関数を調査する過程で、グローバル変数 fPrintToConsole を true に設定することでコンソールに出力できることが分かった。だが、その変数は false で初期化されていて、コード中のどこにも true に設定する箇所がなかった。そこで、この変数と fDebug の両方を true にする -printtoconsole を追加した。両方を設定すべきだと思うが、fDebug の方はそのままにしておくべきかどうか迷っている。コード内で設定しなければ、ユーザーはコマンドラインで「-printtoconsole -debug」と指定する必要がある。debug によって冗長性が増えるか減るかによって、これを望むかどうかは分かれる。だがコードをざっとgrepした感じでは、今やっているように両方の変数を自動的に設定するのが正しいように見える。

-Buck
