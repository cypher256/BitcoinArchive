---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T23:36:10.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9584#msg9584"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"overflow bug SERIOUS\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/374/"
---

Starting at 67000 is *perfect*.  

Yeah, at the moment you'll stop at 74638.  It should start slowly creeping up as more nodes upgrade and generate.

Linux build links below.

The Linux version includes tcatm's 4-way SSE2 SHA-256 that makes generating faster on i5 and AMD CPU's.  Use the "-4way" switch to enable it and check if it's faster for you.

Download links:
[http://www.bitcoin.org/download/bitcoin-0.3.10-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.10-win32-setup.exe)
[http://www.bitcoin.org/download/bitcoin-0.3.10-win32.zip](http://www.bitcoin.org/download/bitcoin-0.3.10-win32.zip)
[http://www.bitcoin.org/download/bitcoin-0.3.10-linux.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.10-linux.tar.gz)

SHA1 16645ec5fcdb35bc54bc7195309a1a81105242bb bitcoin-0.3.10-win32-setup.exe
SHA1 4f35ad7711a38fe8c880c6c9beab430824c426d3 bitcoin-0.3.10-win32.zip
SHA1 e3fda1ddb31b0d5c35156cacd80dee6ea6ae6423 bitcoin-0.3.10-linux.tar.gz
