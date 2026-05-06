---
title: "Re: 非GUIオプション"
date: 2010-02-23T14:47:59Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "おそらくapt-get install libgtk2.0-0だったと思います。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
>>> GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：
>>>
>>> 1) GTKはディスプレイなしでプログラムを実行することをサポートしています：
>>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。
>>> ただし、wxWidgetsで可能かどうかまでは分かりません。
<!-- speaker: Satoshi Nakamoto -->
>>
>> wxApp::Initializeでgtk-init-checkを呼び出しているのが分かった。
>>
>> Initializeをサブクラス化して、エラーメッセージを抑制しつつ元のものを呼び出し、
>> 戻り値を無視することができる。うまく動作しているようだ。
<!-- speaker: Satoshi Nakamoto -->
>
> うまく動作している。あといくつか作業したらアップロードする。
>
> GTKライブラリをインストールするよう人々に伝える必要がある。GTKを
> インストールするapt-getコマンドを覚えているか？また、GUIがインストール
> されていない環境でもインストールできるか？

<!-- speaker: Martti Malmi -->
おそらくapt-get install libgtk2.0-0だったと思います。利用可能なパッケージはこのように検索できますよ：「apt-cache search libgtk」。

bitcoin.orgの翻訳者にDrupalのアカウントを付与して、翻訳を最新の状態に保てるようにしますね。
