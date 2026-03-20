---
title: "Re: 非GUIオプション"
date: 2010-02-23T01:41:01Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "うまく動作している。あといくつか作業したらアップロードする。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadPosition: 169
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

<!-- speaker: Satoshi Nakamoto -->

>> GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけた：
>>
>> 1) GTKはディスプレイなしでプログラムを実行することをサポートしている：
>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。
>> ただし、wxWidgetsで可能かどうかまでは分からない。
>
> wxApp::Initializeでgtk-init-checkを呼び出しているのが分かった。
>
> Initializeをサブクラス化して、エラーメッセージを抑制しつつ元のものを呼び出し、
> 戻り値を無視することができる。うまく動作しているようだ。

うまく動作している。あといくつか作業したらアップロードする。

GTKライブラリをインストールするよう人々に伝える必要がある。GTKをインストールするapt-getコマンドを覚えているか？また、GUIがインストールされていない環境でもインストールできるか？

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
