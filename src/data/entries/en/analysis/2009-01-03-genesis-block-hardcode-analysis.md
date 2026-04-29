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
  - name: "Craig Wright"
    slug: "craig-wright"
description: "Technical analysis of Bitcoin's genesis block from the v0.1 source code: the hardcode auto-construction mechanism, the five-day-gap reinterpreted as a timestamp artifact, a two-layer reading of authorship (epistemic vs ontological — distinguishing anonymization from un-ownership by design), the numerical PoW headroom of the genesis hash as a softer secondary observation, and the separable dimension of private-key possession."
isSatoshi: false
homeOrder: 4
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
  - "aftermath/2022-10-06-serhack-alternative-genesis-block"
  - "aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis"
  - "aftermath/2024-08-06-forensicxs-bitcoin-v01-code-walkthrough"
  - "analysis/2009-01-09-satoshi-code-analysis"
  - "aftermath/2013-04-17-sergio-lerner-patoshi-analysis"
  - "aftermath/2024-03-14-copa-v-wright-ruling"
  - "aftermath/2008-10-31-satoshi-nakamoto-biography"
  - "analysis/2008-08-20-satoshi-activity-timeline"
inlineLinkKeywords:
  - "five-day gap"
  - "5-day gap"
  - "un-attributability"
  - "un-ownership by design"
  - "Genesis Block hardcode"
  - "unspendable 50 BTC"
---

This analysis examines what the Bitcoin v0.1 source code actually does when a node encounters an empty block database, and what that mechanism implies for three long-discussed questions about the [Bitcoin genesis block](/BitcoinArchive/entries/sourceforge/2009-01-03-genesis-block/): the five-day gap between Block 0 and Block 1, the cryptographic attribution of Block 0, and the unspendable 50 BTC coinbase.

Technical claims are verifiable against the Bitcoin v0.1 source. Interpretive sections are labeled as such.

For a separate forensic reading of Satoshi's *personal operational environment* during the January 8-12, 2009 launch week — a topic adjacent in time but different in object — see [Satoshi's launch-period environment analysis](/BitcoinArchive/entries/analysis/2009-01-10-satoshi-launch-environment/).

## 1. Key distinctions used in this analysis

| Term | Meaning |
|---|---|
| **Epistemic layer** | What can or cannot be concluded from the available evidence. "There may be a single true answer, but we cannot determine it." |
| **Ontological layer** | Whether the presupposition of the question holds. "Whether a single answer is well-defined at all." |
| **Anonymization** (identity hiding) | The author exists; identifying traces are suppressed. A hiding operation on a signal that exists. |
| **Un-ownership by design** | The author does not resolve to a well-defined subject at the structural level. There is no hidden identity because there is no well-defined identity to hide. |
| **Bootstrap initialization** | Construction of an initial state from constants; semantically distinct from processing a mining event received from the network. |

These distinctions are used throughout. Sections 4 and 5 depend on them.

## 2. The hardcoded parameters

In Bitcoin v0.1 `src/main.cpp`, every field of Block 0 is a compile-time constant:

- `hashGenesisBlock` = `0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f` (L24)
- `nTime` = `1231006505` (2009-01-03 18:15:05 UTC)
- `nBits` = `0x1d00ffff`
- `nNonce` = `2083236893`
- `pszTimestamp` = `"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"`
- The expected Merkle root and the expected block hash are both asserted as constants.

There is no `MineGenesisBlock()` function in v0.1. There is no code path that searches for the genesis nonce at runtime. `LoadBlockIndex()` detects an empty database, reconstructs the genesis block deterministically from those constants, verifies the hash with `assert()`, and writes the result to disk.

Modern Bitcoin Core (`src/kernel/chainparams.cpp`) uses the same four constants (1231006505, 2083236893, 0x1d00ffff, 1). The mechanism has not changed in seventeen years.

Practical consequences:

- Every Bitcoin node that has ever started with an empty block database has constructed its own byte-identical copy of Block 0 from these constants.
- No node has ever received Block 0 from a peer.
- "Creating Block 0" does not require mining.
- Block 0 is unique: all nodes assemble the same single block locally; there is no distribution event.

## 3. The five-day gap

Block 0 is timestamped 2009-01-03 18:15:05 UTC. Block 1 is timestamped 2009-01-09 02:54:25 UTC. The gap is 5 days, 8 hours, 39 minutes — roughly 770× the intended 10-minute block interval.

