---
title: "Interview with Ray Dillinger (Great Wall of Numbers)"
date: 2018-10-01T00:00:00Z
source: aftermath
sourceUrl: "https://www.ofnumbers.com/2018/10/01/interview-with-ray-dillinger/"
author: "Ray Dillinger"
participants:
  - name: "Ray Dillinger"
    slug: "ray-dillinger"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "Comprehensive interview with Ray Dillinger by Tim Swanson, marking the 10th anniversary of the Bitcoin whitepaper. Dillinger reveals technical details of his code review, including the famous floating-point discovery and Satoshi's reasoning for using double-precision floats."
isSatoshi: false
aftermathType: "interview"
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
---

*Interviewer: Tim Swanson (Great Wall of Numbers)*

*Published on the 10th anniversary of the Bitcoin whitepaper.*

---

**On his code review of Bitcoin:**

Satoshi sent me the proof chain code for examination. I found it solid.

I was interested in Bitcoin for four reasons: it was a digital cash protocol addressing challenges I'd long contemplated; it used a central proof chain (now called blockchain); Satoshi eventually convinced me he wasn't a scammer; and absolutely the clincher — it was very very INTERESTING, with an entirely new paradigm containing no Trusted Roles, something nobody had EVER come up with before.

**On the floating-point discovery:**

I freaked out when I discovered the code used a floating-point type rather than an integer type for accounting — a combination with a long and horrible history.

Satoshi's explanation: he was designing for JavaScript compatibility, where no other numeric type is available. He wanted rounding-error bugs squished in advance so all implementations get identical answers. If different clients get different answers, the chain forks. And That Would Be Bad.

I would have preferred: screw Javascript, I want rounding errors to be impossible, and used integers.

**On Hal Finney's perspective:**

Hal Finney, who had experience with exact math in floating point formats from PGP crypto work, was less concerned than I was. We discussed Bitcoin's divisibility: whether to enlarge satoshis for rounding-error cushion or keep them near precision limits so errors fail immediately, detectably, and hard.

**On finding no rounding errors:**

I examined the accounting code with a fine-toothed comb for rounding errors and found none — more than a little bit astonishing, since numeric-methods errors are so ubiquitous nobody even notices them.

The smallest accounting unit (satoshi) was selected right above the bit precision that can be handled with NO rounding in the double float format, and every operation was implemented to admit no rounding of any bits affecting satoshi-sized units.

To cause satoshi rounding in Bitcoin, someone would have to be adding or subtracting more than 21 million Bitcoins.

**On deflation and hoarding:**

In a fixed-supply economy, holding coins is a risk-free investment guaranteed to rise at the market average rate, so rational investors hoard rather than invest in productive businesses.

This is what happened to ancient Rome. They used metals (gold and silver and bronze) as currency, and their economy collapsed WHILE people had plenty enough money to keep it going! Everybody stashed all their coins expecting to benefit later from prospering businesses, and the businesses, for want of capital, did not prosper.

It's a millennium-and-a-half later and we are STILL finding stashes of Roman coins!

**On ASICs and mining centralization:**

I'm pretty sure Satoshi didn't think of miners in places with artificially low subsidized rates for electricity outcompeting all other miners, driving the concentration of the vast majority of hashing power into just one country where it's subject to the orders and whims of just one government.
