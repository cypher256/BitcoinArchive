---
title: "Re: 転送: bitcoin.sourceforge.net"
date: 2009-10-27T04:45:47Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがSourceForgeの遅さ、標準Cを使ったBitcoinの移植性アプローチ、今後のプロトコル変更、Linuxポートへの関心の高まりについて議論する。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
  - id: "q2"
    person: "Eugen Leitl"
    personSlug: "eugen-leitl"
  - id: "q3"
    person: "Oct 24, 2009 at 12:55:06AM +0100, Satoshi Nakamoto"
  - id: "q4"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
---

<!-- speaker: Satoshi Nakamoto -->
SourceForgeは本当に遅いね。でも他にどうすればいいかわからない。あれはもう標準みたいなもので、大抵のプロジェクトはprojectname.sourceforge.netのサイトを持っている。Google検索でwhatever.sourceforge.netを見かけると、それが公式サイトだと思う。

Bitweaverでユーザーがフォーラムの自分のメッセージを編集（できれば削除も）できるようにする方法はある？

Linuxへの移植がしたくてうずうずしている？一度やってしまうと、テストとビルドの作業量が倍になるから、軽々しく決められることではない。ただ、LibertyのWineクラッシュは心配だ。

できるだけ移植性を高めるようにして、Windowsの呼び出しの代わりに標準Cを使うようにしてきた。スレッド処理は_beginthreadで、標準Cライブラリの一部だ。wxWidgetsにはwxCriticalSectionがあるので使える。ソケットのコードはsend/recvで、MicrosoftがBSDからソケットを移植したのでUnixと同じだと思う。ソケットは直接制御する必要があり、抽象化レイヤーの裏に置くのは良い考えではない。wxWidgetsはクロスプラットフォームのサポート関数を探すのに良い場所だ。できれば#ifdefだらけのコードは避けたい。複数回使われるものはutil.cppの関数にして、その中に#ifdefを入れる形がいいだろう。

ところで、今コミットしていない変更がたくさんある。徹底的にテストするまでネットワークに放出できない重要なプロトコル移行が含まれているからだ。もうそんなに長くはかからないはずだ。

セットアップでスタートアップフォルダのアイコンをアンインストールするようにできる？通常のプログラムグループにアイコンをインストール・アンインストールして、スタートアップフォルダのものはアンインストールだけすればいいと思う。スタートアップフォルダのアイコンをインストール・アンインストール両方するか、アンインストールだけするかは、そこまで大きな問題ではないけど。

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
>>> ご存じないかもしれないが、Bitcoinのウェブサイトがダウンしている。
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

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
