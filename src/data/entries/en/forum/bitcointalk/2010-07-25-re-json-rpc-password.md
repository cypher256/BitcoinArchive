---
title: "Re: JSON-RPC password"
date: 2010-07-25T21:34:29.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5767#msg5767"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC password\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/273/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 12
---

[Quote from: lachesis on July 25, 2010, 07:52:35 PM](https://bitcointalk.org/index.php?topic=461.msg5738#msg5738)I found what appears to be a bug: with a long enough username and password combination, the base64 encoder in bitcoind produces authorization headers that look like this:
Code:...
Authorization: Basic YWJiYWJiYWFiYmE6aGVsbG93b3JsZGhlbGxvd29ybGRoZWxsb3dvcmxkaGVsbG93
b3JsZGhlbGxvd29ybGRoZWxsb3dvcmxk
It inserts a newline every 64 characters, which obviously breaks the Authorization header, so commands like "bitcoin getinfo" fail. The server still works fine with properly behaving clients.

This can be solved by removing the newlines (and maybe ''s) from result at the end of the Base64Encode function:
Code:result.erase(std::remove(result.begin(), result.end(), '
'), result.end());
result.erase(std::remove(result.begin(), result.end(), ''), result.end());
+1 to you for having such a long password that you found this bug.

Uploaded to SVN as rev 110.
