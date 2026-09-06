---
title: "What owning a bitcoin actually means"
date: 2026-09-06T00:00:00Z
type: "guide"
source: "bitcoin-pdf"
sourceUrl: "https://bitcoin.org/bitcoin.pdf"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Part 1 of the beginner guide. A bitcoin is not a coin sitting in an account — it behaves more like a receipt, unlocked by a key only you hold."
isSatoshi: false
tags:
  - "beginner-guide"
  - "explainer"
partOf: "analysis/2026-05-23-how-bitcoin-works-visual-glossary"
relatedEntries:
  - "design/2009-01-03-bitcoin-transaction-design"
  - "design/2009-01-03-bitcoin-cryptography-design"
---

![A torn receipt beside a small lock-and-key illustration, both rendered in the archive's dark editorial palette](/BitcoinArchive/images/analysis/2026-09-06-what-owning-a-bitcoin-actually-means-hero.png)

A grocery receipt proves you paid for what's in your bag. It doesn't sit in some ledger with your name attached to it, waiting to be checked — it's just a slip of paper, and whoever holds it can point to it as proof. Tear it up or lose it, and that particular proof is gone for good.

A bitcoin works closer to that receipt than to a coin in a jar or a number in a bank column. There's no physical object, and no single account balance sitting on a server with your name on it either. What you actually hold is a pile of these receipt-like slips, and your "balance" is just what they add up to.

<!-- visual: utxo-receipt -->

Each slip is called, in the jargon, an **unspent transaction output** — mercifully abbreviated to **UTXO**. It's "unspent" because nobody has used it yet; the moment it's spent, it's gone, the same way a torn receipt can't be used twice. Spending doesn't edit a slip's value down — it consumes the whole slip and prints new ones: one for whatever you're paying, and, if the slip was worth more than the payment, one back to you as change. That's the entirety of a **transaction**: old slips in, new slips out.

So who decides which slips are yours to spend? That's where a second idea comes in — one that has nothing to do with receipts and everything to do with locks.

## A lock only you can open

Imagine a lockbox that anyone can drop money into, but that only one specific key can open. Bitcoin gives every user exactly that: a secret number, called a **private key**, generated at random and never shared with anyone. From that private key, ordinary math derives a second number, the **public key** — think of it as the lock itself, safe to show the whole world, because knowing what a lock looks like doesn't help you pick it.

<!-- visual: key-signature -->

From the public key, the same math produces a short address: a string anyone can send bitcoin to, the way a mailbox address lets anyone post you a letter. Sending bitcoin to that address is like dropping a slip into the lockbox — anyone can do it, but only the person holding the private key can open the box back up and spend what's inside.

To actually spend, your wallet doesn't hand over the private key itself — that would be like publishing the key to the lock. Instead it produces a **signature**: a piece of math, unique to that specific transaction, that proves whoever created it holds the private key, without ever revealing the key. Anyone on the network can check the signature is genuine; nobody can work backward from it to steal the key.

A **wallet**, in everyday use, is just the software that keeps track of your private keys and does this locking and unlocking for you. It never needs to touch anyone else's — only its own.

## Bitcoin's own small change

One last practical detail: the amounts. What you'll usually see quoted is **BTC**, but underneath, Bitcoin counts in a much smaller unit — one hundred millionth of a BTC — named **satoshi**, after the system's pseudonymous author. You'll rarely need to think in satoshi directly, but it's the unit a UTXO's value is actually stored in, and it's why very small bitcoin amounts are quoted as "so many sats" rather than an awkward string of decimal zeros.

None of this — the receipts, the lock and key, the signature — says anything yet about who else on the network agrees your slips are real, or what stops the same slip being spent twice somewhere else. That's the ledger everyone shares, and it's the subject of [the next page](/BitcoinArchive/entries/analysis/2026-09-06-how-transactions-become-a-shared-ledger/).
