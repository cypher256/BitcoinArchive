---
title: "Satoshi to Wei Dai on citing b-money in the Bitcoin whitepaper (August 22, 2008)"
date: 2008-08-22T16:38:00Z
type: "correspondence"
source: "gwern"
sourceUrl: "https://gwern.net/doc/bitcoin/2008-nakamoto"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Wei Dai"
    slug: "wei-dai"
description: "Satoshi emails Wei Dai asking about the correct citation for b-money, revealing that he learned of b-money from Adam Back's reference. The email included a link to the pre-release draft 'Electronic Cash Without a Trusted Third Party' (ecash.pdf) hosted at upload.ae."
isSatoshi: true
tags:
  - "b-money"
  - "early-correspondence"
  - "adam-back"
  - "origins"
  - "ecash-pdf"
  - "whitepaper"
secondarySources:
  - name: "Gwern's Archive"
    url: "https://gwern.net/doc/bitcoin/2008-nakamoto"
relatedEntries:
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/2014-01-12-wei-dai-retrospective-on-satoshi"
  - "correspondence/adam-back/2008-08-20-satoshi-to-adam-back"
  - "analysis/2008-10-31-cypherpunk-techno-orientalism-satoshi-signature"
---

I was very interested to read your b-money page. I'm getting ready to release a paper that expands on your ideas into a complete working system. [Adam Back](/BitcoinArchive/participants/adam-back/) (hashcash.org) noticed the similarities and pointed me to your site.

I need to find out the year of publication of your b-money page for the citation in my paper. It'll look like:

[1] W. Dai, "b-money," http://www.weidai.com/bmoney.txt, 1998.

*[Context: The email was sent from satoshi@anonymousspeech.com to weidai@ibiblio.org, with CC to satoshi@anonymousspeech.com.]*

*[Context: The email included a link to a pre-release draft: http://www.upload.ae/file/6157/ecash-pdf.html — titled "Electronic Cash Without a Trusted Third Party" (ecash.pdf). The same draft was shared with Adam Back two days earlier on August 20. The file is now lost; the hosting site disappeared and no cached copy has been found. Gwern, Wei Dai, Adam Back, and Gregory Maxwell have confirmed they do not have copies.]*

*[Context: The email also included the paper's abstract:]*

> A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without the burdens of going through a financial institution. Digital signatures offer part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as honest nodes control the most CPU power on the network, they can generate the longest chain and outpace any attackers. The network itself requires minimal structure. Messages are broadcasted on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.

Thanks,
Satoshi

*[Editor: Satoshi's own statement here — that he learned of b-money only through Adam Back's referral, after the design work — is one of the primary-source observations carried into the [analysis of Satoshi's relation to the cypherpunk movement and the symbolic field of his signature](/BitcoinArchive/entries/analysis/2008-10-31-cypherpunk-techno-orientalism-satoshi-signature/).]*
