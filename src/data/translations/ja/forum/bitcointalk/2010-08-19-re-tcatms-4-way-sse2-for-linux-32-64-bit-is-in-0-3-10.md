---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-19T19:07:43.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg10281#msg10281"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/402/"
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-is-in-0-3-1"
translationStatus: complete
---

> [Quote from: Ground Loop on August 18, 2010, 11:14:26 PM](https://bitcointalk.org/index.php?topic=820.msg10167#msg10167)
> Mac以外のi5への愛は？

Windows i5 64ビットではここでは遅くなった。
i5で遅くなったと言う人を聞いたのは初めてだ。他の全員がi5では4wayの方が速いと言っている。ハイパースレッディングを有効にするとさらにだ。

> [Quote from: nelisky on August 18, 2010, 11:02:25 PM](/BitcoinArchive/entries/forum/bitcointalk/2010-08-18-nelisky-msg10164/)
> i5もだ、少なくとも自分のMacBook Proでは

良いな、ということはMacでも動作しているという確認だな？

LaszloがMacで-4wayのコードをコンパイルしたと言っていたので、-4wayスイッチはMacでも試せる。SVN上のmakefile.osxにはまだ入っていないと思うが、ビルドされたバージョンには含まれている。
