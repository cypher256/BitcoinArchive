---
title: "Who is Satoshi Nakamoto? Ten candidate hypotheses compared"
date: 2008-10-31T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Satoshi_Nakamoto"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Paul Le Roux"
    slug: "paul-le-roux"
description: "A comparison of ten Satoshi Nakamoto identity candidates that recur in public discourse: Adam Back, Wei Dai, Hal Finney, Nick Szabo, Dorian Prentice Satoshi Nakamoto, Craig Wright, Paul Le Roux, Len Sassaman, Peter Todd, Isamu Kaneko. The entry lays out each candidate's core argument and external status (self-denials, court rulings, technical disproofs), and aligns them in a seven-dimension candidate profile comparison table. The Sassaman, Kaneko, and Todd hypotheses have dedicated entries for deeper treatment. The entry does not name the most likely Satoshi candidate."
isSatoshi: false
homeOrder: 1
tags:
  - "satoshi-identity"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "Wikipedia (English) — Satoshi Nakamoto"
    url: "https://en.wikipedia.org/wiki/Satoshi_Nakamoto"
relatedEntries:
  - aftermath/2008-08-20-adam-back-biography
  - aftermath/2008-08-22-wei-dai-biography
  - aftermath/2014-08-28-hal-finney-biography
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
  - analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis
  - analysis/2024-10-08-todd-satoshi-identity-hypothesis
  - analysis/2008-10-31-cypherpunk-independent-arrival
  - analysis/2008-10-31-satoshi-name-techno-orientalism
inlineLinkKeywords:
  - "Satoshi Nakamoto candidates"
  - "Satoshi Nakamoto identity candidates"
  - "candidate hypotheses compared"
  - "named-candidate hypotheses"
  - "Satoshi-identity hypotheses overview"
  - "identity hypotheses overview"
---

This entry compares the ten named candidates for Satoshi Nakamoto's identity that recur in public discourse. Each candidate is measured against the documented public-record outline of Satoshi:

- the whitepaper's explicit citation of Hashcash and b-money;
- the August 2008 pre-launch correspondence with Adam Back and Wei Dai;
- Wei Dai's 2014 identifiability argument that Satoshi was *not* a publicly active cypherpunk during the 2007–2008 design window (consistent with the [cypherpunk-independent-arrival analysis](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-independent-arrival/));
- the 19,901-line v0.1 C++ codebase;
- the near-native English register;
- the 18-month intensive design window from mid-2007 through August 2008;
- the April 2011 withdrawal.

The seven-dimension profile comparison table (§2) aligns the ten candidates against this outline. The Sassaman, Kaneko, and Todd hypotheses have dedicated entries in this archive for deeper treatment; the other seven candidates are treated within this entry.

This entry does not name "the most likely Satoshi candidate."

## 1. Methodology

**Profile-match dimensions.** The seven dimensions in §2's comparison table are derived from the public-record outline of Satoshi:

