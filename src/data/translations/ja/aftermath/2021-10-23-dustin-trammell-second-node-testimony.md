---
title: "ダスティン・トランメルがビットコインネットワークの 2番目のノードであった可能性を証言"
date: 2021-10-23T00:00:00Z
type: "article"
source: "stephan-livera"
sourceUrl: "https://stephanlivera.com/episode/314/"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "セキュリティ研究者ダスティン・トランメル（Druid）が、ビットコインネットワークの 2 番目のノードであった可能性を回想。最初の接続時に他のノードは 1 つだけだった。"
isSatoshi: false
tags:
  - "early-adopter"
  - "mining"
  - "network"
  - "first-node"
  - "dustin-trammell"
secondarySources:
  - name: "Cointelegraph — The first days of Bitcoin and Dustin D. Trammell's emails with Satoshi Nakamoto (March 28, 2021)"
    url: "https://web.archive.org/web/20231217064107/https://cointelegraph.com/news/the-first-days-of-bitcoin-and-dustin-d-trammell-s-emails-with-satoshi-nakamoto"
  - name: "Bitcoin Wiki — Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Bitcoin Magazine — Dustin Trammell On The Original White Paper Day (October 30, 2022)"
    url: "https://bitcoinmagazine.com/culture/trammell-on-satoshi-bitcoin-white-paper-day"
relatedEntries:
  - aftermath/2009-07-20-satoshi-to-bohm-trammell-ip
translationStatus: complete
---

2021年10月23日、[ダスティン・D・トランメル](/BitcoinArchive/ja/participants/dustin-trammell/)は Stephan Livera ポッドキャスト（第 314回：「ビットコインネットワークの 2番目のノード？ビットコインの初期の日々」）に出演し、ビットコインの最初期のユーザーの一人としての体験を最も詳細に語った。

トランメルは、2009年1月8日の[暗号学メーリングリストでの](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-v0-1-released/2009-01-08-bitcoin-v0-1-released/)[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)の発表後、ソフトウェアをダウンロードして実行した最初の瞬間を描写した：

<!-- audit:quote-skip -->
> 「最初に起動した時、1つの他のノードに接続しただけだった。約4〜6時間、1つの接続だけでそこに座っていて、それから他の接続が始まり、他のノードがオンラインになり始めた。」

トランメルはブートストラップの仕組みを説明した：

<!-- audit:quote-skip -->
> 「初めて起動した場合、既知のIPアドレスにブートストラップしてピアリストを取得し、最大8つのピアに接続しようとした。」

彼が観察した単一の接続は、おそらくサトシ自身のノードだった——その時点でビットコインを動かしていた、他に唯一のマシンだった。

トランメルは、ソフトウェアでこの機能がデフォルトで有効になっていなかったため、すぐにはマイニングを開始しなかったことを明かした：

<!-- audit:quote-skip -->
> 「ソフトウェアの中で、具体的にマイニングをオンにしなければならないということに気づかなかった。デフォルトでは無効だった。」

<!-- audit:quote-skip -->
> 「だから、実際にマイニングを始めたのは4〜5日後だった。」

最初のユーザーの一人であったにもかかわらず、トランメルは最初の接続後数日間マイニングしていなかった。これは、ネットワークの初期のハッシュパワーが、これまで考えられていたよりもサトシの手に集中していたことを意味する。

2番目のノードだったかどうかについて、トランメルは慎重に保留した：

<!-- audit:quote-skip -->
> 「ネットワーク上の2番目のノードだったかもしれないと思うが、それは当時のソフトウェアで見た動作に基づく完全な推測だ。」

トランメルは、これが確定的な証拠ではなく観察された動作（既知の IP へのブートストラップによる単一のピア接続）に基づいていることを慎重に述べた。しかし、v0.1 リリースからわずか 2日後の [2009年1月11日にサトシに送ったメール](/BitcoinArchive/ja/entries/aftermath/2009-01-11-trammell-to-satoshi-first-email/)で、クレジット 0.00 の `Generated` メッセージを文書化しており、その日までにソフトウェアを実行していたことが確認されている。この様子を裏付ける別の記録も残っている——2009年7月20日、サトシは自身のノードがちょうど一つのピアにしか接続していないと報告しており、その IP アドレスは後にトランメルのものである可能性が高いと特定された。詳細は[サトシがニコラス・ボームに送ったネットワーク状況報告](/BitcoinArchive/ja/entries/aftermath/2009-07-20-satoshi-to-bohm-trammell-ip/)を参照。

Cointelegraph との以前のインタビュー（2021年3月）で、トランメルは追加の文脈を提供した：

<!-- audit:quote-skip -->
> 「マイニングは非常に簡単だったが、設定に入って具体的にマイニングをオンにしなければならないことに最初の数日間気づかなかった。」

<!-- audit:quote-skip -->
> 「デジタル通貨への私の入門は、文字通りサトシがビットコインのホワイトペーパーをメーリングリストに投稿した時だった。」
