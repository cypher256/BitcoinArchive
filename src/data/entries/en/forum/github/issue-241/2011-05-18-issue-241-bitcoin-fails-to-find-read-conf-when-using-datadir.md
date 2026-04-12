---
title: "bitcoin fails to find/read .conf when using -datadir argument"
date: 2011-05-18T23:25:56.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/241"
author: "nanotube"
participants:
  - name: "nanotube"
    slug: "nanotube"
description: "Issue #241 thread starter by nanotube in bitcoin/bitcoin."
isSatoshi: false
tags:
  - "github"
  - "issue"
---

When i try to run bitcoin with -testnet and -datadir=someotherdir
things get stored as expected, in someotherdir/testnet
but if i try to run it with -server (or run bitcoind), it complains that it can't find rpcpassword, even though it is present in someotherdir/testnet.

Warning: To use the "-server" option, you must set rpcpassword=<password>
in the configuration file: someotherdir/testnet/bitcoin.conf
If the file does not exist, create it with owner-readable-only file permissions.

the file is of course quite present, and has correct permissions.

i have tried copying the .conf file into stock ~/.bitcoin/testnet location, i have tried making a symlink from there to the whole dir - nothing helps. the only way to make it stop complaining is to stop using the -datadir argument, and let it store things in the default location.

This is a bug, and should be fixed. :)

Note, I have thus far only tried it with -testnet, I do not know if this behavior is only present when using -testnet or not. This needs testing.
