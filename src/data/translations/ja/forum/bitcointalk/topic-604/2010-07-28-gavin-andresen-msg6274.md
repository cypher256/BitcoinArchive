---
title: "Re: Build error SVN r115 on my Mac: workaround"
date: 2010-07-28T21:40:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=604.msg6274#msg6274"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック604におけるギャビン・アンドレセンの文脈投稿。after msg6273, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-07-28T21:23:23.000Z"
    sourceEntryId: "forum/bitcointalk/topic-604/2010-07-28-re-build-error-svn-r115-on-my-mac-workaround"
translationStatus: complete
---

<!-- quote: q1 -->
> 俺がOSXビルドで壊したのはそれだけか？！ 本当にあの一つの変更だけで動くのか？

SVN r115の変更をマージしたTESTネットワーク用のbitcoindをビルドしたが、そう、あの一つの変更だけで、午後の間ずっと機嫌よくコインを生成し続けている。
ただし俺は標準のmakefile.osxは使っていない。依存ディレクトリの構造を少し違うやり方で組んでいる（特にこれといった理由はないのだが）。
