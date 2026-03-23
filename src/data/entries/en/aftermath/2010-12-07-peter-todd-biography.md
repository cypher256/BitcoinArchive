---
title: "Peter Todd — Bitcoin Core developer and proponent of Replace-by-Fee"
date: 2010-12-07T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Peter_Todd"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "Peter Todd: Canadian cryptographer and Bitcoin Core developer known for proposing Replace-by-Fee (RBF) and creating OpenTimestamps. He registered on BitcoinTalk on December 7, 2010 under the username \"retep\" and replied to one of Satoshi Nakamoto's posts three days later. In October 2024, an HBO documentary named him as a Satoshi Nakamoto candidate, which he denied."
isSatoshi: false
tags:
  - "peter-todd"
  - "biography"
  - "replace-by-fee"
  - "opentimestamps"
  - "bitcoin-core"
secondarySources:
  - name: "Peter Todd — OpenTimestamps"
    url: "https://opentimestamps.org/"
  - name: "BIP 125 — Opt-in Full Replace-by-Fee Signaling"
    url: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
  - name: "HBO — Money Electric: The Bitcoin Mystery (October 2024)"
    url: "https://www.hbo.com/movies/money-electric-the-bitcoin-mystery"
  - name: "Peter Todd — BitcoinTalk Profile"
    url: "https://bitcointalk.org/index.php?action=profile;u=2546"
  - name: "Peter Todd — GitHub Profile"
    url: "https://github.com/petertodd"
  - name: "Peter Todd — Official Website"
    url: "https://petertodd.org/"
---

Peter Todd (Canada) is a cryptographer, applied cryptography consultant, and Bitcoin Core developer. He graduated from OCAD University (Ontario College of Art and Design) in 2011 with a degree in Integrated Media, and previously worked as an analog electronics designer at geophysics startup Gedex Inc. He registered a GitHub account in April 2008. He is known for his focus on Bitcoin protocol security, scalability, and his outspoken views on technical trade-offs.

**BitcoinTalk and Satoshi:**
Todd registered on BitcoinTalk on December 7, 2010 under the username "retep" (Peter spelled backwards). Three days later, on December 10, he replied to a Satoshi Nakamoto post in the "Fees in BitDNS confusion" thread, where Satoshi had described a concept for transaction replacement — what would later become known as Replace-by-Fee. This was only Todd's second post on the forum. Satoshi's last public post came two days later, on December 12, 2010.

**Bitcoin Core Contributions:**
Todd became an active Bitcoin Core contributor starting in April 2012, eventually becoming the 11th most prolific contributor to Bitcoin Core's GitHub repository. He focused on protocol-level security, transaction policy, and network resilience.

**BIP 65: OP_CHECKLOCKTIMEVERIFY (October 2014):**
Todd proposed BIP 65, introducing a new opcode that allows transaction outputs to remain unspendable until a specified future time. Deployed as a soft fork, it became a building block for payment channels and the Lightning Network.

**Replace-by-Fee (RBF) — BIP 125 (December 2015):**
Todd is best known for championing Replace-by-Fee (RBF), which allows unconfirmed transactions to be replaced by new versions with higher fees. The concept was formalized in BIP 125, co-authored by David A. Harding and Peter Todd. The BIP's rationale explicitly traces the concept back to Satoshi Nakamoto's original transaction replacement mechanism.

**OpenTimestamps (September 2016):**
Todd created OpenTimestamps, an open-source project that uses the Bitcoin blockchain to create tamper-proof timestamps, allowing anyone to prove that a document existed at a particular point in time. The project generalizes the timestamping function that Satoshi built into Bitcoin's core design.

**Zcash Trusted Setup Ceremony (October 2016):**
Todd was one of six participants in the Zcash trusted setup ceremony. He conducted his computation while driving across British Columbia, shielded his laptop in a Faraday cage, and destroyed the hardware with a propane torch. Despite participating, he was deeply critical of the process, stating that collusion among participants was unprovable and the unaudited deterministic builds made the ceremony "crypto hocus pocus."

**Other Roles:**
Todd served as Chief Scientist at Mastercoin and Dark Wallet, and contributed to the design of stealth addresses (BIP 63, unimplemented) for enhanced privacy. He worked as a consultant at Coinkite starting July 2014.

**HBO Documentary (October 2024):**
In October 2024, the HBO documentary "Money Electric: The Bitcoin Mystery" named Todd as a candidate for Satoshi Nakamoto's true identity, pointing to his December 2010 reply to Satoshi's post as evidence. Todd denied the claim, calling it irresponsible and dangerous.

---

**Analysis: Writing style across three periods**

Todd's public writing appears to shift noticeably across three periods:

