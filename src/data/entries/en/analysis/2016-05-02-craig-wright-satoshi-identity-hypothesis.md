---
title: "Was Craig Wright Satoshi? The only hypothesis its subject made about himself"
date: 2016-05-02T00:00:00Z
type: "analysis"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Craig_Steven_Wright"
author: "Craig Wright"
participants:
  - name: "Craig Wright"
    slug: "craig-wright"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "The only Satoshi claim made by its own subject: Craig Wright's 2016 self-identification, its reused-signature 'proof,' and the 2024 COPA ruling that he is not Satoshi and forged evidence."
isSatoshi: false
tags:
  - "satoshi-identity"
  - "craig-wright"
  - "identity-claim"
  - "debunked"
  - "copa"
  - "analysis"
  - "disputed"
secondarySources:
  - name: "COPA v Wright — UK High Court Judgment (March 14, 2024)"
    url: "https://www.judiciary.uk/judgments/copa-v-wright/"
  - name: "BBC — Craig Wright reveals himself as Bitcoin creator (May 2, 2016)"
    url: "https://www.bbc.co.uk/news/technology-36168863"
  - name: "Wired — Is Craig Wright Satoshi Nakamoto? (December 8, 2015)"
    url: "https://www.wired.com/2015/12/bitcoins-creator-satoshi-nakamoto-is-probably-this-unknown-australian-genius/"
  - name: "Law Gazette — 'Fake Satoshi' hit with costs bill over AI evidence (March 2025)"
    url: "https://www.lawgazette.co.uk/news/fake-satoshi-hit-with-costs-bill-over-ai-evidence/5122587.article"
partOf: "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
relatedEntries:
  - aftermath/2016-05-02-craig-wright-biography
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
inlineLinkKeywords:
  - "Craig Wright hypothesis"
  - "Craig Wright = Satoshi"
---

Every other named-candidate hypothesis is a claim made *about* a person. This one was made *by* him. On May 2, 2016, Craig Wright declared in [coordinated interviews with the BBC, The Economist, and GQ](/BitcoinArchive/entries/aftermath/2016-05-02-craig-wright-bbc-economist-claim/) that he was Satoshi Nakamoto, and offered cryptographic proof to settle it. The proof collapsed within hours, and eight years later the UK High Court ruled, in [COPA v Wright](/BitcoinArchive/entries/aftermath/2024-03-14-copa-v-wright-ruling/), that he is not Satoshi and that he had forged documents on a grand scale to support the claim. The full event narrative and timeline are in the [Craig Wright biography](/BitcoinArchive/participants/craig-wright/).

## 1. What the hypothesis claims

The claim is that Craig Steven Wright — an Australian computer scientist and businessman — was the person behind the Satoshi Nakamoto pseudonym during 2008–2011, author of the white paper and the original Bitcoin software. It first surfaced in December 2015, when [Wired and Gizmodo named Wright as a probable Satoshi](/BitcoinArchive/entries/aftermath/2015-12-08-wired-gizmodo-craig-wright-claims/) on the strength of leaked materials later shown to be fabricated; Wright then made the claim himself, in his own name, in May 2016. It is the only Satoshi-identity hypothesis the candidate has personally asserted rather than denied.

## 2. The arguments the claim rested on

### 2.1 The cryptographic "proof"

Authorship of Bitcoin can, in principle, be demonstrated cryptographically: the person who controls Satoshi's keys can sign a message with them. Wright staged exactly this demonstration in May 2016, presenting a digitally signed message using keys associated with early Bitcoin blocks.

The objection: within hours, security researchers showed the "signature" was an existing signature lifted from a 2009 Bitcoin transaction, re-presented as if it were a fresh signing with the claimed keys. A copied signature demonstrates nothing about who holds the key — it is the one move that looks like proof while proving nothing.

### 2.2 The early-block signing claim

Wright's case rested on the ability to sign with the keys to early blocks (numbers 1–9), the period when Satoshi mined nearly alone.

The objection: it never extended to the genesis-block coinbase key — the single demonstration that would be dispositive. As the [genesis-block hardcode analysis](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) notes, that signing has never been performed, by Wright or by anyone. A claim to sign blocks 1–9 that stops short of the one block whose key would settle the question leaves the question unsettled.

### 2.3 The promise of further evidence

