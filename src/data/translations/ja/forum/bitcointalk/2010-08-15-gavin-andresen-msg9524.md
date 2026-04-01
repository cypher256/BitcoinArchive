---
title: "Re: (context post by Gavin Andresen)"
date: 2010-08-15T20:39:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9524#msg9524"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 823. before msg9531."
isSatoshi: false
tags: []
translationStatus: pending
---

Until there is a better fix... after a very small amount of testing this seems to work:
Code:--- a/main.h
+++ b/main.h
@@ -473,8 +473,12 @@ public:
 
         // Check for negative values
         foreach(const CTxOut& txout, vout)
+ {
             if (txout.nValue < 0)
                 return error("CTransaction::CheckTransaction() : txout.nValue negative");
+ if (txout.nValue > 21000000*COIN)
+ return error("CTransaction::CheckTransaction() : txout.nValue over-max");
+ }
 
         if (IsCoinBase())
         {
@@ -520,6 +524,8 @@ public:
         int64 nValueOut = 0;
         foreach(const CTxOut& txout, vout)
         {
+ if (txout.nValue > 21000000*COIN)
+ continue; // ignore over-max-value...
             if (txout.nValue < 0)
                 throw runtime_error("CTransaction::GetValueOut() : negative value");
             nValueOut += txout.nValue;

You'll need to re-download the part of the block chain before the bad block-- remove the blkindex.dat and blk0001.dat files.   I started with knightmb's blockchain snapshot.
