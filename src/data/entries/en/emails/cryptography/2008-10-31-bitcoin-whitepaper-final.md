---
title: "Bitcoin: A Peer-to-Peer Electronic Cash System (Whitepaper)"
date: 2008-10-31T18:10:00Z
source: whitepaper
sourceUrl: "https://bitcoin.org/bitcoin.pdf"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "The final published Bitcoin whitepaper, 'Bitcoin: A Peer-to-Peer Electronic Cash System,' the foundational document describing the design of Bitcoin. Originally hosted at bitcoin.org/bitcoin.pdf and announced on the Cryptography Mailing List on October 31, 2008."
isSatoshi: true
tags:
  - "whitepaper"
  - "final"
  - "foundational"
  - "peer-to-peer"
secondarySources:
  - name: "Bitcoin.org"
    url: "https://bitcoin.org/bitcoin.pdf"
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/bitcoin.pdf"
---

**Bitcoin: A Peer-to-Peer Electronic Cash System**

Satoshi Nakamoto
satoshin@gmx.com
www.bitcoin.org

**Abstract.** A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.

**Original file location:** `/original/bitcoin.pdf` in the NovelBitCoin repository

**PDF:** [View the Bitcoin whitepaper (PDF)](/BitcoinArchive/documents/bitcoin.pdf)

---

The whitepaper consists of 9 pages covering the following sections:

1. Introduction
2. Transactions
3. Timestamp Server
4. Proof-of-Work
5. Network
6. Incentive
7. Reclaiming Disk Space
8. Simplified Payment Verification
9. Combining and Splitting Value
10. Privacy
11. Calculations
12. Conclusion
