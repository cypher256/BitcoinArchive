---
title: "Re: 転送: bitcoin.sourceforge.net"
date: 2009-10-27T04:45:47Z
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
description: "サトシが SourceForge の遅さ、標準 C を使ったビットコインの移植性アプローチ、今後のプロトコル変更、Linux ポートへの関心の高まりについて議論する。"
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
    sourceEntryId: "correspondence/martti-malmi/2009-10-27-bitcoinsourceforgenet-043"
  - id: "q2"
    person: "Eugen Leitl"
    personSlug: "eugen-leitl"
  - id: "q3"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    sourceEntryId: "correspondence/martti-malmi/2009-10-26-bitcoinsourceforgenet-042"
  - id: "q4"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    sourceEntryId: "correspondence/liberty-standard/2009-10-26-bitcoin-website-is-down"
---

<!-- speaker: Satoshi Nakamoto -->
SourceForge は本当に遅いね。でも他にどうすればいいかわからない。あれはもう標準みたいなもので、大抵のプロジェクトは projectname.sourceforge.net のサイトを持っている。Google 検索で whatever.sourceforge.net を見かけると、それが公式サイトだと思う。

Bitweaver でユーザーがフォーラムの自分のメッセージを編集（できれば削除も）できるようにする方法はある？

Linux への移植がしたくてうずうずしている？一度やってしまうと、テストとビルドの作業量が倍になるから、軽々しく決められることではない。ただ、Liberty の Wine クラッシュは心配だ。

できるだけ移植性を高めるようにして、Windows の呼び出しの代わりに標準 C を使うようにしてきた。スレッド処理は_beginthread で、標準 C ライブラリの一部だ。wxWidgets には wxCriticalSection があるので使える。ソケットのコードは send/recv で、Microsoft が BSD からソケットを移植したので Unix と同じだと思う。ソケットは直接制御する必要があり、抽象化レイヤーの裏に置くのは良い考えではない。wxWidgets はクロスプラットフォームのサポート関数を探すのに良い場所だ。できれば#ifdef だらけのコードは避けたい。複数回使われるものは util.cpp の関数にして、その中に#ifdef を入れる形がいいだろう。

ところで、今コミットしていない変更がたくさんある。徹底的にテストするまでネットワークに放出できない重要なプロトコル移行が含まれているからだ。もうそんなに長くはかからないはずだ。

セットアップでスタートアップフォルダーのアイコンをアンインストールするようにできる？通常のプログラムグループにアイコンをインストール・アンインストールして、スタートアップフォルダーのものはアンインストールだけすればいいと思う。スタートアップフォルダーのアイコンをインストール・アンインストール両方するか、アンインストールだけするかは、そこまで大きな問題ではないけど。

<!-- speaker: Martti Malmi -->
<!-- quote: q1 -->
<!-- tone-skip -->
> IS_LIVEオプションは確かにfalseに設定されていましたが、ユーザーへのエラー
> メッセージの表示にしか影響しません。サイトが時々遅くなることに気づいていて、
> 読み込みに最大30秒かかることもあります。SourceForgeのホスティングに関連して
> いると思います。Bitweaverは最も軽量なPHP CMSの一つのはずですが、何か問題が
> ないか確認してみます。
>
> 話は変わりますが、Windows固有のものの代わりにBoostのスレッドとソケット
> ライブラリを使うことはできると思いますか？コードに他にWindows専用の関数は
> 使われていますか？
>
>> 何が起きているか分かる？自分が見るたびに正常なんだけど。
>>
>>
>> <!-- quote: q2 -->
>> <!-- quote: q3 -->
>>> > bitcoin.sourceforge.netは今は正常に見える。SourceForgeが
>>
>> 今は動作していない。
>>
>>> > メンテナンスをしていたのかもしれない。
>>
>>
>> <!-- quote: q4 -->
>>> ご存じないかもしれないが、ビットコインのウェブサイトがダウンしている。
>>>
>>> http://bitcoin.sourceforge.net/
>>>
>>> -----
>>> You are running bitweaver in TEST mode
>>>
>>>     * Click here to log a bug, if this appears to be an error with the
>>> application.
>>>     * Go here to begin the installation process, if you haven't done so
>>> already.
>>>     * To hide this message, please set the IS_LIVE constant to TRUE
>>> in your
>>> kernel/config_inc.php file.
>
>
>
<!-- /tone-skip -->
