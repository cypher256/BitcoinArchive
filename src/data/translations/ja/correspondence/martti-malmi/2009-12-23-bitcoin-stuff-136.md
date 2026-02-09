---
title: "返信: Bitcoinに関すること"
date: 2009-12-23T17:53:18Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "なぜ皆がUI無しにこだわるのか不思議に思っていました。Windowsではトレイに小さなアイコンを表示するだけで動かせるのに。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 136
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

mmalmi@cc.hut.fi の書き込み:
> コインが受信されたかどうかを確認したり、コインを送金したりするための
> コマンドラインツールも少なくとも必要です。バックグラウンドで動作している
> Bitcoinプロセスと何らかの方法で通信する必要があります。どうすべきかは
> 分かりませんが、RPCに関連する何かでしょうか。
>
> バックグラウンドプロセスが非グラフィカルであればとても助かります。現在の
> サービスレベルのVPSでは、X Window環境を動かすのに十分なメモリがありません。
> メモリを解放する方法を見つけない限りは。

なぜ皆がUI無しにこだわるのか不思議に思っていました。Windowsではトレイに小さなアイコンを表示するだけで動かせるのに、これはWindowsのサーバーサービスでは一般的なことです。つまりこれが理由だったのですね。誰も見ないデスクトップ上の小さなアイコンすら許容できないのは、Unix信奉者の気取りだと思っていました。

ウィンドウを一切開かないようにするのは簡単ですが、gtkライブラリがないために失敗する可能性があります。wxWidgetsには__WXBASE__があり、「wxBaseのみ、GUIなし」に対応しています。__WXGTK__の代わりにそれでビルドしてみて、どうなるか確認してみてください。できれば、リリースするビルドバリエーションをさらに増やすよりも、同じ実行ファイルでコマンドラインスイッチとして対応できる方が望ましいです。

使えるメモリはどのくらいですか？Bitcoinはそれなりにメモリを必要とします。Windowsでは約75MBです。問題になりますか？

コマンドラインでの操作は次にやることリストに入っています。APIは慎重に設計したいと思います。

支払いの受信が設計上の選択肢が多い部分です。呼び出し元は対象のトランザクションを特定する必要があり、トランザクションごとに1つのBitcoinアドレスというモデルが役立ちます。コメントテキストから注文番号を検索するのも別の方法です。ポーリング方式で、指定されたBitcoinアドレスに何が受信されたかを問い合わせる方法と、イベント駆動型があります。イベント駆動型では、特定のBitcoinアドレスに一定額が受信されたときにコマンドラインを実行するようBitcoinに指示することになると思います。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
