---
title: "Dustin Trammell to Satoshi: re: a few thoughts — address verification and wallet backup (January 15, 2009)"
date: 2009-01-15T19:03:34Z
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
description: "Trammell argues Bitcoin addresses beat IP-based sending because they can be cross-verified across channels. Proposes an address-advertisement toggle and reports a TCP RST bug on close."
isSatoshi: false
tags:
  - "correspondence"
  - "security"
  - "wallet-backup"
  - "bug-report"
relatedEntries:
  - "aftermath/2009-01-15-trammell-to-satoshi-address-verification"
---

On Fri, 2009-01-16 at 03:42 +0800, Satoshi Nakamoto wrote:
> Sending by IP requests a new public key, so yes, it's vulnerable
> to type 1 man-in-the-middle.  If that's a concern, sending to a
> Bitcoin address doesn't have that vulnerability, although there's
> a small privacy tradeoff.  I have a feeling most of the time
> people will get Bitcoin addresses off of non-SSL websites and
> unsigned cleartext e-mail, which is already vulnerable to type 1
> and type 2 through DNS poisoning.

True, but the upside to using the BitCoin address is that two people can
communicate via a number of different channels to verify the address.
If my friend gets my address off my website, and thinks something fishy
is going on, he can call me, or IM me, or email me, etc. to verify the
address.  An attacker would then have to basically be replacing my
address with the malicious one in every possible communications channel,
including voice, which is a difficult feat.  MITMing the direct
communication via network addresses doesn't have that benefit because
the attacker is spoofing the address or intercepting.  My friend can
verify what my address is with me in the same ways, however verifying
the address doesn't actually improve the situation.

> One solution would be to use both the IP and Bitcoin addresses
> when sending (maybe 1.2.3.4-1Kn8iojk...), where the recipient uses
> the public key of the Bitcoin address to sign the new public key
> to prove that you're sending to who you think you are.  If the
> system starts to be used for real business purposes, I will
> certainly implement that.  Another solution is to use SSL.

That is a good solution.  If you transact regularly you probably already
have the other person's BitCoin address in your address book.

> Another feature for later is an option to encrypt your wallet.

One thing that came to mind on this topic is the potential for BitCoin
loss if you have a system failure.  The application doesn't seem to
store any data in the directory that it runs in, so I assume it's stored
in the registry and other places (haven't cracked out ProcessExplorer
yet to check myself), so it may be a good idea to have the application
be able to export everything that it needs for recovery to a file that
could be backed up off of the system.
 
> It would be nice to only need the Bitcoin address and have the IP
> worked out behind the scenes.  Might have privacy or denial of
> service issues.  Certainly before another sending method is
> implemented, there's plenty of time now to fully think through the
> design and make sure it's the best way.

You could always make that optional, such as a toggle that says
'Advertise my BitCoin address to the network' that the user could turn
on or off.  If you're not found on the network when searched for by
BitCoin address, the transaction is inserted into the block-chain as
normal.  If you are, the transaction meta-data could be communicated to
the network address.

One other thing I noticed today is that if you close the application it
doesn't appear to cleanly close it's network sockets (TCP RST's start
flying).  Probably an item for the low-priority todo list (:

Talk to you later,

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
