---
title: "Re: Linuxビルドのテスト準備完了"
date: 2009-11-09T01:23:59Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがLiberty Standardから報告されたLinuxビルドのブロックダウンロード速度の遅さを調査し、マルミにも比較データを求める。代替ポートを使用できない理由も説明。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadPosition: 68
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

Liberty Standardの書き込み：
> ブロックが増え始めました。Windows版よりも増え始めるまでに確実に時間がかかります。
> また、Windows版よりも遅い速度で増えているかもしれません。送ってくれたLinuxビルドで
> デバッグが有効になっているのでしょうか？ブロックは毎秒約15ブロックのペースで増えて
> います（時計を見ながらの目測です）。Windows版でどのくらい速かったかは計測して
> いませんが、もっと速かった気がします。

開始までどのくらいかかった？たまたま要求したノードが遅いだけかもしれない。遅い開始はダウンロード速度が遅いことと整合する。

現在のdebug.logファイルを見て、何が起こっているか理解したい。相手側の接続が本当に遅いだけかもしれないし、何かがおかしくて失敗してリトライしているのかもしれない。時間がかかりすぎると他のユーザーを混乱させる可能性がある。

Martti、あなたが実行した時、ブロックのダウンロードが始まるまでどのくらいかかった？そしてどのくらいの速度でダウンロードした？

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

既にSO_REUSEADDRを使用しているので、閉じた後のTIME_WAIT状態でもポートをバインドできる。バインドに失敗するのはプログラムが本当にまだ実行中の場合だけのはずだ。Bitcoinの2つのコピーを同じマシンで同時に実行しないことが重要だ。同時にデータベースを変更することになるためだ。1台のマシンで2つ実行する必要はない。コイン生成は今では自動的に複数のプロセッサを使用する。

これらのlibエラーが何なのかよく分からない。調べてみる。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
