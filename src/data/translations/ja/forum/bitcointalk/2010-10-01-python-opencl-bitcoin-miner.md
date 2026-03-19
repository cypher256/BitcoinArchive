---
title: "大衆向けOpenCLマイナー"
date: 2010-10-01T09:21:59.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1334.msg14875#msg14875"
author: "m0mchil"
participants:
  - name: "m0mchil"
    slug: "m0mchil"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "m0mchilがスレッドを開始: 大衆向けOpenCLマイナー"
isSatoshi: false
threadId: "bt-opencl-miner-for-the-masses"
threadPosition: 1
tags: []
translationStatus: complete
---

**最新のマイナー**

[poclbm_py2exe_20120920](http://github.com/downloads/m0mchil/poclbm/poclbm_py2exe_20120920.7z)

[ミラー](http://debian.fmi.uni-sofia.bg/~maurice/bitcoin/poclbm_py2exe_20120920.7z)

poclbmのソースコードは [http://github.com/m0mchil/poclbm](http://github.com/m0mchil/poclbm) にある。

**GUI**

Kivが作成。[http://bitcointalk.org/index.php?topic=3878.0](http://bitcointalk.org/index.php?topic=3878.0) を参照。

**ガイド**

Windows - [http://www.newslobster.com/random/how-to-get-started-using-your-gpu-to-mine-for-bitcoins-on-windows](http://www.newslobster.com/random/how-to-get-started-using-your-gpu-to-mine-for-bitcoins-on-windows)

Ubuntu - [http://bitcointalk.org/index.php?topic=2636](http://bitcointalk.org/index.php?topic=2636)

Mac - [https://bitcointalk.org/index.php?topic=12360](https://bitcointalk.org/index.php?topic=12360)

**推奨設定**
（お使いのプラットフォームでより良い設定がある場合はPMで連絡してほしい）

*AMD 5xxx以上*
'-v -w 128'を使用すること。

**よくある質問**

*Q: 自分のビデオカード/ドライバーはOpenCLに対応しているか？*

AMD - 4xxx以上。Nvidia - 8xxx以上。Windowsでは「GPU Caps Viewer」などのツールで確認できる。

*Q: 「pyopencl.LogicError: clGetPlatformIDs failed」と表示される。これは何か？
Q: 「ImportError: DLL load failed: The specified module could not be found」と表示される。
Q: あるいは「ImportError: DLL load failed: The specified procedure could not be found」と表示される。*

OpenCLが正しくサポートされていない。原因はさまざまである。以前使用していた別ベンダーの古いドライバーやSDKをすべて削除すること。自分のGPUとOSの組み合わせで動作させる方法については、ウェブ検索を利用してほしい。

*Q: 次のパラメータで実行しようとすると「'--host=http://mining.bitcoin.cz:8332'」で「nonnumeric port」エラーが出る。*

「http://」を削除すること。これはブラウザ用のものである（'--host=mining.bitcoin.cz'となる）。ポートの指定には「--port」を使用する（デフォルトは8332なので、使用しているプールが同じポートであれば指定する必要はない）。

*Q: なぜCPU使用率が100%になるのか？*

おそらくOpenCLデバイスとしてCPUを選択している。あるいはLinuxでAMD Stream SDK 2.2を使用している場合は、代わりに2.1を使用すること。

*Q: 「invalid or stale」とはどういう意味か？*

最後に送信されたブロックが無効（invalid）または古い（stale）であったことを意味する。

*Q: ブロックはどのようにしてstale（古い）になるのか？*

他の誰かが解いたばかりのブロックに対してソリューションを送信した場合である。

*Q: なぜブロックがinvalid（無効）になるのか？*

オーバークロックしすぎないこと。またCrossfireはオフにすること。あるいは、探索処理に問題がある可能性もある。「accepted」が「invalid」より多ければ問題ない。

*マイナーを実行しようとすると、新しいCMDウィンドウが一瞬表示されるが、何も読めないほど速く消えてしまう。*

これはコンソールアプリケーションである。「コマンドプロンプト」というあの黒い画面を使って実行する必要がある。
