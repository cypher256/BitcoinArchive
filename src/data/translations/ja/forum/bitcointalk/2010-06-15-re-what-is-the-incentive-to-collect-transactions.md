---
title: "Re: トランザクションを収集するインセンティブは何ですか？"
date: 2010-06-15T23:41:29.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=165.msg1595#msg1595"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「トランザクションを収集するインセンティブは何ですか？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/122/"
translationStatus: complete
---

[theymos、2010年6月5日 午後4:26:09の引用](https://bitcointalk.org/index.php?topic=165.msg1373#msg1373)作業中のブロックにトランザクションを追加すると、生成速度が低下します
前提が間違っている。作業中のブロックにトランザクションを追加しても、生成速度は低下しない。生成がハッシュをスキャンする際、ブロックのヘッダーのみをハッシュするが、これは固定サイズだ。ヘッダーにはトランザクションのハッシュ（Merkleルート）が含まれており、たまにしか更新されない。

必要であれば、十分なトランザクションが含まれていないブロックをノードが使用しないよう優先させるコードを書くことができる。非推奨のブロックはメインチェーンに含まれることはほぼないが、含まれた場合は受け入れられる。ノードがすべてのトランザクションを含めないことに実質的な利点はないので、これが必要になるとは思えない。
