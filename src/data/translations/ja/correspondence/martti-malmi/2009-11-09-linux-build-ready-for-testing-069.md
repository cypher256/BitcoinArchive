---
title: "返信: Linuxビルドのテスト準備完了"
date: 2009-11-09T05:42:59Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "ブロックダウンロードの問題の原因特定。未確認トランザクション中のシャットダウンのリスクはないことの説明。データディレクトリの指定方法とポートロックの仕組みについて。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 69
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

ありがとうございます、何が起こったか分かりました。最初のノードが遅かったため、他の全員にもブロックを要求してしまい、全体が詰まっただけです。これは修正できます。正しいやり方を少し考える必要があります。

未確認の状態でシャットダウンしてもリスクはありません。トランザクションや新しいブロックを作成すると、すぐにネットワークにブロードキャストされます。その後の確認数/#の増加は結果を監視しているだけです。その間にあなたのノードが承認を促進するために何かをすることはありません。

考えてみれば、Bitcoinを閉じると、メインウィンドウはすぐに閉じますが、バックグラウンドでデータベースの秩序あるフラッシュとシャットダウンを完了するために実行を続けます。それを実装する前は、応答しない固まったウィンドウがずっと残っているのが煩わしかったのです。バックグラウンドでの秩序あるシャットダウンが完了するまでポートはロックされますが、これは別のコピーが完了するまでデータベースに触れないようにするための重要な保護です。シャットダウンに数秒以上かかったことはありません。

Wineでは、Windows版がSO_REUSEADDRを実行する方法がないので、ポートが閉じた後に60秒（私のシステムでは）のTIME_WAITが追加されます。

2つのコピー間で転送する必要がある場合は、もう一方のBitcoinアドレスに送ることができます。受信側のコピーはその時点でオンラインである必要はありません。

異なるデータディレクトリを使用するためのコマンドラインは：
bitcoin -datadir=<directory>

例えば、Linuxでのデフォルトディレクトリは（~は使わないでください）：
bitcoin -datadir=/home/yourusername/.bitcoin

通常このスイッチを使う必要はないはずです。それでも2つのインスタンスを同時に実行することはできません。

Liberty Standardの書き込み：
> 2009年11月9日 午前3:23、Satoshi Nakamoto <satoshin@gmx.com
> <mailto:satoshin@gmx.com>> の書き込み：
>
>     Liberty Standardの書き込み：
>
>         ブロックが増え始めました。Windows版よりも増え始めるまでに確実に
>         時間がかかります。また、Windows版よりも遅い速度で増えている
>         かもしれません。送ってくれたLinuxビルドでデバッグが有効になって
>         いるのでしょうか？ブロックは毎秒約15ブロックのペースで増えて
>         います（時計を見ながらの目測です）。Windows版でどのくらい速かったかは
>         計測していませんが、もっと速かった気がします。
>
>
>     開始までどのくらいかかりましたか？たまたま要求したノードが遅いだけ
>     かもしれません。遅い開始はダウンロード速度が遅いことと整合します。
>
>
> 速いペースで増え始めるまで約30分かかりました。興味深いことに、安定して
> 増え始める前にCPU使用率が上がり、安定して増え始めると下がりました。
> ただし今回は最初の数分以内にブロックが2まで増えました。まだBitcoinを
> 生成していません。Bitcoinが生成されるまで辛抱強く待ちますが、我慢が切れる
> までに何も生成されなければ、Wine版に戻すつもりです。
>
>     現在のdebug.logファイルを見て、何が起こっているか理解したいです。
>     相手側の接続が本当に遅いだけかもしれませんし、何かがおかしくて
>     失敗してリトライしているのかもしれません。時間がかかりすぎると
>     他のユーザーを混乱させる可能性があります。
>
>
> 現在のdebug.logを添付しました。
>
>
>     Martti、あなたが実行した時、ブロックのダウンロードが始まるまで
>     どのくらいかかりましたか、そしてどのくらいの速度でダウンロードしましたか？
>
>
>            Bitcoinを起動した時にBitcoinのポートが利用できないと、
>         コマンドラインに以下のメッセージが表示されます。Bitcoinのポートが
>            利用できる時にはこれらのメッセージは表示されません。デフォルト
>            ポートが使用中の場合にBitcoinが別のポートを選ぶようにすることは
>         可能でしょうか？BitTorrentクライアントでも同じことが時々
>         起こります。再起動すると、以前開いていたポートが閉じて
>         います。ポートを変更するだけで再び動き始めます。
>
>            /usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
>            Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
>            /usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF
>            class: ELFCLASS64
>            Failed to load module:
>            /usr/lib/gio/modules/libgioremote-volume-monitor.so
>            /usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
>            Failed to load module: /usr/lib/gio/modules/libgiogconf.so
>
>
>     既にSO_REUSEADDRを使用しているので、閉じた後のTIME_WAIT状態でも
>     ポートをバインドできます。バインドに失敗するのはプログラムが本当に
>     まだ実行中の場合だけのはずです。Bitcoinの2つのコピーを同じマシンで
>     同時に実行しないことが重要です。同時にデータベースを変更することに
>     なるためです。1台のマシンで2つ実行する必要はありません。コイン生成は
>     今では自動的に複数のプロセッサを使用します。
>
>
> 2つのインスタンスを同時に実行する理由は、あるBitcoinインスタンスから別の
> インスタンスにBitcoinを転送するためです。もちろん別々のデータディレクトリに
> アクセスする必要があります。コマンドライン引数で指定できるようになれば
> いいのですが。現在はBitcoinのデータフォルダを仮想マシンに移動して行って
> います。Bitcoinをシャットダウンして別のデータディレクトリで再起動するのは
> 良い解決策ではありません。未確認のBitcoinがある間にシャットダウンすると
> それらのBitcoinを失うリスクがあるからです。
>
> ポート使用中エラーが出た時、Bitcoinは確実に実行されていませんでした。
> プロセスは素早く確実に終了しますが、ポートが再び利用可能になるまでに
> 30秒から3分かかります（記憶からの推測）。WineでのBitcoin 0.1.5から
> Linuxビルドへの切り替え時と、LinuxビルドからWineでのBitcoin 0.1.5への
> 切り替え時に発生しました。
>
> もう一つ気づいたのは、バージョン情報ダイアログのテキストが正しく収まって
> おらず、リサイズもできないことです。
>
>     これらのlibエラーが何なのかよく分かりません。調べてみます。
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