Various hypotheses have been surveyed on the [Bitcoin Wiki](https://en.bitcoin.it/wiki/Genesis_block) and in [Pete Rizzo's 2024 Bitcoin Magazine article](/BitcoinArchive/entries/aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery/): backdate, genesis narrative, vanity hash, private testnet, peer-discovery requirement. Treating these as parallel options for "what caused the gap" is a category error. Technically, two distinct questions are conflated:

- **Q1. Why does the gap exist at all?**
- **Q2. What was Satoshi doing during those five days?**

Q1 is structurally nearly determined. Q2 remains empirically open from the public record. This section treats them separately.

### 3.1 Q1 (the cause): the difference between hardcode date and release date

Q1 is not a choice among hypotheses; it is a structure readable directly from the source code:

> **The five-day gap is the difference between the day the hardcoded values were decided and the day the live network was first started. It is not elapsed runtime on a live chain.**

Timeline:

| Date | Event | State of Block 0 |
|---|---|---|
| Before 2009-01-03 | Nonce search performed at some point; `2083236893` found | Local / ephemeral |
| 2009-01-03 | *Times* headline committed to the coinbase; `nTime = 1231006505` fixed; values written into the source code | Exists as constants in the code |
| 2009-01-03 → 08 | Code hardening, testing, packaging; no live chain running | Constants, not a live block |
| 2009-01-08 | v0.1 announced on the cryptography mailing list | Still just constants |
| 2009-01-09 (SourceForge release; estimated live start: minutes before Block 1) | Satoshi starts the live network for the first time | Block 0 is deterministically reconstructed from the constants — first materialization even on Satoshi's own machine. The exact start time is not recorded on chain |
| 2009-01-09 02:54:25 UTC | Block 1 is mined (on-chain: `nTime`) | |

Block 0 and Block 1 are effectively siblings from the same night. The image of Satoshi sitting alone for five days with only Block 0 in his database is an artifact of reading the gap as elapsed chain time.

The "backdate hypothesis," the "retroactive timestamp aligned to the *Times* headline," and the "hardcode artifact" framing are all the same structure restated in different words. They are not competing hypotheses; they are multiple names for a single phenomenon.

### 3.2 Inverting Q1: why was 2009-01-03 missed?

Inverted, Q1 becomes a more substantive question — *why was the release not ready by January 3?* Choosing the January 3 timestamp implicitly set January 3 as the target. Actual release was January 8, and Block 1 was mined January 9 at 02:54:25 UTC (on-chain `nTime`; Satoshi's node must have started some minutes earlier, though this is not recorded on chain). The five-day slip is a developer's slip against his own target date.

The public signals — only about seven and a half hours between the January 8 19:27:40 UTC mailing list announcement ([metzdowd.com archive](https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html)) and the January 9 02:54:25 UTC Block 1 mining — weakly suggest "tight finish" over "generously buffered plan." This is speculative and cannot be decided from source code or chain data alone.

### 3.3 Q2 (the activity): empirically indeterminate

Independent of Q1, what exactly Satoshi was doing between 2009-01-03 and 01-08 cannot be determined from the public record. Of the hypotheses listed above, every item except the backdate belongs under Q2, not Q1:

| Hypothesis | Contribution to Q2 | Assessment |
|---|---|---|
| **Testing / debugging / packaging** | Code hardening | SourceForge registration, documentation, binary builds were required. The most plausible Q2 activity |
| **Vanity hash** | Nonce search time | The hash comfortably clears the difficulty-1 target (see §5.5). At 2009-era CPU SHA-256d rates (~1–10 MH/s, consistent with [Lerner's Patoshi estimate](https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/)), reaching a 10-hex-zero prefix has expected search time on the order of hours to a few days. When the nonce `2083236893` was actually found cannot be determined from chain data |
| **Mining program endurance testing** | Incidental nonce search | The mining program itself was one of the components shipped in v0.1. Exercising it under prolonged continuous operation is a reasonable part of final verification, independent of any intent to search for a "better" nonce. Under such a run, the best-hash search continues as a side effect. This is consistent with the harvest-best reading in §5.5 but attributes the motive to code endurance rather than depth targeting or ceremony duration. Both motives produce observations compatible with the actual nonce; chain data cannot separate them |
| **Private testnet** | Private test network | A private testnet may have run between 1/3 and 1/9; nothing remains on chain to confirm or refute (see §8 Open questions). An [alternative pre-release genesis block dated September 10, 2008](/BitcoinArchive/entries/aftermath/2022-10-06-serhack-alternative-genesis-block/) exists in source Satoshi shared privately, establishing that test genesis blocks did occur during development |
| **Peer-discovery requirement** | Mining start condition | v0.1 `main.cpp` (L2195–2199) waits in `while (vNodes.empty()) { Sleep(1000); ... }`, but a two-node configuration (or two processes on one host) satisfies this immediately. Satoshi could have launched two processes himself on 1/9 — this does not determine the gap |
| **Genesis narrative** | Symbolic allusion | Folk interpretation. No technical grounding; no contribution to Q2 |

These items are informational inputs for Q2 (what he was doing), not candidate causes for Q1 (why the gap exists). Listing them in a single "five hypotheses for the gap" inflates the five-day interval into one mystery, when in fact it decomposes cleanly into a structurally determined Q1 and an empirically open Q2.

## 4. "Who is the author of Block 0?"

The deterministic reconstruction has a structural consequence that is less often stated. This section separates two layers of the same question.

### 4.1 Structural difference between a normal block and Block 0

For any normal block, there is a single well-defined attribution target: the miner who first satisfied proof-of-work and broadcast the block. For Block 0, every column of that mapping is different:

| Dimension | Normal block | Block 0 |
|---|---|---|
| Construction actor | The single miner who first solved PoW | Every node reconstructs the same unique block from its own code |
| Distribution | Miner → peer → network | Never distributed; each node assembles locally |
| Reward ownership | Controlled by the coinbase address's private-key holder | No owner (coinbase output never enters the UTXO set; see §6) |
| Well-defined "author" | The miner | None at the structural level |

"Every node reconstructs its own copy" does *not* mean "there are many different geneses." The hash constant (mechanism A, §5) enforces *one* canonical Block 0 at the consensus level; the auto-construction branch (mechanism B, §5) lets every node build that single block without a distributor. The result is that a unique Block 0 has no single source.

### 4.2 Epistemic layer: the nonce search

The hardcoded nonce `2083236893` corresponds to a physical computation that happened once, on someone's machine, before the v0.1 release. Brute-force search was required; the search could have been performed on any machine prior to January 8, 2009.

Attribution of that search to Satoshi rests on circumstantial grounds:

- Satoshi published the source code containing the constants — Satoshi decided or knew the values.
- The *Times* headline pins the coinbase payload to a date from which Satoshi is known to have been active.
- The coinbase output address `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` is widely attributed to Satoshi, but no one has produced a valid signature from its private key.
- [Lerner's Patoshi pattern](https://bitslog.com/2013/09/03/new-mystery-about-satoshi/) links most of the first ~64 blocks to a single miner. By continuity, that miner is presumed to have run the genesis nonce search as well.

However:

- The Patoshi pattern is recoverable only from **Block 1 onward**; Block 0's coinbase structure is special and the statistical technique does not apply. Stated explicitly in the [PLOS ONE 2021 paper](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0258001) and in Lerner's own writings.
- Lerner explicitly keeps "Patoshi" distinct from "Satoshi" as an identity claim.

What chain data cannot distinguish:

- Whether Block 0 was first constructed before the v0.1 release and then discarded, or constructed for the first time on a Satoshi-operated node after release.
- Who ran the nonce search.
- When the nonce search completed.

At the epistemic level — what can be concluded from available evidence — Block 0's nonce-search authorship is indeterminate. What exists is a strong accumulation of circumstantial evidence, not cryptographic proof.

But this framing still presupposes that there *is* a single true answer that the record merely fails to reveal. The next subsection argues that the presupposition itself is worth questioning.

### 4.3 Ontological layer: the nonce finder is not the author of Block 0 on-chain

Whoever ran the nonce search was "the person who computed the value to embed in the source." That person was never:

- The owner of Block 0 (the coinbase output is not in the UTXO set, §6).
- The distributor of Block 0 (there is no distribution, §4.1).
- The party who handed Block 0 to anyone (the block is assembled by each node from constants).

Once the value entered the source code, it became a constant. Everyone who compiles and runs the client reconstructs the same block from the same constants. The value's historical origin (who ran the search) is decoupled from the on-chain artifact.

The chain of equivalence "the miner is the author" is natural for every normal block. It breaks at Block 0 because the structural conditions that make "miner = author" meaningful (proof-of-work as the sole construction event; peer distribution as the sole source; UTXO entry as the sole ownership mechanism) are all absent by design.

Under an ontological reading, Block 0 is not the case "there is a single author, and we cannot determine who." It is the case "a single-author concept does not apply to this object at all." The question "is the author Satoshi alone, Satoshi plus collaborators, or someone else who handed Satoshi the constants?" does not acquire a privileged answer — not because the record is incomplete, but because the design does not instantiate a single-valued author entity in the first place.

### 4.4 "Satoshi created Bitcoin" as a conventional, not a technical, attribution

The statement *"Satoshi created the genesis block"* remains meaningful as a historical and literary description. Satoshi wrote the v0.1 source, fixed the hardcoded values, and is circumstantially the most likely person to have run the nonce search. These are strong grounds.

But that statement is not equivalent to the same assertion about any other block. "Miner of Block N is Y" is technically grounded: the coinbase output address binds the reward to a specific private-key holder, and the PoW trace records the mining event on-chain. For Block 0, the coinbase address is itself a hardcoded constant (private-key possession unverified), and no PoW trace attaches to Block 0 in the chain data.

"Satoshi created Block 0" is therefore a conventional attribution inferred from different facts at a different level — "Satoshi wrote the code" and "Satoshi released the software." It is not an on-chain attribution in the technical sense, because the technical apparatus for on-chain attribution does not engage Block 0.

### 4.5 Anonymization vs un-ownership by design

The core distinction that runs through §5:

| | Anonymization | Un-ownership by design |
|---|---|---|
| Status of the author | Exists, identity suppressed | Does not resolve as a well-defined subject |
| Reachability | Traces can in principle be followed; concealment is external | No target to follow; the structural conditions do not instantiate one |
| Means | Operational hiding (Tor, address rotation, style control, typing-pattern caution) | Structural design (auto-construction + non-UTXO coinbase) |
| Satoshi's documented examples | Tor usage, multiple email addresses, mixed British/American spellings, typing-pattern caution, voluntary withdrawal, wallet.dat removal | Block 0's auto-construction and the non-UTXO coinbase |

Satoshi's anonymization practices and Block 0's design are *not* the same kind of move. The first hides an existing signal; the second does not produce the signal to begin with. §5 argues that this second mode is the stronger reading of Block 0's design, and is qualitatively distinct from — not an intensified form of — the anonymization practices.

## 5. The hardcode mechanism decomposition

### 5.1 Two independent mechanisms

The v0.1 genesis handling decomposes into two logically independent mechanisms:

| Mechanism | What it does | Is it required? |
|---|---|---|
| **A. Hash hardcoded** (`hashGenesisBlock` constant) | Every node agrees on which Block 0 is "correct" by its hash | **Required.** Without a shared canonical Block 0, distributed consensus does not start |
| **B. Full parameters hardcoded + deterministic auto-construction** (`nTime`, `nNonce`, `nBits`, `pszTimestamp` + `LoadBlockIndex()` empty-DB branch) | A node with an empty database reconstructs Block 0 locally, with no peer contact | **Not required.** A design in which new nodes received Block 0 from a peer and verified its hash against the constant would also satisfy consensus |

### 5.2 The hash-only alternative

A plausible alternative design:

1. Hardcode only `hashGenesisBlock` in the source.
2. A new node with an empty database requests Block 0 from its first peer.
3. The node hashes the received block and accepts it iff the hash matches the constant; rejects otherwise.

This is structurally the same mechanism used for every other block. It is a strictly smaller implementation; it reuses existing networking code rather than adding a special empty-DB branch.

Under this alternative, Block 0 has a distributor. Whoever ran the nonce search becomes the sole source of the block data, and that source leaves a P2P-layer trace — each early peer has a first receipt from some specific node. Whether that trace would have been enough to *uniquely* identify the origin in real network conditions is a separate empirical question. The structural point is narrower and sufficient for this analysis: the concept of a distributor would exist. Mechanism B eliminates the concept itself.

### 5.3 Source code is symmetric; behavioral evidence is not

Satoshi chose mechanism B. Two readings of that choice:

**Reading A — implementation convenience.** Auto-construction lets a fresh node bootstrap without a live peer. Un-attributability is an unintended side effect of prioritizing the simplest bring-up path.

**Reading B — un-ownership by design.** Block 0 is constructed such that authorship does not resolve to a well-defined subject at all (§4.3). This is more precisely stated than "deliberate anonymization": anonymization presupposes an author whose identity is concealed, whereas un-ownership by design removes the author as a well-defined concept at the structural level.

Source code alone cannot adjudicate between A and B. Both are consistent with what v0.1 does. At that level the choice is interpretive.

When the surrounding record is factored in, the weights are not equal:

1. **The alternative design is strictly smaller.** Hash-only + peer-received genesis would reuse existing networking code and would not need an empty-DB branch. If implementation convenience were the motive, the smaller design would have been the natural choice. Auto-construction is the *larger* implementation; choosing it costs complexity the smaller design would have saved.
2. **Consistency with documented behavior.** Tor, address-rotating email, mixed British/American spellings, typing-pattern caution, voluntary withdrawal, and wallet.dat removal all point in the same direction: remove identifying signal. Reading one element of that pattern (the genesis design) as mere convenience while reading every other element as intentional is the one interpretation that breaks the symmetry of the record.
3. **Shared-constant coinbase address.** A per-invocation coinbase address would have produced one more piece of individual signal. A shared constant embedded in the source is consistent with "leave no per-person trace."
4. **The Times headline is the sole personal element.** The nonce, the address, and the processing structure are all de-personalized. The one element carrying individual voice is the coinbase payload text. A design otherwise careful to de-personalize, with one deliberate exception, is more easily read as intentional than as coincidentally uniform. Separately, [Chain Bulletin's 2020 analysis](/BitcoinArchive/entries/aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis/) treats the same headline as geographic evidence (British paper, British spelling conventions) supporting a London-based Satoshi — the same surviving signal, read for location rather than for intent.
5. **The same Occam's razor applied in §6.** §6 argues the coinbase unspendability is a consequence of treating Block 0 as initial state, not an oversight, because "oversight" requires positing an overlooked side effect. Applied symmetrically here: Reading B requires no added assumption; Reading A asks that the larger, non-required implementation was chosen for no particular reason on a project whose other choices are highly deliberate.

At the source-code level A and B sit on the same footing. Over the full record, B is the reading that requires no added assumption. The rest of this analysis treats B as the more likely interpretation, while continuing to mark it as interpretation rather than fact.

What the source code *does* establish, independent of A vs B: un-attributability is a consequence of an independent design decision, not an inherent feature of Block 0. A different, equally viable implementation would have produced a distributor. That decision — larger implementation, no distributor — was Satoshi's.

### 5.4 Why this framing has not been formalized

A reasonable question: if Block 0's un-attributability is implicit in the v0.1 source, why has the decomposition "A (required) vs B (chosen) → un-attributability traceable to B" not been written up explicitly in the Satoshi-research literature?

Several non-exclusive reasons are plausible:

1. **Scope of Patoshi research.** Lerner's program targets post-Block 0 mining patterns. Block 0's special coinbase structure removes it from the technique's domain. A natural framing within that program is "Block 0 is hardcoded; treat it as given." Readers who take Lerner as a trusted starting point inherit the framing.
2. **Assumed attribution.** "Satoshi created Bitcoin" is usually taken to entail "Satoshi produced Block 0," and the latter is rarely examined independently of the former.
3. **No obvious payoff.** The question is unfalsifiable in either direction from chain data, and the circumstantial case for Satoshi is genuinely strong. Pointing out that the cryptographic case is indeterminate does not change practical conclusions.
4. **Simply unremarked.** A literature search does not surface an explicit decomposition along the lines of §5.1–§5.3 with un-attributability traced to mechanism B.

The decomposition here is offered as an independent observation grounded directly in the v0.1 source.

### 5.5 A secondary observation: PoW headroom

Mechanism B is not the only non-required design choice visible in Block 0. The genesis hash also sits well below the difficulty-1 target, which is a smaller, more interpretive observation but worth stating precisely.

Three layers, stated in terms of what each layer actually checks:

| Layer | What is checked |
|---|---|
| v0.1 consensus on Block 0 | Hash equality only. The empty-DB branch in `LoadBlockIndex()` runs `assert(block.GetHash() == hashGenesisBlock);` — no PoW comparison is invoked for Block 0. |
| PoW validity at difficulty 1 | The hash, interpreted as a 256-bit integer, must be numerically ≤ the difficulty-1 target `0x00000000ffff0000...`. This is a numerical comparison, not a prefix-count. |
| Actual genesis hash `0x000000000019d6689c...` | Numerically well below the difficulty-1 target (the first non-zero 16-bit chunk is `0x0019`, far under the target's `0xffff`). |

At the v0.1 consensus level Block 0 only needs hash equality; even an arbitrary hash value would have functioned in-protocol. The actual genesis hash comfortably satisfies the difficulty-1 bound, with meaningful numerical headroom. Whether that headroom is best read as a deliberate design signal is a softer question than the distributor question of §5.3:

- Under Reading A, the headroom is plausibly a conservative engineering choice — let external observers run the standard PoW check against difficulty 1 and have it pass unambiguously, rather than land right at the boundary.
- Under Reading B, the same headroom reads as a weight-ascribing mark: inside an otherwise de-personalized design, leave a visibly sub-target hash paired with the editorial *Times* headline as the two deliberate individual elements the design still carries.

Source code does not sharply distinguish these. The observation is **compatible** with Reading B — especially paired with the headline, which is the one unambiguously personal element — but it does not by itself rule out the conservative-engineering reading. Unlike §5.3 where a smaller alternative implementation exists and was not chosen, here the alternative (a hash landing near the difficulty-1 boundary) is stylistic rather than structural.

The pattern worth noting, then, is narrower than "Satoshi added intentional weight to the genesis":

| Non-required choice | Structural diagnosticity for Reading B |
|---|---|
| **Mechanism B** (auto-construction) | Strong — the smaller alternative was not chosen |
| **The *Times* headline** in the coinbase | Strong — unambiguously personal content in an otherwise de-personalized design |
| **PoW headroom** (hash well under target) | Weaker — compatible with both readings; more noticeable paired with the headline than in isolation |

Stating the observation at this weaker strength is more honest than the "8 digits required, 10 observed" framing used in earlier drafts, which conflated a numerical comparison with a prefix count.

**Search-mode consideration.** At the order of magnitude of 2009-era CPU SHA-256d hash rates (~1–10 MH/s, consistent with Lerner's Patoshi estimates), the nonce search for the observed genesis hash falls on the scale of hours to a few days. Two search modes are consistent with the observed result and not distinguishable from chain data:

- **Target-based.** Search until a hash with the desired number of leading zeros appears, then stop. Expected completion time for 10 hex leading zeros is on the order of a day or two at the rates above.
- **Harvest-best.** Run the search over a fixed wall-clock interval and adopt the best-seen value at the end. Over an interval on the scale of the Jan 3 → Jan 9 gap, the expected best leading-zero count falls near 10 hex digits — a numerical size-match for the observed hash.

The harvest-best reading is a genuine alternative to the "chose depth N deliberately" reading: under it, the 10-digit outcome is the statistical product of the chosen search duration rather than a separately selected target. This does not change §5.3's argument about mechanism B — which turns on the existence of a smaller-but-not-chosen alternative design, not on how the specific hash depth was arrived at. It does, however, make the PoW headroom compatible with Reading B under either interpretive path (target-based as deliberate depth; harvest-best as deliberate duration), and in that sense somewhat firms up the observation as a design-scale signal even while leaving the specific mode indeterminate.

## 6. The unspendable 50 BTC: a bootstrap artifact

### 6.1 Technical behavior

The Block 0 coinbase reward of 50 BTC has never moved, and cannot. In both v0.1 and modern Bitcoin Core, the empty-DB genesis construction writes Block 0 to the block database but does not write its coinbase output to the UTXO set. The modern `chainparams.cpp` comment states: *"the output of its generation transaction cannot be spent since it did not originally exist in the database."*

The Bitcoin Wiki records the cautious community position: *"it is not known if this was done intentionally or accidentally."*

### 6.2 Accidental vs intentional bootstrap

Read as an inconsistency in an otherwise mining-based block processor, the behavior looks like a gap. For any normal block, `ProcessBlock → AcceptBlock → AddToBlockIndex → ConnectBlock → ConnectInputs → txdb.AddTxIndex` is a single chain. The genesis empty-DB branch runs only `block.WriteToDisk` and `block.AddToBlockIndex` — it does not call `ConnectBlock`, so `AddTxIndex` is never invoked, and the coinbase never enters the transaction index.

A different framing changes what is being described. Block 0 is not "the first mined block." It is the network's initial state — a bootstrap construction from constants, not a received mining event. Under that framing, the five signals most often read as evidence of oversight become expected behavior:

| Observation | Under bootstrap framing |
|---|---|
| `ConnectBlock` is not called | Expected. `ConnectBlock` processes transactions entering the network; bootstrap initialization is a distinct code path by design. |
| Coinbase output not in the UTXO set | Expected. No UTXO-creating event occurred. The block is a given starting condition, not a mining event. UTXOs track the unspent outputs of real transactions. |
| No source comment explaining the omission | Expected. Nothing is being omitted; this is what initialization does. A comment would only be needed if the code were working against its own intent. |
| The processing asymmetry itself | Expected. Initialization and transaction handling are semantically different operations. Symmetry between them would be surprising. |
| Unchanged through 17 years of Core development | Expected. It is not a bug to fix. |

The modern Core comment, re-read under this framing, is not an apology for a legacy quirk. *"Did not originally exist in the database"* is flat description: Block 0 was never a transaction event, so its output was never indexed as one.

Occam's razor favors the bootstrap reading. The accidental reading has to posit an oversight in a release whose edge-case handling elsewhere is notably thorough. The bootstrap reading posits nothing: every observed behavior follows from a single semantic choice.

### 6.3 Unification with §4 (dual absence)

The bootstrap framing of §6.2 pairs directly with the ontological reading of §4. The same design decision — treating Block 0 as a constants-derived initial state, not as a block that arrives over the P2P layer — produces two consistent absences:

```
Block 0 = bootstrap initialization (intentional design, Reading B)
  ├── auto-construction: no network-observable source
  │     → no single author resolves on-chain (§4 — absence of creative attribution)
  └── initial state, not a transaction event
        → coinbase output never enters the UTXO set (§6 — absence of economic attribution)
```

Block 0 is structurally un-owned along both axes: no cryptographically resolvable creator, no cryptographically resolvable beneficiary. Under Reading B, these are not two quirks but two consequences of one coherent design intent — Block 0 is placed in the world as an artifact that does not belong to a specific party on either axis.

### 6.4 Donations to the genesis address

Transactions sent to `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` *after* Block 0 (over 100 BTC cumulative in donations and tips) are *not* subject to the initial-state exclusion — they are ordinary outputs. None of them have ever moved either. This is weak evidence that no one has actively used the private key, if one exists.

### 6.5 Private-key possession: a separable dimension

A distinct question from everything above: does anyone hold the private key corresponding to the Block 0 coinbase output address?

It is important to separate the dimensions that are easily conflated:

| Dimension | Block 0 status | Established from |
|---|---|---|
| Authorship (who constructed the block) | Structurally absent (auto-construction) | Source code (§4, §5) |
| Spendability (can the 50 BTC be moved) | No (UTXO exclusion) | Source code (§6) |
| Private-key possession (does anyone hold the key to `1A1zP1eP5...`) | Unknown | Empirical — no valid signature has been presented |
| Identity demonstrability (could key possession prove "I am Satoshi") | Contingent on the row above | — |

Key-possession technical status:

- The coinbase output's public key is a hardcoded constant; a mathematical private key therefore exists (it was generated at some point by someone).
- Who generated it (presumed Satoshi) is a circumstantial claim.
- Who currently holds it is unknown; no valid signature from that key has been demonstrated.
- Because the 50 BTC is excluded from the UTXO set (§6.1), the key cannot be used to move those coins even if held. The key *could* be used to sign arbitrary messages — doing so has not been publicly demonstrated.

Relationship to later Satoshi-attributed keys: the Block 0 coinbase address is a hardcoded source constant. Block 1 and subsequent early-block coinbase addresses were generated by Satoshi's wallet per-block. The Block 0 key is therefore not one of the thousands of addresses making up the Patoshi-pattern holdings — it is unique and independent.

The Craig Wright / COPA v. Wright case is the principal public episode here. From 2016 onward Wright claimed to be Satoshi and staked his identity claim on signing with **blocks 1–9** keys — most prominently a May 2016 blog post demonstration that was quickly identified as a reused signature from the 2009 block-9 Hal Finney transaction rather than a new signature produced from a claimed key. Wright's public claims and demonstrations did not extend to the Block 0 coinbase key; contemporary critics pointed out that the genuine test of Satoshi identity would be signing with the Block 0 (genesis) key, and no such demonstration was ever produced — by Wright or anyone. In the 2024 [COPA v. Wright ruling](/BitcoinArchive/entries/aftermath/2024-03-14-copa-v-wright-ruling/), Mr Justice James Mellor ruled in a ~400-page decision that Wright was not Satoshi and characterised his evidence as an industrial-scale forgery exercise. That the Block 0 key has never been exercised — even in Wright's most aggressive identity claims — is itself a piece of the record: the single-shot test that would be dispositive has remained unperformed.

Scenarios (all source-code-compatible; none confirmable from chain data):

| Scenario | 50 BTC movability | Key-signature possible by | Consistency with observed record |
|---|---|---|---|
| Satoshi holds, remains inactive | No (UTXO) | Satoshi (not exercised) | Consistent with the ~1.1M BTC inactivity pattern |
| Satoshi destroyed the key | No | No one (including Satoshi) | Consistent with wallet.dat removal and withdrawal |
| Satoshi transferred the key | No | Recipient | No circumstantial evidence |
| Key originated outside Satoshi, value passed to Satoshi to embed | No | Original generator | No circumstantial evidence |

Private-key possession is epistemically open. It is logically independent of §4's authorship question and §6's spendability question, and it does not change the §5 argument — the un-ownership-by-design reading of Block 0 does not depend on any particular answer to key possession, because none of the scenarios above restores a well-defined owner of Block 0 as a chain object.

## 7. What the source code verifies (citations)

### Bitcoin v0.1 `src/main.cpp`

- L24: `const uint256 hashGenesisBlock("0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");`
- L1420–1489: `LoadBlockIndex()` empty-DB branch that builds and writes the genesis block.
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
- L1487: `block.AddToBlockIndex(...)` — no `ConnectBlock()` call on this path.
- L2195–2199: `while (vNodes.empty()) { Sleep(1000); ... }` — peer-wait before mining starts.

### Modern Bitcoin Core `src/kernel/chainparams.cpp`

- L57–60: *"Build the genesis block. Note that the output of its generation transaction cannot be spent since it did not originally exist in the database."*
- L126: `CreateGenesisBlock(1231006505, 2083236893, 0x1d00ffff, 1, ...)`

Constants are identical between v0.1 and current mainline Core.

## 8. Open questions

- Whether the Patoshi ExtraNonce pattern formally includes Block 0 (the PLOS ONE 2021 paper mentions "first 64 blocks" without fully specifying Block 0's treatment).
- Whether `nTime = 1231006505` corresponds to the actual machine clock during the nonce search, or was set retrospectively to match the *Times* publication date. Not determinable from chain data alone.
- Whether the nonce search was conducted as target-based (stop at first hash meeting the intended depth) or harvest-best (run for a fixed wall-clock interval and adopt the best-seen value). Both modes are consistent with the observed nonce and the Jan 3–9 timing, and chain data does not distinguish between them (§5.5).
- Whether a private test network ran during January 3–8, 2009 (the pre-net hypothesis), as distinct from the interpretation in §3 under which only code preparation occurred. Both remain compatible with the evidence.
- Whether anyone holds the Block 0 coinbase private key, and if so who (§6.5). No valid signature has been demonstrated.

## 9. Summary

1. Block 0's parameters are hardcoded. Every node reconstructs them locally. No node received Block 0 from another.
2. The five-day gap is consistent with the difference between the date the constants were fixed (Jan 3) and the date the live network started (Jan 9), not elapsed runtime.
3. Block 0 authorship separates into two layers:
   - **Epistemic**: who ran the nonce search cannot be determined from chain data; attribution to Satoshi rests on circumstantial evidence.
   - **Ontological**: the structural conditions that make "miner = author" meaningful for every other block (PoW as construction event, peer as distribution source, UTXO as ownership mechanism) are absent by design. "Single author" is not a well-defined concept applied to Block 0.
4. The hardcode decomposes into two independent mechanisms: hash verification (required for consensus) and auto-construction (not required). Un-attributability is a consequence of the second.
5. Whether that choice was implementation convenience (Reading A) or un-ownership by design (Reading B) is not settled by the source code alone. Behavioral evidence — larger-than-necessary implementation, consistency with Satoshi's other de-personalizing choices, shared-constant coinbase address, the *Times* headline as sole personal element, and the same Occam's razor used in §6 — asymmetrically favors Reading B.
6. Block 0 exhibits a secondary observation: the genesis hash sits numerically well below the difficulty-1 target, and the v0.1 consensus on Block 0 is equality-only, not a PoW comparison. Read as "deliberate weight-ascribing", this is compatible with Reading B's pattern; read as "conservative engineering so the PoW form check passes unambiguously for external observers", it is compatible with Reading A. The observation is less sharply diagnostic than mechanism B alone — more noticeable when paired with the *Times* headline than in isolation.
7. The same bootstrap construction that produces un-attribution on the creative axis (§4) also produces un-attribution on the economic axis (§6): the coinbase output never enters the UTXO set because Block 0 is an initial-state artifact, not a transaction event. One design decision, two parallel absences.
8. Private-key possession for the Block 0 coinbase address (`1A1zP1eP5...`) is a separable dimension from the above. It remains empirically open — no valid signature has been demonstrated, the Craig Wright / COPA case foreclosed one high-profile claim, and the structural un-ownership argument does not depend on any particular answer to this question.

Block 0 is the most symbolic artifact in Bitcoin, and structurally the one furthest from a well-defined owner on any axis. No distributor — no resolvable creator. No transaction event — no spendable output. Under Reading A the pairing is coincidence; under Reading B the pairing is the mechanism, and Block 0 was placed in the world as something that was not meant to belong to a specific party — singly or plurally — on either axis.