- *Cypherpunk forum participation*: documented presence in the cypherpunks mailing list, metzdowd Cryptography List, or related fora. Wei Dai's 2014 identifiability argument (in his LessWrong AALWA thread) suggests Satoshi was *not* visibly active in these fora during the 2007–2008 design period.
- *Bitcoin-adjacent intellectual lineage*: documented work in or extended citation of Hashcash, b-money, Bit Gold, RPOW, or related digital-cash / proof-of-work proposals.
- *Implementation capability*: documented lifetime track record of shipping software at a scale comparable to Bitcoin v0.1's 19,901-line C++ codebase — cryptographic libraries, P2P systems, anonymity networks, or complete shipping applications of similar size and engineering complexity. The dimension is specifically about *Bitcoin-source-level* capability, not general programming literacy. Lifetime rather than strictly pre-2008: Satoshi-as-pseudonym hides any pre-2008 implementation work the actual person had done, so demonstrated post-launch capability (in Bitcoin Core, related cryptographic projects, or major engineering positions) counts as evidence of the underlying capability. The dimension distinguishes candidates with a documented multi-thousand-line shipping record from theorists, scholars, or small-scale contributors.
- *Monetary system design*: documented thinking about digital-cash / monetary-system mechanisms — proof-of-work tokens, scarcity mechanisms, fee markets, mining incentives, distributed issuance schemes. Bitcoin v0.1 required not only cryptographic and distributed-systems engineering (covered by Implementation) but also coherent thinking about monetary mechanism design; this dimension separates that aspect. A theorist who designed a monetary mechanism without shipping code (Szabo with Bit Gold, for example) scores 🟢 here even with 🔴 on Implementation; an implementer with no monetary-system work in their record (Sassaman with Mixmaster, Le Roux with E4M, Kaneko with Winny) scores the inverse.
- *Near-native English register*: idiom, register-shift, and literary fluency comparable to Satoshi's white paper, BitcoinTalk posts, and email correspondence.
- *Tight timing vs Satoshi's silence*: closeness of a documented major life event (death, retirement, etc.) to Satoshi's last known correspondence (April 26, 2011 email to Gavin Andresen).
- *Low public visibility during 2007–2008 design*: degree to which the candidate could plausibly have undertaken the 18-month intensive design period without leaving public traces in their documented activity.

**Two-group structure.** The seven dimensions split into two groups that pull against each other:

1. *Background and capability* — Cypherpunk fora, BTC lineage, Implementation, Monetary design, English level. 🟢 here means the candidate had what Bitcoin's design required: cypherpunk-style intellectual milieu, digital-cash thinking, code-shipping ability at the relevant scale, and a near-native English register.
2. *Covertness* — Timing, Low visibility. 🟢 here means the candidate's documented profile fits Wei Dai's 2014 identifiability argument that Satoshi was *not* a publicly active cypherpunk during the 2007–2008 design window, and that some life event aligns with Satoshi's April 2011 silence.

The more visibly active a candidate was as a cypherpunk thinker (group 1), the less plausibly they could also have been hidden enough to escape identification (group 2). Reading the comparison requires holding the two groups separately rather than summing green counts. An "all-🟢" candidate is structurally rare: someone simultaneously deeply embedded in cypherpunk capability *and* completely invisible during the design window.

**Profile-match is necessary but not sufficient.** Profile-match alone never decides a hypothesis. The *External status* column (self-denials, court rulings, technical disproofs) operates independently and is in some cases decisive. Cross-cutting observations on how profile-match and external status combine for individual candidates are in §4.

## 2. Candidate profile comparison

| Candidate | Cypherpunk fora | BTC lineage | Implementation | Monetary design | English level | Timing | Low visibility | External status |
|---|---|---|---|---|---|---|---|---|
| [Adam Back](/BitcoinArchive/participants/adam-back/) | 🟢 | 🟢 | 🟢 | 🟡 | 🟢 | 🔴 | 🟡 | Self-denied |
| [Wei Dai](/BitcoinArchive/participants/wei-dai/) | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🔴 | 🟢 | Self-denied |
| [Hal Finney](/BitcoinArchive/participants/hal-finney/) | 🟢 | 🟢 | 🟢 | 🟡 | 🟢 | 🔴 | 🔴 | Self-denied; Patoshi mismatch |
| [Nick Szabo](/BitcoinArchive/participants/nick-szabo/) | 🟢 | 🟢 | 🔴 | 🟢 | 🟢 | 🔴 | 🟡 | Self-denied |
| [Dorian Nakamoto](/BitcoinArchive/participants/dorian-nakamoto/) | 🔴 | 🔴 | 🔴 | 🔴 | 🟡 | 🔴 | 🟢 | Self-denied; p2pfoundation return |
| [Craig Wright](/BitcoinArchive/participants/craig-wright/) | 🔴 | 🔴 | 🔴 | 🔴 | 🟢 | 🔴 | 🟢 | COPA v Wright (2024) ruled against |
| [Paul Le Roux](/BitcoinArchive/participants/paul-le-roux/) | 🟡 | 🔴 | 🟢 | 🔴 | 🟢 | 🔴 | 🟢 | Open (incarcerated 2012–) |
| [Len Sassaman](/BitcoinArchive/participants/len-sassaman/) | 🟢 | 🟡 | 🟢 | 🔴 | 🟢 | 🟢 | 🟡 | Open |
| [Peter Todd](/BitcoinArchive/participants/peter-todd/) | 🔴 | 🔴 | 🟢 | 🟡 | 🟢 | 🔴 | 🟢 | Self-denied (HBO 2024 doc) |
| [Isamu Kaneko](/BitcoinArchive/participants/isamu-kaneko/) | 🔴 | 🔴 | 🟢 | 🔴 | 🔴 | 🔴 | 🔴 | Open |

