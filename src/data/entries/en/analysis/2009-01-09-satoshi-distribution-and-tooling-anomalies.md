---
title: "Why did Satoshi distribute Bitcoin as a .rar? The Warez-scene parallel"
date: 2009-01-09T00:00:00Z
type: "analysis"
source: "sourceforge"
sourceUrl: "https://web.archive.org/web/20250916214824/https://sourceforge.net/projects/bitcoin/files/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Editorial reading of Bitcoin v0.1's unusual distribution and tooling absences (.rar packaging, no version control, no tests), placed against Warez-scene conventions and Kaminsky's 2011 security audit."
isSatoshi: false
homeOrder: 11
tags:
  - "bitcoin-v0.1"
  - "distribution"
  - "tooling"
  - "warez-scene"
  - "code-quality"
  - "kaminsky-audit"
  - "analysis"
secondarySources:
  - name: "Bitcoin v0.1 release announcement (cryptography mailing list)"
    url: "https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html"
  - name: "Dan Kaminsky — 'I tried hacking Bitcoin and I failed' (The New Yorker, 2011)"
    url: "https://www.newyorker.com/magazine/2011/10/10/the-crypto-currency"
  - name: "Bitcoin Core PR #4641 — Remove Hungarian notation"
    url: "https://github.com/bitcoin/bitcoin/pull/4641"
  - name: "libsecp256k1 — initial commit (Pieter Wuille, March 2013)"
    url: "https://github.com/bitcoin-core/secp256k1"
relatedEntries:
  - analysis/2009-01-09-satoshi-windows-development-environment
  - analysis/2008-10-31-satoshi-anonymity-architecture
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - aftermath/2009-01-09-bitcoin-v01-released
  - aftermath/2008-10-31-satoshi-nakamoto-biography
  - aftermath/2011-10-10-dan-kaminsky-bitcoin-security
  - forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style
  - aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012
  - aftermath/2009-08-30-bitcoin-svn-repository-committers
  - analysis/2009-01-09-satoshi-code-analysis
  - analysis/2008-08-20-satoshi-activity-timeline
  - aftermath/2009-05-01-martti-malmi-biography
  - aftermath/2024-08-06-forensicxs-bitcoin-v01-code-walkthrough
  - analysis/2026-05-31-satoshi-pre-release-period-what-can-be-said
inlineLinkKeywords:
  - ".rar packaging"
  - "Warez scene overlap"
  - "Bitcoin v0.1 distribution"
translationStatus: complete
---

Bitcoin v0.1 shipped on SourceForge as a `.rar` archive — a format more common in IRC/XDCC Warez-scene distribution than open-source releases. No version control system was used. This entry reads the distribution-side and tooling-absence observations as a coherent set, alongside Dan Kaminsky's [2011 security audit](/BitcoinArchive/entries/aftermath/2011-10-10-dan-kaminsky-bitcoin-security/) which examined v0.1's security architecture from the other side. The personal-environment evidence (Hungarian notation, OpenSSL dependency, Visual C++ 6.0 toolchain, the PGP MingW32 signature footer) is treated separately in [the Windows-centric development environment analysis](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-windows-development-environment/).

## 1. Distribution: the `.rar` packaging choice

Bitcoin v0.1 was distributed as a `.rar` archive — a format rarely used on SourceForge, where `.zip` and `.tar.gz` were the standard for open-source releases. The `.rar` format was more commonly associated with informal software distribution channels, including the Warez scene (IRC/XDCC/Usenet distribution networks). The reason for this specific choice is unknown.

The following table compares Satoshi's distribution practices with conventions common in Warez-scene and related underground distribution communities of the era:

| Convention | Satoshi's practice | Match |
|---|---|---|
| `.rar` distribution | `bitcoin-0.1.0.rar` | ✅ |
| Pseudonymous identity | Satoshi Nakamoto | ✅ |
| Strong anonymity measures | Tor, anonymous email, trace elimination | ✅ |
| Windows-only initial release | v0.1 – v0.1.5 | ✅ |
| No installer (extract and run) | Extract `.rar`, run executable | ✅ |
| GMX webmail | satoshin@gmx.com | ⚠️ |
| NFO file with ASCII art | None | ❌ |
| Group tag (`-GROUPName`) | None | ❌ |
| SFV verification file | None | ❌ |

**What this overlap supports:** familiarity with the conventions of informal Windows software distribution channels. The shared elements (`.rar` format, anonymity practices, Windows-only first release, no installer) are all behaviors a *consumer* of underground-distributed software would naturally adopt.

**What this overlap does not support:** insider release-group membership. The absence of NFO files, group tags, and SFV checksums — the actual signatures of organized scene release groups — argues against Satoshi having been on the *producer* side of those channels.

The most parsimonious reading: Satoshi inherited distribution norms from the consumer side of channels that used these formats, not from the open-source release tradition that used `.tar.gz` and version control. This is an observation about *which conventions Satoshi was steeped in*, not about Satoshi's identity.

## 2. Absence of standard development tooling

Bitcoin v0.1 shipped with no version control history, despite SourceForge offering both SVN and CVS hosting in 2008. The repository was [introduced later](/BitcoinArchive/entries/aftermath/2009-08-30-bitcoin-svn-repository-committers/) with help from Martti Malmi and Gavin Andresen.

By 2008, version control was common practice even for solo developers — and conspicuously near-universal among developers handling 31,000-line C++ codebases professionally. The absence of a VCS in v0.1 is a significant tell about Satoshi's development habits before Bitcoin.

Several other tooling absences cluster with this:

