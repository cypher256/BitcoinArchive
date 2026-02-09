---
title: "非GUIオプション"
date: 2010-02-17T17:32:04Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 167
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

GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：

1) GTKはディスプレイなしでプログラムを実行することをサポートしています：http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。ただし、wxWidgetsで可能かどうかまでは分かりません。

2) wx 2.9のwxAppConsoleが何かの役に立つかもしれません。wxAppをwxAppConsoleに単純に置き換えるだけでは動作しません。どう使うべきか分かりません。ドキュメントもあまり整備されていません。

3) もう一つの選択肢として、IMPLEMENT_APP_NO_MAIN()を使って独自のmainメソッドを作る方法があるかもしれません。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
