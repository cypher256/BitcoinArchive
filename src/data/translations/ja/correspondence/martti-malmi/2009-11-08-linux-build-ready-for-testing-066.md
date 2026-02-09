---
title: "返信: Linuxビルドのテスト準備完了"
date: 2009-11-08T17:39:39Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "debug.logの分析結果とブロックダウンロードの問題についての調査。トレイアイコンの最小化オプションの分離についての議論。Liberty Standardのテスト報告への返信。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 66
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

debug.logでは、ブロックリストを要求し、ブロックリストを受信した後、要求されたブロックのリストのアップロードを開始しています。ブロックを受信していませんが、十分な時間が経っていないので確実なことは言えません。それ以外はすべて正常に見えます。

どのくらいの時間実行しましたか？ブロックのダウンロードが始まるまで数分かかることがあります。特にケーブルモデムを使っている場合、上りの帯域幅がかなり低いことがあるので、ブロック要求リストのアップロードに時間がかかることがあります。

もう一度実行してもブロックがダウンロードされない場合は、少なくとも数時間実行し続けてからdebug.logを送ってください。そうすれば、私のノードがあなたに接続する時間ができ、私の側で何が表示されているか確認してあなたのdebug.logと照合できます。

閉じる時の最小化オプションについてはその通りで、別にできない理由はありません。Marttiはもともと別々にしていたのを、私がサブオプションにしてしまいました。私のミスです。元に戻します。

Liberty Standardの書き込み：
> それが言いたかったことです。ステータスバーに表示されるブロックはプログラムを
> 実行している間、まったく増えませんでした。debug.logを添付しました。
>
> Gnomeでトレイアイコンをテストする良い方法は、通知領域を削除してから再度追加
> することです。通知領域を再追加した後もアイコンが表示されていれば、正しく動作
> しています。
>
> 私は通常、アプリケーションの設定でトレイに最小化ではなく、トレイに閉じるように
> しています。そしてアプリケーションを最小化したままにしておきます。そうすれば
> 誤ってプログラムを閉じることがなく、トレイからアプリケーションを開く利便性も
> 保てます。（開いているウィンドウを「タスクバー」に表示せず、クリックすると
> 開いているウィンドウをサブメニュー項目として表示するアイコンを置いています。）
> そしてトレイアイコンが消えたら、設定に入ってトレイアイコン設定を無効にしてから
> 再度有効にして再表示させます。現在のBitcoinの設定では、トレイに最小化の
> チェックボックスを有効にしないとトレイに閉じるのチェックマークを有効に
> できないため、これが不可能です。
>
>
> 2009年11月8日 午前9:08、Satoshi Nakamoto <satoshin@gmx.com
> <mailto:satoshin@gmx.com>> の書き込み：
>
>     Liberty Standardの書き込み：
>
>         ダウンロードして実行できました。CPUをかなり使っているので、
>         正常に動作していると思います。以前に生成されたブロックは
>         ダウンロードされていません。これはバグですか、新機能ですか？
>
>
>     ステータスバーのブロック数が約26600まで上がっていないということであれば、
>     それはバグです。debug.logを送ってください。
>     （~/.bitcoin/debug.logにあります）
>
>
>         Gnomeのシステムトレイはあまり信頼性がありません。アイコンが消えて
>         プログラムに戻る方法がなくなることがあります。Bitcoinでもこれが
>         起こりうることを確認しました。既に実行中のBitcoinを起動した時に、
>         既に実行中のBitcoinプロセスのGUIを表示してくれると良いのですが。
>
>
>     Windowsのように、Linux上で既に実行中のプログラムを見つけて表示する方法は
>     まだ分かっていません。あなたのお話を聞いて、少なくともトレイに最小化の
>     オプションを初期状態ではデフォルトでオフにすべきですね。
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
