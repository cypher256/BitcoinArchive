---
title: "Dustin Trammell to Satoshi: v0.1.0 to v0.1.3 upgrade issues (January 12, 2009)"
date: 2009-01-12T21:40:58Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published verbatim by Dustin Trammell in November 2013. Full mbox archive distributed as Satoshi_Nakamoto.zip via Trammell's blog (https://blog.dustintrammell.com/i-am-not-satoshi/)."
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Trammell reports two issues upgrading from v0.1.0 to v0.1.3: the old process wouldn't exit, and his four generated coins now show 'Generated (not accepted)'."
isSatoshi: false
tags:
  - "correspondence"
  - "bug-report"
  - "v0-1-3"
relatedEntries:
  - "aftermath/2009-01-12-trammell-to-satoshi-upgrade-issues"
---

On Tue, 2009-01-13 at 02:33 +0800, Satoshi Nakamoto wrote:
> Be sure to upgrade to v0.1.3 if you haven't already.  This version
> has really stabilized things.

Two issues with upgrading:

When closing my previous version (help said 0.1.1 but I think it was
really 0.1.0), the process did not exit.  The UI exited but the process
remained.  I had to manually kill the process before I was able to start
version 0.1.3.

Upon opening version 0.1.3, all four of my transaction entries still say
'unconfirmed', but now the Descriptions say 'Generated (not accepted)'.
Does this mean that some other node had extended the chain first and my
coins were generated in a dead branch?  If so, why did the previous
instance of the software not detect this immediately and begin
generating coins in the winning branch?  Bug in 0.1.0?

I'll watch this instance and see how it goes...

Thanks,

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
