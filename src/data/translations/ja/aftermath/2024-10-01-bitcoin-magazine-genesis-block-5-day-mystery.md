---
title: "Bitcoin Magazineがジェネシスブロックとブロック1の間の5日間の空白を検証"
date: 2024-10-01T00:00:00Z
source: aftermath
sourceUrl: "https://bitcoinmagazine.com/technical/satoshi-nakamoto-2009-bitcoin-mining-missing-blocks-mystery"
author: "Pete Rizzo"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Pete Rizzo"
    slug: "pete-rizzo"
description: "Pete Rizzoが、ジェネシスブロック（2009年1月3日）とブロック1（2009年1月9日）の間の説明のつかない約5日8時間の空白を調査し、ビットコインの永続的な未解決の謎の一つとして位置づけた。"
isSatoshi: false
aftermathType: "article"
tags:
  - "genesis-block"
  - "mining"
  - "timestamp"
  - "mystery"
  - "bitcoin-launch"
secondarySources:
  - name: "CCN — Bitcoin Genesis Block 5-Day Mystery"
    url: "https://www.ccn.com/news/crypto/bitcoin-genesis-block-5-day-mystery-trillion-dollar-asset/"
  - name: "Bitslog — A New Mystery in Patoshi Timestamps (June 2020)"
    url: "https://bitslog.com/2020/06/22/a-new-mystery-in-patoshi-timestamps/"
  - name: "Bitcoin Wiki — Genesis Block"
    url: "https://en.bitcoin.it/wiki/Genesis_block"
translationStatus: complete
---

2024年10月1日、Bitcoin MagazineのPete Rizzoが、ビットコインの最も永続的な技術的謎の一つについての調査を発表した：ジェネシスブロック（ブロック0、2009年1月3日 18:15:05 UTC）とブロック1（2009年1月9日 02:54:25 UTC）の間の約5日8時間の空白である。

**謎：**

サトシが唯一のマイナーである通常のマイニング条件下では、ブロック間の予想時間は約10分である。しかしブロック0とブロック1の間隔は予想の約750倍も長い。この期間のブロックはブロックチェーン上に存在しない。

**有力な仮説：**

1. **意図的リセット** — サトシはジェネシスブロックをマイニングし、システムをテストした後、ネットワークをリセットして1月9日に新たに開始した。ジェネシスブロックのタイムスタンプは、マイニングが実際に開始された時ではなく、ソースコードにハードコードされた時を反映している可能性がある。

2. **The Timesの見出し説** — ジェネシスブロックに埋め込まれたメッセージ（「The Times 03/Jan/2009 Chancellor on brink of second bailout for banks」）は、1月3日以前には作成できなかったことを証明する。サトシはブロックを確定する前に、象徴的に意味のある見出しを待っていた可能性がある。

3. **技術的デバッグ** — サトシは初期テスト中に発見されたバグの修正に介在日を費やした可能性がある。特に、後に問題があったと認めたピアツーピア接続コードに関して。

4. **v0.1の準備** — この空白はBitcoin v0.1ソフトウェアリリースの準備に必要な時間と一致する（1月9日に暗号学メーリングリストで発表）。サトシは公開配布用のソフトウェアをパッケージングしていたと考えられる。

ジェネシスブロックは（プルーフ・オブ・ワークでマイニングされる後続のすべてのブロックとは異なり）ビットコインのソースコードにハードコードされているため、そのタイムスタンプは実際の作成時刻を表していない可能性がある。この技術的な区別により、ビットコイン誕生の真のタイムラインは根本的に知り得ないものとなっている。
