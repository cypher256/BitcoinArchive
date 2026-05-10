---
title: "大衆向け OpenCL マイナー"
date: 2010-10-01T09:21:59.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1334.msg14875#msg14875"
author: "m0mchil"
participants:
  - name: "m0mchil"
    slug: "m0mchil"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "m0mchil がスレッドを開始: 大衆向け OpenCL マイナー"
isSatoshi: false
tags: []
translationStatus: complete
---

**最新のマイナー**

[poclbm_py2exe_20120920](http://github.com/downloads/m0mchil/poclbm/poclbm_py2exe_20120920.7z)

[ミラー](http://debian.fmi.uni-sofia.bg/~maurice/bitcoin/poclbm_py2exe_20120920.7z)

poclbm のソースコードは [http://github.com/m0mchil/poclbm](http://github.com/m0mchil/poclbm) にある。

**GUI**

Kiv が作成。[http://bitcointalk.org/index.php?topic=3878.0](http://bitcointalk.org/index.php?topic=3878.0) を参照。

**ガイド**

Windows - [http://www.newslobster.com/random/how-to-get-started-using-your-gpu-to-mine-for-bitcoins-on-windows](http://www.newslobster.com/random/how-to-get-started-using-your-gpu-to-mine-for-bitcoins-on-windows)

Ubuntu - [http://bitcointalk.org/index.php?topic=2636](http://bitcointalk.org/index.php?topic=2636)

Mac - [https://bitcointalk.org/index.php?topic=12360](https://bitcointalk.org/index.php?topic=12360)

**推奨設定**
（お使いのプラットフォームでより良い設定がある場合は PM で連絡してほしい）

*AMD 5xxx 以上*
'-v -w 128'を使用すること。

**よくある質問**

*Q: 自分のビデオカード/ドライバーは OpenCL に対応しているか？*

AMD - 4xxx 以上。Nvidia - 8xxx 以上。Windows では「GPU Caps Viewer」などのツールで確認できる。

*Q: 「pyopencl.LogicError: clGetPlatformIDs failed」と表示される。これは何か？
Q: 「ImportError: DLL load failed: The specified module could not be found」と表示される。
Q: あるいは「ImportError: DLL load failed: The specified procedure could not be found」と表示される。*

OpenCL が正しくサポートされていない。原因はさまざまである。以前使用していた別ベンダーの古いドライバーや SDK をすべて削除すること。自分の GPU と OS の組み合わせで動作させる方法については、ウェブ検索を利用してほしい。

*Q: 次のパラメーターで実行しようとすると「'--host=http://mining.bitcoin.cz:8332'」で「nonnumeric port」エラーが出る。*

「http://」を削除すること。これはブラウザー用のものである（'--host=mining.bitcoin.cz'となる）。ポートの指定には「--port」を使用する（デフォルトは 8332 なので、使用しているプールが同じポートであれば指定する必要はない）。

*Q: なぜ CPU 使用率が 100%になるのか？*

おそらく OpenCL デバイスとして CPU を選択している。あるいは Linux で AMD Stream SDK 2.2 を使用している場合は、代わりに 2.1 を使用すること。

*Q: 「invalid or stale」とはどういう意味か？*

最後に送信されたブロックが無効（invalid）または古い（stale）であったことを意味する。

*Q: ブロックはどのようにして stale（古い）になるのか？*

他の誰かが解いたばかりのブロックに対してソリューションを送信した場合である。

*Q: なぜブロックが invalid（無効）になるのか？*

オーバークロックしすぎないこと。また Crossfire はオフにすること。あるいは、探索処理に問題がある可能性もある。「accepted」が「invalid」より多ければ問題ない。

*マイナーを実行しようとすると、新しい CMD ウィンドウが一瞬表示されるが、何も読めないほど速く消えてしまう。*

これはコンソールアプリケーションである。「コマンドプロンプト」というあの黒い画面を使って実行する必要がある。
