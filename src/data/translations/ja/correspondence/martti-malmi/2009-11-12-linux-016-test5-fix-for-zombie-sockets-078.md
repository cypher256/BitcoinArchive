---
title: "linux-0.1.6-test5 ゾンビソケットの修正"
date: 2009-11-12T23:39:44Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "MSG_DONTWAIT の追加とスレッド監視による万全の対策を含む test5 のリリース。pthread_cancel によるスレッド終了の実装とスレッドラッパーの作成について。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->

test 5：

ソケットがノンブロッキングであることを忘れている場合に備えて、send と recv の呼び出しに MSG_DONTWAIT を追加した。それでもうまくいかない場合の万全の対策として、別のスレッドが send/recv スレッドを監視し、停止した場合に終了して再起動する。debug.log に「*** Restarting ThreadSocketHandler ***」と出力され、ステータスバーにしばらくエラーメッセージが表示される。

終了する前に、ハングしているソケットを閉じることを試みる。それがうまくいけば、スレッドの終了に頼る必要はない。

スレッドを約 1000回終了させるテストを実行したが、問題なかったので安全なはずだ。Linux 上での終了は pthread_cancel で、これにより C++の例外ハンドラに投げ込まれる。

使っていたスレッド呼び出しには終了機能がなかったので、util.h に Windows では CreateThread、Linux では Npthread_create を使用する独自のラッパーを作成した。以下の代わりに：<br>
   _beginthread は Windows 専用で終了機能なし<br>
   boost::thread は非常に魅力的だが終了機能なし<br>
   wxThread は呼び出す可能性のある各関数にクラスを作成する必要がある（最悪）

ファイルは次のメールに添付する
