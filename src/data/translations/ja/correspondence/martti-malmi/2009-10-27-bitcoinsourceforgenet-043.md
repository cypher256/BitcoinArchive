---
title: "Re: 転送: bitcoin.sourceforge.net"
date: 2009-10-27T03:02:49Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミが Bitweaver の IS_LIVE 設定と SourceForge ホスティングの遅さを説明し、Boost のクロスプラットフォーム対応スレッド・ソケットライブラリ使用をサトシに提案。"
isSatoshi: false
tags:
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
relatedEntries:
  - correspondence/liberty-standard/2009-10-26-bitcoin-website-is-down
  - emails/bitcoin-list/2009-10-26-re-does-bitcoin-crash-in-windows-leitl
translationStatus: complete
quotes:
  - id: "q1"
    person: "Eugen Leitl"
    personSlug: "eugen-leitl"
    date: "2009-10-26T12:46:27Z"
    sourceEntryId: "emails/bitcoin-list/2009-10-26-re-does-bitcoin-crash-in-windows-leitl"
  - id: "q2"
    parent: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-10-26T17:50:10Z"
    sourceEntryId: "correspondence/martti-malmi/2009-10-26-bitcoinsourceforgenet-042"
  - id: "q3"
    parent: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    date: "2009-10-26T15:00:00Z"
    sourceEntryId: "correspondence/liberty-standard/2009-10-26-bitcoin-website-is-down"
---

<!-- speaker: Martti Malmi -->
IS_LIVE オプションは確かに false に設定されていましたが、ユーザーへのエラーメッセージの表示にしか影響しません。サイトが時々遅くなることに気づいていて、読み込みに最大 30秒かかることもあります。SourceForge のホスティングに関連していると思います。Bitweaver は最も軽量な PHP CMS の一つのはずですが、何か問題がないか確認してみます。

話は変わりますが、Windows 固有のものの代わりに Boost のスレッドとソケットライブラリを使うことはできると思いますか？コードに他に Windows 専用の関数は使われていますか？

<!-- quote: q1 -->
> 何が起きているか分かる？自分が見るたびに正常なんだけど。
>
>
> <!-- quote: q2 -->
>> > bitcoin.sourceforge.net は今は正常に見える。sourceforge が何か
>
> 今は動作していない。
>
> <!-- quote: q2 -->
>> > メンテナンスをしていたのかもしれない。
>
>
> <!-- quote: q3 -->
>> ご存じでなければ、ビットコインの公式サイトが落ちている。
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
