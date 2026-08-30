---
title: "ジェームズ・A・ドナルド — ビットコインホワイトペーパーに最初に返信した暗号学者"
date: 2008-11-02T23:46:23Z
type: "biography"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014814.html"
author: "James A. Donald"
participants:
  - name: "James A. Donald"
    slug: "james-donald"
description: "暗号学者・リバタリアン評論家。2008年11月2日、暗号学メーリングリストでサトシの論文に最初に返信。スケーラビリティへの懐疑が設計説明を促した。"
isSatoshi: false
callout:
  entry: "analysis/2008-11-02-james-donald-satoshi-identity-hypothesis"
  label: "サトシ正体仮説"
tags:
  - "james-donald"
  - "biography"
  - "cryptography-mailing-list"
  - "whitepaper"
  - "first-response"
  - "historic"
secondarySources:
  - name: "Satoshi Nakamoto Institute — Cryptography Mailing List Emails"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/"
  - name: "Metzdowd Cryptography Mailing List Archives"
    url: "https://www.metzdowd.com/pipermail/cryptography/2008-November/"
  - name: "Bitcoin Magazine — The Genesis Files: Hashcash or How Adam Back Designed Bitcoin's Motor Block"
    url: "https://bitcoinmagazine.com/technical/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block"
relatedEntries:
  - "analysis/2008-11-02-james-donald-satoshi-identity-hypothesis"
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-01-re-bitcoin-p2p-e-cash-paper-donald"
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper
  - aftermath/2009-01-03-genesis-block
  - analysis/2026-05-24-satoshi-design-vs-current-reality
translationStatus: complete
---

![紺色の背景に、顔のない横顔シルエットがタイムライン上に据えられ、両脇に紙のアイコンと文書アイコンが並ぶインフォグラフィック。下部には金と青緑の層が重なる図と、小型端末と文書を対比させた図が添えられている。](/BitcoinArchive/images/analysis/2008-11-02-james-donald-biography-hero.png)

2008 年 10 月 31 日に[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)が暗号学メーリングリストに[ビットコインホワイトペーパーを投稿](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/)してから 2 日後、ジェームズ・A・ドナルドが[最初に公に返信した](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-01-re-bitcoin-p2p-e-cash-paper-donald/):

> 「こういうシステムは切実に必要だ。だが、あなたの提案を私が理解する限り、この方式では必要な規模にスケールしないんじゃないか？」

ドナルドの懐疑論は、簡易決済検証や信頼と二重支払いのモデルを含む、サトシの最も詳細な初期アーキテクチャ説明を公的記録に引き出した。[ジェネシスブロックのエントリー](/BitcoinArchive/ja/entries/aftermath/2009-01-03-genesis-block/)は、このサトシの返信を、その個人的確信が記録された最も近い瞬間として扱っている。

ドナルドは長年サイファーパンクコミュニティで活動する暗号学者・リバタリアン評論家。jim.com というウェブサイトを運営し、暗号学・政治哲学・経済学について執筆していた。

## ビットコインホワイトペーパーへの最初の返信

ドナルドは 11 月 2 日の返信で、システムはすべてのノードがすべてのトランザクションを処理する必要があり、広範な利用には非現実的だと主張した。

## サトシとの技術的やり取り
2008 年 11 月を通じて、サトシはこのスケーリングの異議に一つずつ答えた。すべてのノードがすべてのトランザクションを処理する必要はない。簡易決済検証（SPV）を使えば、軽量なクライアントは全チェーンを保持せずに支払いを確認できるからだ。

数日後の 11 月 9 日、ドナルドは[同じスレッドの投稿](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-09-james-donald-bitcoin-p2p-e-cash-paper/)でビットコイン銀行に「bink」という名を与え、金本位制で金が紙幣を支えたように、ビットコインを口座マネーの下の決済層と位置づけた。これは、後に主役となる取引所や保管業者を先取りする見方だった。ドナルドが描いた形は、取引所・ETF・Lightning の保管業者が積み重なった、その下の決済層であり、これを記録しているのが[動いている仕組みがホワイトペーパーからどう離れたか](/BitcoinArchive/ja/entries/analysis/2026-05-24-satoshi-design-vs-current-reality/)である。

信頼と二重支払いについて問い詰められ、サトシはそのモデルを異例の詳しさで説明した。

## 意義
ドナルドのホワイトペーパーに対する批判的な関与は、サトシにビットコインのスケーラビリティモデルと信頼の前提を公開フォーラムで明確に説明させることになった。ドナルドはビットコインの実現可能性に懐疑的なままだった。だが、最初に厳しい問いを投げた懐疑論者がいたからこそ、ビットコイン最初期の設計根拠の一部が公開の記録に残っている。

## サトシ候補としての位置

ドナルドが公的記録の起点に立つこと、サイファーパンクとしての経歴、そして文体計量の一致から、彼は繰り返しサトシ候補に挙げられてきた。ドナルドは、ベンジャミン・ウォレスが『The Mysterious Mr. Nakamoto』(2025) で追い、対面の末に外した最有力の手がかりである。サトシが彼を第三者として回答したことや、ウォレスの人柄に基づく除外を含む賛否の論は、[ジェームズ・A・ドナルド＝サトシ仮説](/BitcoinArchive/ja/entries/analysis/2008-11-02-james-donald-satoshi-identity-hypothesis/)に並べてある。[サトシ正体仮説の総覧](/BitcoinArchive/ja/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/)は彼を固有名候補の中に位置づけている。
