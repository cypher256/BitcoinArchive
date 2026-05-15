---
title: "Re: 大衆向け OpenCL マイナー"
date: 2010-11-20T17:24:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1334.msg23097#msg23097"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「大衆向け OpenCL マイナー」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/506/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "m0mchil"
    personSlug: "m0mchil"
    date: "2010-11-20T01:16:19.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1334/2010-11-20-m0mchil-msg23018"
  - id: "q2"
    person: "m0mchil"
    personSlug: "m0mchil"
    date: "2010-11-16T01:30:41.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1334/2010-11-16-m0mchil-msg22251"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> SVN 186に更新
<!-- /tone-skip -->

m0mchil さん、更新に追従してくれてありがとう！

GPU マイナーの皆さん、無料トランザクションの悪用を止めるため、できるだけ早くアップグレードしてくれ！このバージョンには新しい優先度ベースの無料トランザクションスパム制限がある。

<!-- quote: q2 -->
<!-- tone-skip -->
> SVN 181 に更新し、getwork パッチを修正して新しい取引でブロックを再構築する間に 60秒待つようにした。これは実際には元のクライアントの動作であり、パッチのミスで忘れられていた。すべての getwork リクエストでの重い CPU 使用を修正（最近の大量取引スパムで顕著になった）。アップグレードしてほしい。
<!-- /tone-skip -->

SVN 184 より前は、トランザクションをブロックにコンパイルする処理が n^2 のアルゴリズムを使用していた。新しい効率的なシングルパスアルゴリズムは桁違いに高速だ。（O(n)対 O(n^2)/2 アルゴリズム、n=200 で 10〜100倍高速）
