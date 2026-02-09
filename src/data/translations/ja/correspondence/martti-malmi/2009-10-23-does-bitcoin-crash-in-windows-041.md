---
title: "返信: [bitcoin-list] BitcoinはWindowsでクラッシュしますか？"
date: 2009-10-23T23:55:06Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "v0.1.5でのクラッシュ報告は受けていない。Windowsでは非常に安定している。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 41
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

Liberty Standard の書き込み:
> WindowsユーザーはBitcoinがたまにクラッシュすることがありますか？
> 最近wine-1.0.1で実行しているBitcoinが頻繁にクラッシュしています。これが
> Wineの問題なのかBitcoinの問題なのか気になりました。

v0.1.5でのクラッシュ報告は受けていない。Windowsでは非常に安定している。Wineに関連した問題だと思う。Wineでまたクラッシュしてターミナルに何か表示されたら、メールしてほしい。何が起きたか突き止められるかもしれないし、回避策を見つけられるかもしれない。Marttiと一緒に近くリリースする新しいバージョンに取り組んでいて、Wineの修正も入れられるといいんだけど。

> Bitcoinを起動するとターミナルに以下の4行が表示されます。
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub

それらは心配するようなものには見えない。おそらくWineで実装されていない関数が無害にスタブアウトされているだけだ。

> 以前はターミナルからBitcoinを起動していなかったので、クラッシュ時に何が
> 表示されるかわかりませんが、次にクラッシュした時に結果を返信します。
>
> Bitcoinが最初に以前完了したブロックをダウンロードする際、debug.logファイルが
> 17.4 MBまで増えてから増加が止まります。より多くのBitcoinが完成するにつれて
> 成長し続けると思います。

ディスク容量を節約したければ、debug.logは時々削除して構わない。デバッグに役立つステータスメッセージに過ぎないからね。

bitcoin.sourceforge.netは今は正常に見える。SourceForgeがメンテナンスをしていたのかもしれない。

Satoshi

------------------------------------------------------------------------------
Come build with us! The BlackBerry(R) Developer Conference in SF, CA
is the only developer event you need to attend this year. Jumpstart your
developing skills, take BlackBerry mobile applications to market and stay
ahead of the curve. Join us from November 9 - 12, 2009. Register now!
http://p.sf.net/sfu/devconference
_______________________________________________
bitcoin-list mailing list
bitcoin-list@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/bitcoin-list

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
