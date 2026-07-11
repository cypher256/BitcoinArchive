---
title: "Re: Linux ビルドのテスト準備完了"
date: 2009-11-09T05:42:59Z
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
description: "サトシがブロックダウンロードのボトルネックを診断し、未確認トランザクションがある状態のシャットダウンに危険はないと説明。バックグラウンド DB シャットダウンやデータディレクトリ指定法も解説。"
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
    date: "2009-11-09T00:30:00Z"
    sourceEntryId: "correspondence/liberty-standard/2009-11-09-blocks-increasing-slowly"
  - id: "q2"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    parent: "q1"
    date: "2009-11-09T01:23:59Z"
    sourceEntryId: "correspondence/martti-malmi/2009-11-09-linux-build-ready-for-testing-068"
  - id: "q3"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    parent: "q1"
    date: "2009-11-09T00:30:00Z"
    sourceEntryId: "correspondence/liberty-standard/2009-11-09-blocks-increasing-slowly"
---

<!-- speaker: Satoshi Nakamoto -->
ありがとう、何が起こったか分かった。最初のノードが遅かったため、他の全員にもブロックを要求してしまい、全体が詰まっただけだ。これは修正できる。正しいやり方を少し考える必要がある。

未確認の状態でシャットダウンしてもリスクはない。トランザクションや新しいブロックを作成すると、すぐにネットワークにブロードキャストされる。その後の確認数/#の増加は結果を監視しているだけだ。その間にあなたのノードが承認を促進するために何かをすることはない。

考えてみれば、ビットコインを閉じると、メインウィンドウはすぐに閉じるが、バックグラウンドでデータベースの秩序あるフラッシュとシャットダウンを完了するために実行を続ける。それを実装する前は、応答しない固まったウィンドウがずっと残っているのが煩わしかったのだ。バックグラウンドでの秩序あるシャットダウンが完了するまでポートはロックされるが、これは別のコピーが完了するまでデータベースに触れないようにするための重要な保護だ。シャットダウンに数秒以上かかったことはない。

Wine では、Windows 版が SO_REUSEADDR を実行する方法がないので、ポートが閉じた後に 60秒（私のシステムでは）の TIME_WAIT が追加される。

2 つのコピー間で転送する必要がある場合は、もう一方のビットコインアドレスに送ることができる。受信側のコピーはその時点でオンラインである必要はない。

異なるデータディレクトリを使用するためのコマンドラインは：<br>
bitcoin -datadir=<directory>

例えば、Linux でのデフォルトディレクトリは（~は使わないでくれ）：
bitcoin -datadir=/home/yourusername/.bitcoin

通常このスイッチを使う必要はないはずだ。それでも 2 つのインスタンスを同時に実行することはできない。

<!-- speaker: Liberty Standard -->
<!-- quote: q1 -->
<!-- tone-skip -->
> 2009年11月9日午前 3:23、Satoshi Nakamoto <satoshin@gmx.com
>
> <!-- quote: q2 -->
>> 開始までどのくらいかかった？たまたま要求したノードが遅いだけかもしれない。遅い開始はダウンロード速度が遅いことと整合する。
>>
>> 現在の debug.log ファイルを見て、何が起こっているか理解したい。相手側の接続が本当に遅いだけかもしれないし、何かがおかしくて失敗してリトライしているのかもしれない。時間がかかりすぎると他のユーザーを混乱させる可能性がある。
>>
>> マルッティ、あなたが実行した時、ブロックのダウンロードが始まるまでどのくらいかかった？そしてどのくらいの速度でダウンロードした？
>>
>> 既に SO_REUSEADDR を使用しているので、閉じた後の TIME_WAIT 状態でもポートをバインドできる。
>> バインドに失敗するのはプログラムが本当にまだ実行中の場合だけのはずだ。
>> ビットコインの 2 つのコピーを同じマシンで同時に実行しないことが重要だ。
>> 同時にデータベースを変更することになるためだ。
>> 1 台のマシンで 2 つ実行する必要はない。
>> コイン生成は今では自動的に複数のプロセッサーを使用する。
>>
>> これらの lib エラーが何なのかよく分からない。調べてみる。
>
> <!-- quote: q3 -->
>> ようやくブロックが増え始めました。Windows 版より明らかに増え始めるまでに時間がかかりますし、増え方も Windows 版より遅いように思えます。
>> 送ってもらった Linux ビルドにデバッグが有効になっていたりしないでしょうか ?
>> ブロックは 1 秒あたり約 15 個ずつ増えています ( 時計を見ながらの目視推定 )。
>> Windows 版での増加速度は計っていませんでしたが、もっと速かった気がします。
>>
>> 増加が速くなり始めるまでに 30 分くらいかかりました。
>> 興味深いことに、安定して増加し始める前に CPU 使用率が上がり、安定して増加し始めると下がりました。
>> とはいえ今回はブロックが最初の数分で 2 まで増えました。
>> まだビットコインは生成できていません。
>> 我慢が続く限りビットコイン生成を待つつもりですが、我慢が切れるまでに 1 枚も生成できなかったら、 Wine 版に戻ります。
>>
>> 現在の debug.log を添付しています。
>>
>> ビットコインを起動した時、ビットコインのポートが使えないと、コマンドラインに以下のメッセージが出ます。
>> ポートが使えるときは、このメッセージは出ません。
>> 既定ポートが塞がっているときは、ビットコインが別のポートを選べるようにはできないでしょうか ?
>> BitTorrent クライアントでも同じことがあります。
>> 再起動すると、直前まで開いていたポートが閉じています。
>> ポートを変更するだけで動くようになります。
>>
>> /usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
>> Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
>> /usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF class: ELFCLASS64
>> Failed to load module: /usr/lib/gio/modules/libgioremote-volume-monitor.so
>> /usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
>> Failed to load module: /usr/lib/gio/modules/libgiogconf.so
>>
>> ビットコインを同時に二つ動かす理由は、ビットコインを別のインスタンスに移すためです。
>> もちろん、別々のデータディレクトリを使う必要があります。
>> これはコマンドライン引数で指定できるとよいかもしれません。
>> いまは仮想マシンにビットコインのデータフォルダを移して対応しています。
>> ビットコインを終了して別のデータディレクトリで起動し直すのは、未確定のビットコインがある状態で終了するとそれを失う恐れがあるので、よい解ではありません。
>>
>> ポート使用中エラーが出たとき、ビットコインは確実に動いていませんでした。
>> 私の経験ではビットコインは素早く確実に終了しますが、ポートが再び使えるようになるまで 30 秒から 3 分 ( 記憶からの推定 ) かかります。
>> Wine 上の bitcoin 0.1.5 から Linux ビルドに切り替えた時、また Linux ビルドから Wine 上の bitcoin 0.1.5 に切り替えた時に発生しました。
>>
>> もう一つ気付いた点として、 about ダイアログのテキストが収まりきっておらず、ダイアログのサイズも変更できません。
<!-- /tone-skip -->
