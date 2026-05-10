---
title: "Re: ブロックの読み書きと FLATDATA"
date: 2010-07-24T01:44:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=555.msg5424#msg5424"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 555 におけるギャビン・アンドレセンの文脈投稿。msg5450 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

コードの重要な部分は：

```
fileout << FLATDATA(pchMessageStart) << nSize;
...
fileout << *this;pchMessageStartは4バイトのマジックバイトで、FLATDATAで書き込まれる。
```

CBlock 自体は<< *this で書き込まれ、main.h の IMPLEMENT_SERIALIZE で行われる：

```cpp
    IMPLEMENT_SERIALIZE
    (
        READWRITE(this->nVersion);
        nVersion = this->nVersion;
        READWRITE(hashPrevBlock);
        READWRITE(hashMerkleRoot);
        READWRITE(nTime);
        READWRITE(nBits);
        READWRITE(nNonce);

        // ConnectBlock depends on vtx being last so it can calculate offset                                             
        if (!(nType & (SER_GETHASH|SER_BLOCKHEADERONLY)))
            READWRITE(vtx);
        else if (fRead)
            const_cast<CBlock*>(this)->vtx.clear();
    )
```

READWRITE マクロは適切な処理を行い、メンバーをマシン非依存の方法で読み書きする。

トランザクションとブロックをダンプできる簡略化された Python コードは http://github.com/gavinandresen/bitcointools を参照。
