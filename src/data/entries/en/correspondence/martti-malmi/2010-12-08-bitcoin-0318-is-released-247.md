---
title: "[bitcoin-list] Bitcoin 0.3.18 is released"
date: 2010-12-08T23:09:45Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Version 0.3.18 is now available."
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 247
tags:
  - "correspondence"
  - "early-contributor"
  - "release"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
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




------------------------------------------------------------------------------
This SF Dev2Dev email is sponsored by:

WikiLeaks The End of the Free Internet
http://p.sf.net/sfu/therealnews-com
_______________________________________________
bitcoin-list mailing list
bitcoin-list@lists.sourceforge.net
https://lists.sourceforge.net/lists/listinfo/bitcoin-list

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
