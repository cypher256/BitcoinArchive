---
title: "Re: Linuxビルドのテスト準備完了"
date: 2009-11-09T05:42:59Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがブロックダウンロードのボトルネックを診断し、未確認トランザクションがある状態でのシャットダウンにリスクはないと説明。バックグラウンドでのデータベースシャットダウンやデータディレクトリの指定方法についても解説。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "development"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
    note: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
  - id: "q2"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    parent: "q1"
  - id: "q3"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    parent: "q1"
---

<!-- speaker: Satoshi Nakamoto -->
ありがとう、何が起こったか分かった。最初のノードが遅かったため、他の全員にもブロックを要求してしまい、全体が詰まっただけだ。これは修正できる。正しいやり方を少し考える必要がある。

未確認の状態でシャットダウンしてもリスクはない。トランザクションや新しいブロックを作成すると、すぐにネットワークにブロードキャストされる。その後の確認数/#の増加は結果を監視しているだけだ。その間にあなたのノードが承認を促進するために何かをすることはない。

考えてみれば、Bitcoinを閉じると、メインウィンドウはすぐに閉じるが、バックグラウンドでデータベースの秩序あるフラッシュとシャットダウンを完了するために実行を続ける。それを実装する前は、応答しない固まったウィンドウがずっと残っているのが煩わしかったのだ。バックグラウンドでの秩序あるシャットダウンが完了するまでポートはロックされるが、これは別のコピーが完了するまでデータベースに触れないようにするための重要な保護だ。シャットダウンに数秒以上かかったことはない。

Wineでは、Windows版がSO_REUSEADDRを実行する方法がないので、ポートが閉じた後に60秒（私のシステムでは）のTIME_WAITが追加される。

2つのコピー間で転送する必要がある場合は、もう一方のBitcoinアドレスに送ることができる。受信側のコピーはその時点でオンラインである必要はない。

異なるデータディレクトリを使用するためのコマンドラインは：<br>
bitcoin -datadir=<directory>

例えば、Linuxでのデフォルトディレクトリは（~は使わないでくれ）：
bitcoin -datadir=/home/yourusername/.bitcoin

通常このスイッチを使う必要はないはずだ。それでも2つのインスタンスを同時に実行することはできない。

<!-- speaker: Liberty Standard -->
<!-- quote: q1 -->
<!-- tone-skip -->
> 2009年11月9日 午前3:23、Satoshi Nakamoto <satoshin@gmx.com
>
> <!-- quote: q2 -->
>> 開始までどのくらいかかった？たまたま要求したノードが遅いだけ
>> かもしれない。遅い開始はダウンロード速度が遅いことと整合する。
>>
>> 現在のdebug.logファイルを見て、何が起こっているか理解したい。
>> 相手側の接続が本当に遅いだけかもしれないし、何かがおかしくて
>> 失敗してリトライしているのかもしれない。時間がかかりすぎると
>> 他のユーザーを混乱させる可能性がある。
>>
>> Martti、あなたが実行した時、ブロックのダウンロードが始まるまで
>> どのくらいかかったか、そしてどのくらいの速度でダウンロードしたか？
>>
>> 既にSO_REUSEADDRを使用しているので、閉じた後のTIME_WAIT状態でも
>> ポートをバインドできる。バインドに失敗するのはプログラムが本当に
>> まだ実行中の場合だけのはずだ。Bitcoinの2つのコピーを同じマシンで
>> 同時に実行しないことが重要だ。同時にデータベースを変更することに
>> なるためだ。1台のマシンで2つ実行する必要はない。コイン生成は
>> 今では自動的に複数のプロセッサーを使用する。
>>
>> これらのlibエラーが何なのかよく分からない。調べてみる。
>
> <!-- quote: q3 -->
>> ブロックが増え始めました。Windows版よりも増え始めるまでに確実に
>> 時間がかかります。また、Windows版よりも遅い速度で増えている
>> かもしれません。送ってくれたLinuxビルドでデバッグが有効になって
>> いるのでしょうか？ブロックは毎秒約15ブロックのペースで増えて
>> います（時計を見ながらの目測です）。Windows版でどのくらい速かったかは
>> 計測していませんが、もっと速かった気がします。
>>
>> 速いペースで増え始めるまで約30分かかりました。興味深いことに、安定して
>> 増え始める前にCPU使用率が上がり、安定して増え始めると下がりました。
>> ただし今回は最初の数分以内にブロックが2まで増えました。まだBitcoinを
>> 生成していません。Bitcoinが生成されるまで辛抱強く待ちますが、我慢が切れる
>> までに何も生成されなければ、Wine版に戻すつもりです。
>>
>> 現在のdebug.logを添付しました。
>>
>> Bitcoinを起動した時にBitcoinのポートが利用できないと、
>> コマンドラインに以下のメッセージが表示されます。Bitcoinのポートが
>> 利用できる時にはこれらのメッセージは表示されません。デフォルト
>> ポートが使用中の場合にBitcoinが別のポートを選ぶようにすることは
>> 可能でしょうか？BitTorrentクライアントでも同じことが時々
>> 起こります。再起動すると、以前開いていたポートが閉じて
>> います。ポートを変更するだけで再び動き始めます。
>>
>> /usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
>> Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
>> /usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF class: ELFCLASS64
>> Failed to load module: /usr/lib/gio/modules/libgioremote-volume-monitor.so
>> /usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
>> Failed to load module: /usr/lib/gio/modules/libgiogconf.so
>>
>> 2つのインスタンスを同時に実行する理由は、あるBitcoinインスタンスから別の
>> インスタンスにBitcoinを転送するためです。もちろん別々のデータディレクトリに
>> アクセスする必要があります。コマンドライン引数で指定できるようになれば
>> いいのですが。現在はBitcoinのデータフォルダーを仮想マシンに移動して行って
>> います。Bitcoinをシャットダウンして別のデータディレクトリで再起動するのは
>> 良い解決策ではありません。未確認のBitcoinがある間にシャットダウンすると
>> それらのBitcoinを失うリスクがあるからです。
>>
>> ポート使用中エラーが出た時、Bitcoinは確実に実行されていませんでした。
>> プロセスは素早く確実に終了しますが、ポートが再び利用可能になるまでに
>> 30秒から3分かかります（記憶からの推測）。WineでのBitcoin 0.1.5から
>> Linuxビルドへの切り替え時と、LinuxビルドからWineでのBitcoin 0.1.5への
>> 切り替え時に発生しました。
>>
>> もう一つ気づいたのは、バージョン情報ダイアログのテキストが正しく収まって
>> おらず、リサイズもできないことです。
<!-- /tone-skip -->
