---
title: "Ray Dillinger interview — early Bitcoin code reviewer recalls Satoshi's design choices"
date: 2018-10-01T00:00:00Z
type: "article"
source: "of-numbers"
sourceUrl: "https://www.ofnumbers.com/2018/10/01/interview-with-ray-dillinger/"
author: "Ray Dillinger"
participants:
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "Tim Swanson's comprehensive interview with Ray Dillinger for the Bitcoin whitepaper's 10th anniversary. Dillinger reveals technical details of his code review, including the floating-point discovery."
isSatoshi: false
tags:
  - "ray-dillinger"
  - "code-review"
  - "floating-point"
  - "hal-finney"
  - "interview"
  - "mining"
  - "deflation"
secondarySources:
  - name: "Ramon Quesada Mirror"
    url: "https://ramonquesada.com/english/interview-with-ray-dillinger/"
relatedEntries:
  - aftermath/2008-11-06-ray-dillinger-biography
  - aftermath/2017-09-20-ray-dillinger-if-id-known
  - analysis/2026-05-23-how-bitcoin-works-visual-glossary
  - analysis/2026-05-24-satoshi-design-vs-current-reality
  - aftermath/2017-09-04-china-ico-ban
---

![A dark navy infographic in which a magnifying glass inspects rows of ledger text, a decimal value sits beside a whole-number value in bordered boxes, a cracked jar spills coins beside a row of coins, and a glowing cluster of small hardware icons stands out on a stylized map.](/BitcoinArchive/images/analysis/2018-10-01-ray-dillinger-interview-hero.png)

*Interviewer: Tim Swanson (Great Wall of Numbers)*

*Published on the 10th anniversary of the Bitcoin whitepaper.*

## On his code review of Bitcoin

[Satoshi](/BitcoinArchive/participants/satoshi-nakamoto/) sent me the proof chain code for examination. I found it solid.

I was interested in Bitcoin for four reasons: it was a digital cash protocol addressing challenges I'd long contemplated; it used a central proof chain (now called blockchain); Satoshi eventually convinced me he wasn't a scammer; and absolutely the clincher — it was very very INTERESTING, with an entirely new paradigm containing no Trusted Roles, something nobody had EVER come up with before.

## On the floating-point discovery

I freaked out when I discovered the code used a floating-point type rather than an integer type for accounting — a combination with a long and horrible history.

Satoshi's explanation: he was designing for JavaScript compatibility, where no other numeric type is available. He wanted rounding-error bugs squished in advance so all implementations get identical answers. If different clients get different answers, the chain forks. And That Would Be Bad.

I would have preferred: screw Javascript, I want rounding errors to be impossible, and used integers.

## On [Hal Finney](/BitcoinArchive/participants/hal-finney/)'s perspective

Hal Finney, who had experience with exact math in floating point formats from PGP crypto work, was less concerned than I was. We discussed Bitcoin's divisibility: whether to enlarge satoshis for rounding-error cushion or keep them near precision limits so errors fail immediately, detectably, and hard.

## On finding no rounding errors

I examined the accounting code with a fine-toothed comb for rounding errors and found none — more than a little bit astonishing, since numeric-methods errors are so ubiquitous nobody even notices them.

The smallest accounting unit (satoshi) was selected right above the bit precision that can be handled with NO rounding in the double float format, and every operation was implemented to admit no rounding of any bits affecting satoshi-sized units.

To cause satoshi rounding in Bitcoin, someone would have to be adding or subtracting more than 21 million Bitcoins.

## On deflation and hoarding

In a fixed-supply economy, holding coins is a risk-free investment guaranteed to rise at the market average rate, so rational investors hoard rather than invest in productive businesses.

This is what happened to ancient Rome. They used metals (gold and silver and bronze) as currency, and their economy collapsed WHILE people had plenty enough money to keep it going! Everybody stashed all their coins expecting to benefit later from prospering businesses, and the businesses, for want of capital, did not prosper.

It's a millennium-and-a-half later and we are STILL finding stashes of Roman coins!

## On ASICs and mining centralization

I'm pretty sure Satoshi didn't think of miners in places with artificially low subsidized rates for electricity outcompeting all other miners, driving the concentration of the vast majority of hashing power into just one country where it's subject to the orders and whims of just one government.

That risk had already materialized a year earlier: [China's 2017 ICO and exchange ban](/BitcoinArchive/entries/aftermath/2017-09-04-china-ico-ban/) put the significant share of Bitcoin's hash rate then based in the country at the mercy of a single government, until miners relocated abroad.

This interview supplies the technical substance behind the pre-release audit summarised in the [Ray Dillinger biography](/BitcoinArchive/participants/ray-dillinger/), and complements his first-person retrospective ["If I'd known then what I know now"](/BitcoinArchive/entries/aftermath/2017-09-20-ray-dillinger-if-id-known/), which gives the who, when, and why of the same November 2008 review this interview documents in technical detail.
