---
title: "Re: RFC: ship block chain 1-74000 with release tarballs?"
date: 2010-11-28T17:13:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg25138#msg25138"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"RFC: ship block chain 1-74000 with release tarballs?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/518/"
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadTitle: "RFC: ship block chain 1-74000 with release tarballs?"
threadPosition: 3
---

Despite everything else said, the current next step is:
QuoteSomeone should experiment with different Berkeley DB settings and see if there's something that makes the download substantially faster.  If something substantial is discovered, then we can work out the particulars.
In particular, I suspect that more read caching might help a lot.

[Quote from: jgarzik on November 28, 2010, 02:33:29 AM](https://bitcointalk.org/index.php?topic=1931.msg25017#msg25017)Another new user on IRC, Linux this time, was downloading at a rate of 1 block every 4 seconds -- estimated total download time around 4 days.
Then something more specific was wrong.  That's not due to normal initial download time.  Without more details, it can't be diagnosed.  If it was due to slow download, did it speed up after 10-20 minutes when the next block broadcast should have made it switch to a faster source?  debug.log might have clues.  How fast is their Internet connection?  Was it steadily slow, or just slow down at one point?

QuoteWe have the hashes for genesis block through block 74000 hardcoded (compiled) into bitcoin, so there's no reason why we shouldn't be able to automatically download a compressed zipfile of the block database from *anywhere*, unpack it, verify it, and start running.
The 74000 checkpoint is not enough to protect you, and does nothing if the download is already past 74000.  -checkblocks does more, but is still easily defeated.  You still must trust the supplier of the zipfile.

If there was a "verify it" step, that would take as long as the current normal initial download, in which it is the indexing, not the data download, that is the bottleneck.

[Quote from: jgarzik on November 28, 2010, 07:33:55 AM](https://bitcointalk.org/index.php?topic=1931.msg25058#msg25058)Presumably at some point there will be a lightweight client that only downloads block headers, but there will still be hundreds of thousands of those...
80 bytes per header and no indexing work.  Might take 1 minute.

Quoteuncompressed data using a protocol (bitcoin P2P) that wasn't designed for bulk data transfer.
The data is mostly hashes and keys and signatures that are uncompressible.

The speed of initial download is not a reflection of the bulk data transfer rate of the protocol.  The gating factor is the indexing while it downloads.