When the May 2016 demonstration failed, Wright promised to provide further, conclusive proof, and instead [withdrew](/BitcoinArchive/participants/craig-wright/), writing that he could not, after all, put the years of anonymity behind him.

The objection: the further evidence never came. A claim that depends on proof always about to arrive, and never arriving, accumulates no weight from the promise.

## 3. The counter-evidence

| Counter-evidence | Central observation | Strength assessment |
|---|---|---|
| §3.1 The reused signature | The 2016 "proof" was a 2009 transaction signature re-presented, not a new signing | Demolishes the one affirmative demonstration the claim offered |
| §3.2 The COPA v Wright ruling | A UK High Court found, on four counts, that Wright is not Satoshi | Direct judicial finding on the full evidentiary record — the strongest single counter |
| §3.3 The forgery finding | The same court found Wright an extremely dishonest witness who forged documents extensively | Converts the affirmative case into evidence against the claim |
| §3.4 The unsigned genesis key | The dispositive demonstration was never performed | The claim never met the one test that could have confirmed it |

### 3.1 The reused signature

The May 2016 demonstration was the claim's only affirmative evidence, and it failed on inspection within hours: the signature Wright presented was copied from a 2009 Bitcoin transaction rather than produced afresh with the keys he claimed to hold. After the demonstration collapsed, Wright promised conclusive proof and never delivered it.

### 3.2 The COPA v Wright ruling

On March 14, 2024, [Justice Mellor of the UK High Court ruled](/BitcoinArchive/entries/aftermath/2024-03-14-copa-v-wright-ruling/) in the case brought by the Crypto Open Patent Alliance, finding on four separate counts that Wright is not the author of the white paper, was not the person who operated under the Satoshi pseudonym in 2008–2011, did not create the Bitcoin system, and did not author the initial versions of the Bitcoin software. The ruling followed a full trial that heard testimony from early participants including [Martti Malmi](/BitcoinArchive/entries/aftermath/2024-02-21-copa-trial-malmi-testimony/) and [Mike Hearn](/BitcoinArchive/entries/aftermath/2024-02-22-mike-hearn-copa-trial-testimony/).

### 3.3 The forgery finding

The same ruling did not merely decline to credit the claim — it found the claim was supported by deliberate and extensive document forgery, and characterised Wright as an extremely dishonest witness. The pattern continued after trial: in March 2025 the Court of Appeal ordered Wright to pay £225,000 in costs after his AI-prepared submissions cited non-existent cases and made false statements about the trial. An identity claim sustained by fabricated evidence is not weak evidence for authorship; it is evidence against it.

### 3.4 The unsigned genesis key

Across nine years of asserting authorship, Wright never performed the one demonstration that would have ended the dispute — signing with the genesis-block key. The [genesis-block hardcode analysis](/BitcoinArchive/entries/analysis/2009-01-03-genesis-block-hardcode-analysis/) records that this signing has never been done by anyone. For a claimant with every incentive to produce it, the absence is itself informative.

## 4. Within the broader documentary record

Self-claim is the structural inverse of the [Dorian Nakamoto name-match](/BitcoinArchive/entries/analysis/2014-03-06-dorian-nakamoto-satoshi-identity-hypothesis/): rather than an external coincidence attaching a name to an unwilling subject, it is an internal assertion by a willing one. Both reduce to a single thread of evidence — the name in one case, the say-so in the other — and the overview's cross-cutting observation records that both have been publicly refuted. The [Satoshi-identification asymmetry analysis](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identification-asymmetry/) sharpens why the self-claim fails on its own terms: the real author could prove authorship trivially by signing with a known Satoshi key, so a claimant who cannot — and who forges instead — is distinguished from the author by exactly the demonstration he avoids. For the full candidate comparison, see the [Satoshi-identity hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/).

## 5. Limits of this entry

- This entry does not present new evidence. It compiles publicly available material.
- The full event narrative — the 2016 declaration, the Wired/Gizmodo precursor, the whitepaper lawsuit against Cobra, the trial, and the appeal — is in the [Craig Wright biography](/BitcoinArchive/participants/craig-wright/); this entry is the hypothesis treatment only.

This hypothesis entry is referenced from the [Craig Wright biography](/BitcoinArchive/participants/craig-wright/) (the subject of the hypothesis) and the [Satoshi-identity hypotheses overview](/BitcoinArchive/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/), which places Craig Wright in its Group C taxonomy within the necessary-but-not-sufficient evaluation framework.
