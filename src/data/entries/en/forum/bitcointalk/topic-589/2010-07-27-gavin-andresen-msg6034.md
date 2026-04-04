---
title: "Running on a port other than 8333"
date: 2010-07-27T14:08:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=589.msg6034#msg6034"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 589."
isSatoshi: false
tags: []
---

I've been working on adding -port= / -rpcport=  command line / config file options to bitcoin.  The idea is to let you run multiple copies of bitcoind on one machine; I need this because I'm planning on having at least two Bitcoin-related web services (the Bitcoin Faucet and a service to be named later), I want them to have completely separate wallets, but I don't want to rent multiple servers to host them.

Usage looks like this:
Code:$ ./bitcoind getbalance  # The TEST network Faucet bitcoind
40616.66159265000
$ ./bitcoind -datadir=/home/bitcoin/.bitcoinTEST2 getbalance
1000.000000000000
$ cat /home/bitcoin/.bitcoinTEST2/bitcoin.conf
rpcpassword=.....
port=18666
rpcport=18665

Satoshi pointed out that allowing bitcoin/bitcoind to run on a non-standard port could be dangerous, because if misconfigured two bitcoins might both open and write to the same database.  To prevent that, the <datadir>/db.log file is used as a lock so only one bitcoin can access the same datadir at a time (uses boost::interprocess::file_lock, which is purported to be cross-platform and well-behaved, even if bitcoin crashes).

Issues that came up as I was doing this:

I left a call to wxSingleInstanceChecker in the Windows GUI code, so no multiple-gui-bitcoins-listening-on-different-ports on Windows.  I don't do Windows...

I didn't bother making the error handling graceful if you point two bitcoins at the same datadir (you get a runtime exception "Cannot lock db.log, is bitcoin already running?").

Patches are at http://pastebin.com/2e4hfXSS; I've only tested on Linux so far, anybody willing to try this on Windows?
