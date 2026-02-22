---
title: "Bitcoin Core v0.1 code walkthrough — 31,794 lines analyzed"
date: 2024-08-06T00:00:00Z
source: aftermath
sourceUrl: "https://www.forensicxs.com/bitcoin-core-v0-1-a-code-walkthrough/"
author: "Forensicxs"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Forensicxs published a comprehensive line-by-line walkthrough of Bitcoin v0.1's 31,794 lines of source code — one of the most detailed public analyses of Satoshi Nakamoto's original codebase. The analysis covered all 31 files across cryptography, blockchain operations, networking, wallet management, and the GUI."
isSatoshi: false
aftermathType: "blog"
tags:
  - "bitcoin-v0.1"
  - "source-code"
  - "code-analysis"
  - "forensicxs"
  - "technical"
secondarySources:
  - name: "GitHub — Original Bitcoin v0.1 Source (trottier)"
    url: "https://github.com/trottier/original-bitcoin"
  - name: "Satoshi Nakamoto Institute — Code"
    url: "https://satoshi.nakamotoinstitute.org/code/"
---

On August 6, 2024, the cybersecurity researcher known as Forensicxs published "Bitcoin Core v0.1: a code walkthrough" — a comprehensive analysis of Satoshi Nakamoto's original Bitcoin source code released on January 9, 2009.

**Scope:** The analysis covered all **31,794 lines** across 31 files of the Bitcoin v0.1 codebase, written in C++ and released under the MIT X11 license.

**Key findings:**

- **Code distribution:** The wxWidgets GUI implementation accounted for approximately 18,000 lines (the largest single component). Blockchain operations, database management, networking, and scripting comprised the remaining ~13,000 lines.

- **Architecture:** The analysis organized the codebase into the following categories:
  - **Cryptography:** Base58 address encoding, elliptic curve key management (secp256k1), SHA hashing
  - **Blockchain:** Transaction validation, block processing, difficulty adjustment (every 2,016 blocks), mining with initial reward of 50 BTC halving every 210,000 blocks
  - **Networking:** Peer-to-peer communication, IRC-based node discovery, message handling
  - **Wallet:** Transaction management, coin selection, balance calculations
  - **Script system:** A Forth-based stack language with opcodes for programmable transaction conditions

- **Technical parameters hardcoded in v0.1:** Coinbase maturity of 100 blocks; difficulty adjustment constrained to 25%–400% range; 10-minute target block interval.

The line count of 31,794 is consistent with the "roughly 31,000 lines" described by Joshua Davis in The New Yorker's October 2011 profile, which featured Dan Kaminsky's analysis of the same codebase.
