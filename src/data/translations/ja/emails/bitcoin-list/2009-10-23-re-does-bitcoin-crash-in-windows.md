---
title: "Re: [bitcoin-list] BitcoinはWindowsでクラッシュしますか？"
date: 2009-10-23T23:57:51.000Z
type: "mailing-list"
source: "bitcoin-list"
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/23824064/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Eugen Leitl"
    slug: "eugen-leitl"
description: "Liberty StandardによるWine上でのBitcoinクラッシュ報告に対するサトシの返信。Wine互換性の問題と判断。オイゲン・ライトルも同スレッドでDebianパッケージについて質問。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/28/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
relatedEntries:
  - aftermath/2009-10-26-eugen-leitl-biography
---

<!-- speaker: Liberty Standard -->
<!-- quote: q1 -->
<!-- tone-skip -->
> Windowsユーザーの方は時々Bitcoinがクラッシュすることがあるか？
> 最近wine-1.0.1上で動作しているBitcoinが頻繁にクラッシュしている。
> これがWineの問題なのかBitcoinの問題なのか気になった。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
v0.1.5でのクラッシュの報告は受けていない。Windows上では非常に安定して動作している。Wine関連の問題だと思う。Wine上で再びクラッシュしてターミナルに何か表示されたら、メールで送ってほしい。何が起きたか解明できるかもしれないし、回避策を見つけられるかもしれない。Marttiと私は間もなくリリースする新バージョンの作業を進めており、そこにWineの修正を含められると良い。

<!-- speaker: Liberty Standard -->
> Bitcoinを起動すると、ターミナルに以下の4行が表示される。
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub

<!-- speaker: Satoshi Nakamoto -->
それらは心配するようなものではなさそうだ。おそらくWineが実装していない関数で、無害にスタブ化されているものだろう。

<!-- speaker: Liberty Standard -->
> 以前はターミナルからBitcoinを起動していなかったので、クラッシュ時に何が
> 表示されるかわからないが、次にクラッシュした時に結果を返信する。
>
> Bitcoinが以前に完了したブロックをダウンロードしている間、debug.logファイルは
> 17.4 MBまで大きくなり、その後成長が止まる。より多くのビットコインが
> 完了するにつれて成長し続けると思う。

<!-- speaker: Satoshi Nakamoto -->
ディスク容量を使いたくなければ、debug.logは時々削除して構わない。デバッグに役立つステータスメッセージが記録されているだけだ。

bitcoin.sourceforge.net は今は正常に見える。おそらくsourceforgeがメンテナンスを行っていたのだろう。

Satoshi
