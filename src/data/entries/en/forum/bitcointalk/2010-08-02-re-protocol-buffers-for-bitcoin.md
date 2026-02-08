---
title: "Re: Protocol Buffers for Bitcoin"
date: 2010-08-02T20:22:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=632.msg7090#msg7090"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Protocol Buffers for Bitcoin\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/308/"
---

The reason I didn't use protocol buffers or boost serialization is because they looked too complex to make absolutely airtight and secure.  Their code is too large to read and be sure that there's no way to form an input that would do something unexpected.

I hate reinventing the wheel and only resorted to writing my own serialization routines reluctantly.  The serialization format we have is as dead simple and flat as possible.  There is no extra freedom in the way the input stream is formed.  At each point, the next field in the data structure is expected.  The only choices given are those that the receiver is expecting.  There is versioning so upgrades are possible.

CAddress is about the only object with significant reserved space in it.  (about 7 bytes for flags and 12 bytes for possible future IPv6 expansion)

The larger things we have like blocks and transactions can't be optimized much more for size.  The bulk of their data is hashes and keys and signatures, which are uncompressible.  The serialization overhead is very small, usually 1 byte for size fields.

On Gavin's idea about an existing P2P broadcast infrastructure, I doubt one exists.  There are few P2P systems that only need broadcast.  There are some libraries like Chord that try to provide a distributed hash table infrastructure, but that's a huge difficult problem that we don't need or want.  Those libraries are also much harder to install than ourselves.
