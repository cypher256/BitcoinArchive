---
title: "Bitcoin SourceForge SVN Repository — Complete committer history (2009–2011)"
date: 2009-08-30T00:00:00Z
type: "article"
source: "sourceforge"
sourceUrl: "https://sourceforge.net/p/bitcoin/code/log/"
author: "Bitcoin Project"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
  - name: "Laszlo Hanyecz"
    slug: "laszlo-hanyecz"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Complete record of all four developers who had commit access to Bitcoin's SourceForge SVN repository. 252 revisions were recorded from August 30, 2009 to September 13, 2011."
isSatoshi: true
tags:
  - "sourceforge"
  - "svn"
  - "repository"
  - "commit-access"
  - "development"
  - "historic"
secondarySources:
  - name: "BitcoinTalk — List of people who have had commit access to Bitcoin Core"
    url: "https://bitcointalk.org/index.php?topic=1774750.0"
  - name: "b10c.me — The Incomplete History of Bitcoin Development"
    url: "https://b10c.me/blog/004-the-incomplete-history-of-bitcoin-development/"
  - name: "GitHub Issue #7512 — Misattributed authorship in commit log"
    url: "https://github.com/bitcoin/bitcoin/issues/7512"
  - name: "research-note/bitcoin-legacy — Git mirror of Bitcoin SVN"
    url: "https://github.com/research-note/bitcoin-legacy"
---

Before Bitcoin moved to GitHub, all development took place in a Subversion (SVN) repository hosted on SourceForge. The repository was created on August 30, 2009, and recorded 252 revisions before its final commit on September 13, 2011. Only four people ever committed code to this repository.

**Prior to SVN:**
Satoshi Nakamoto distributed Bitcoin's source code as `.rar` archives on SourceForge before the SVN repository existed. The SourceForge project was registered on November 9, 2008, and Bitcoin v0.1 was released on January 9, 2009. For the first eight months, source code was distributed as downloadable archives rather than through version control.

**SVN Committers (complete list):**

| Username | Developer | First Commit | Last Commit | Commits |
|----------|-----------|-------------|-------------|---------|
| sirius-m | Martti Malmi | r1 (2009-08-30) | r56 | 21 |
| s_nakamoto | Satoshi Nakamoto | r15 | r202 (2010-12-15) | 164 |
| laszloh | Laszlo Hanyecz | r123 (2010-08-04) | r123 | 1 |
| gavinandresen | Gavin Andresen | r165 (2010-10-11) | r252 (2011-09-13) | 81 |

**Martti Malmi (sirius-m)** created the SVN repository with the "First commit" at r1 on August 30, 2009. He ported the Bitcoin codebase — which Satoshi had developed on Windows using Visual C++ 6.0 — to Linux, and contributed 21 revisions before stepping back from active development.

**Satoshi Nakamoto (s_nakamoto)** committed 164 of the 252 revisions — by far the most of any contributor. His last release commit was r201 ("version 0.3.19 release") on December 13, 2010. Two days later, he made one final small fix — r202 ("get external ip from irc") on December 15, 2010. No s_nakamoto commits appear after r202.

**Laszlo Hanyecz (laszloh)** — known for the first real-world Bitcoin purchase (10,000 BTC for two pizzas) and for pioneering GPU mining — made exactly one SVN commit: r123 on August 4, 2010, fixing macOS compilation issues.

**Gavin Andresen (gavinandresen)** received commit access in October 2010, as part of Satoshi's gradual handover of the project. With 81 commits, he was the second most active committer after Satoshi. On December 3, 2010, Satoshi wrote to Martti Malmi:

> "I think it should be Gavin. I trust him, he's responsible, professional, and technically much more Linux capable than me."

Andresen's final SVN commit, r252 on September 13, 2011, contained the message: "Development has moved to github." This marked the official end of the SourceForge SVN era.

**Notable absences:** Jeff Garzik and Pieter Wuille are listed as SourceForge project members but never made any SVN commits. Their commit access began on GitHub.
