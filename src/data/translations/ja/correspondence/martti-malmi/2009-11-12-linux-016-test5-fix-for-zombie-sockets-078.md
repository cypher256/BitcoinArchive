---
title: "linux-0.1.6-test5 ゾンビソケットの修正"
date: 2009-11-12T23:39:44Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "MSG_DONTWAITの追加とスレッド監視による万全の対策を含むtest5のリリース。pthread_cancelによるスレッド終了の実装とスレッドラッパーの作成について。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadPosition: 78
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

test 5：

ソケットがノンブロッキングであることを忘れている場合に備えて、sendとrecvの呼び出しにMSG_DONTWAITを追加した。それでもうまくいかない場合の万全の対策として、別のスレッドがsend/recvスレッドを監視し、停止した場合に終了して再起動する。debug.logに「*** Restarting ThreadSocketHandler ***」と出力され、ステータスバーにしばらくエラーメッセージが表示される。

終了する前に、ハングしているソケットを閉じることを試みる。それがうまくいけば、スレッドの終了に頼る必要はない。

スレッドを約1000回終了させるテストを実行したが、問題なかったので安全なはずだ。Linux上での終了はpthread_cancelで、これによりC++の例外ハンドラに投げ込まれる。

使っていたスレッド呼び出しには終了機能がなかったので、util.hにWindowsではCreateThread、LinuxではNpthread_createを使用する独自のラッパーを作成した。以下の代わりに：<br>
   _beginthreadはWindows専用で終了機能なし<br>
   boost::threadは非常に魅力的だが終了機能なし<br>
   wxThreadは呼び出す可能性のある各関数にクラスを作成する必要がある（最悪）

ファイルは次のメールに添付する

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
