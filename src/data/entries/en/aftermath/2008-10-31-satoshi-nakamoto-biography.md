---
title: "Satoshi Nakamoto (dates unknown) — Pseudonymous creator of Bitcoin"
date: 2008-10-31T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Satoshi_Nakamoto"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto: Pseudonymous individual or group who authored the Bitcoin white paper (October 31, 2008), created the Bitcoin software, mined the genesis block (January 3, 2009), and guided the project's early development before disappearing in April 2011. Their true identity remains unknown."
isSatoshi: true
tags:
  - "satoshi-nakamoto"
  - "biography"
  - "whitepaper"
  - "genesis-block"
  - "disappearance"
  - "historic"
secondarySources:
  - name: "Satoshi Nakamoto Institute — Complete Works"
    url: "https://satoshi.nakamotoinstitute.org/"
  - name: "Bitcoin White Paper (October 31, 2008)"
    url: "https://bitcoin.org/bitcoin.pdf"
  - name: "Satoshi Nakamoto Institute — Cryptography Mailing List Emails"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/"
  - name: "Satoshi Nakamoto Institute — BitcoinTalk Posts"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/"
  - name: "Satoshi Nakamoto — P2P Foundation Profile"
    url: "https://p2pfoundation.ning.com/profile/SatoshiNakamoto"
  - name: "Bitcoin Genesis Block — Block 0"
    url: "https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
  - name: "Satoshi's final known BitcoinTalk post (December 12, 2010)"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/546/"
  - name: "Satoshi's final known email to Gavin Andresen (April 26, 2011)"
    url: "https://satoshi.nakamotoinstitute.org/emails/gavin-andresen/"
relatedEntries:
  - correspondence/adam-back/2008-08-20-satoshi-to-adam-back
  - emails/cryptography/2008-10-31-bitcoin-whitepaper-final
  - sourceforge/2009-01-03-genesis-block
  - sourceforge/2009-01-09-bitcoin-v01-released
  - aftermath/2011-04-26-satoshi-final-known-email
---

Satoshi Nakamoto is the pseudonym used by the individual or group who created Bitcoin. Their true identity has never been confirmed.

**White Paper:**
On August 20, 2008, Satoshi [emailed Adam Back](/BitcoinArchive/entries/correspondence/adam-back/2008-08-20-satoshi-to-adam-back/) about a new electronic cash system, marking the earliest known communication about what would become Bitcoin. On October 31, 2008, Satoshi [published "Bitcoin: A Peer-to-Peer Electronic Cash System"](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/) to the cryptography mailing list at metzdowd.com. The paper described a decentralized digital currency system using proof-of-work to achieve consensus without a trusted third party.

**Launch:**
On January 3, 2009, Satoshi mined the [genesis block (Block 0)](/BitcoinArchive/entries/sourceforge/2009-01-03-genesis-block/), embedding the text "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" from the front page of The Times newspaper. On January 8, 2009, [Bitcoin v0.1 was released](/BitcoinArchive/entries/sourceforge/2009-01-09-bitcoin-v01-released/) publicly. On January 12, 2009, Satoshi [sent 10 BTC to Hal Finney in Block 170](/BitcoinArchive/entries/aftermath/2009-01-12-first-bitcoin-transaction/) — the first person-to-person Bitcoin transaction.

**Development and Communication:**
Satoshi was active across multiple platforms: the cryptography mailing list, the bitcoin-list mailing list on SourceForge, the BitcoinTalk forum (which Satoshi and Martti Malmi created), the P2P Foundation forum, and private email correspondence. Satoshi communicated directly with Adam Back, Wei Dai, Hal Finney, James A. Donald, Ray Dillinger, Dustin Trammell, Martti Malmi, Mike Hearn, Gavin Andresen, Laszlo Hanyecz, Jeff Garzik, and others. Over the course of 2009–2010, Satoshi authored hundreds of forum posts and emails explaining Bitcoin's design, responding to technical questions, and coordinating development.

**Transition and Disappearance:**
In late 2010, Satoshi began transferring project responsibilities to other developers. Gavin Andresen was granted commit access to the Bitcoin repository and the network alert key. Satoshi's [final known public post on BitcoinTalk](/BitcoinArchive/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/) was on December 12, 2010. In private email, Satoshi continued communicating with a small number of developers into early 2011. On April 23, 2011, Satoshi [wrote to Mike Hearn](/BitcoinArchive/entries/correspondence/mike-hearn/holding-coins/2011-04-23-satoshi-to-hearn-moved-on/): "I've moved on to other things. It's in good hands with Gavin and everyone." On April 26, 2011, Satoshi sent what is believed to be the [final known email — to Gavin Andresen](/BitcoinArchive/entries/correspondence/gavin-andresen/2011-04-26-satoshi-to-andresen-alert-key/) — handing over the alert key and writing: "I wish you wouldn't keep talking about me as a mysterious shadowy figure." No verified communication from Satoshi has been recorded since.

**Profile:**
Satoshi's P2P Foundation profile listed a date of birth of April 5, 1975, and a location of Japan. These details are unverified and widely considered to be fictitious. Satoshi wrote in fluent English with conventions consistent with British or Commonwealth usage. Analysis of posting timestamps has suggested various time zones, but no conclusive determination of location has been made.