**Color meaning:** 🟢 matches Satoshi's documented profile; 🔴 does not; 🟡 mixed or partial fit (per-column criteria in §1 Methodology).

**How to read the table:**

- The dimensions split into two groups that pull against each other (background-and-capability vs covertness). Counting 🟢 across all columns and treating the total as a single Satoshi-likeness score is misleading. See §1 Methodology.
- Profile-comparison is *necessary but not sufficient*. The *External status* column shows external evidence (self-denials, court rulings, technical disproofs) that can rule out a candidate independently of the profile comparison.
- Cells corresponding to candidates without a dedicated hypothesis entry in this archive reflect the most widely-held reading of the public record.

## 3. Candidate profiles

The ten candidates fall into three groups by how they entered Satoshi-identity discourse:

- **A. Cypherpunks Satoshi explicitly cited** — Adam Back, Wei Dai
- **B. Cypherpunks with capability fit** — Hal Finney, Nick Szabo, Len Sassaman
- **C. Third-party discovery, self-claim, or name-match** — Dorian Prentice Satoshi Nakamoto, Craig Wright, Peter Todd, Isamu Kaneko, Paul Le Roux

Each profile follows the same micro-structure: background, the hypothesis (proposer and timing), the strongest argument for, the strongest argument against, external status.

### A. Cypherpunks Satoshi explicitly cited

#### Adam Back

**Background.** British cryptographer (born 1970), PhD in computer science from the University of Exeter, inventor of *Hashcash* (1997), the proof-of-work function cited as a primary precedent in Bitcoin's whitepaper. Co-founder and CEO of Blockstream (2014).

