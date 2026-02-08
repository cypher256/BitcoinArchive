---
title: "Re: Version 0.3.13, please upgrade"
date: 2010-10-03T19:39:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg15110#msg15110"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Version 0.3.13, please upgrade\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/474/"
threadId: "bt-version-0-3-13-please-upgrade"
threadTitle: "Version 0.3.13, please upgrade"
threadPosition: 2
---

Could a few people please run this special build?  It'll amnesty the dust spam transactions, which will clear up the 0/unconfirmed problem for now.  We really just need one block letting them through to clear up the previous transactions.  Post if you generate a block with this.

These are binaries only.  The linux version is 64-bit only.
[http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-win32.zip](http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-win32.zip)
[http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-linux64.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-linux64.tar.gz)

SHA1 fb7c66270281ed058c570627cf7baff0bdc16e5d bitcoin-0.3.13.1-specialbuild-win32.zip
SHA1 9fc44ea5f2109618073e2cfd887e2cc266eb31a9 bitcoin-0.3.13.1-specialbuild-linux64.tar.gz

The linux 64-bit version includes a change to the cpuid 4-way 128-bit SSE2 autodetect for AMD in 64-bit mode, if you'd like to test that and see if that's better.
