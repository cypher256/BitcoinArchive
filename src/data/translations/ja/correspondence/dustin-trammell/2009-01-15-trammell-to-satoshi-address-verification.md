---
title: "Re: いくつかの考え... — アドレス検証とウォレットバックアップ"
date: 2009-01-15T19:03:34Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルがビットコインアドレスはIP送金より安全と主張（複数チャネルで検証可能）。データ喪失への懸念、アドレス公開トグル、終了時ソケットクローズの問題を提起。"
isSatoshi: false
tags:
  - "correspondence"
  - "security"
  - "send-to-ip"
  - "wallet-backup"
  - "address-verification"
  - "bug-report"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

<!-- speaker: narrator -->
トランメルはセキュリティに関する議論を継続し、ビットコインアドレスはIPベースの送金に比べて優位性があると主張した。複数の独立したチャネルを通じて検証できるためである。

<!-- speaker: Dustin Trammell -->
> 確かにその通りだが、ビットコインアドレスを使う利点は、2人が複数の異なるチャネルを通じてアドレスを検証できることだ。友人が俺のウェブサイトからアドレスを取得して何かおかしいと思ったら、電話やIM、メールなどでアドレスを確認できる。攻撃者はその場合、音声を含むあらゆる通信チャネルで俺のアドレスを悪意のあるものに差し替えなければならなくなるが、それは至難の業だ。

<!-- speaker: narrator -->
サトシが提案したIPとビットコインアドレスを組み合わせた解決策を支持し、定期的に取引する相手は既にアドレス帳に互いのビットコインアドレスを持っているだろうと指摘した。

続いてトランメルはデータ喪失について重要な懸念を提起した――ウォレットバックアップに関する最も初期の議論の一つである。

<!-- speaker: Dustin Trammell -->
> この話題で思い浮かんだことが一つある。システム障害が発生した場合のビットコイン喪失の可能性だ。アプリケーションは実行ディレクトリにデータを保存していないようなので、レジストリやその他の場所に保存されていると思うが……復旧に必要なすべてのデータをシステム外にバックアップできるファイルにエクスポートする機能があると良いんじゃないか。

<!-- speaker: narrator -->
また、プライバシーを保護しつつアドレス解決を可能にするオプションとして「ビットコインアドレスをネットワークに公開する」トグルを提案し、アプリケーションが終了時にネットワークソケットを正常にクローズしていない（TCP RST）ことを報告した。
