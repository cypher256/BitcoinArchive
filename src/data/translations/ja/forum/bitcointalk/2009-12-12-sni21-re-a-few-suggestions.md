---
title: "Re: いくつかの提案"
date: 2009-12-12T18:17:10.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg55#msg55"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/21/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 4
translationStatus: complete
---

[madhatter2の2009年12月12日 06:34:21 AMの投稿より引用](https://bitcointalk.org/index.php?topic=12.msg51#msg51)SVN 0.2をMac OS X 10.4.11/Intelでほぼコンパイルできるようになりました（PPC970マシンもあるのでPPCビルドも可能です）。ウィンドウシステムはwxwidgets経由のネイティブCarbonです！高速です！新しいmakefile（makefile.osx、もちろんmakefile.unixベース... autoconfの使用を検討したことはありますか？）を作成し、header.hにいくつかのifdefを追加しなければなりませんでした。パッチがあります。引き続きいじってみます。次はFreeBSDで試すかもしれません。
Macサポートは良いですね。wxWidgetsはクロスプラットフォームで本当に効果を発揮しています。

PPCは試さないでください。PPCはビッグエンディアンで、Bitcoinはリトルエンディアンです。バイトスワップの可能性があるノードが存在すると、ネットワークのデバッグが困難になる無限のエンディアンバグが発生します。いずれにせよPPCは衰退途上です。

autoconfは検討しました。autoconfは、makefileが泥沼化した大規模プロジェクトには必要ですが、私たちはまだ十分に小さいので、なしの方が最適だと思います。できるだけ長くmakefileをシンプルに保ちたいと思っています。

引用：「Bitcoinを2つのアプリに分割するのが理想的だと思います。wxwidgetsのフロントエンド（ほとんど出来上がっているので）と、制御用TCPソケットにバインドするバックエンドです。ソースを読んで分離がどれくらい難しいか確認していますが、かなり簡単なはずだと思います。もちろんAPIの開発が必要になりますが。」
考えただけで頭が痛くなります。すべてのUIバックエンドをTCP接続経由にすると、すべてが2倍難しくなります。リストビューコントロールの動作方法のため、リストビューコントロールを更新し続けるためにUIと内部データ構造の間には非常に大きな帯域幅が必要です。

コマンドラインでの制御の方が好ましいです。それでリモート管理とバッチ自動化が実現できます。
