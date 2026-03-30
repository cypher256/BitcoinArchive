---
title: "Bitcoin moves to GitHub — Early committer access grants (2010–2011)"
date: 2011-09-13T00:00:00Z
type: "article"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin"
author: "Bitcoin Project"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Chris Moore"
    slug: "chris-moore"
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Wladimir van der Laan"
    slug: "wladimir-van-der-laan"
  - name: "Nils Schneider"
    slug: "nils-schneider"
description: "Bitcoin's migration from SourceForge SVN to GitHub, and the chronological record of developers who received commit access to the GitHub repository in 2011."
isSatoshi: false
tags:
  - "github"
  - "repository"
  - "commit-access"
  - "migration"
  - "development"
  - "bitcoin-core"
  - "historic"
secondarySources:
  - name: "BitcoinTalk — List of people who have had commit access to Bitcoin Core"
    url: "https://bitcointalk.org/index.php?topic=1774750.0"
  - name: "Who Controls Bitcoin Core? — Jameson Lopp"
    url: "https://blog.lopp.net/who-controls-bitcoin-core/"
  - name: "b10c.me — The Incomplete History of Bitcoin Development"
    url: "https://b10c.me/blog/004-the-incomplete-history-of-bitcoin-development/"
  - name: "SourceForge — Bitcoin SVN r252 (final commit)"
    url: "https://sourceforge.net/p/bitcoin/code/252/"
---

The Bitcoin GitHub repository (`bitcoin/bitcoin`) was created on **December 19, 2010**, while the SourceForge SVN repository was still in active use. For approximately nine months, development occurred in parallel across both platforms. On September 13, 2011, Gavin Andresen made the final SVN commit (r252) with the message: "Development has moved to github."

**Migration timeline:**
- **2010-12-19:** GitHub repository `bitcoin/bitcoin` created.
- **2011-01 to 2011-09:** Parallel development on both SVN and GitHub.
- **2011-09-13:** Final SVN commit. GitHub becomes the sole repository.

**GitHub commit access grants in 2011:**

With Satoshi's departure (last known email: April 26, 2011), Gavin Andresen — who held both the repository access and the network alert key — began granting commit access to trusted contributors. The following developers received GitHub commit access in 2011:

| Developer | GitHub Username | Access Granted | Notes |
|-----------|----------------|---------------|-------|
| Chris Moore | dooglus | 2011-01-21 | Access ended ~2011-03-31 |
| Pieter Wuille | sipa | 2011-05-01 | Later became lead maintainer |
| Jeff Garzik | jgarzik | 2011-05-06 | Also listed as SF project member |
| Wladimir van der Laan | laanwj | 2011-06-05 | Became lead maintainer in 2014 |
| Nils Schneider | tcatm | 2011-09-19 | Access ended 2012-05-31 |

**Chris Moore (dooglus)** was the first to receive GitHub commit access, though his tenure was brief (approximately two months). He never had SVN commit access.

**Pieter Wuille (sipa)** and **Jeff Garzik (jgarzik)** were also added as SourceForge project members, though neither made any SVN commits — by May 2011, active development had already shifted to GitHub.

**Wladimir van der Laan (laanwj)** initially created a separate `bitcoin-qt` repository (May 15, 2011) for the Qt-based GUI client, which was later merged into the main repository. He received commit access to `bitcoin/bitcoin` on June 5, 2011, and eventually succeeded Gavin Andresen as lead maintainer in 2014.

**Nils Schneider (tcatm)** had the shortest sustained access among those granted in 2011, with his access ending on May 31, 2012.

**The transition of authority:** Satoshi had entrusted the project to Gavin Andresen alone. As development grew, Andresen distributed commit access to capable developers — a gradual decentralization of the development process itself. By the end of 2011, Bitcoin Core had six developers with commit access, compared to the four who had ever committed to the SVN repository.
