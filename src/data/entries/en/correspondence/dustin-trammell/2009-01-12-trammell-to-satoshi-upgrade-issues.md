---
title: "Re: Bitcoin v0.1 released - Upgrade issues"
date: 2009-01-12T21:40:58Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Trammell reports two issues upgrading from v0.1.0 to v0.1.3: the old process wouldn't exit, and all four generated coins showed 'Generated (not accepted)' — likely orphans from the communications bug."
isSatoshi: false
tags:
  - "correspondence"
  - "early-adopter"
  - "mining"
  - "bug-report"
  - "orphan-blocks"
  - "v0.1.3"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
    note: "Published by Dustin Trammell in November 2013"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
---

Sent just eleven minutes after his previous email, Trammell reported two issues encountered during the upgrade from v0.1.0 to v0.1.3:

> When closing my previous version (help said 0.1.1 but I think it was really 0.1.0), the process did not exit. The UI exited but the process remained. I had to manually kill the process before I was able to start version 0.1.3.

More concerning was the loss of his generated coins:

> Upon opening version 0.1.3, all four of my transaction entries still say 'unconfirmed', but now the Descriptions say 'Generated (not accepted)'. Does this mean that some other node had extended the chain first and my coins were generated in a dead branch? If so, why did the previous instance of the software not detect this immediately and begin generating coins in the winning branch? Bug in 0.1.0?

Trammell had correctly diagnosed the problem — the communications bug in v0.1.0 had prevented his node from broadcasting blocks to the network, causing all his mined blocks to be orphaned. Satoshi confirmed this in his next reply.