- **No test suite.** v0.1 included no automated tests; the implicit verification model was code review and live network observation.
- **No issue tracker.** Bug reports were handled in the BitcoinTalk forum and private email rather than in a structured tracker.
- **No build system in the modern sense.** v0.1 was distributed as a manually built binary; reproducible builds came much later.

These absences do not mean the code was poorly engineered (Section 4 reviews evidence to the contrary). They mean that Satoshi's development process was *informal* in the procedural sense: shaped by personal practice rather than by team-collaboration tooling.

The combination — no VCS, no tests, no issue tracker, `.rar` distribution — is consistent with a developer whose prior experience was solo or in environments where these tools were not the default. It is inconsistent with someone embedded in a contemporary professional or academic software-engineering setting.

## 3. Implementation choices and the Windows-centric development environment

The implementation-style and personal-environment evidence — Hungarian-notation variable naming, the OpenSSL dependency that Bitcoin Core later replaced with libsecp256k1, Visual C++ 6.0 as the build toolchain, and the GnuPG MingW32 / WinPT 1.2.0 PGP signature footer on Satoshi's last known emails — is treated separately in [the Windows-centric development environment analysis](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-windows-development-environment/). That entry also documents Satoshi's own "much more Linux capable than me" self-positioning relative to Gavin Andresen, and the eight-month pre-SVN solo development period that overlaps with the distribution choices examined in this entry.

The relevant point for the Warez-scene reading: the Windows-only first release (v0.1 – v0.1.5) is one of the matching conventions in the table above, and it is consistent with the picture documented in that separate entry — not an independent surprise.

## 4. Security architecture: the Kaminsky audit

[Dan Kaminsky](/BitcoinArchive/participants/dan-kaminsky/)'s [2011 audit](/BitcoinArchive/entries/aftermath/2011-10-10-dan-kaminsky-bitcoin-security/), reported in *The New Yorker*, contained both criticism and praise.

On formatting and readability, Kaminsky said the code was "dense and inscrutable" and that "the way the whole thing was formatted was insane. Only the most paranoid, painstaking coder in the world could avoid making mistakes."

On security architecture, however, his finding was the opposite. For every potential exploit Kaminsky identified, Satoshi had already added an "Attack Removed" comment with corresponding mitigation code. Kaminsky concluded:

<!-- audit:quote-skip -->
> "Either there's a team of people who worked on this, or this guy is a genius."

This is the most rigorous security review of v0.1 by an outside expert in the public record. The result is consistent and worth stating directly: Satoshi anticipated essentially every category of attack a sophisticated adversary would attempt and pre-blocked them at the design level.

## 5. The distinction: foresighted security vs. informal process

The picture that emerges across §1–§4 is unusual:

- **Security architecture**: remarkably foresighted. Kaminsky's nine attempted exploits were all pre-blocked.
- **Implementation process**: informal. No version control, no test suite, no issue tracker, `.rar` distribution. (Personal-environment markers — Hungarian notation, OpenSSL dependency, Visual C++ 6.0, MingW32 PGP footer — sit on a different axis and are collected in [Satoshi's Windows-only development environment](/BitcoinArchive/entries/analysis/2009-01-09-satoshi-windows-development-environment/).)

This combination is distinctive. It is rare in two directions:

- The *foresighted security* end of this is rare among informal solo developers. Most informal solo developers do not pre-block sophisticated cryptographic attacks they have not personally been targeted by.
- The *informal process* end of this is rare among developers with the security foresight Kaminsky documented. Most developers with that level of security awareness work within teams, with version control, and with formal test infrastructure.

The combination supports a structural reading: Satoshi clearly thought hard about *what could go wrong with the system itself*, but did not work within the conventions of professional collaborative software engineering. The two competencies developed independently. This is not impossible — solo cryptographic systems builders with non-standard process backgrounds exist — but it is unusual enough to be worth naming as a distinguishing trait.

## 6. Limits

- **Each individual observation has alternative readings.** `.rar` could be a stylistic preference rather than channel-conditioned. The absence of version control could reflect time pressure rather than habit. Hungarian notation could be a deliberate self-discipline choice rather than a Windows-tradition tell. Each isolated observation is weakly diagnostic.
- **The cluster is more diagnostic than any individual observation.** The strength of the reading is that all the choices point in compatible directions: Windows-centered development, informal process, consumer-side familiarity with underground distribution, individual rather than team workflow.
- **No identity hypothesis follows.** The reading characterizes the *shape* of Satoshi's working environment. It does not narrow the identity to any country, employment status, age range, or specific person.
- **Foresighted security is consistent with multiple kinds of background.** Self-taught cryptography hobbyists, academic cryptographers working outside their institution, and security-industry veterans operating outside their workplace are all consistent with the Kaminsky finding.

## 7. Summary

- Bitcoin v0.1's distribution format (`.rar`), tooling absences (no VCS, no tests, no issue tracker), and implementation style (Hungarian notation, OpenSSL dependency) cluster as a coherent pattern of *informal development process*.
- The Warez-scene comparison shows partial overlap: the consumer-facing conventions match (`.rar`, anonymity, Windows-only, no installer); the producer-facing conventions do not (no NFO, no group tag, no SFV).
- Kaminsky's 2011 audit established that v0.1's *security architecture* was foresighted and complete, with every attempted exploit pre-blocked.
- The combination of foresighted security with informal process is the entry's main observation: Satoshi was a careful adversarial thinker about the system itself but did not work within standard collaborative-engineering conventions.
- The reading characterizes Satoshi's working *environment* and *practice patterns*. It does not constrain identity, geography, or profession beyond what those practice patterns naturally permit.
