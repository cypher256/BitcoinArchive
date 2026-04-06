---
title: "Re: 非GUIオプション"
date: 2010-02-23T13:19:51Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "良さそうですね。それに関する標準は知りません。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
translationStatus: complete
---

<!-- tone-skip -->
<!-- speaker: Satoshi Nakamoto -->
> <!-- quote: q1 -->
<!-- speaker: Martti Malmi -->
>> GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：
>>
>> 1) GTKはディスプレイなしでプログラムを実行することをサポートしています：
>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。
>> ただし、wxWidgetsで可能かどうかまでは分かりません。
<!-- speaker: Satoshi Nakamoto -->
>
> wxApp::Initializeでgtk-init-checkを呼び出しているのが分かった。
>
> Initializeをサブクラス化して、エラーメッセージを抑制しつつ元のものを呼び出し、
> 戻り値を無視することができる。うまく動作しているようだ。
>
> コマンドラインスイッチの名前と説明について何か提案はあるか？伝統的な
> 標準はあるか？今は以下を使っている：
> -daemon（または-d）（RPCを有効にしてバックグラウンドで実行）
> -server（RPCを有効にする）

<!-- /tone-skip -->

<!-- speaker: Martti Malmi -->
良さそうですね。それに関する標準は知らないです。

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
