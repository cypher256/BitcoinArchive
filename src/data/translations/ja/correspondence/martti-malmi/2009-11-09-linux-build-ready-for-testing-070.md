---
title: "返信: Linuxビルドのテスト準備完了"
date: 2009-11-09T08:32:08Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "ブロックダウンロードは接続後すぐに開始し、Windows PCよりも速くダウンロードされたと報告。学校のプロジェクトのため、12月まで積極的な開発は難しいと連絡。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 70
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

> Martti、あなたが実行した時、ブロックのダウンロードが始まるまでどのくらい
> かかりましたか、そしてどのくらいの速度でダウンロードしましたか？

接続後すぐに開始し、CPUが遅いWindows PCよりも速くダウンロードしました。

学校のプロジェクト（偶然にもC++のコーディング）に約1ヶ月集中しなければならないので、12月までは積極的な開発に使える時間があまりありません。とにかく連絡は取り合いましょう。

> Liberty Standardの書き込み：
>> ブロックが増え始めました。Windows版よりも増え始めるまでに確実に時間が
>> かかります。また、Windows版よりも遅い速度で増えているかもしれません。
>> 送ってくれたLinuxビルドでデバッグが有効になっているのでしょうか？ブロックは
>> 毎秒約15ブロックのペースで増えています（時計を見ながらの目測です）。
>> Windows版でどのくらい速かったかは計測していませんが、もっと速かった気がします。
>
> 開始までどのくらいかかりましたか？たまたま要求したノードが遅いだけ
> かもしれません。遅い開始はダウンロード速度が遅いことと整合します。
>
> 現在のdebug.logファイルを見て、何が起こっているか理解したいです。
> 相手側の接続が本当に遅いだけかもしれませんし、何かがおかしくて失敗して
> リトライしているのかもしれません。時間がかかりすぎると他のユーザーを
> 混乱させる可能性があります。
>
> Martti、あなたが実行した時、ブロックのダウンロードが始まるまでどのくらい
> かかりましたか、そしてどのくらいの速度でダウンロードしましたか？
>
>>    Bitcoinを起動した時にBitcoinのポートが利用できないと、コマンドラインに
>>    以下のメッセージが表示されます。Bitcoinのポートが利用できる時にはこれらの
>>    メッセージは表示されません。デフォルトポートが使用中の場合にBitcoinが
>>    別のポートを選ぶようにすることは可能でしょうか？BitTorrentクライアント
>>    でも同じことが時々起こります。再起動すると、以前開いていたポートが
>>    閉じています。ポートを変更するだけで再び動き始めます。
>>
>>    /usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
>>    Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
>>    /usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF
>>    class: ELFCLASS64
>>    Failed to load module:
>>    /usr/lib/gio/modules/libgioremote-volume-monitor.so
>>    /usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
>>    Failed to load module: /usr/lib/gio/modules/libgiogconf.so
>
> 既にSO_REUSEADDRを使用しているので、閉じた後のTIME_WAIT状態でも
> ポートをバインドできます。バインドに失敗するのはプログラムが本当にまだ
> 実行中の場合だけのはずです。Bitcoinの2つのコピーを同じマシンで同時に
> 実行しないことが重要です。同時にデータベースを変更することになるためです。
> 1台のマシンで2つ実行する必要はありません。コイン生成は今では自動的に
> 複数のプロセッサを使用します。
>
> これらのlibエラーが何なのかよく分かりません。調べてみます。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
