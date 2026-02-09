---
title: "返信: 転送: bitcoin.sourceforge.net"
date: 2009-10-27T04:45:47Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "SourceForgeは本当に遅いね。でも他にどうすればいいかわからない。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 44
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

SourceForgeは本当に遅いね。でも他にどうすればいいかわからない。あれはもう標準みたいなもので、大抵のプロジェクトはprojectname.sourceforge.netのサイトを持っている。Google検索でwhatever.sourceforge.netを見かけると、それが公式サイトだと思う。

Bitweaverでユーザーがフォーラムの自分のメッセージを編集（できれば削除も）できるようにする方法はある？

Linuxへの移植がしたくてうずうずしている？一度やってしまうと、テストとビルドの作業量が倍になるから、軽々しく決められることではない。ただ、LibertyのWineクラッシュは心配だ。

できるだけ移植性を高めるようにして、Windowsの呼び出しの代わりに標準Cを使うようにしてきた。スレッド処理は_beginthreadで、標準Cライブラリの一部だ。wxWidgetsにはwxCriticalSectionがあるので使える。ソケットのコードはsend/recvで、MicrosoftがBSDからソケットを移植したのでUnixと同じだと思う。ソケットは直接制御する必要があり、抽象化レイヤーの裏に置くのは良い考えではない。wxWidgetsはクロスプラットフォームのサポート関数を探すのに良い場所だ。できれば#ifdefだらけのコードは避けたい。複数回使われるものはutil.cppの関数にして、その中に#ifdefを入れる形がいいだろう。

ところで、今コミットしていない変更がたくさんある。徹底的にテストするまでネットワークに放出できない重要なプロトコル移行が含まれているからだ。もうそんなに長くはかからないはずだ。

セットアップでスタートアップフォルダのアイコンをアンインストールするようにできる？通常のプログラムグループにアイコンをインストール・アンインストールして、スタートアップフォルダのものはアンインストールだけすればいいと思う。スタートアップフォルダのアイコンをインストール・アンインストール両方するか、アンインストールだけするかは、そこまで大きな問題ではないけど。

mmalmi@cc.hut.fi の書き込み:
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
>> Eugen Leitl の書き込み:
>> On Sat, Oct 24, 2009 at 12:55:06AM +0100, Satoshi Nakamoto wrote:
>>> > bitcoin.sourceforge.netは今は正常に見える。SourceForgeが
>>
>> 今は動作していない。
>>
>>> > メンテナンスをしていたのかもしれない。
>>
>>
>> Liberty Standard の書き込み:
>>> ご存じないかもしれませんが、Bitcoinのウェブサイトがダウンしています。
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

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
