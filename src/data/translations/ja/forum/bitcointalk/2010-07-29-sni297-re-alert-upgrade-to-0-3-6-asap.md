---
title: "Re: *** 警告 *** 至急0.3.6にアップグレード！"
date: 2010-07-29T23:12:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6542#msg6542"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがビルドエラーの解決策としてmake cleanを推奨し、プリコンパイル済みヘッダーの廃止を検討。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/297/"
threadId: "bt-alert-upgrade-to-0-3-6-asap"
threadTitle: "*** ALERT *** Upgrade to 0.3.6 ASAP!"
threadPosition: 3
translationStatus: complete
---

[Quote from: lachesis on July 29, 2010, 10:14:36 PM](https://bitcointalk.org/index.php?topic=626.msg6515#msg6515)Debian testing 32ビットで、いくつかのビルドエラーが出ます。すべて以下のようなものです：
Code:script.cpp:114: error: OP_NOP1 was not declared in this scope「make clean」や「make」を先に行わずに「make bitcoind」を実行した時にこのエラーが出ました。bitcoindのビルド手順ではヘッダーが先にコンパイルされないようですが、headers.h.gchも削除されないため、存在する場合は古いヘッダーが使用されます。

他にもこのエラーが出た方がいれば、最も簡単な解決策は「make clean」してからビルドを再試行することです。
プリコンパイル済みヘッダーは実際には必要ありません。コンパイルがわずかに速くなるだけです。廃止しようと思います。それでも、残ったファイルを削除するために、もう一度「make -f makefile.unix clean」を実行するかheaders.h.gchを削除する必要があります。

あのGLIBC_2.11のせいで。アップデートを受け入れないよう注意していたと思っていたのに。
