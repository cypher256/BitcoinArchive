---
title: "返信: 転送: bitcoin.sourceforge.net"
date: 2009-10-28T21:27:35Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "現在のバージョンのBitweaverでは不可能です。Bitweaverのwikiとフォーラムパッケージはそれほど高度ではありません。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 45
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

> SourceForgeは本当に遅いね。でも他にどうすればいいかわからない。あれはもう
> 標準みたいなもので、大抵のプロジェクトはprojectname.sourceforge.netの
> サイトを持っている。Google検索でwhatever.sourceforge.netを見かけると、
> それが公式サイトだと思う。
>
> Bitweaverでユーザーがフォーラムの自分のメッセージを編集（できれば削除も）
> できるようにする方法はある？

現在のバージョンのBitweaverでは不可能です。Bitweaverのwikiとフォーラムパッケージはそれほど高度ではありません。SFホスティングにも、時々遅くなることやメーラーやユーザーIP取得ができないなどの欠点があります。後で取引所サービスに使うために、prq.se（WikileaksやPirate Bayなどをホストしている）からウェブホスティングを購入することを検討しています。セキュリティを高めるために別のユーザーアカウントで、プロジェクトサイトもそこにホストできるかもしれません。そこではDrupalやTikiWikiをセットアップできます。これらはより高度で、Bitweaverよりもずっと大きく活発な開発者/ユーザーコミュニティがあります。

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

はい。WindowsのスレッドとソケットライブラリのインクルードをそれらのPOSIX版に置き換えたところ、エラーが少しだけ出るようになりました。主にsvn/branchesに入れましたが、公式リリースである必要はまだありません。

> セットアップでスタートアップフォルダのアイコンをアンインストールするように
> できる？通常のプログラムグループにアイコンをインストール・アンインストールして、
> スタートアップフォルダのものはアンインストールだけすればいいと思う。
> スタートアップフォルダのアイコンをインストール・アンインストール両方するか、
> アンインストールだけするかは、そこまで大きな問題ではないけど。

やっておきます。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
