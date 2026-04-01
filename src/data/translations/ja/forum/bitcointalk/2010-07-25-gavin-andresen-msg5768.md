---
title: "Re: JSON-RPCパスワード"
date: 2010-07-25T21:38:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5768#msg5768"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるGavin Andresenの文脈投稿。msg5771に引用。"
isSatoshi: false
threadId: "bt-json-rpc-password"
tags: []
translationStatus: complete
---

[Quote from: lachesis on July 25, 2010, 07:52:35 PM](#msg5738)
> bitcoindのbase64エンコーダーにバグと思われるものを発見した：ユーザー名とパスワードの組み合わせが十分に長いと……64文字ごとに改行を挿入する

素晴らしい発見だ！より簡単な修正は、rpc.cpp/EncodeBase64関数でBIO_FLAGS_BASE64_NO_NLを指定することだ：
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
