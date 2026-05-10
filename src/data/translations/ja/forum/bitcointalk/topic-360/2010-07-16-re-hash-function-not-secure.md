---
title: "Re: Hash()関数は安全ではない"
date: 2010-07-16T16:13:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=360.msg3520#msg3520"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Hash()関数は安全ではない」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/216/"
translationStatus: complete
---

SHA256 は 128 ビットから 160 ビットへのステップとは違う。

アナロジーを使うと、32 ビットから 64 ビットのアドレス空間へのステップに近い。16 ビットコンピューターではすぐにアドレス空間を使い果たし、32 ビットコンピューターでは 4GB でアドレス空間を使い果たしたが、だからといって 64 ビットですぐに使い果たすということにはならない。

SHA256 は私たちの生涯においてムーアの法則による計算能力の向上では破られない。もし破られるとすれば、何らかの画期的な解読手法によるものだろう。SHA256 を計算可能な範囲にまで完全に打ち負かすような攻撃は、SHA512 も同様に破壊する可能性が高い。

SHA256 に弱点が徐々に見えてきた場合、特定のブロック番号以降に新しいハッシュ関数に移行できる。全員がそのブロック番号までにソフトウェアをアップグレードする必要がある。新しいソフトウェアはすべての古いブロックの新しいハッシュを保持し、同じ古いハッシュを持つ別のブロックに置き換えられないようにする。
