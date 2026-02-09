---
title: "返信: 非GUIオプション"
date: 2010-02-23T13:19:51Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "良さそうですね。それに関する標準は知りません。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 170
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

> mmalmi@cc.hut.fi wrote:
>> GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：
>>
>> 1) GTKはディスプレイなしでプログラムを実行することをサポートしています：
>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。
>> ただし、wxWidgetsで可能かどうかまでは分かりません。
>
> wxApp::Initializeでgtk-init-checkを呼び出しているのが分かりました。
>
> Initializeをサブクラス化して、エラーメッセージを抑制しつつ元のものを呼び出し、
> 戻り値を無視することができます。うまく動作しているようです。
>
> コマンドラインスイッチの名前と説明について何か提案はありますか？伝統的な
> 標準はありますか？今は以下を使っています：
> -daemon（または-d）（RPCを有効にしてバックグラウンドで実行）
> -server（RPCを有効にする）

良さそうですね。それに関する標準は知りません。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
