---
title: "Re: 非 GUI オプション"
date: 2010-02-23T14:47:59Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "おそらく apt-get install libgtk2.0-0 だったと思います。"
isSatoshi: false
tags:
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-23T01:41:01Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-23-non-gui-option-169"
  - id: "q2"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    parent: "q1"
    date: "2010-02-22T20:17:42Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-22-non-gui-option-168"
  - id: "q3"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
    parent: "q2"
    date: "2010-02-17T17:32:04Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-17-non-gui-option-167"
translationStatus: complete
---

<!-- quote: q1 -->
> <!-- quote: q2 -->
>> <!-- quote: q3 -->
>> <!-- speaker: Martti Malmi -->
>>> GUI なしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：
>>>
>>> 1) GTK はディスプレイなしでプログラムを実行することをサポートしています：
>>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。
>>> ただし、wxWidgets で可能かどうかまでは分かりません。
>>
>> <!-- speaker: Satoshi Nakamoto -->
>> wxApp::Initialize で gtk-init-check を呼び出しているのが分かった。
>>
>> Initialize をサブクラス化して、エラーメッセージを抑制しつつ元のものを呼び出し、
>> 戻り値を無視することができる。うまく動作しているようだ。
>
> <!-- speaker: Satoshi Nakamoto -->
> うまく動作している。あといくつか作業したらアップロードする。
>
> GTK ライブラリをインストールするよう人々に伝える必要がある。GTK を
> インストールする apt-get コマンドを覚えているか？また、GUI がインストール
> されていない環境でもインストールできるか？

<!-- speaker: Martti Malmi -->
おそらく apt-get install libgtk2.0-0 だったと思います。利用可能なパッケージはこのように検索できますよ：「apt-cache search libgtk」。

bitcoin.org の翻訳者に Drupal のアカウントを付与して、翻訳を最新の状態に保てるようにしますね。
