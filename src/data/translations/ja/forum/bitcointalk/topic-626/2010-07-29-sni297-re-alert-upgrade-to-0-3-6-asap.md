---
title: "Re: *** 警告 *** 0.3.6にアップグレードしてください"
date: 2010-07-29T23:12:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6542#msg6542"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがビルドエラーの解決策としてmake cleanを推奨し、プリコンパイル済みヘッダーの廃止を検討。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/297/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "lachesis"
    personSlug: "lachesis"
    date: "2010-07-29T13:14:36.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> Debianテスティング32ビットで、いくつかのビルドエラーが出る。すべて以下に類似している：
<!-- /tone-skip -->

```
script.cpp:114: error: OP_NOP1 was not declared in this scope「make clean」や「make」を先に行わずに「make bitcoind」を実行した時にこのエラーが出た。bitcoindのビルド手順ではヘッダーが先にコンパイルされないようだが、headers.h.gchも削除されないため、存在する場合は古いヘッダーが使用される。
```

他にもこのエラーが出た方がいれば、最も簡単な解決策は「make clean」してからビルドを再試行することだ。
プリコンパイル済みヘッダーは実際には必要ない。コンパイルがわずかに速くなるだけだ。廃止しようと思う。それでも、残ったファイルを削除するために、もう一度「make -f makefile.unix clean」を実行するかheaders.h.gchを削除する必要がある。

あのGLIBC_2.11のせいで。アップデートを受け入れないよう注意していたと思っていたのに。
