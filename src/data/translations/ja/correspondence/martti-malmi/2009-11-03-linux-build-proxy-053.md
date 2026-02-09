---
title: "返信: Linuxビルド、プロキシ"
date: 2009-11-03T15:53:25Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Linuxビルドに取り組むのを楽しみにしていたよ。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 53
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "networking"
  - "development"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

Linuxビルドに取り組むのを楽しみにしていたよ。

Freenodeの隠しサービスに接続すると、悪用のためTORもそこから禁止したと言われて切断される。Unix上でパスワードユーティリティを実行してアカウントをメールで申請してログインできるようにする手順が何ステップかあるけど、かなり複雑になる。1つのアカウントを申請して全員で同じアカウントを使うのはどうだろう？IRCサーバーはおそらくアカウントを1ログインに制限しているか、管理者が同じアカウントに十数個のログインがあるのを嫌がるだろうけど。

IRCの件は別として、プロキシのテストはどうだった？以前接続したことがあるから、addr.datに既知のノードアドレスが含まれているけど、どれがオンラインかを知るIRCがないと、見つけるのに時間がかかる。通常、着信接続を受け入れられるノードは君以外に1～3個だ。既に君を知っている既存のノードは最終的に接続してくるだろう。何個の接続が得られた？どのくらい時間がかかった？TOR経由で正常にアウトバウンド接続できたかを知るには、debug.logで「connected」を検索する必要があるだろうね。

TORで最初に接続するには、通常の接続で一度シードを得ることなく、着信接続を受け入れられる既存ノードのアドレスを知って、こうやってシードする必要がある：
bitcoin -proxy=127.0.0.1:9050 -addnode=<ノードのip>

着信接続を受け入れるノードのうち、自分のIPをプログラムにハードコードしてもいいという人がいれば、自動的にシードできる。あるいは手順と一緒にWikiページにIPシードアドレスを掲載するとか。

もう一つの選択肢は、TORノードを禁止しないIRCサーバーを世界中から探すことだ。あるいは誰かにセットアップしてもらえれば。IRCサーバーがTORを禁止するのは、実際のテキストチャットがあるからだ...ボットやジャンクしかないサーバーなら気にしないだろう。フォーラムかメーリングリストに質問を投稿して、誰か知っている人がいないか聞いてみるべきだろうね。

もう一つの問題は、TORユーザーは着信接続を受け入れられないことで、受け入れられるノードが非常に少ない。全員がTORに移行したら、接続先のノードがなくなってしまう。

着信接続を受け入れられるノードが不足している。最近は2～4個程度だ。ルーターのポートフォワーディングを設定することの重要性を強調する必要がある。すべてのP2Pファイル共有プログラムにはその方法の説明がある。bitcoin.sourceforge.netのホームページに、着信接続を受け入れるためのポートフォワーディング設定を促す段落と、各ルーターでの方法を説明するサイトへのリンクを置くべきだ。

mmalmi@cc.hut.fi の書き込み:
> ここまで移植した分をsvn/branchesにアップロードしました。Util、script、db
> とヘッダーは完全にコンパイルできるようになり、net.cppは部分的にコンパイル
> できるので、まだ作業が残っています。
>
> _beginthreadにはLinuxの直接的な等価物がないので、代わりにBoostスレッドを
> 使いました。
>
> Tor SOCKSプロキシを使って接続できませんでした。FreenodeのTorポリシーで、
> 彼らの隠しサービスへの接続が必要だからかもしれません：
> http://freenode.net/irc_servers.shtml#tor
>
>> heapchk()はMSVCRTのデバッグ用のもので使われていない。Linuxではno-opに
>> できる。OpenSSLはLinuxでは自動的に/dev/urandomを使ってシードするので、
>> RandAddSeedPerfmonもno-opにできる。
>>
>> 十分にオフネットでテストするまでネットワークに接続させないでくれ。2台の
>> パソコンがあれば、インターネットを切断して「bitcoin -connect=<ip>」で互いに
>> 接続できる。1台はWindows、もう1台はLinuxで。-connectを使えば
>> 192.168.x.xのようなルーティング不可能なアドレスにも接続できる。まだ想定
>> していなかった不正なデータを送り出したり、ネットワーク上で何か反社会的な
>> ことをしてしまったりして、ネットワークの信頼性に悪影響を与えたくない。
>>
>> ビルドできる状態のものができたら、テストする時間はある。今実施中の変更に
>> 対するストレステストに含めることができるよ。
>>
>> mmalmi@cc.hut.fi の書き込み:
>>> util.hでQueryPerformanceCounterをLinuxのgettimeofdayに置き換える
>>> #ifdefを作りました。Unicode/ANSIのエラーはwxWidgets 2.9にアップデート
>>> したらコード変更なしで解決しました。現在Linuxで出ている唯一のコンパイル
>>> エラーはutil.hのheapchk()からのものです。
>>>
>>>> 見つけた移植性のないコードをいくつか修正した：
>>>> QueryPerformanceCounter
>>>> printfフォーマット文字列の%I64d
>>>> Sleep
>>>> CheckDiskSpace
>>>>
>>>> 他に修正すべき移植性のないコードを知っていたら教えてほしい。
>>>>
>>>> debug.logとdb.logは、現在のディレクトリではなく、データファイルと同じ
>>>> ディレクトリ（%appdata%\Bitcoin）に移動しようと思う。
>>>
>>>
>>>
>
>
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
