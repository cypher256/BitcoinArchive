---
title: "Re: [bitcoin-list] ビットコインは Windows でクラッシュしますか？"
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
description: "Liberty Standard による Wine 上でのビットコインクラッシュ報告に対するサトシの返信。Wine 互換性の問題と判断。オイゲン・ライトルも同スレで Debian パッケージを質問。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/28/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    sourceEntryId: "emails/bitcoin-list/2009-10-23-does-bitcoin-crash-in-windows"
relatedEntries:
  - aftermath/2009-10-26-eugen-leitl-biography
---

<!-- speaker: Liberty Standard -->
<!-- quote: q1 -->
<!-- tone-skip -->
> Windowsユーザーは時々ビットコインがクラッシュすることがあるか？
> 最近wine-1.0.1上で動作しているビットコインが頻繁にクラッシュしている。
> これがWineの問題なのかビットコインの問題なのか気になった。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
v0.1.5 でのクラッシュの報告は受けていない。Windows 上では非常に安定して動作している。Wine 関連の問題だと思う。Wine 上で再びクラッシュしてターミナルに何か表示されたら、メールで送ってほしい。何が起きたか解明できるかもしれないし、回避策を見つけられるかもしれない。Martti と私は間もなくリリースする新バージョンの作業を進めており、そこに Wine の修正を含められると良い。

<!-- speaker: Liberty Standard -->
> ビットコインを起動すると、ターミナルに以下の4行が表示される。
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub

<!-- speaker: Satoshi Nakamoto -->
それらは心配するようなものではなさそうだ。おそらく Wine が実装していない関数で、無害にスタブ化されているものだろう。

<!-- speaker: Liberty Standard -->
> 以前はターミナルからビットコインを起動していなかったので、クラッシュ時に何が
> 表示されるかわからないが、次にクラッシュした時に結果を返信する。
>
> ビットコインが以前に完了したブロックをダウンロードしている間、debug.logファイルは
> 17.4 MBまで大きくなり、その後成長が止まる。より多くのビットコインが
> 完了するにつれて成長し続けると思う。

<!-- speaker: Satoshi Nakamoto -->
ディスク容量を使いたくなければ、debug.log は時々削除して構わない。デバッグに役立つステータスメッセージが記録されているだけだ。

bitcoin.sourceforge.net は今は正常に見える。おそらく sourceforge がメンテナンスを行っていたのだろう。

Satoshi
