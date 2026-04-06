---
title: "Re: 転送: bitcoin.sourceforge.net"
date: 2009-10-27T03:02:49Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミがBitweaverのIS_LIVE設定とSourceForgeホスティングの遅さを説明し、Boostのクロスプラットフォーム対応スレッド・ソケットライブラリの使用をサトシに提案する。"
isSatoshi: false
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
    person: "Eugen Leitl"
  - id: "q2"
    person: "Oct 24, 2009 at 12:55:06AM +0100, Satoshi Nakamoto"
  - id: "q3"
    person: "Liberty Standard"
---

<!-- speaker: Martti Malmi -->
IS_LIVEオプションは確かにfalseに設定されていましたが、ユーザーへのエラーメッセージの表示にしか影響しません。サイトが時々遅くなることに気づいていて、読み込みに最大30秒かかることもあります。SourceForgeのホスティングに関連していると思います。Bitweaverは最も軽量なPHP CMSの一つのはずですが、何か問題がないか確認してみます。

話は変わりますが、Windows固有のものの代わりにBoostのスレッドとソケットライブラリを使うことはできると思いますか？コードに他にWindows専用の関数は使われていますか？

<!-- speaker: Satoshi Nakamoto -->
> 何が起きているか分かる？自分が見るたびに正常なんだけど。
>
>
> <!-- quote: q1 -->
> <!-- quote: q2 -->
>> > bitcoin.sourceforge.netは今は正常に見える。SourceForgeが
>
> 今は動作していない。
>
>> > メンテナンスをしていたのかもしれない。
>
>
> <!-- quote: q3 -->
>> ご存じないかもしれないが、Bitcoinのウェブサイトがダウンしている。
>>
>> http://bitcoin.sourceforge.net/
>>
>> -----
>> You are running bitweaver in TEST mode
>>
>>     * Click here to log a bug, if this appears to be an error with the
>> application.
>>     * Go here to begin the installation process, if you haven't done so
>> already.
>>     * To hide this message, please set the IS_LIVE constant to TRUE in your
>> kernel/config_inc.php file.

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