**Development Environment:**
Bitcoin v0.1 was developed on Windows using Microsoft Visual C++ 6.0 SP6 and MinGW GCC 3.4.5. The initial release was Windows-only, distributed as a .rar archive — an unusual choice for an open-source project (see analysis below). No version control system was used for v0.1; SVN was introduced later with help from Martti Malmi and Gavin Andresen.

From late 2009, Satoshi began porting Bitcoin to Linux (Ubuntu) with Martti Malmi's assistance. He personally set up Ubuntu test environments and debugged deep issues (pthread_cancel, MSG_DONTWAIT, Berkeley DB, GTK thread safety), but was unfamiliar with Linux conventions such as config file formats, daemon switch naming, and startup scripts. He wrote on the forum: "That's great because that's where I have less expertise" (December 2009, regarding Linux/FreeBSD testing). In a December 2010 email to Gavin Andresen, he described Gavin as "technically much more Linux capable than me." Mac support was entirely contributed by Laszlo Hanyecz; Satoshi had no Mac to test on. BSD knowledge was conceptual (socket origins) rather than hands-on. Despite these gaps, Satoshi steadily expanded cross-platform support throughout 2010, incorporating community-contributed patches for Linux, macOS, and FreeBSD.

**Bitcoin Holdings:**
Research by blockchain analysts has identified a pattern of early mining activity attributed to a single entity, often called the "Patoshi" pattern, believed to be Satoshi. The bitcoins mined during this period — estimated at approximately 1.1 million BTC — have never been moved.

---

**Behavioral Profile (editorial analysis):**

The following observations are speculative analysis derived from Satoshi's actual development practices, communication patterns, and tooling choices — not established fact. They are included because they reveal a coherent and unusual profile that is rarely discussed despite being evident in the public record.

*No version control — no team development experience:*
In 2008, CVS and SVN were standard even for solo developers. SourceForge itself offered SVN/CVS hosting. Yet Bitcoin v0.1 shipped with no version control history. For someone capable of writing 31,000 lines of production-quality C++, this absence is highly unusual. It strongly suggests zero experience with team-based software development — no corporate employment, no open-source project participation, no academic collaboration.

*Warez scene cultural affinity (consumer, not producer):*
The .rar distribution format is the strongest cultural indicator. On SourceForge, virtually no open-source project used .rar — it was the standard format of the Warez scene (IRC/XDCC/Usenet distribution), fansub communities, and underground BBS/IRC culture. Compared against formal Warez scene release rules:

| Scene convention | Satoshi's behavior | Match |
|---|---|---|
| .rar distribution | bitcoin-0.1.0.rar | ✅ |
| Pseudonymous handle | Satoshi Nakamoto | ✅ |
| Absolute identity concealment | Tor, anonymous email, trace elimination | ✅ |
| Windows-only | v0.1–v0.1.5 | ✅ |
| No installer (extract and run) | Extract .rar, run executable | ✅ |
| GMX email | satoshi@gmx.com (popular in European scene) | ⚠️ |
| NFO file with ASCII art | None | ❌ |
| Group tag (-GROUPName) | None | ❌ |
| SFV verification file | None | ❌ |

The absence of NFO files, group tags, and SFV files rules out membership in a scene release group. But the .rar default, Windows-only development, and anonymity practices are consistent with someone who *consumed* scene releases — someone for whom .rar was simply the normal way to package software. VC++ 6.0 SP6 (obsolete by 2008) was widely available as a cracked release in the scene, reinforcing this reading.

*Self-taught polymath without academic roots:*
Satoshi knew Hashcash but was unaware of b-money and Bit Gold until directed to them by Adam Back and Wei Dai. This is not the behavior of someone embedded in academic cryptography, where systematic literature surveys are standard practice. Instead, it suggests a self-taught individual who pursued interests deeply but outside institutional frameworks — someone who learned from the internet rather than from universities or research groups.

Despite lacking academic connections, Satoshi demonstrated working knowledge across cryptography, economics, distributed systems, and network programming. The combination of deep multi-domain expertise with no institutional affiliation or prior community participation is rare and distinctive.

*"I'm better with code than with words":*
Satoshi's self-assessment may reflect genuine preference rather than professional expertise. The code quality was high (Dan Kaminsky's assessment: "everything was anticipated"), but the development *process* was amateur — no version control, no issue tracker, .rar distribution, no CI. The profile is consistent with a brilliant self-taught programmer who had never worked in a professional software development environment.

*Management capability without management experience:*
Satoshi's communications on the cryptography mailing list and BitcoinTalk forum were calm, clear, and logically structured. He could prioritize, delegate, and make strategic decisions (e.g., declining WikiLeaks support, transitioning to Gavin). However, the handoff to Gavin suggests self-awareness that project *operations* required someone with different skills. Satoshi could design systems but chose not to run organizations.

*Summary:*
The behavioral evidence points to an isolated autodidact — self-taught across multiple technical domains, culturally immersed in 1990s–2000s underground/IRC/Warez internet culture, with no team development or organizational experience, but possessing genuine intellectual brilliance and quiet management instincts. Not a corporate developer, not an academic researcher, not a member of a development team — but someone who independently synthesized knowledge from cryptography, economics, and computer science into a working system that no one else had been able to build.
