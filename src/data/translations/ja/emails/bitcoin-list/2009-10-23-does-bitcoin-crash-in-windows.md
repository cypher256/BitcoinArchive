---
title: "[bitcoin-list] ビットコインは Windows でクラッシュするか ?"
date: 2009-10-23T11:50:10Z
type: "mailing-list"
source: "bitcoin-list"
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/23818861/"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "NewLibertyStandard が Wine 1.0.1 上でビットコインが断続的にクラッシュすると報告し、ウォレット残高との相関を推測し、起動時にターミナルに出力される警告を共有する。"
isSatoshi: false
tags:
  - "mailing-list"
  - "wine"
  - "crash-report"
  - "linux"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/threads/10/"
translationStatus: complete
---

Windows ユーザーの皆さん、ビットコインが時々クラッシュすることはありますか ?

最近、wine-1.0.1 上で動かしているビットコインが頻繁にクラッシュしている。これが Wine の問題なのかビットコインの問題なのかが気になっている。所持しているビットコインの量と関係があるのではないかと推測している。所持量が少なかった頃はクラッシュが少なく、所持量が増えるとクラッシュが増えるからだ。これがあると、新しくインストールしたビットコインに残高を送るのをためらってしまう。とはいえ、新規インストール直後でも数回クラッシュしたので、私の思い違いかもしれない。

ビットコインを起動するとターミナルに以下の 4 行が出力される。
fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
fixme:toolhelp:Heap32ListFirst : stub
fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
fixme:toolhelp:Heap32ListFirst : stub

これまでビットコインをターミナルから起動していなかったので、クラッシュ時に何が出力されるかは分からない。次にクラッシュしたら結果を返信する。

ビットコインが既存ブロックをダウンロードしている間、debug.log は 17.4 MB まで増加して、その後増加が止まる。ビットコインが採掘されるにつれて、また増加していくのだろうと想像している。

~NewLibertyStandard~
