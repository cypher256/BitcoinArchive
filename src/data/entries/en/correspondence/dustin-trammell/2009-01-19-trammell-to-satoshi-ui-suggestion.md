---
title: "Dustin Trammell to Satoshi: re: Bitcoin Transfer — UI wording suggestion (January 19, 2009)"
date: 2009-01-19T19:58:23Z
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
description: "Trammell admits the mislabeling was his error, suggests changing 'Received with' to 'Received payment to' for clarity, and draws a PayPal multi-address analogy as the closest real-world parallel."
isSatoshi: false
tags:
  - "correspondence"
  - "ux"
  - "address-book"
relatedEntries:
  - "aftermath/2009-01-19-trammell-to-satoshi-ui-suggestion"
---

On Tue, 2009-01-20 at 00:44 +0800, Satoshi Nakamoto wrote:
> The first default one is labelled "Your Address" when it's created.
> 
> All the places where address book labels are set are where the user manually sets it.  The only time it automatically adds a label is a blank one when you send to a new address.  I guess you could have entered the label on an address you thought was mine but the software was confusing and you put it in the wrong place.

That would make sense, I bet that's what happened.

> Address book labels for receiving addresses is confusing but I'm not sure what else to do.  Anyone using it for more than just simple purposes would need to create different receiving addresses for each payer so they could tell who's paying them.  That concept doesn't have much analogy in the real world.

I think had it said "Received with address: X" rather than just
"Received with: X" I think I would have understood, although I'm sure
that address being mislabeled 'Satoshi' was the primary reason for my
initial confusion.  You're right though, there's really nothing
comparable in the current financial system that people are used to other
than maybe being able to use multiple recipient email addresses for
PayPal.  Perhaps it could say "Received payment to: X"?

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
