---
title: "Genesis Block Analysis: Hardcoded Parameters, the Five-Day Gap, and Block 0's Un-Attributability"
date: 2009-01-03T18:15:05Z
type: "analysis"
source: "github"
sourceUrl: "https://github.com/trottier/original-bitcoin"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "A technical analysis of Bitcoin's genesis block from the Bitcoin v0.1 source code: the hardcoded parameters and deterministic auto-construction mechanism, a reframing of the 'five-day gap' between Block 0 and Block 1 as a hardcode timestamp artifact, and the underexplored argument that Block 0 is cryptographically un-attributable by design — a consequence of an independent implementation choice (auto-construction) that was not required for consensus."
isSatoshi: false
featured: true
tags:
  - "genesis-block"
  - "source-code"
  - "bitcoin-v0.1"
  - "analysis"
  - "attribution"
  - "hardcode"
  - "blockchain"
secondarySources:
  - name: "Original Bitcoin v0.1 source (trottier/original-bitcoin)"
    url: "https://github.com/trottier/original-bitcoin"
  - name: "Modern Bitcoin Core chainparams.cpp"
    url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp"
  - name: "Bitcoin Wiki — Genesis block"
    url: "https://en.bitcoin.it/wiki/Genesis_block"
  - name: "Lerner (2013) — A new mystery about Satoshi"
    url: "https://bitslog.com/2013/09/03/new-mystery-about-satoshi/"
  - name: "Lerner (2019) — The Return of the Deniers and the Revenge of Patoshi"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
  - name: "Lerner (2020) — The Patoshi Mining Machine"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
  - name: "PLOS ONE (2021) — Strangely mined bitcoins"
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0258001"
relatedEntries:
  - "sourceforge/2009-01-03-genesis-block"
  - "aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery"
  - "aftermath/2024-08-06-forensicxs-bitcoin-v01-code-walkthrough"
  - "analysis/2009-01-09-satoshi-code-analysis"
  - "aftermath/2013-04-17-sergio-lerner-patoshi-analysis"
  - "aftermath/2008-10-31-satoshi-nakamoto-biography"
---

This analysis examines what the Bitcoin v0.1 source code actually does when a node encounters an empty block database, and what that mechanism implies for the long-standing "five-day gap" between Block 0 and Block 1 — and more consequentially, for the question of whether the creator of Block 0 can be cryptographically identified at all.

The technical findings are verifiable against the Bitcoin v0.1 source. The interpretive sections are labeled as such.

## 1. The hardcoded parameters

In Bitcoin v0.1 `src/main.cpp`, every field of Block 0 is a compile-time constant:

- `hashGenesisBlock` = `0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f` (L24)
- `nTime` = `1231006505` (2009-01-03 18:15:05 UTC)
- `nBits` = `0x1d00ffff`
- `nNonce` = `2083236893`
- `pszTimestamp` = `"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"`
- The expected Merkle root and the expected block hash are both asserted as constants

There is no `MineGenesisBlock()` function in v0.1. There is no code path that searches for the genesis nonce at runtime. `LoadBlockIndex()` detects an empty database, reconstructs the genesis block deterministically from those constants, verifies the hash with `assert()`, and writes the result to disk.

Modern Bitcoin Core (`src/kernel/chainparams.cpp`) uses the same four constants (1231006505, 2083236893, 0x1d00ffff, 1). The mechanism has not changed in seventeen years.

The practical consequence: every Bitcoin node that has ever started with an empty block database has constructed its own byte-identical copy of Block 0 from these constants. No node "received" Block 0 from anyone.

## 2. The five-day gap

Block 0 is timestamped 2009-01-03 18:15:05 UTC. Block 1 is timestamped 2009-01-09 02:54:25 UTC. The gap is 5 days, 8 hours, 39 minutes — roughly 770× the intended 10-minute block interval.

