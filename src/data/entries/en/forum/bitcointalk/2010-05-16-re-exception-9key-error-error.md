---
title: "Re: Exception: 9key_error error"
date: 2010-05-16T22:53:59.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=135.msg1133#msg1133"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Exception: 9key_error error\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/101/"
---

Does it happen every time you run it, or just happened once at some random time?

I've never seen that fail before.  It's a call to OpenSSL that I assumed would never fail, but I put an error check there just in case.  I can't imagine how it would fail.  Out of memory maybe.

The code is:

key.h:
    EC_KEY* pkey;

        pkey = EC_KEY_new_by_curve_name(NID_secp256k1);
        if (pkey == NULL)
            throw key_error("CKey::CKey() : EC_KEY_new_by_curve_name failed");

NID_secp256k1 is a constant.
