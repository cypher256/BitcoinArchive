---
title: "Re: 転送: bitcoin.sourceforge.net"
date: 2009-10-28T21:27:35Z
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
description: "現在のバージョンの Bitweaver では不可能です。Bitweaver の wiki とフォーラムパッケージはそれほど高度ではありません。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
> SourceForgeは本当に遅いね。でも他にどうすればいいかわからない。あれはもう
> 標準みたいなもので、大抵のプロジェクトはprojectname.sourceforge.netの
> サイトを持っている。Google検索でwhatever.sourceforge.netを見かけると、
> それが公式サイトだと思う。
>
> Bitweaverでユーザーがフォーラムの自分のメッセージを編集（できれば削除も）
> できるようにする方法はある？

<!-- speaker: Martti Malmi -->
現在のバージョンの Bitweaver では不可能です。Bitweaver の wiki とフォーラムパッケージはそれほど高度ではありません。SF ホスティングにも、時々遅くなることやメーラーやユーザー IP 取得ができないなどの欠点があります。後で取引所サービスに使うために、prq.se（Wikileaks や Pirate Bay などをホストしている）からウェブホスティングを購入することを検討しています。セキュリティを高めるために別のユーザーアカウントで、プロジェクトサイトもそこにホストできるかもしれません。そこでは Drupal や TikiWiki をセットアップできます。これらはより高度で、Bitweaver よりもずっと大きく活発な開発者/ユーザーコミュニティがあります。

<!-- speaker: Satoshi Nakamoto -->
> Linuxへの移植がしたくてうずうずしている？一度やってしまうと、テストとビルドの
> 作業量が倍になるから、軽々しく決められることではない。ただ、LibertyのWine
> クラッシュは心配だ。
>
> できるだけ移植性を高めるようにして、Windowsの呼び出しの代わりに標準Cを使う
> ようにしてきた。スレッド処理は_beginthreadで、標準Cライブラリの一部だ。
> wxWidgetsにはwxCriticalSectionがあるので使える。ソケットのコードはsend/recv
> で、MicrosoftがBSDからソケットを移植したのでUnixと同じだと思う。ソケットは
> 直接制御する必要があり、抽象化レイヤーの裏に置くのは良い考えではない。
> wxWidgetsはクロスプラットフォームのサポート関数を探すのに良い場所だ。
> できれば#ifdefだらけのコードは避けたい。複数回使われるものはutil.cppの
> 関数にして、その中に#ifdefを入れる形がいいだろう。

<!-- speaker: Martti Malmi -->
はい。Windows のスレッドとソケットライブラリのインクルードをそれらの POSIX 版に置き換えたところ、エラーが少しだけ出るようになりました。主に svn/branches に入れましたが、公式リリースである必要はまだありません。

<!-- speaker: Satoshi Nakamoto -->
> セットアップでスタートアップフォルダーのアイコンをアンインストールするように
> できる？通常のプログラムグループにアイコンをインストール・アンインストールして、
> スタートアップフォルダーのものはアンインストールだけすればいいと思う。
> スタートアップフォルダーのアイコンをインストール・アンインストール両方するか、
> アンインストールだけするかは、そこまで大きな問題ではないけど。

<!-- speaker: Martti Malmi -->
やっておきます。
