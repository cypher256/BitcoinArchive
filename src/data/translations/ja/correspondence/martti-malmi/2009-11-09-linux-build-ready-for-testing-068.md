---
title: "Re: Linuxビルドのテスト準備完了"
date: 2009-11-09T01:23:59Z
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
description: "サトシがLiberty Standardから報告されたLinuxビルドのブロックダウンロード速度の遅さを調査し、マルミにも比較データを求める。代替ポートを使用できない理由も説明。"
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
---

<!-- speaker: Liberty Standard -->
<!-- quote: q1 -->
<!-- tone-skip -->
> ブロックが増え始めました。Windows版よりも増え始めるまでに確実に時間がかかります。
> また、Windows版よりも遅い速度で増えているかもしれません。送ってくれたLinuxビルドで
> デバッグが有効になっているのでしょうか？ブロックは毎秒約15ブロックのペースで増えて
> います（時計を見ながらの目測です）。Windows版でどのくらい速かったかは計測して
> いませんが、もっと速かった気がします。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
開始までどのくらいかかった？たまたま要求したノードが遅いだけかもしれない。遅い開始はダウンロード速度が遅いことと整合する。

現在のdebug.logファイルを見て、何が起こっているか理解したい。相手側の接続が本当に遅いだけかもしれないし、何かがおかしくて失敗してリトライしているのかもしれない。時間がかかりすぎると他のユーザーを混乱させる可能性がある。

Martti、あなたが実行した時、ブロックのダウンロードが始まるまでどのくらいかかった？そしてどのくらいの速度でダウンロードした？

<!-- speaker: Liberty Standard -->
>     Bitcoinを起動した時にBitcoinのポートが利用できないと、コマンドラインに
>     以下のメッセージが表示されます。Bitcoinのポートが利用できる時にはこれらの
>     メッセージは表示されません。デフォルトポートが使用中の場合にBitcoinが
>     別のポートを選ぶようにすることは可能でしょうか？BitTorrentクライアント
>     でも同じことが時々起こります。再起動すると、以前開いていたポートが
>     閉じています。ポートを変更するだけで再び動き始めます。
>
>     /usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
>     Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
>     /usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF
>     class: ELFCLASS64
>     Failed to load module:
>     /usr/lib/gio/modules/libgioremote-volume-monitor.so
>     /usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
>     Failed to load module: /usr/lib/gio/modules/libgiogconf.so

<!-- speaker: Satoshi Nakamoto -->
既にSO_REUSEADDRを使用しているので、閉じた後のTIME_WAIT状態でもポートをバインドできる。バインドに失敗するのはプログラムが本当にまだ実行中の場合だけのはずだ。Bitcoinの2つのコピーを同じマシンで同時に実行しないことが重要だ。同時にデータベースを変更することになるためだ。1台のマシンで2つ実行する必要はない。コイン生成は今では自動的に複数のプロセッサーを使用する。

これらのlibエラーが何なのかよく分からない。調べてみる。
