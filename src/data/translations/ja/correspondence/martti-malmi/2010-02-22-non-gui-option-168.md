---
title: "Re: 非GUIオプション"
date: 2010-02-22T20:17:42Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがwxApp::Initializeのサブクラス化でディスプレイなしでの実行に成功したことを報告し、-daemonと-serverコマンドラインスイッチの命名について意見を求める。"
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
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
---

<!-- speaker: Martti Malmi -->

<!-- quote: q1 -->
<!-- tone-skip -->
> GUIなしで同じバイナリを実行する方法について、いくつかの手がかりを見つけました：
>
> 1) GTKはディスプレイなしでプログラムを実行することをサポートしています：
> http://library.gnome.org/devel/gtk/2.12/gtk-General.html#gtk-init-check。
> ただし、wxWidgetsで可能かどうかまでは分かりません。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->

wxApp::Initializeでgtk-init-checkを呼び出しているのが分かった。

Initializeをサブクラス化して、エラーメッセージを抑制しつつ元のものを呼び出し、戻り値を無視することができる。うまく動作しているようだ。

コマンドラインスイッチの名前と説明について何か提案はあるか？伝統的な標準はあるか？今は以下を使っている：
-daemon（または-d）（RPCを有効にしてバックグラウンドで実行）
-server（RPCを有効にする）
