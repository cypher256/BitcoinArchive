---
title: "Re: Bitcoin.org backups"
date: 2010-12-21T13:44:02Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Malmi provides the wget command and credentials for fetching the daily GPG-encrypted bitcoin.org backup file."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "bitcoin-org"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
    note: "Published on GitHub in February 2024 as part of Martti Malmi's testimony in the COPA v. Wright trial"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

You can fetch the backup with:

```
wget --no-check-certificate https://backup:cAr26Ram@www.bitcoin.org/backup/bitcoinsite.tar.bz2.gpg
```

It's updated every day 11:00 GMT.
