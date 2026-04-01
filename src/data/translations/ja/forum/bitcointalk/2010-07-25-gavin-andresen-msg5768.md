---
title: "Re: JSON-RPC password"
date: 2010-07-25T21:38:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5768#msg5768"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 461. quoted by msg5771."
isSatoshi: false
threadId: "bt-json-rpc-password"
tags: []
translationStatus: pending
---

[Quote from: lachesis on July 25, 2010, 07:52:35 PM](https://bitcointalk.org/index.php?topic=461.msg5738#msg5738)
> I found what appears to be a bug: with a long enough username and password combination, the base64 encoder in bitcoind ... inserts a newline every 64 characters

Great catch!  Simpler fix is to specify the BIO_FLAGS_BASE64_NO_NL in the rpc.cpp/EncodeBase64 function:
Code:diff --git a/rpc.cpp b/rpc.cpp
index 72bdc50..703b757 100644
--- a/rpc.cpp
+++ b/rpc.cpp
@@ -765,13 +765,14 @@ string EncodeBase64(string s)
     BUF_MEM *bptr;
 
     b64 = BIO_new(BIO_f_base64());
+    BIO_set_flags(b64, BIO_FLAGS_BASE64_NO_NL);
     bmem = BIO_new(BIO_s_mem());
     b64 = BIO_push(b64, bmem);
     BIO_write(b64, s.c_str(), s.size());
     BIO_flush(b64);
     BIO_get_mem_ptr(b64, &bptr);
 
-    string result(bptr->data, bptr->length-1);
+    string result(bptr->data, bptr->length);
     BIO_free_all(b64);
 
     return result;
