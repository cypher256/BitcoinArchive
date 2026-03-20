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

> 確かにその通りだが、ビットコインアドレスを使う利点は、2人が複数の異なるチャネルを通じてアドレスを検証できることだ。友人が俺のウェブサイトからアドレスを取得して何かおかしいと思ったら、電話やIM、メールなどでアドレスを確認できる。攻撃者はその場合、音声を含むあらゆる通信チャネルで俺のアドレスを悪意のあるものに差し替えなければならなくなるが、それは至難の業だ。

サトシが提案したIPとビットコインアドレスを組み合わせた解決策を支持し、定期的に取引する相手は既にアドレス帳に互いのビットコインアドレスを持っているだろうと指摘した。

続いてトランメルはデータ喪失について重要な懸念を提起した――ウォレットバックアップに関する最も初期の議論の一つである。

> この話題で思い浮かんだことが一つある。システム障害が発生した場合のビットコイン喪失の可能性だ。アプリケーションは実行ディレクトリにデータを保存していないようなので、レジストリやその他の場所に保存されていると思うが……復旧に必要なすべてのデータをシステム外にバックアップできるファイルにエクスポートする機能があると良いんじゃないか。

また、プライバシーを保護しつつアドレス解決を可能にするオプションとして「ビットコインアドレスをネットワークに公開する」トグルを提案し、アプリケーションが終了時にネットワークソケットを正常にクローズしていない（TCP RST）ことを報告した。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
