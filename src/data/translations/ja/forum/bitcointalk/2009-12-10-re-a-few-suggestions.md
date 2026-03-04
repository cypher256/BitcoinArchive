---
title: "Re: いくつかの提案"
date: 2009-12-10T19:31:49.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg45#msg45"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/16/"
threadId: "bt-a-few-suggestions"
threadPosition: 1
translationStatus: complete
---

[madhatter2の2009年12月10日 02:00:17 PMの投稿より引用](https://bitcointalk.org/index.php?topic=12.msg44#msg44)フロントエンドは携帯電話のような非常にCPUパワーの低いクライアントでも動作させることができます。
これはモバイル向けの良いアプローチだ。PHP（任意の言語）が使用するプログラマティックAPIでWeb UIを提示すれば、リモート管理、モバイル、その他常時オンラインで静的IPを持てないあらゆるクライアントに対応できる。ウェブメールのようなものだ。ソフトウェアをインストールする必要がなく、ウェブサイトでアカウントを作成するだけで済むなら、新規ユーザーが始めやすくなるだろう。

引用：「アプリはダウンロード前にプリシードできます。プリシードすればTOR+IRC問題も解決します。人々がI2P+TOR上でこのシステムを使いたがることは分かっています。」
ええ、十分な数の静的ノードができてシードリストをプリプログラムできるようになれば、IRCを段階的に廃止できる。一度シードされれば、IRCは必要ない。

引用：「また、ブロックをプリシードしておけば、初回起動時にダウンロードする必要がなくなります。（遅いADSLで28,000ブロックをダウンロードするのは永遠にかかります。ブロックが数百万になったときにどれだけかかるか想像もできません──一生かかるでしょう）。」
0.1.5では初回ブロックダウンロードが停滞する問題がいくつかあった。0.2にはスムーズに進むようにするコードが含まれている。1時間もかからないはずだと思う。0.2のリリースを急がないといけない。

ブロックは線形的に増加するので、数百万になるのは数十年先だ。理論的には、ブロックダウンロード時間は今から8ヶ月後にピークに達するはずだ。その頃にはムーアの法則がブロックチェーンよりも速く成長しているだろう。

引用：「CVSアクセスか何かをいただけますか？（無理なら、パッチを送ってもいいですか？）お手伝いしたいです。」
SourceForge上のSVNだ。PMまたはメールでSourceForgeのアカウントを教えてもらえれば、アクセス権を付与する。

引用：「私は主にLinux/BSDの人間なので、その分野の専門知識を提供したいと思います。」
それは素晴らしい。私はその分野の専門知識が少ないからだ。例えば、Linuxで「システム起動時にBitcoinを開始する」機能を実装する最善の方法をまだ調べていない。Windowsでは、このオプションはスタートアップフォルダにアイコンを追加/削除する。
