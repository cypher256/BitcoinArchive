---
title: "Re:（Gavin Andresenの文脈投稿）"
date: 2010-07-24T01:44:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=555.msg5424#msg5424"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック555におけるGavin Andresenの文脈投稿。msg5450の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

コードの重要な部分は：
Code:fileout << FLATDATA(pchMessageStart) << nSize;
...
fileout << *this;pchMessageStartは4バイトのマジックバイトで、FLATDATAで書き込まれる。

CBlock自体は<< *thisで書き込まれ、main.hのIMPLEMENT_SERIALIZEで行われる：
Code:    IMPLEMENT_SERIALIZE
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

READWRITEマクロは適切な処理を行い、メンバーをマシン非依存の方法で読み書きする。

トランザクションとブロックをダンプできる簡略化されたPythonコードは http://github.com/gavinandresen/bitcointools を参照。
