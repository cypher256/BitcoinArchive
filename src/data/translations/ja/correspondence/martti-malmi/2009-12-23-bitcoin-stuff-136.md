---
title: "Re: Bitcoinに関すること"
date: 2009-12-23T17:53:18Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがヘッドレスBitcoinデーモンの必要性、支払い受信のためのコマンドラインAPI設計、VPS上での動作に必要なメモリー要件について議論。"
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
> コインが受信されたかどうかを確認したり、コインを送金したりするための
> コマンドラインツールも少なくとも必要です。バックグラウンドで動作している
> Bitcoinプロセスと何らかの方法で通信する必要があります。どうすべきかは
> 分かりませんが、RPCに関連する何かでしょうか。
>
> バックグラウンドプロセスが非グラフィカルであればとても助かります。現在の
> サービスレベルのVPSでは、X Window環境を動かすのに十分なメモリーがありません。
> メモリーを解放する方法を見つけない限りは。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
なぜ皆がUI無しにこだわるのか不思議に思っていた。Windowsではトレイに小さなアイコンを表示するだけで動かせるのに、これはWindowsのサーバーサービスでは一般的なことだ。つまりこれが理由だったのだな。誰も見ないデスクトップ上の小さなアイコンすら許容できないのは、Unix信奉者の気取りだと思っていた。

ウィンドウを一切開かないようにするのは簡単だが、gtkライブラリがないために失敗する可能性がある。wxWidgetsには__WXBASE__があり、「wxBaseのみ、GUIなし」に対応している。__WXGTK__の代わりにそれでビルドしてみて、どうなるか確認してみてほしい。できれば、リリースするビルドバリエーションをさらに増やすよりも、同じ実行ファイルでコマンドラインスイッチとして対応できる方が望ましい。

使えるメモリーはどのくらいか？Bitcoinはそれなりにメモリーを必要とする。Windowsでは約75MBだ。問題になるか？

コマンドラインでの操作は次にやることリストに入っている。APIは慎重に設計したいと思っている。

支払いの受信が設計上の選択肢が多い部分だ。呼び出し元は対象のトランザクションを特定する必要があり、トランザクションごとに1つのBitcoinアドレスというモデルが役立つ。コメントテキストから注文番号を検索するのも別の方法だ。ポーリング方式で、指定されたBitcoinアドレスに何が受信されたかを問い合わせる方法と、イベント駆動型がある。イベント駆動型では、特定のBitcoinアドレスに一定額が受信されたときにコマンドラインを実行するようBitcoinに指示することになると思う。
