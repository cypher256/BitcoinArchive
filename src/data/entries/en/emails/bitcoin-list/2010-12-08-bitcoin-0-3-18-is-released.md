---
title: "[bitcoin-list] Bitcoin 0.3.18 is released"
date: 2010-12-08T23:11:55.000Z
source: bitcoin-list
sourceUrl: "https://sourceforge.net/p/bitcoin/mailman/message/26722835/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"[bitcoin-list] Bitcoin 0.3.18 is released\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/33/"
---

Version 0.3.18 is now available.

Changes:
- Fixed a wallet.dat compatibility problem if you downgraded from 0.3.17 
and then upgraded again
- IsStandard() check to only include known transaction types in blocks
- Jgarzik's optimisation to speed up the initial block download a little

The main addition in this release is the Accounts-based JSON-RPC 
commands that Gavin's been working on (more details at 
http://www.bitcoin.org/smf/index.php?topic=1886.0).
- getaccountaddress
- sendfrom
- move
- getbalance
- listtransactions

Download:
http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.18/
