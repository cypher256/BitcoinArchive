---
title: "Re: Linux ビルドのテスト準備完了"
date: 2009-11-09T08:32:08Z
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
description: "ブロックダウンロードは接続後すぐに開始し、Windows PC よりも速くダウンロードされたと報告。学校のプロジェクトのため、12月まで積極的な開発は難しいと連絡。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-11-09T01:23:59Z"
    sourceEntryId: "correspondence/martti-malmi/2009-11-09-linux-build-ready-for-testing-068"
  - id: "q2"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    parent: "q1"
    date: "2009-11-09T00:30:00Z"
    sourceEntryId: "correspondence/liberty-standard/2009-11-09-blocks-increasing-slowly"
translationStatus: complete
---

<!-- tone-skip -->
<!-- quote: q1 -->
> <!-- speaker: Satoshi Nakamoto -->
> マルッティ、あなたが実行した時、ブロックのダウンロードが始まるまでどのくらいかかった？そしてどのくらいの速度でダウンロードした？

<!-- /tone-skip -->

<!-- speaker: Martti Malmi -->
接続後すぐに開始し、CPU が遅い Windows PC よりも速くダウンロードしました。

学校のプロジェクト（偶然にも C++のコーディング）に約 1ヶ月集中しなければならないので、12月までは積極的な開発に使える時間があまりありません。とにかく連絡は取り合いましょう。

<!-- tone-skip -->
<!-- speaker: Satoshi Nakamoto -->
> <!-- quote: q2 -->
>> <!-- speaker: Martti Malmi -->
>> ようやくブロックが増え始めました。Windows 版より明らかに増え始めるまでに時間がかかりますし、増え方も Windows 版より遅いように思えます。
>> 送ってもらった Linux ビルドにデバッグが有効になっていたりしないでしょうか ?
>> ブロックは 1 秒あたり約 15 個ずつ増えています ( 時計を見ながらの目視推定 )。
>> Windows 版での増加速度は計っていませんでしたが、もっと速かった気がします。
> <!-- speaker: Satoshi Nakamoto -->
>
> 開始までどのくらいかかった？たまたま要求したノードが遅いだけかもしれない。遅い開始はダウンロード速度が遅いことと整合する。
>
> 現在の debug.log ファイルを見て、何が起こっているか理解したい。相手側の接続が本当に遅いだけかもしれないし、何かがおかしくて失敗してリトライしているのかもしれない。時間がかかりすぎると他のユーザーを混乱させる可能性がある。
>
> マルッティ、あなたが実行した時、ブロックのダウンロードが始まるまでどのくらいかかった？そしてどのくらいの速度でダウンロードした？
>
>>    <!-- speaker: Martti Malmi -->
>>    ビットコインを起動した時、ビットコインのポートが使えないと、コマンドラインに以下のメッセージが出ます。
>>    ポートが使えるときは、このメッセージは出ません。
>>    既定ポートが塞がっているときは、ビットコインが別のポートを選べるようにはできないでしょうか ?
>>    BitTorrent クライアントでも同じことがあります。
>>    再起動すると、直前まで開いていたポートが閉じています。
>>    ポートを変更するだけで動くようになります。
>>
>>    /usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
>>    Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
>>    /usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF
>>    class: ELFCLASS64
>>    Failed to load module:
>>    /usr/lib/gio/modules/libgioremote-volume-monitor.so
>>    /usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
>>    Failed to load module: /usr/lib/gio/modules/libgiogconf.so
> <!-- speaker: Satoshi Nakamoto -->
>
> 既に SO_REUSEADDR を使用しているので、閉じた後の TIME_WAIT 状態でもポートをバインドできる。
> バインドに失敗するのはプログラムが本当にまだ実行中の場合だけのはずだ。
> ビットコインの 2 つのコピーを同じマシンで同時に実行しないことが重要だ。
> 同時にデータベースを変更することになるためだ。
> 1 台のマシンで 2 つ実行する必要はない。
> コイン生成は今では自動的に複数のプロセッサーを使用する。
>
> これらの lib エラーが何なのかよく分からない。調べてみる。

<!-- /tone-skip -->

<!-- speaker: Martti Malmi -->
