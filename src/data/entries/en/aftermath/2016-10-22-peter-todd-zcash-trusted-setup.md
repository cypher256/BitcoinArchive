---
title: "Peter Todd's participation in the Zcash trusted setup ceremony"
date: 2016-10-22T00:00:00Z
type: "article"
source: "petertodd-org"
sourceUrl: "https://petertodd.org/2016/cypherpunk-desert-bus-zcash-trusted-setup-ceremony"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "Peter Todd participated as one of six individuals in the Zcash trusted setup ceremony in October 2016, then published a detailed account criticizing the process. He conducted his computation while driving across British Columbia, shielded his laptop in a Faraday cage, and destroyed the hardware with a propane torch afterward — yet concluded the ceremony was fundamentally flawed because the deterministic builds were unaudited and collusion was unprovable."
isSatoshi: false
tags:
  - "peter-todd"
  - "zcash"
  - "trusted-setup"
  - "cryptography"
  - "privacy"
secondarySources:
  - name: "IEEE Spectrum — The Crazy Security Behind the Birth of Zcash"
    url: "https://spectrum.ieee.org/the-crazy-security-behind-the-birth-of-zcash"
  - name: "Zcash Community Forum — Peter Todd's statement on trusted setup"
    url: "https://forum.zcashcommunity.com/t/peter-todd-s-statement-on-trusted-setup/31424"
  - name: "Peter Todd on X — Snowden also participated"
    url: "https://x.com/peterktodd/status/1519428920000622592"
  - name: "GitHub — Reveal Peter Todd's involvement in the ceremony"
    url: "https://github.com/zcash/mpc/pull/1"
---

[Peter Todd](/BitcoinArchive/en/entries/aftermath/2010-12-07-peter-todd-biography/) was one of six participants in the Zcash trusted setup ceremony held October 22–23, 2016. Zooko Wilcox (Zcash co-founder) had contacted him via Twitter DM on September 26, asking him to serve as a "Human Witness." Todd insisted the conversation move to Signal, noting that soliciting someone for this role exposed them to significant threats.

**The ceremony's purpose:**

Zcash's zk-SNARK protocol required generating cryptographic parameters — a process that also produced "toxic waste" secret keys. If any single party retained these keys, they could counterfeit Zcash at will. The multi-party computation was designed so that the secret would only leak if all six participants colluded or were compromised.

**Todd's criticisms before participating:**

Despite agreeing to participate, Todd outlined fundamental objections:

> "It is IMPOSSIBLE for myself and the other participants to prove to a third party that we did not collude."

> "Until the software and deterministic builds are audited, the entire ceremony is a bunch of crypto hocus pocus."

> "If I had a Zcash backdoor, it'd go like this: Acquire Zcash secret keys. Print money at will."

He also questioned the experimental nature of zk-SNARKs, noting disagreement between experts about security parameters, and criticized Zcash's founders' reward as creating conflicts of interest.

**The mobile ceremony:**

Rather than using a stationary location, Todd conceived a novel approach: conducting his computation while driving across British Columbia's interior. A moving target made physical surveillance and electromagnetic side-channel attacks harder. He purchased equipment with cash, used dummy airline tickets, kept his phone in airplane mode wrapped in aluminum foil, and built a Faraday cage from foil-lined cardboard for the compute node.

**Execution (October 22–23):**

Todd drove north from Hope through the BC interior toward Prince George, processing cryptographic computations at rest stops and motels along the way. The longest computation (Disc C) took 90 minutes. He completed the final upload at the Prince George visitors center.

**Destruction:**

On October 24, Todd systematically destroyed the compute hardware — disassembling the laptop and heating all electronic components with a propane torch in a metal pan at a remote logging site. He preserved the destroyed components and GoPro surveillance footage as forensic evidence.

**Aftermath:**

Todd later stated his participation "should not be construed as an endorsement" of Zcash. He described the ceremony as ultimately pointless, saying he didn't think "the Zcash trusted setup should be called a multiparty computation." In 2022, it was revealed that Edward Snowden was also among the six participants.

*[Todd's elaborate security measures — the Faraday cage, the propane torch, the mobile ceremony through remote BC highways — stand in sharp contrast to Satoshi Nakamoto's approach to Bitcoin, which relied on transparent, auditable code and required no trusted setup whatsoever. Todd himself identified this contrast as a fundamental flaw: Bitcoin's security model trusts mathematics and code, while Zcash's trusted setup ultimately required trusting people.]*
