---
title: "Re: Linux - linux-0.1.6-test2 (attachments fine, BitTorrent upload was the culprit)"
date: 2009-11-11T23:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Preserved as a quoted reply inside Satoshi's correspondence with Martti Malmi, published on GitHub in February 2024 as part of Malmi's COPA v. Wright testimony. Exact send time is not recorded; the timestamp above is an approximation between Liberty Standard's 13:08 UTC message earlier on Nov 11 and Satoshi's 05:36 UTC reply on Nov 12."
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "NewLibertyStandard confirms he has been receiving Satoshi's attachments fine and discovers his BitTorrent client was uploading at the limit he had set, which had been throttling the block download."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

I have been getting your attachments just fine. I just thought I'd spare Martti the large attachment.

I am not able to reproduce the bug. I don't know whether the paste, the blocks finishing, a combination of the two or something else entirely caused the fault.

...

But after they started downloading, I took a look a look at my BitTorrent client, and sure enough, I had forgotten about a torrent and my upload was quite high, at the limit I had set for it.
