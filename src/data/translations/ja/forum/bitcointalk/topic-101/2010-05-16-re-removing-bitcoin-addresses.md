---
title: "Re: ビットコインアドレスの削除"
date: 2010-05-16T23:34:40.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=101.msg1134#msg1134"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビットコインアドレスの削除」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/102/"
translationStatus: complete
---

SheriffWoody:
生成したビットコインアドレスは永久に保持される。ビットコインアドレスは、そこに送られたものの所有権を示すために保持する必要がある。ビットコインアドレスを削除できてしまい、誰かがそこに送金した場合、そのお金は失われる。アドレスは約500バイト程度だ。

sirius-m:
数千の自分のアドレスはまったく問題にならないはずだ。50,000 BTCを生成したなら、生成された50 BTCごとに1つずつ、すでに1,000の自分のアドレスを持っている。これらは隠されていて、UIには表示されない。

同じIPに同じアドレスを渡し続ける小さなコードを追加するのは良いアイデアだろう。C++で、同じキー（＝ビットコインアドレス）を使用されるまで渡し続けるために行ったことは以下の通りだ:

```cpp
    // 使用されるまで同じIPに同じキーを渡し続ける
    if (!mapReuseKey.count(pfrom->addr.ip))
        mapReuseKey[pfrom->addr.ip] = GenerateNewKey();
```

    ...キー mapReuseKey[pfrom->addr.ip] を送信

...後で...

    // このキーで何かを受信した
    mapReuseKey.erase(pfrom->addr.ip);

受信したタイミングを知るのが不便な場合は、キャッシュされたキーを20分ごとにクリアするだけで構わない。

getnewaddressに、アドレスで何も受信されなかった場合の有効期限日数のパラメータを追加したいと考えている。
