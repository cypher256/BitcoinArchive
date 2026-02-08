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
threadTitle: "A few suggestions"
threadPosition: 1
translationStatus: complete
---

[madhatter2の2009年12月10日 02:00:17 PMの投稿より引用](https://bitcointalk.org/index.php?topic=12.msg44#msg44)フロントエンドは携帯電話のような非常にCPUパワーの低いクライアントでも動作させることができます。
これはモバイル向けの良いアプローチです。PHP（任意の言語）が使用するプログラマティックAPIでWeb UIを提示すれば、リモート管理、モバイル、その他常時オンラインで静的IPを持てないあらゆるクライアントに対応できます。ウェブメールのようなものです。ソフトウェアをインストールする必要がなく、ウェブサイトでアカウントを作成するだけで済むなら、新規ユーザーが始めやすくなるでしょう。

引用：「アプリはダウンロード前にプリシードできます。プリシードすればTOR+IRC問題も解決します。人々がI2P+TOR上でこのシステムを使いたがることは分かっています。」
ええ、十分な数の静的ノードができてシードリストをプリプログラムできるようになれば、IRCを段階的に廃止できます。一度シードされれば、IRCは必要ありません。

引用：「また、ブロックをプリシードしておけば、初回起動時にダウンロードする必要がなくなります。（遅いADSLで28,000ブロックをダウンロードするのは永遠にかかります。ブロックが数百万になったときにどれだけかかるか想像もできません──一生かかるでしょう）。」
0.1.5では初回ブロックダウンロードが停滞する問題がいくつかありました。0.2にはスムーズに進むようにするコードが含まれています。1時間もかからないはずだと思います。0.2のリリースを急がないといけません。

ブロックは線形的に増加するので、数百万になるのは数十年先です。理論的には、ブロックダウンロード時間は今から8ヶ月後にピークに達するはずです。その頃にはムーアの法則がブロックチェーンよりも速く成長しているでしょう。

引用：「CVSアクセスか何かをいただけますか？（無理なら、パッチを送ってもいいですか？）お手伝いしたいです。」
SourceForge上のSVNです。PMまたはメールでSourceForgeのアカウントを教えていただければ、アクセス権を付与します。

引用：「私は主にLinux/BSDの人間なので、その分野の専門知識を提供したいと思います。」
それは素晴らしいです。私はその分野の専門知識が少ないからです。例えば、Linuxで「システム起動時にBitcoinを開始する」機能を実装する最善の方法をまだ調べていません。Windowsでは、このオプションはスタートアップフォルダにアイコンを追加/削除します。
