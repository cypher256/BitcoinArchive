---
title: "非GUIオプション"
date: 2010-02-17T17:32:04Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミがBitcoinをGUIなしで実行する方法について調査結果を共有し、GTKのヘッドレスサポートやwxAppConsoleなどのアプローチを提案する。"
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

GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：

1) GTKはディスプレイなしでプログラムを実行することをサポートしています：http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。ただし、wxWidgetsで可能かどうかまでは分かりません。

2) wx 2.9のwxAppConsoleが何かの役に立つかもしれないですね。wxAppをwxAppConsoleに単純に置き換えるだけでは動作しないです。どう使うべきか分かりません。ドキュメントもあまり整備されていないです。

3) もう一つの選択肢として、IMPLEMENT_APP_NO_MAIN()を使って独自のmainメソッドを作る方法があるかもしれません。
