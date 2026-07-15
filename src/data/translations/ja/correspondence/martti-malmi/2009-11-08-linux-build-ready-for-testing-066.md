---
title: "Re: Linux ビルドのテスト準備完了"
date: 2009-11-08T17:39:39Z
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
description: "サトシが Liberty Standard の Linux テストにおける debug.log を分析し、ブロックダウンロードの問題を調査。トレイ最小化と閉じるオプションの分離にも同意。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    date: "2009-11-08T14:00:00Z"
    sourceEntryId: "correspondence/liberty-standard/2009-11-08-blocks-not-increasing-debug-log"
  - id: "q2"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    parent: "q1"
    date: "2009-11-08T05:52:11Z"
    sourceEntryId: "correspondence/martti-malmi/2009-11-08-linux-build-ready-for-testing-063"
  - id: "q3"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    parent: "q1"
    date: "2009-11-08T08:00:00Z"
    sourceEntryId: "correspondence/liberty-standard/2009-11-08-linux-build-first-impressions"
---

<!-- speaker: Satoshi Nakamoto -->
debug.log では、ブロックリストを要求し、ブロックリストを受信した後、要求されたブロックのリストのアップロードを開始している。ブロックを受信していないが、十分な時間が経っていないので確実なことは言えない。それ以外はすべて正常に見える。

どのくらいの時間実行した？ブロックのダウンロードが始まるまで数分かかることがある。特にケーブルモデムを使っている場合、上りの帯域幅がかなり低いことがあるので、ブロック要求リストのアップロードに時間がかかることがある。

もう一度実行してもブロックがダウンロードされない場合は、少なくとも数時間実行し続けてから debug.log を送ってくれ。そうすれば、私のノードがあなたに接続する時間ができ、私の側で何が表示されているか確認してあなたの debug.log と照合できる。

閉じる時の最小化オプションについてはその通りで、別にできない理由はない。マルッティはもともと別々にしていたのを、私がサブオプションにしてしまった。私のミスだ。元に戻す。

<!-- speaker: Liberty Standard -->
<!-- quote: q1 -->
<!-- tone-skip -->
> そういう意味です。プログラムを動かしている間、ステータスバーに表示されるブロック数は全く増えませんでした。
> debug.log を添付しています。
>
> Gnome でトレイアイコンを検査するには、通知領域を一度削除してから戻すとよいです。
> 通知領域を戻した後にアイコンが表示されていれば、正しく動いているということになります。
>
> 普段、私はアプリケーションの設定でトレイ最小化はオフ、トレイ終了をオンにしています。
> そしてアプリケーションは常時最小化しています。
> こうすれば、誤ってプログラムを閉じる事故もなく、トレイから開ける利便性も保てます
> ( タスクバーにはウインドウを表示しませんが、クリックするとサブメニューで開いているウインドウ一覧を出すアイコンを置いています )。
> もしトレイアイコンが消えたら、設定でアイコン表示をいったん無効にしてから再度有効にすれば戻ります。
> ところが、ビットコインの設定ではこれができません。
> トレイ最小化のチェックを入れないと、トレイ終了のチェックが入れられないからです。
>
>
<!-- /tone-skip -->
<!-- speaker: Satoshi Nakamoto -->
> <!-- quote: q2 -->
>> ステータスバーのブロック数が約 26600 まで上がっていないということであれば、
>> それはバグだ。debug.log を送ってくれ。
>> （~/.bitcoin/debug.log にある）
>>
>> Windows のように、Linux 上で既に実行中のプログラムを見つけて表示する方法は
>> まだ分かっていない。あなたのお話を聞いて、少なくともトレイに最小化の
>> オプションを初期状態ではデフォルトでオフにすべきだな。
>
<!-- speaker: Liberty Standard -->
> <!-- quote: q3 -->
>> ダウンロードしたら起動しました。CPU をかなり使っているので、ちゃんと動いているはずです。
>> 既存ブロックがダウンロードされていませんが、これはバグでしょうか、それとも新機能でしょうか ?
>>
>> Gnome のシステムトレイはあまり安定していません。
>> アイコンが消えてしまって、プログラムに戻る術がなくなることがあります。
>> これがビットコインでも起こり得ることを確認しました。
>> 既にビットコインが起動している状態でビットコインを起動すると、
>> 既に動いているビットコイン処理の GUI が前面に出るようになっていると嬉しいです。
