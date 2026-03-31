---
title: "Re: いくつかの提案"
date: 2009-12-12T18:17:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg55#msg55"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/21/"
threadId: "bt-a-few-suggestions"
translationStatus: complete
---

<!-- tone-skip -->
> [Quote from: madhatter2 on December 12, 2009, 06:34:21 AM](https://bitcointalk.org/index.php?topic=12.msg51#msg51)
> SVN 0.2をMac OS X 10.4.11/Intelでほぼコンパイルできるようになりました（PPC970マシンもあるのでPPCビルドも可能です）。ウィンドウシステムはwxwidgets経由のネイティブCarbonです！高速です！新しいmakefile（makefile.osx、もちろんmakefile.unixベース... autoconfの使用を検討したことはありますか？）を作成し、header.hにいくつかのifdefを追加しなければなりませんでした。パッチがあります。引き続きいじってみます。次はFreeBSDで試すかもしれません。
<!-- /tone-skip -->
Macサポートは良いな。wxWidgetsはクロスプラットフォームで本当に効果を発揮している。

PPCは試さないでほしい。PPCはビッグエンディアンで、Bitcoinはリトルエンディアンだ。バイトスワップの可能性があるノードが存在すると、ネットワークのデバッグが困難になる無限のエンディアンバグが発生する。いずれにせよPPCは衰退途上だ。

autoconfは検討した。autoconfは、makefileが泥沼化した大規模プロジェクトには必要だが、私たちはまだ十分に小さいので、なしの方が最適だと思う。できるだけ長くmakefileをシンプルに保ちたいと思っている。

引用：「Bitcoinを2つのアプリに分割するのが理想的だと思います。wxwidgetsのフロントエンド（ほとんど出来上がっているので）と、制御用TCPソケットにバインドするバックエンドです。ソースを読んで分離がどれくらい難しいか確認していますが、かなり簡単なはずだと思います。もちろんAPIの開発が必要になりますが。」
考えただけで頭が痛くなる。すべてのUIバックエンドをTCP接続経由にすると、すべてが2倍難しくなる。リストビューコントロールの動作方法のため、リストビューコントロールを更新し続けるためにUIと内部データ構造の間には非常に大きな帯域幅が必要だ。

コマンドラインでの制御の方が好ましい。それでリモート管理とバッチ自動化が実現できる。
