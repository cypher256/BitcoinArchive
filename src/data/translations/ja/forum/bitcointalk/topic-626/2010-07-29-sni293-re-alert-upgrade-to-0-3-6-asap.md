---
title: "Re: *** 警告 *** 0.3.6 にアップグレードしてください"
date: 2010-07-29T21:43:15.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6502#msg6502"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが GLIBC_2.11 の問題と Ubuntu のアップグレードに関する方針について説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/293/"
translationStatus: complete
---

「./bitcoin: /lib64/libc.so.6: version `GLIBC_2.11' not found (required by ./bitcoin)」は 0.3.6 から始まった新しい問題ではないよな？ これは 0.3.0 と同じ OS 環境でビルドされたものだ。

残念ながら、0.3.0 の前に Ubuntu 10.04 にアップグレードしてしまった。もうこれ以上アップグレードしない。ダウングレードのために再インストールする時間がいつ取れるかわからないが、少なくともアップグレードしないことで、徐々に問題は解消されるだろう。