1. **First post (December 7, 2010):** His BitcoinTalk debut — "Will buy 1 invite for $2, msg privately." — is maximally terse. No subject pronoun, no full words where abbreviations suffice, no personality. The text reads like a classified ad, stylistically indistinguishable from any anonymous user. Neither Todd's later voice nor Satoshi's restrained precision is evident.

2. **Second post (December 10, 2010):** His reply to Satoshi — "Of course, to be specific, the inputs and outputs can't match *exactly* if the second transaction has a transaction fee." — is calm, technically precise, and measured. The opening "Of course" carries a tone of casual authority, but the overall register is neutral. It does not yet display the profanity, self-deprecation, or combative sarcasm that would later define Todd's public persona.

3. **2012 onward:** Todd's writing develops a highly distinctive and consistent voice: frequent profanity, self-deprecating humor, rhetorical aggression, heavy use of asterisk emphasis, and a confrontational style. This voice remained remarkably stable across blog posts, mailing list exchanges, and social media for over a decade.

The progression — from no personality, to neutral precision, to an unmistakably idiosyncratic style — is unusual. Most writers show more personality early and develop restraint over time, not the reverse.

**Analysis: Development activity timeline**

Todd registered his GitHub account on April 13, 2008. Satoshi Nakamoto developed Bitcoin on SourceForge (SVN). Their public activity records can be summarized as follows:

| Period | Todd's public record (GitHub) | Satoshi Nakamoto's activity (SourceForge / BitcoinTalk) |
|--------|----------------------|---------------------------|
| Apr–Dec 2008 | Active, 15 repos — all hardware/electronics (clocks, entropy oscillators, counters, firmware, PCB). Two projects have "Shipped" commits. Last commit: Dec 9 | Oct 2008: Whitepaper published |
| 2009 | Zero commits, zero new repos | Jan: Genesis block. Active development on SourceForge, forum participation on BitcoinTalk |
| 2010 | Nearly dormant — 1 small repo (Feb), no sustained activity. BitcoinTalk: registration (Dec 7), reply to Satoshi (Dec 10) | Active on SourceForge / BitcoinTalk until Dec 12 (last public post) |
| 2011 | Zero new repos. OCAD University graduation (Integrated Media) | Departure. Final known private emails |
| May 2012 | First Bitcoin repo — `hardware-bitcoin-wallet` | — |
| Sep 2012 | Forks Bitcoin Core. Rapid Bitcoin development begins | — |

The gap in Todd's public GitHub activity — roughly December 2008 through early 2012 — overlaps with Satoshi Nakamoto's active period on SourceForge and BitcoinTalk.

Todd's GitHub repositories created between 2008 and 2011:

| Repository | Created | Language | OS clues | Description |
|-----------|---------|----------|----------|-------------|
| vimfiles | 2008-04-15 | VimL | `~/.vim` (Unix) | Shared vim configuration (from work) |
| alternate-pace | 2008-05-24 | — | | A clock with an alternate pace |
| alternate-pace.elec | 2008-05-28 | Shell | `#!/bin/sh`, Unix pipelines | Alternate Pace — Electronics |
| alternate-pace.firm | 2008-05-28 | C | `/usr/share/sdcc/`, `/usr/share/gputils/` (Linux FHS) | Alternate Pace — Firmware |
| entropy-oscillator | 2008-05-25 | — | | An entropy oscillator |
| entropy-oscillator.elec | 2008-08-28 | Python | | Entropy Oscillator — Electronics |
| entropy-oscillator.firm | 2008-08-28 | — | | Entropy Oscillator — Firmware |
| meter-clock | 2008-06-07 | — | | Meter Clock |
| meter-clock.schem | 2008-06-07 | Shell | | Meter Clock — Schematics |
| meter-clock.hard | 2008-06-07 | — | | Meter Clock — PCB layout and hardware design |
| meter-clock.firm | 2008-11-09 | — | | Meter Clock — Firmware |
| 64-bit-counter | 2008-06-09 | — | | A 64-bit non-volatile counter fed by a 64MHz source |
| 64-bit-counter.elec | 2008-06-09 | KiCad | | 64-bit Counter — Electronics |
| 64-bit-counter.firm | 2008-06-09 | C | | 64-bit Counter — Firmware |
| metesky | 2008-08-20 | Python | | Bill of materials tools |
| *(2009 — no repositories)* | | | | |
| congestion | 2010-02-24 | Python | `#!/usr/bin/python`, PyGTK (GNOME/Linux), vim modelines | Traffic congestion simulation (Python/Cython, Cairo). ~30 commits over Feb–Apr 2010, then inactive. Possibly an OCAD coursework project |
| *(2011 — no repositories)* | | | | |

All OS indicators point to Linux — hardcoded Linux FHS paths (`/usr/share/`), Unix shebangs, PyGTK (a GNOME/Linux-native GUI toolkit). No Windows-related files, paths, or tools appear in any repository.
