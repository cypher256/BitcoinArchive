---
title: "Having problems specifing -datadir"
date: 2010-07-28T04:38:00.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=601.msg6188#msg6188"
author: "psyvenrix"
participants:
  - name: "psyvenrix"
    slug: "psyvenrix"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "psyvenrix starts a discussion: Having problems specifing -datadir."
isSatoshi: false
threadId: "bt-having-problems-specifing-datadir"
threadPosition: 1
tags: []
---

Whilst not amazingly critical, i find it strange that i consistently get the below error messages from the console and debug.log when i try to specify the datadir option with anything other than the period char (current directory).
This is using the bitcoind program on an archlinux terminal session, im not using the GUI at all (headless box accessed via ssh)

From Console:
************************
EXCEPTION: 22DbRunRecoveryException
DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery
bitcoin in AppInit()

terminate called after throwing an instance of 'DbRunRecoveryException'
  what():  DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery

and from the debug.log inside the datadir : -

Bitcoin version 0.3.4.0 beta
Default data directory /home/psyvenrix/.bitcoin
Bound to port 8333
Loading addresses...
dbenv.open strLogDir=./datadir2/database strErrorFile=./datadir2/db.log

************************
EXCEPTION: 22DbRunRecoveryException
DbEnv::open: DB_RUNRECOVERY: Fatal error, run database recovery
bitcoin in AppInit()

Yes, that is a SVN build, as the tar.gz from the main site is linked against openssl ver 0.9.8 i think and my arch linux system has 1.0.0 i think, so i just grabed the latest SVN source and built that (aside from a makefile tweak it compiled ok).

ive checked the permissions on both the directory containing the binaries and the aforementioned datadir, all are writable by my login (& no other ACL/SELinux trickery in the background either)

I have only just started using bitcoin, so i find it strange that it's throwing a recovery type error when the contents of that directory are freshly generated (i.e. i can rm -rf the lot, then start bitcoind with a new non-existent directory, watch it create the files needed then bomb out)

Thoughts anyone?
