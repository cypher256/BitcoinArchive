---
title: "返信: 非GUIオプション"
date: 2010-02-23T14:47:59Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "おそらくapt-get install libgtk2.0-0だったと思います。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 171
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

>>> GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：
>>>
>>> 1) GTKはディスプレイなしでプログラムを実行することをサポートしています：
>>> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。
>>> ただし、wxWidgetsで可能かどうかまでは分かりません。
>>
>> wxApp::Initializeでgtk-init-checkを呼び出しているのが分かりました。
>>
>> Initializeをサブクラス化して、エラーメッセージを抑制しつつ元のものを呼び出し、
>> 戻り値を無視することができます。うまく動作しているようです。
>
> うまく動作しています。あといくつか作業したらアップロードします。
>
> GTKライブラリをインストールするよう人々に伝える必要があります。GTKを
> インストールするapt-getコマンドを覚えていますか？また、GUIがインストール
> されていない環境でもインストールできますか？

おそらくapt-get install libgtk2.0-0だったと思います。利用可能なパッケージはこのように検索できます：「apt-cache search libgtk」。

bitcoin.orgの翻訳者にDrupalのアカウントを付与して、翻訳を最新の状態に保てるようにします。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
