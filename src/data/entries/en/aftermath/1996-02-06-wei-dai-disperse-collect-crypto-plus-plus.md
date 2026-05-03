---
title: "Wei Dai announces Disperse/Collect, built from his own Crypto++ library"
date: 1996-02-06T00:00:00Z
type: "article"
source: "cypherpunks-mailing-list"
sourceUrl: "http://cypherpunks.venona.com/archive/1996/02/msg00444.html"
author: "Wei Dai"
participants:
  - name: "Wei Dai"
    slug: "wei-dai"
description: "Wei Dai announces Disperse/Collect 1.0 on the Cypherpunks list, built from his own Crypto++ library. Confirms he was an active coder, relevant to why he later chose not to implement b-money."
isSatoshi: false
tags:
  - "wei-dai"
  - "crypto-plus-plus"
  - "cypherpunks"
  - "coding"
  - "historic"
editorNote: "This post is significant because it demonstrates that Wei Dai was a hands-on programmer who actively wrote, released, and maintained code. When he later chose not to implement b-money (1998), it was not because he lacked the technical ability — as confirmed by his own admission on LessWrong in 2014 that he had 'grown somewhat disillusioned with crypto-anarchy.' The distinction between 'couldn't implement' and 'chose not to implement' is crucial for understanding the intellectual history leading to Bitcoin."
secondarySources:
  - name: "Crypto++ Library"
    url: "https://www.cryptopp.com/"
  - name: "Wei Dai — Crypto++ 2.0 announcement (Feb 21, 1996)"
    url: "http://cypherpunks.venona.com/archive/1996/02/msg01491.html"
  - name: "Wei Dai — Crypto++ 1.1 announcement (Nov 4, 1995)"
    url: "http://cypherpunks.venona.com/archive/1995/11/msg00070.html"
---

*From the Cypherpunks mailing list, February 5-6, 1996:*

"To follow up on a post last year where I suggested that Rabin's information dispersal scheme might be useful for sending large files across unreliable remailer networks, I built a shareware package called Disperse/Collect out of my own Crypto++ library. Disperse splits up files into redundant pieces and encodes them in base 64. Collect decodes them and reconstructs the original files. You can download this software from my home page at http://www.eskimo.com/~weidai."

*[Context: By early 1996, [Wei Dai](/BitcoinArchive/participants/wei-dai/) had already created and publicly released multiple software projects, including the Crypto++ cryptographic library. Crypto++ was [later integrated into Bitcoin itself by Satoshi in v0.3.7 (July 2010)](/BitcoinArchive/entries/forum/bitcointalk/topic-572/2010-07-27-blackeye-msg6093/), with a subset (SHA-256 plus general dependencies) added to the SVN to speed up hash computation — meaning Dai's code became a direct dependency of Bitcoin itself. Crypto++ was also used in commercial products such as Microsoft Office Groove and LastPass.]*
