---
title: "Re: Proposed change to sendtoaddress API call"
date: 2010-08-14T13:46:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=807.msg9194#msg9194"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 807. after msg9134, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-13T23:39:14.000Z"
    sourceEntryId: "forum/bitcointalk/topic-807/2010-08-13-re-proposed-change-to-sendtoaddress-api-call"
---

<!-- quote: q1 -->
> It's too soon to start junking up the API for backward compatibility at all costs.
> Just return "".

You'll never hear me argue with "keep it simple."  

Patch for that is trivial:
Code:diff --git a/rpc.cpp b/rpc.cpp
index 920fe90..35a336f 100644
--- a/rpc.cpp
+++ b/rpc.cpp
@@ -364,7 +364,7 @@ Value sendtoaddress(const Array& params, bool fHelp)
     string strError = SendMoneyToBitcoinAddress(strAddress, nAmount, wtx);
     if (strError != "")
         throw runtime_error(strError);
-    return "sent";
+    return wtx.GetHash().ToString();
 }
