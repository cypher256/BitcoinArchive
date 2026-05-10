---
title: "Re: Linux ビルド、プロキシ"
date: 2009-11-03T15:53:25Z
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
description: "サトシがビットコインの Tor 接続の課題、着信接続を受け入れるノードの不足、ウェブサイトでのポートフォワーディング手順掲載の必要性を議論する。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "networking"
  - "development"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
  - id: "q2"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
---

<!-- speaker: Satoshi Nakamoto -->
Linux ビルドに取り組むのを楽しみにしていたよ。

Freenode の隠しサービスに接続すると、悪用のため TOR もそこから禁止したと言われて切断される。Unix 上でパスワードユーティリティを実行してアカウントをメールで申請してログインできるようにする手順が何ステップかあるけど、かなり複雑になる。1 つのアカウントを申請して全員で同じアカウントを使うのはどうだろう？IRC サーバーはおそらくアカウントを 1 ログインに制限しているか、管理者が同じアカウントに十数個のログインがあるのを嫌がるだろうけど。

IRC の件は別として、プロキシのテストはどうだった？以前接続したことがあるから、addr.dat に既知のノードアドレスが含まれているけど、どれがオンラインかを知る IRC がないと、見つけるのに時間がかかる。通常、着信接続を受け入れられるノードは君以外に 1～3個だ。既に君を知っている既存のノードは最終的に接続してくるだろう。何個の接続が得られた？どのくらい時間がかかった？TOR 経由で正常にアウトバウンド接続できたかを知るには、debug.log で「connected」を検索する必要があるだろうね。

TOR で最初に接続するには、通常の接続で一度シードを得ることなく、着信接続を受け入れられる既存ノードのアドレスを知って、こうやってシードする必要がある：
bitcoin -proxy=127.0.0.1:9050 -addnode=<ノードの ip>

着信接続を受け入れるノードのうち、自分の IP をプログラムにハードコードしてもいいという人がいれば、自動的にシードできる。あるいは手順と一緒に Wiki ページに IP シードアドレスを掲載するとか。

もう一つの選択肢は、TOR ノードを禁止しない IRC サーバーを世界中から探すことだ。あるいは誰かにセットアップしてもらえれば。IRC サーバーが TOR を禁止するのは、実際のテキストチャットがあるからだ……ボットやジャンクしかないサーバーなら気にしないだろう。フォーラムかメーリングリストに質問を投稿して、誰か知っている人がいないか聞いてみるべきだろうね。

もう一つの問題は、TOR ユーザーは着信接続を受け入れられないことで、受け入れられるノードが非常に少ない。全員が TOR に移行したら、接続先のノードがなくなってしまう。

着信接続を受け入れられるノードが不足している。最近は 2～4個程度だ。ルーターのポートフォワーディングを設定することの重要性を強調する必要がある。すべての P2P ファイル共有プログラムにはその方法の説明がある。bitcoin.sourceforge.net のホームページに、着信接続を受け入れるためのポートフォワーディング設定を促す段落と、各ルーターでの方法を説明するサイトへのリンクを置くべきだ。

<!-- speaker: Martti Malmi -->
<!-- quote: q1 -->
<!-- tone-skip -->
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
>> <!-- quote: q2 -->
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
<!-- /tone-skip -->