The established hypotheses (surveyed on the [Bitcoin Wiki](https://en.bitcoin.it/wiki/Genesis_block) and elsewhere) are:

1. **Backdate.** Satoshi had been developing Bitcoin for some time and backdated the genesis timestamp to January 3 specifically to embed the January 3 *Times* headline. January 3 is a symbolic date, not the moment of creation. This is the dominant view.
2. **Genesis narrative.** An intentional allusion to the biblical creation.
3. **Vanity hash.** The hash leads with substantially more zeros than the target required; searching for an aesthetically pleasing hash took time.
4. **Private testnet.** A pre-release test network ran privately between January 3 and January 9; those blocks were discarded when the public chain launched.
5. **Peer-discovery requirement.** v0.1 `main.cpp` (L2195–2199) waits in `while (vNodes.empty()) { Sleep(1000); ... }` before mining — a single node with no peers could not begin. A two-node configuration (or two processes on one host) would have satisfied this immediately, which is consistent with Satoshi mining dozens of blocks alone between January 9 and Hal Finney joining around January 10.

### Reframing: the hardcode-artifact view

The hardcode mechanism makes a simpler reading available. It is not a new position — it is the same as the backdate hypothesis — but stated in terms of the implementation it actually rests on:

> **The five-day gap is the difference between the day the hardcoded values were decided and the day the live network was first started. It is not elapsed runtime on a live chain.**

Under this view:

| Date | Event | State of Block 0 |
|---|---|---|
| Before 2009-01-03 | Nonce search performed at some point; `2083236893` found | Local/ephemeral |
| 2009-01-03 | *Times* headline committed to the coinbase; `nTime = 1231006505` fixed; values written into the source code | Exists as constants in the code |
| 2009-01-03 → 08 | Code hardening, testing, packaging; no live chain running | Constants, not a live block |
| 2009-01-08 | v0.1 released on SourceForge and announced on the cryptography mailing list | Still just constants |
| 2009-01-09 02:44 UTC | Satoshi starts the live network for the first time | Block 0 is deterministically reconstructed from the constants — this is its first materialization on Satoshi's own machine |
| 2009-01-09 02:54 UTC | Block 1 is mined | |

On this reading, Block 0 and Block 1 are effectively siblings from the same night. The image of Satoshi sitting alone for five days with only Block 0 in his database is an artifact of reading the gap as elapsed chain time.

## 3. Who created Block 0?

The deterministic reconstruction has a second consequence that is less often stated:

> Block 0 is created by every node's local code, from constants. "Creating Block 0" does not require mining.

The only event that *did* require mining is the original search for the nonce `2083236893`. That search happened once, somewhere, before v0.1 was released. It could have been done on any machine, at any time prior to the release date.

The attribution of that search to Satoshi rests on circumstantial grounds:

- Satoshi published the source code containing the constants, so Satoshi decided — or at least knew — the values.
- The *Times* headline pins the coinbase payload to a date from which Satoshi is known to have been active.
- The coinbase output address `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` is widely attributed to Satoshi, but no one has produced a signature from its private key.
- [Lerner's Patoshi pattern](https://bitslog.com/2013/09/03/new-mystery-about-satoshi/) links most of the first ~64 blocks to a single miner. By continuity, that miner is presumed to have done the genesis nonce search as well.

However:

- The Patoshi pattern is recoverable only from **Block 1 onward**. Block 0's coinbase structure is special; the statistical technique does not apply to it. This is stated in the [PLOS ONE 2021 paper](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0258001) and in Lerner's own writings.
- Lerner explicitly keeps "Patoshi" distinct from "Satoshi" as an identity claim.

What chain data *cannot* distinguish:

- Whether Block 0 was constructed before v0.1 release and then discarded, or constructed for the first time on a Satoshi-operated node after release.
- Who ran the nonce search.
- When the nonce search completed.

At the level of cryptographic proof, **Block 0's authorship is indeterminate**. What exists is a strong accumulation of circumstantial evidence.

## 4. The key insight: two independent mechanisms

The v0.1 genesis handling decomposes into two logically independent mechanisms:

| Mechanism | What it does | Is it required? |
|---|---|---|
| **A. Hash hardcoded** (`hashGenesisBlock` constant) | Every node agrees on which Block 0 is "correct" by its hash | **Required.** Without a shared canonical Block 0, distributed consensus does not start |
| **B. Full parameters hardcoded + deterministic auto-construction** (`nTime`, `nNonce`, `nBits`, `pszTimestamp` + `LoadBlockIndex()` empty-DB branch) | A node with an empty database reconstructs Block 0 locally, without contacting any peer | **Not required.** A design in which new nodes received Block 0 from a peer and verified its hash against the constant would also satisfy consensus |

### The hash-only alternative

A plausible alternative design:

1. Hardcode only `hashGenesisBlock` in the source.
2. A new node, with an empty database, requests Block 0 from its first peer.
3. The node hashes the received block and accepts it iff the hash matches the constant; otherwise it rejects.

This is structurally the same mechanism used for every other block. It is a strictly smaller implementation; it reuses existing networking code rather than adding a special empty-DB branch.

Under this alternative, Block 0 has a distributor. Whoever ran the nonce search becomes the sole source of the block data, and that person is observable: they are the node from which every early peer receives Block 0. If Satoshi ran the only node that had Block 0 initially, Satoshi is identifiable as the block's origin via the P2P layer alone.

### What mechanism B actually buys

Satoshi instead chose B. The consequences are structural:

- Anyone can produce Block 0 at any time with no peer connection.
- There is no distributor — the block has no network-observable source.
- The question *"who first broadcast Block 0?"* has no answer, because nobody ever broadcast it.

This is the basis of Block 0's un-attributability. Mechanism A is forced by consensus. Mechanism B is a free choice with a noticeable side effect on attribution.

### Two readings of the choice

**Reading A — implementation convenience.** Auto-construction lets a fresh node bootstrap without a live peer. The un-attributability is an unintended side effect of prioritizing the simplest bring-up path.

**Reading B — deliberate un-attributability.** Given Satoshi's extensively documented anonymization practices (Tor, multiple email addresses, typing-pattern caution, mixed British/American spellings, voluntary withdrawal from the project), the choice of auto-construction is consistent with a policy of leaving no identifying trace — including at the moment of creation.

Source code alone cannot adjudicate between these readings. Both are technically consistent with what v0.1 actually does. The choice between them is interpretive.

What the source code *does* establish is that un-attributability is a **consequence of an independent design decision**, not an inherent feature of block 0. A different, equally viable implementation would have produced a distributor. That decision was made by Satoshi.

## 5. The unspendable 50 BTC: a bootstrap artifact

The Block 0 coinbase reward of 50 BTC has never moved, and cannot. In both v0.1 and modern Bitcoin Core, the empty-DB genesis construction writes Block 0 to the block database but does not write its coinbase output to the UTXO set. The modern `chainparams.cpp` comments note this explicitly: *"the output of its generation transaction cannot be spent since it did not originally exist in the database."*

The Bitcoin Wiki records the community's cautious position: *"it is not known if this was done intentionally or accidentally."*

Read as an inconsistency in an otherwise mining-based block processor, the behavior looks like a gap. For any normal block, `ProcessBlock → AcceptBlock → AddToBlockIndex → ConnectBlock → ConnectInputs → txdb.AddTxIndex` is a single chain. The genesis empty-DB branch runs only `block.WriteToDisk` and `block.AddToBlockIndex` — it does not call `ConnectBlock`, so `AddTxIndex` is never invoked, and the coinbase never enters the transaction index.

A different framing changes what is being described. Block 0 is not "the first mined block." It is **the network's initial state** — a bootstrap construction from constants, not a received mining event. Under that framing, the five signals most often read as evidence of oversight are instead expected behavior:

| Observation | Under bootstrap framing |
|---|---|
| `ConnectBlock` is not called | Expected. `ConnectBlock` processes transactions entering the network; bootstrap initialization is a distinct code path by design. |
| Coinbase output not in the UTXO set | Expected. No UTXO-creating event occurred. The block is not a mining event — it is a given starting condition. UTXOs track the unspent outputs of real transactions. |
| No source comment explaining the omission | Expected. Nothing is being omitted; this is what initialization does. A comment would only be needed if the code were working against its own intent. |
| The processing asymmetry itself | Expected. Initialization and transaction handling are semantically different operations. Symmetry between them would be surprising. |
| Unchanged through 17 years of Core development | Expected. It is not a bug to fix. |

This reading pairs directly with §4. The same design decision — treat Block 0 as a construction from constants, rather than a block that arrives over the P2P layer — produces two consistent consequences:

- No network-observable source for the block → cryptographic un-attributability of its creator (§4).
- No transaction-semantics event → coinbase output never enters the UTXO set (§5).

One design choice, two consistent effects, traceable to the same branch in `LoadBlockIndex()`.

The modern Core comment, re-read under this framing, is not an apology for a legacy quirk. *"Did not originally exist in the database"* is flat description: Block 0 was never a transaction event, so its output was never indexed as one.

Occam's razor favors the bootstrap reading. The accidental reading has to posit an oversight in a v0.1 release whose edge-case handling elsewhere is notably thorough. The bootstrap reading posits nothing: every observed behavior follows from a single semantic choice. The Wiki's "unknown" is a reasonable conservative phrasing for public reference, but against the source code alone, the bootstrap interpretation is the internally more economical one.

(Earlier drafts of this analysis read §5 as "probably accidental based on five source-level signals." That reading was shallow: each signal flips sign once Block 0 is understood as initial state rather than first mined block. The current text is the corrected view.)

Tip transactions sent to `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` after the fact (over 100 BTC cumulative) are *not* subject to the initial-state exclusion — they are ordinary outputs. None of them have ever moved either. This is weak evidence that no one has actively used the private key, if one exists.

## 6. Why this framing has not been formalized

A reasonable question: if Block 0's un-attributability is implicit in the v0.1 source, why has it not been written up explicitly in the Satoshi-research literature?

Several non-exclusive reasons are plausible:

1. **Scope of Patoshi research.** Lerner's work targets post-Block 0 mining patterns. Block 0's special coinbase structure removes it from the technique's domain. A reasonable framing within Lerner's program is simply: "Block 0 is hardcoded; treat it as given." That framing, once established, is inherited by readers who take Lerner as a trusted starting point.
2. **Assumed attribution.** "Satoshi created Bitcoin" is usually taken to entail "Satoshi produced Block 0," and the latter is rarely examined independently of the former.
3. **No obvious payoff.** The question is unfalsifiable in either direction from chain data, and the circumstantial case for Satoshi is genuinely strong. Pointing out that the cryptographic case is indeterminate does not change practical conclusions.
4. **It may simply not have been raised.** A literature search does not surface an explicit decomposition of the hardcode mechanism into "A hash verification (required)" and "B auto-construction (chosen)" with un-attributability traced to B.

The decomposition in §4 is offered as an independent observation grounded directly in the v0.1 source.

## 7. What the source code verifies (citations)

### Bitcoin v0.1 `src/main.cpp`

- L24: `const uint256 hashGenesisBlock("0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");`
- L1420–1489: `LoadBlockIndex()` — empty-DB branch that builds and writes the genesis block.
- L1455–1470:
  ```cpp
  char* pszTimestamp = "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks";
  ...
  block.nTime    = 1231006505;
  block.nBits    = 0x1d00ffff;
  block.nNonce   = 2083236893;
  ```
- L1472: `//// debug print, delete this later`
- L1478: `assert(block.hashMerkleRoot == uint256("0x4a5e1e..."));`
- L1480: `assert(block.GetHash() == hashGenesisBlock);`
- L1485: `block.WriteToDisk(...)`
- L1487: `block.AddToBlockIndex(...)` — note: no `ConnectBlock()` call on this path.
- L2195–2199: `while (vNodes.empty()) { Sleep(1000); ... }` — the peer-wait before mining starts.

### Modern Bitcoin Core `src/kernel/chainparams.cpp`

- L57–60: *"Build the genesis block. Note that the output of its generation transaction cannot be spent since it did not originally exist in the database."*
- L126: `CreateGenesisBlock(1231006505, 2083236893, 0x1d00ffff, 1, ...)`.

The constants are identical between v0.1 and current mainline Core.

## 8. Open questions

- Whether the Patoshi ExtraNonce pattern formally includes Block 0 (the PLOS ONE 2021 paper mentions "first 64 blocks" without fully specifying Block 0's treatment).
- Whether `nTime = 1231006505` corresponds to the actual machine clock during the nonce search, or was set retrospectively to match the *Times* publication date. This cannot be determined from chain data alone.
- Whether a private test network ran during January 3–8, 2009 ("pre-net" hypothesis), as distinct from the interpretation in §2 that only code preparation occurred. Both remain compatible with the evidence.

## 9. Summary

1. Block 0's parameters are hardcoded. Every node reconstructs them locally. No node received Block 0 from another.
2. The five-day gap is consistent with the difference between the date the constants were fixed (Jan 3) and the date the live network started (Jan 9), not elapsed runtime.
3. Who first searched for nonce `2083236893` cannot be determined from chain data. Attribution to Satoshi rests on circumstantial evidence.
4. The hardcode has two independent mechanisms: hash verification (required for consensus) and auto-construction (not required). Un-attributability is a consequence of the second choice.
5. Whether that choice was deliberate anonymization or implementation convenience is interpretive and not settled by the source code.
6. The 50 BTC coinbase unspendability is best read as a consequence of treating Block 0 as network initial state rather than as a mined transaction event — the same bootstrap design that produces un-attributability. One design decision, two effects.

Block 0 is the most symbolic artifact in Bitcoin, and at the same time the most difficult to attribute cryptographically. The same bootstrap construction that creates that difficulty also prevents the 50 BTC coinbase from entering the transaction index. Both outcomes flow from a single line in `LoadBlockIndex()`. Whether that single design choice was driven by implementation convenience or by a deliberate policy of leaving no identifying trace at the moment of creation is the interpretive question §4 leaves open — and the only question the source code itself cannot answer.
