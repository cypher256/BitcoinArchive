---
title: "Re: Exception: 9key_error error"
date: 2010-05-16T22:53:59.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=135.msg1133#msg1133"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Exception: 9key_error error」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/101/"
translationStatus: complete
---

実行するたびに発生するのか、それともランダムなタイミングで一度だけ起きたのか？

その失敗は今まで見たことがない。絶対に失敗しないだろうと想定したOpenSSLへの呼び出しだが、念のためにエラーチェックを入れておいた。どうすれば失敗するのか想像がつかない。メモリー不足かもしれない。

コードは以下の通りだ:

```cpp
key.h:
    EC_KEY* pkey;

        pkey = EC_KEY_new_by_curve_name(NID_secp256k1);
        if (pkey == NULL)
            throw key_error("CKey::CKey() : EC_KEY_new_by_curve_name failed");
```

NID_secp256k1は定数だ。
