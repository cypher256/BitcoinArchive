---
title: "Re: いくつかの考え... — アドレス検証とウォレットバックアップ"
date: 2009-01-15T19:03:34Z
source: correspondence
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルがビットコインアドレスはIPベースの送金よりも安全であると主張。アドレスは複数のチャネルを通じて検証できるためである。システム障害によるビットコインデータの喪失について懸念を提起し、オプションのアドレス公開トグルを提案し、終了時のソケットクローズの問題を報告している。"
isSatoshi: false
threadId: "satoshi-dustin-trammell"
threadPosition: 11
tags:
  - "correspondence"
  - "security"
  - "send-to-ip"
  - "wallet-backup"
  - "address-verification"
  - "bug-report"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

トランメルはセキュリティに関する議論を継続し、ビットコインアドレスはIPベースの送金に比べて優位性があると主張した。複数の独立したチャネルを通じて検証できるためである。

> True, but the upside to using the BitCoin address is that two people can communicate via a number of different channels to verify the address. If my friend gets my address off my website, and thinks something fishy is going on, he can call me, or IM me, or email me, etc. to verify the address. An attacker would then have to basically be replacing my address with the malicious one in every possible communications channel, including voice, which is a difficult feat.

サトシが提案したIPとビットコインアドレスを組み合わせた解決策を支持し、定期的に取引する相手は既にアドレス帳に互いのビットコインアドレスを持っているだろうと指摘した。

続いてトランメルはデータ喪失について重要な懸念を提起した――ウォレットバックアップに関する最も初期の議論の一つである。

> One thing that came to mind on this topic is the potential for BitCoin loss if you have a system failure. The application doesn't seem to store any data in the directory that it runs in, so I assume it's stored in the registry and other places …… so it may be a good idea to have the application be able to export everything that it needs for recovery to a file that could be backed up off of the system.

また、プライバシーを保護しつつアドレス解決を可能にするオプションとして「ビットコインアドレスをネットワークに公開する」トグルを提案し、アプリケーションが終了時にネットワークソケットを正常にクローズしていない（TCP RST）ことを報告した。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
