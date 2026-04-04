---
title: "Re: トランザクションとスクリプト: DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-18T16:17:14.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1617#msg1617"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「トランザクションとスクリプト: DUP HASH160 ... EQUALVERIFY CHECKSIG」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/127/"
threadId: "bt-transactions-and-scripts-dup-hash160-equalverify-c"
translationStatus: complete
---

第2のバージョンは、私にとって大規模な開発とメンテナンスの負担になるだろう。第2のバージョンが物事を固定してしまう中で、ネットワークをアップグレードしながら後方互換性を維持するのは十分に大変だ。もし第2のバージョンに問題が発生すれば、ユーザー体験は両方に悪い印象を与えるが、少なくとも公式バージョンを使い続けることの重要性をユーザーに再認識させることにはなるだろう。もし誰かが第2のバージョンをフォークしようとしていたら、少数派バージョンを使うリスクについて多くの免責事項を公表しなければならないだろう。これは意見の不一致がある場合に多数派バージョンが勝つ設計であり、少数派バージョンにとってはかなり厳しいことになるし、できれば詳しく触れたくない。バージョンが1つしかない限り、その必要はない。

そうだ、ほとんどの開発者はソフトウェアのフォークを好まないが、今回は本当の技術的な理由がある。

<!-- tone-skip -->
[Quote from: gavinandresen on June 17, 2010, 07:58:14 PM](#msg1613)
> [Quote from: satoshi on June 17, 2010, 06:46:08 PM](#msg1611)
> > Bitcoinの2番目の互換実装が良いアイデアだとは思わない。設計の多くが、すべてのノードが完全に同一の結果をロックステップで得ることに依存しているため、2番目の実装はネットワークにとって脅威となるだろう。MITライセンスは他のすべてのライセンスおよび商用利用と互換性があるので、ライセンスの観点から書き直す必要はない。
<!-- /tone-skip -->

それは人気が出て、誰かが支払いネットワークに何百万ものトランザクションを送り込んで最新のLady Gagaの動画を友達全員に転送するのが楽しいと思うまでは素敵な機能だな……
それがトランザクション手数料の理由の1つだ。必要であれば他にもできることがある。

<!-- tone-skip -->
[Quote from: laszlo on June 17, 2010, 06:50:31 PM](#msg1612)
> サトシ、この設計にはどれくらいの期間取り組んできたんだ？ よく考え抜かれていて、事前にたくさんのブレインストーミングや議論なしに、ただ座ってコードを書くようなものじゃない。みんな穴を探そうと当たり前の質問を投げかけているが、しっかり持ちこたえている Smiley
<!-- /tone-skip -->
2007年からだ。ある時点で、信頼をまったく必要とせずにこれを行う方法があると確信し、考え続けることを止められなかった。コーディングよりも設計の作業の方がはるかに多かった。

幸いなことに、これまでに提起されたすべての問題は、以前に検討し計画していたものだ。
