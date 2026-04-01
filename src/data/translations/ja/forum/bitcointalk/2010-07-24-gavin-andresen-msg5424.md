---
title: "Re: (context post by Gavin Andresen)"
date: 2010-07-24T01:44:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=555.msg5424#msg5424"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 555. before msg5450."
isSatoshi: false
tags: []
translationStatus: pending
---

They key bits of code are:
Code:fileout << FLATDATA(pchMessageStart) << nSize;
...
fileout << *this;pchMessageStart are the four magic bytes, and those are written with FLATDATA.

The CBlock itself is written by << *this, and that's done by the IMPLEMENT_SERIALIZE in main.h:
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

The READWRITE macros Do The Right Thing, reading in or writing out the members in a machine-independent way.

See http://github.com/gavinandresen/bitcointools for simplified Python code that can dump out transactions and blocks.
