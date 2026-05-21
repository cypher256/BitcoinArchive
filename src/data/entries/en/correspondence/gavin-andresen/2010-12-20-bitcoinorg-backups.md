---
title: "Re: Bitcoin.org backups"
date: 2010-12-20T17:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Preserved as a quoted reply inside Satoshi's response (email #251) in Martti Malmi's archive, published on GitHub in February 2024 as part of Malmi's COPA v. Wright testimony. The exact send time of Gavin's original message is not recorded; the timestamp above is an approximation between Malmi's send (15:55:04 UTC) and Satoshi's reply (18:10:06 UTC)."
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Martti Malmi"
    slug: "martti-malmi"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Gavin warns that distributing the forum database would betray registered users' trust, supports daily PGP-encrypted backups, and offers to pay for Amazon S3 storage if backups stay under a gigabyte."
isSatoshi: false
tags:
  - "correspondence"
  - "bitcoin-org"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Martti Malmi"
    personSlug: "martti-malmi"
    sourceEntryId: "correspondence/martti-malmi/2010-12-20-bitcoinorg-backups-250"
---

On Mon, Dec 20, 2010 at 10:55 AM, <mmalmi@cc.hut.fi> wrote:

<!-- quote: q1 -->
> ShadowOfHarbringer described a way of mirroring the bitcoin.org website and
> forum here:
> http://www.bitcoin.org/smf/index.php?topic=2026.msg30043#msg30043
>
> Should we go by it and trust the database along with its password hashes to
> some reliable community members who have servers?

That seems like asking for trouble, and I think it would violate the
implicit trust of everybody who's registered for the forums.

> Another option is to
> encrypt the backups with pgp and store them in multiple places.

That seems wiser.  Daily backups copied ... somewhere ... seems like
the right thing to do.  If they're reasonably small (less than a
gigabyte), I'd be happy to pay for Amazon S3 storage/bandwidth for
them.
