---
title: "Re: (context post by Gavin Andresen)"
date: 2010-06-11T01:34:11.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=179.msg1472#msg1472"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 179. before msg1588."
isSatoshi: false
tags: []
---

I'll try to answer what I can:

[Quote from: nixoid on June 10, 2010, 08:38:13 PM](/BitcoinArchive/entries/forum/bitcointalk/2010-06-10-nixoid-msg1461/)
> 0) Is it necessary to run a node if i want to have a wallet? Is it necessarily attached to some exact node or i can keep my wallet on flash drive for example and use it with any node? Where and in which form my account balance is stored?

You either have to run a node or trust somebody else (like MyBitcoin.com) to keep a wallet for you.

Your account balance is stored in a Berkeley DB file called 'wallet.dat' (what directory depends on your operating system; on my Mac it is ~/Library/Application Support/Bitcoin/wallet.dat, on linux it is ~/.bitcoin/wallet.dat, not sure about PCs).

The only application that can read wallet.dat is the bitcoin code, and the database structure isn't documented anywhere besides the bitcoin C++ source code.
Theoretically, no, but the code to do lightweight validation hasn't been written.
Satoshi is planning on encrypting the wallet database, so you'd need to enter a password to read it.  (and they need to get your private keys to generate transactions-- those are what are stored in the wallet.dat)
Dunno.
There's another thread about this in these forums; maybe we should start a "Satoshi's TODO list" thread and get folks to volunteer to help out.
Fewer and fewer coins will be created over the next N years (where N is-- what, 20?).  That's a feature, not a bug...

RE: developing your own version: are you thinking of creating a second bitcoin implementation that is compatible with the existing C++ one  (good idea, in my opinion)?  Or creating a similar-but-not-the-same system (bad idea, in my opinion)?