**The hypothesis.** Back is one of the cypherpunks Satoshi explicitly cited in the original whitepaper, and one of two known recipients of [Satoshi's pre-launch correspondence in August 2008](/BitcoinArchive/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/). The combination — Hashcash citation, pre-launch contact, capability, BTC-adjacent intellectual lineage — has periodically been read as evidence that Back was Satoshi.

**Argument for.** Hashcash is the proof-of-work primitive Bitcoin reuses, so authorship correlation with Hashcash is the strongest forensic-fit argument. Back is a long-tenure cypherpunk with cryptographic-protocol design experience, near-native English (British), and BTC-adjacent intellectual lineage.

**Argument against.** The pre-launch correspondence (August 20–22, 2008) is itself the strongest counter-evidence: Back asked Satoshi about Hashcash citation and pointed Satoshi to Wei Dai's b-money (which Satoshi had not heard of) — third-party-reception behavior, not same-author scaffolding. Back has publicly treated Satoshi as a separate person, most prominently in his [February 2024 COPA v Wright testimony](/BitcoinArchive/entries/aftermath/2024-02-21-adam-back-retrospective-testimony/), where he submitted his complete email correspondence with Satoshi as witness evidence.

**External status.** Self-denied (most prominently via COPA v Wright testimony submitting his Satoshi correspondence as evidence); pre-launch correspondence reads as third-party reception.

#### Wei Dai

**Background.** Chinese-American cryptographer, author of the Crypto++ library (a widely-deployed open-source cryptographic library), designer of *b-money* (1998), the digital-cash proposal Bitcoin's whitepaper cites alongside Hashcash. Active cypherpunk-mailing-list presence in the late 1990s.

**The hypothesis.** Wei Dai is the other cypherpunk Satoshi explicitly cited in the whitepaper, and the second known recipient of [Satoshi's pre-launch correspondence in August 2008](/BitcoinArchive/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/). The b-money citation, the pre-launch contact, and the digital-cash intellectual lineage have periodically been read as evidence that Wei Dai was Satoshi.

**Argument for.** b-money's design space overlaps with Bitcoin's specifically (digital-cash with proof-of-work) more directly than Hashcash. Bitcoin v0.1 directly bundled Wei Dai's Crypto++ library for its SHA-256 implementation (`src/sha.cpp` / `src/sha.h` extracted from Crypto++ 5.5.2 with `namespace CryptoPP` attribution) — a documented codebase dependency on Wei Dai's library, not just intellectual lineage. Long-tenure cypherpunk presence.

**Argument against.** In a [2014 retrospective on LessWrong](/BitcoinArchive/entries/aftermath/2014-01-12-wei-dai-retrospective-on-satoshi/), Wei Dai indicated that Satoshi was "not previously active" in cypherpunk communities — a framing inconsistent with Wei Dai himself having been Satoshi. The same pre-launch correspondence argument as for Adam Back applies: Wei Dai's replies read as a third party receiving an external proposal. Satoshi's pre-launch email to Wei Dai indicates Satoshi had only recently learned of b-money via Adam Back's referral — a fact that would not make sense if Satoshi = Wei Dai. The Crypto++ codebase dependency is weaker than it appears in isolation: Crypto++ was the most-deployed open-source C++ cryptographic library in 2007–2008 (a standard selection for any C++ developer), and the v0.3.6 SSE2-assembly upgrade (July 2010) was proposed by BitcoinTalk member "blackeye," not Satoshi independently.

**External status.** Self-denied; pre-launch correspondence reads as third-party reception; 2014 retrospective inconsistent with self-authorship.

### B. Cypherpunks with capability fit

#### Hal Finney

**Background.** Cypherpunk (Harold Thomas Finney II, May 4, 1956 – August 28, 2014), Caltech engineering graduate, principal developer of PGP 2.0, creator of Reusable Proof-of-Work (RPOW). On January 9, 2009 (Bitcoin v0.1 release day) Finney downloaded the software and became the first person other than Satoshi to run a Bitcoin node; on January 11, 2009 he tweeted "Running bitcoin"; on January 12, 2009 he received 10 BTC from Satoshi in Block 170 — the first person-to-person Bitcoin transaction. He lived for almost a decade in Temple City, California — the same town where Newsweek would later identify Dorian Prentice Satoshi Nakamoto, "blocks apart."

**The hypothesis.** Finney's deep cypherpunk credentials, pre-Bitcoin proof-of-work work (RPOW), early adoption of Bitcoin (first non-Satoshi node), and geographic proximity to a person literally named "Satoshi Nakamoto" combine into one of the most-discussed Satoshi-identity hypotheses in cryptocurrency journalism (most prominently in Andy Greenberg's 2014 *Forbes* investigation).

**Argument for.** Finney was capability-deep on cryptography (PGP Inc., RPOW). His cypherpunk-mailing-list presence is documented from the early 1990s. His geographic proximity to Dorian Nakamoto raises a pseudonym-source theory. He was the most natural early adopter when Bitcoin launched.

**Argument against.** On April 18, 2009, Finney was [running a 10-mile race in Santa Barbara during a window when Satoshi was active on the Bitcoin network](/BitcoinArchive/entries/aftermath/2023-10-21-lopp-hal-finney-not-satoshi/) — a race-day alibi first reported by Andy Greenberg (Forbes, 2014) and formalized into a structured analysis by Jameson Lopp (2023). The [Patoshi mining-pattern analysis](/BitcoinArchive/entries/aftermath/2013-04-17-sergio-lerner-patoshi-analysis/) (Sergio Demian Lerner, April 2013) identifies a hashing fingerprint inconsistent with Finney's documented mining setup. Finney was publicly visible in cryptography during 2007–2008 (RPOW work, mailing-list activity), inconsistent with "structurally outside the visible cypherpunk community." Self-denied being Satoshi in his March 2013 essay [*Bitcoin and Me*](/BitcoinArchive/entries/aftermath/2013-03-19-bitcoin-and-me-hal-finney/), written shortly before his death.

**External status.** Self-denied; Patoshi technical disproof; race-day alibi.

#### Nick Szabo

**Background.** Computer scientist, legal scholar, and cryptographer (born 1964). Coined the term "smart contracts" (1994). Designer of [*Bit Gold*](/BitcoinArchive/entries/aftermath/2008-04-27-nick-szabo-bit-gold-implementation-request/), a decentralized digital-currency proposal based on proof-of-work conceived in 1998 and published in full on his Unenumerated blog on December 29, 2005.

**The hypothesis.** Bit Gold is the closest pre-Bitcoin design conceptually — proof-of-work, chained puzzles, decentralized verification — to Bitcoin's mechanism design. The combination of Bit Gold's conceptual proximity and Szabo's literary writing register on Unenumerated has produced a recurring hypothesis that Szabo was Satoshi.

**Argument for.** Bit Gold's mechanism design overlaps with Bitcoin's on monetary-mechanism aspects (proof-of-work, scarcity, decentralized issuance) more directly than Hashcash (anti-spam) or b-money (general digital cash). Szabo's writing register on Unenumerated is at a sophisticated literary level. His thinking about digital scarcity mechanisms predates Bitcoin by a decade.

**Argument against.** Szabo has publicly denied being Satoshi (per his Wikipedia biography and recurring public statements). Bit Gold remained a conceptual proposal — in [April 2008](/BitcoinArchive/entries/aftermath/2008-04-27-nick-szabo-bit-gold-implementation-request/) Szabo himself asked publicly "Anybody want to help me code one up?" for a bit gold demo, indicating he had not implemented it. His documented work is in writing and legal scholarship, not implementation. Szabo's continued public writing (Unenumerated blog) throughout 2007–2008 is documented activity during the design window. Szabo also acknowledged in his [May 2011 blog post](/BitcoinArchive/entries/aftermath/2011-05-28-nick-szabo-bitcoin-what-took-ye-so-long/) that "Nakamoto improved a significant security shortcoming that my design had" — treating Satoshi as a separate person who improved on his work.

**External status.** Self-denied.

#### Len Sassaman

**Background.** Cypherpunk cryptographer (1980–2011), lead developer of the Mixmaster anonymous remailer, KU Leuven PhD candidate.

**The hypothesis.** Sassaman's death by suicide on July 3, 2011 — three months after Satoshi's last documented private email — combined with his cypherpunk credentials, capability with adversarial-environment cryptographic systems, and the silence of his widow Meredith Patterson (a cryptographer herself) on the identity claim, has made this hypothesis a recurring topic in English-language discourse. The most prominent recent articulation is Evan Hatch's 2021 piece.

**Argument for.** Timing fits: Satoshi's April 2011 silence aligning with a death three months later is unusual among Satoshi candidates. Sassaman's capability with cryptographic protocol design (Mixmaster) and adversarial-environment systems matches the Bitcoin v0.1 profile. Patterson's silence on the identity claim has not been used to deny it.

**Argument against.** Sassaman's 2007–2008 public activity is documented in his [Wikipedia entry](https://en.wikipedia.org/wiki/Len_Sassaman) and conference proceedings: he gave *Anonymity for 2015* at 24C3 in Berlin (December 2007) and *Anonymity and its Discontents* at Black Hat USA 2007 in Las Vegas, and coauthored *The Byzantine Postman Problem* with Bart Preneel (May 2008) — though all in the anonymity-networks specialty rather than digital-cash discussion specifically. Mixmaster (anonymity routing) and Bitcoin (digital cash) overlap in cryptographic primitives but diverge in architecture. Sassaman's KU Leuven PhD workload during 2008–2011 conflicts with an 18-month intensive Bitcoin design effort. No direct documentary link between Sassaman and Satoshi has surfaced. Patterson's silence is information but ambiguous (could be either non-confirmation or non-denial).

**External status.** Open. See the [Sassaman = Satoshi hypothesis entry](/BitcoinArchive/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/) for full treatment.

### C. Third-party discovery, self-claim, or name-match

#### Dorian Prentice Satoshi Nakamoto

**Background.** Japanese-American engineer (born 1949 in Beppu, Japan; immigrated to the United States 1959) with a defense-systems background. Lived in Temple City, California, a few blocks from Hal Finney.

**The hypothesis.** [Newsweek (Leah McGrath Goodman, March 6, 2014)](/BitcoinArchive/entries/aftermath/2014-03-06-newsweek-dorian-nakamoto/) identified Dorian Nakamoto as a Satoshi candidate primarily on name match.

**Argument for.** Name match (literally "Satoshi Nakamoto"). Defense-systems engineering background. Geographic proximity to Hal Finney could support a pseudonym-source theory.

**Argument against.** No technical evidence connects him to the codebase. No cypherpunk credentials, no BTC-adjacent intellectual lineage, no documented programming work at Bitcoin v0.1 scale. Dorian Nakamoto firmly and repeatedly denied any involvement with Bitcoin in interviews after the Newsweek article (he retained a lawyer and gave a detailed interview to the Associated Press reaffirming his denial); he said he had misunderstood Goodman's doorstep question and thought she was asking about his prior classified defense work. The day after the Newsweek piece, [the Satoshi p2pfoundation account briefly returned to post "I am not Dorian Nakamoto"](/BitcoinArchive/entries/aftermath/2014-03-07-satoshi-p2p-foundation-return/) (post authenticity remains debated; the account may have been compromised). The Bitcoin community raised over 67 BTC in donations for Dorian Nakamoto.

**External status.** Self-denied; p2pfoundation return.

#### Craig Wright

**Background.** Australian computer-security figure.

**The hypothesis.** Wright began claiming to be Satoshi in late 2015 / 2016 ([initial Wired and Gizmodo identification, December 2015](/BitcoinArchive/entries/aftermath/2015-12-08-wired-gizmodo-craig-wright-claims/); [BBC and *The Economist* self-claim, May 2016](/BitcoinArchive/entries/aftermath/2016-05-02-craig-wright-bbc-economist-claim/)). The hypothesis rests entirely on self-claim — there is no other line of evidence supporting it.

**Argument for.** Self-claim (no other supporting evidence).

**Argument against.** Wright's attempted [cryptographic 'proof' (May 2016)](/BitcoinArchive/entries/aftermath/2016-05-02-craig-wright-bbc-economist-claim/) was quickly debunked — he had reused a signature from a 2009 transaction rather than producing a new one. The [COPA v Wright trial (UK High Court, judgment by Justice Mellor, March 14, 2024)](/BitcoinArchive/entries/aftermath/2024-03-14-copa-v-wright-ruling/) ruled four findings: Wright is not the author of the Bitcoin whitepaper, not the person operating as Satoshi 2008–2011, not the creator of the Bitcoin system, and not the author of the initial Bitcoin software. The judgment concluded Wright had engaged in "deliberate and extensive forgery of documents to support his false claim of being Satoshi Nakamoto." No documented cypherpunk-mailing-list presence in the 1990s; no pre-2008 BTC-adjacent intellectual work in his public record.

**External status.** COPA v Wright (2024) ruled against on four findings; deliberate document forgery established by court; debunked cryptographic proof.

#### Peter Todd

**Background.** Canadian Bitcoin Core developer (born 1985), contributor since around 2012, known for Replace-by-Fee (RBF) and other Core protocol work.

**The hypothesis.** Identified as a Satoshi candidate in the [2024 HBO documentary *Money Electric: The Bitcoin Mystery*](/BitcoinArchive/entries/aftermath/2024-10-08-hbo-money-electric-peter-todd/) (directed by Cullen Hoback, released October 8, 2024). The documentary's argument rested in part on a December 2010 BitcoinTalk thread in which Todd's reply appeared to complete or extend a partially-edited Satoshi post in a way the documentary read as same-author behavior.

**Argument for.** Bitcoin Core implementation capability (post-2012). The HBO documentary's December 2010 BitcoinTalk thread reading.

**Argument against.** Todd was 22 years old in mid-2007 when Satoshi's documented 18-month design window started, an undergraduate at OCAD University (Integrated Media, graduated 2011) — a profile frequently raised in critiques of the HBO documentary. No documented cypherpunk-mailing-list presence pre-2012. His Bitcoin Core contributions began ~2012, after Satoshi's withdrawal. No documented BTC-adjacent intellectual work pre-2010. Todd has publicly denied being Satoshi; the documentary's evidence has been widely critiqued in the Bitcoin technical community as circumstantial.

**External status.** Self-denied (post-HBO); community critique of evidence as circumstantial.

See the [Peter Todd = Satoshi hypothesis entry](/BitcoinArchive/entries/analysis/2024-10-08-todd-satoshi-identity-hypothesis/) for full treatment.

#### Isamu Kaneko

**Background.** Japanese researcher (1970–2013), developer of the *Winny* P2P file-sharing system (2002), defendant in a high-profile criminal case from 2004 to 2011 (acquitted by the Supreme Court of Japan, December 2011). Died of myocardial infarction on July 6, 2013.

**The hypothesis.** Circulates predominantly in Japanese-language discourse, supported by Kaneko's P2P system development capability and Japanese-name match.

**Argument for.** P2P system development capability (Winny). Japanese-name match raises the pseudonym-choice question. Technical sophistication on file-sharing and distributed-systems aspects.

**Argument against.** Limited English fluency: Kaneko's documented research record is Japanese-language, with no documented near-native English writing matching Satoshi's register. No documented cypherpunk-mailing-list presence. Winny is file-sharing, not digital cash — no BTC-adjacent intellectual lineage. Hyper-visible during 2007–2008: ongoing high-profile criminal trial proceedings, public defense, inconsistent with "structurally outside the visible cypherpunk community" during the design window. No documented monetary-design work. No direct documentary link.

**External status.** Open. See the [Kaneko Isamu = Satoshi hypothesis entry](/BitcoinArchive/entries/analysis/2013-07-06-kaneko-isamu-satoshi-identity-hypothesis/) for full treatment.

#### Paul Le Roux

*[Archive note: This archive does not yet hold dedicated Le Roux entries (biography, E4M announcement, criminal-case documents, or Mastermind references). The summary below is drawn from external sources — primarily journalist Evan Ratliff's *The Mastermind* (Random House, 2019) and accompanying Atavist long-form journalism — and from public records. Treat the specific dates and claims as externally sourced rather than archive-verified.]*

**Background.** South African / Zimbabwean ex-encryption-software developer (creator of *E4M* open-source disk encryption in 1999, later forked into TrueCrypt). Transitioned around 2002 to running an international criminal enterprise (online pharmacies, weapons trafficking, methamphetamine production). Arrested by US authorities in September 2012; serving a long federal prison sentence per public reporting.

**The hypothesis.** Identified as a possible Satoshi candidate primarily through journalist Evan Ratliff's investigation in *The Mastermind* (Random House, 2019) and accompanying Atavist long-form journalism.

**Argument for.** Technical-skill match: open-source encryption software experience (E4M). Public reporting documents cypherpunks-mailing-list presence in 1999 (E4M announcement) and broader Usenet encryption-discussion activity in the late 1990s. Low public visibility during the design period (operating covertly), fitting "structurally outside the visible cypherpunk community" during 2007–2008. Possible motive: separating his cryptographic past from his criminal present.

**Argument against.** Cypherpunks-mailing-list presence in 1999 was limited compared to long-tenure cypherpunks like Adam Back or Hal Finney — single E4M announcement and a few discussions, not sustained participation (per public reporting). No documented monetary-design work in his record. His criminal operations from 2002 onwards focused on logistics and operations, not cryptographic engineering — no public Bitcoin-source-level shipping after E4M. The hypothesis rests on capability + covertness + motive alignment, all circumstantial. No documentary link, no leaked correspondence.

**External status.** Open (incarcerated). Le Roux has not publicly addressed the hypothesis from prison.

## 4. Cross-cutting observations

- **Wei Dai is the candidate closest to "all-🟢" — and external status still rules him out.** Six of seven dimensions are 🟢; only Timing is 🔴. After the 1998 b-money proposal, his mailing-list posting frequency dropped and during 2007–2008 he focused on Crypto++ maintenance, naturally placing him in the "invisible" zone. However, he has self-denied, and the August 2008 pre-launch correspondence reads as Wei Dai receiving Satoshi's proposal as a third party (the same argument that applies to Adam Back). Profile-match alone, even at near-maximum, does not decide.
- **Sassaman is the only externally-open high-scorer — and his pattern is a specialty-separation byproduct.** His 2007–2008 public activity was in the anonymity-research specialty (Mixmaster, KU Leuven, 24C3 and Black Hat 2007), adjacent to but distinct from Bitcoin's digital-cash specialty. He could be visible in his own field while remaining invisible in Bitcoin's. Most candidates do not get this specialty-separation benefit and pay the capability-vs-covertness trade-off more directly.
- **An "all-🟢" candidate is structurally rare.** The capability-vs-covertness opposition makes it nearly impossible to be simultaneously deeply embedded in cypherpunk capability *and* completely invisible during the design window. Wei Dai approaches it through specialty-shift (active mailing-list participation in late 1990s, retreat to Crypto++ maintenance during 2007–2008). Sassaman approaches it through specialty-separation (visible in anonymity research, invisible in digital-cash).
- **Name-match (Dorian) and self-claim (Wright) have both been publicly refuted.** Group C's two highest-profile claims share a structural pattern: both relied on a single line of evidence (name or self-claim) without underlying technical or intellectual fit. The Newsweek identification was demolished by Dorian's repeated denial (with lawyer and AP interview), the p2pfoundation account post "I am not Dorian Nakamoto," and broad criticism of the journalistic methodology. The Wright self-claim was demolished by the COPA v Wright ruling. Group C candidates who remain open (Le Roux, Kaneko, Todd) do so on capability + covertness arguments rather than identification-by-claim.
- **Profile-match is necessary but not sufficient.** No candidate is ruled in by profile-match alone, and no candidate is ruled out by profile-match alone. The combination of profile-match with external status (and, for low-scoring candidates, the absence of supporting evidence) is what determines current discourse standing.

## 5. Limits of this entry

- This entry does not present new evidence. It compiles publicly available material into one comparison.
- This entry does not name "the most likely Satoshi candidate." Profile-comparison is necessary but not sufficient; external status is in some cases decisive.
- Profile-comparison labels (🟢, 🔴, 🟡) are qualitative summaries, not numerical scores. They visualize judgments stated elsewhere (in individual hypothesis entries, or in widely-held readings of the public record). Different qualified readers may place individual cells differently.
- This entry assumes the public record is the relevant evidence base. Hypotheses based on private channels, claimed unverifiable communications, or unsourced personal recollection are not addressed here.
- The set of named candidates is not closed. Hypotheses involving other named persons or groups exist in public discourse; this entry covers the ten most-discussed.
- For full treatment of the Sassaman, Kaneko, and Todd hypotheses, see the individual entries. Other candidates do not yet have dedicated hypothesis entries in this archive.
