---
title: "Re: 非 GUI オプション"
date: 2010-02-23T01:41:01Z
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
description: "うまく動作している。あといくつか作業したらアップロードする。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-22T20:17:42Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-22-non-gui-option-168"
  - id: "q2"
    parent: "q1"
    person: "Martti Malmi"
    personSlug: "martti-malmi"
    date: "2010-02-17T17:32:04Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-17-non-gui-option-167"
---

<!-- speaker: Satoshi Nakamoto -->

<!-- quote: q1 -->
<!-- tone-skip -->
> <!-- quote: q2 -->
>> GUI なしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：
>>
>> 1) GTK はディスプレイなしでプログラムを実行することをサポートしています：
>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。
>> ただし、wxWidgets で可能かどうかまでは分かりません。
>
> wxApp::Initialize で gtk-init-check を呼び出しているのが分かった。
>
> Initialize をサブクラス化して、エラーメッセージを抑制しつつ元のものを呼び出し、
> 戻り値を無視することができる。うまく動作しているようだ。
<!-- /tone-skip -->

うまく動作している。あといくつか作業したらアップロードする。

GTK ライブラリをインストールするよう人々に伝える必要がある。GTK をインストールする apt-get コマンドを覚えているか？また、GUI がインストールされていない環境でもインストールできるか？
