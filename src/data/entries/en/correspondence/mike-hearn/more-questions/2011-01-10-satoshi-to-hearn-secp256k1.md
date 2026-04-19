---
title: "Satoshi to Mike Hearn on ECDSA curve choice and development history (January 10, 2011)"
date: 2011-01-10T20:47:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshi confirms Hal Finney was an early supporter, reveals that Bitcoin took 2 years of development before release, and explains his choice of ECDSA curve and key size."
isSatoshi: true
tags:
  - "correspondence"
  - "secp256k1"
  - "ecdsa"
  - "hal-finney"
  - "cryptography"
  - "development-history"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

> By the way, if you didn't see it already, there's a discussion on the security of secp256k1 on the forum:
>
> http://www.bitcoin.org/smf/index.php?topic=2699.0
>
> Hal (i presume this is Hal Finney)

Yes, it's him. He was supportive on the Cryptography list and ran one of the first nodes.

> seems to think the curve is at higher risk of attack than random curves. I guess you chose secp256k1 for the mentioned performance improvement?

I must admit, this project was 2 years of development before release, and I could only spend so much time on each of the many issues. I found guidance on the recommended size for SHA and RSA, but nothing on ECDSA which was relatively new. I took the recommended key size for RSA and converted to equivalent key size for ECDSA, but then increased it so the whole app could be said to be 256-bit security. I didn't find anything to recommend a curve type so I just... picked one. Hopefully there is enough key size to make up for any deficiency.

At the time, I was concerned whether the bandwidth and storage sizes would be practical even with ECDSA. RSA's huge keys were out of the question. Storage and bandwidth seemed tighter back then. I felt the size was either only just becoming practical, or would be soon. When I presented it, I was surprised nobody else was concerned about size, though I was also surprised how many issues they argued, and more surprised that every single one was something I had thought of and solved.

As it turns out, ECDSA verification time may be the greater bottleneck. (In my tests, OpenSSL was taking 3.5ms per ECDSA verify, or about 285 verifies per second) Client versions bypass the problem.

As things have evolved, the number of people who need to run full nodes is less than I originally imagined. The network would be fine with a small number of nodes if processing load becomes heavy.
