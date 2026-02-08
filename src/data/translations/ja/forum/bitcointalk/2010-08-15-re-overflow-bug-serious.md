---
title: "Re: overflow bug SERIOUS"
date: 2010-08-15T20:59:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9530#msg9530"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッドにおけるサトシ・ナカモトの返信 \"overflow bug SERIOUS\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/368/"
threadId: "bt-overflow-bug-serious"
threadTitle: "overflow bug SERIOUS"
threadPosition: 1
translationStatus: pending
---

Here's the preliminary change.  Look right?  I have more changes to make, this isn't all of it.  Will SVN shortly.

Code:    bool CheckTransaction() const
    {
        // Basic checks that don't depend on any context
        if (vin.empty() || vout.empty())
            return error("CTransaction::CheckTransaction() : vin or vout empty");

        // Check for negative and overflow values
        int64 nTotal = 0;
        foreach(const CTxOut& txout, vout)
        {
            if (txout.nValue < 0)
                return error("CTransaction::CheckTransaction() : txout.nValue negative");
            if (txout.nValue > 21000000 * COIN)
                return error("CTransaction::CheckTransaction() : txout.nValue too high");
            nTotal += txout.nValue;
            if (nTotal > 21000000 * COIN)
                return error("CTransaction::CheckTransaction() : txout total too high");
        }

        if (IsCoinBase())
        {
            if (vin[0].scriptSig.size() < 2 || vin[0].scriptSig.size() > 100)
                return error("CTransaction::CheckTransaction() : coinbase script size");
        }
        else
        {
            foreach(const CTxIn& txin, vin)
                if (txin.prevout.IsNull())
                    return error("CTransaction::CheckTransaction() : prevout is null");
        }

        return true;
    }

Don't sticky the topic, nobody looks up there.  There'll be enough posts to bump.
