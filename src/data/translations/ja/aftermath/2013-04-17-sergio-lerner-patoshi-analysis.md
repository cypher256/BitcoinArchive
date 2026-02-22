---
title: "Sergio Demian Lernerが「Patoshi」マイニングパターンを特定 — サトシに~100万BTCが紐付け"
date: 2013-04-17T00:00:00Z
source: aftermath
sourceUrl: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
author: "Sergio Demian Lerner"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "ビットコイン研究者Sergio Demian Lernerが「The Well Deserved Fortune of Satoshi Nakamoto」を発表し、ビットコイン最初期のブロックに特徴的なマイニングパターン（後に「Patoshi」と命名）を特定した。約22,000ブロック（~110万BTC）がサトシ・ナカモトと推定される単一のマイナーに紐付けられた。これらのコインは事実上一度も使用されていない。"
isSatoshi: false
aftermathType: "blog"
tags:
  - "patoshi"
  - "mining"
  - "satoshi-fortune"
  - "extranonce"
  - "nonce-analysis"
  - "historic"
secondarySources:
  - name: "Bitslog — Satoshi's Fortune: a more accurate figure (April 24, 2013)"
    url: "https://bitslog.com/2013/04/24/satoshi-s-fortune-a-more-accurate-figure/"
  - name: "Bitslog — The Return of the Deniers and the Revenge of Patoshi (April 16, 2019)"
    url: "https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/"
  - name: "Bitslog — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
translationStatus: complete
---

2013年4月17日、アルゼンチンのビットコイン研究者Sergio Demian Lernerがブログ Bitslog に「The Well Deserved Fortune of Satoshi Nakamoto, Bitcoin creator, Visionary and Genius」を発表した。ビットコイン最初期のマイニングパターンに関する最初の体系的分析である。

**手法：**
LernerはBlock 0からBlock 36,288（2009年1月〜2010年1月）のcoinbaseトランザクションのExtraNonceフィールドを追跡し、「slow realtime clock」としてマイナーのクライアント再起動タイミングを特定した。単一のエンティティが一貫した勾配セグメントでマイニングし、約100時間ごとに再起動していることを発見した。

**主な発見：**
- 単一のエンティティが最初の1年間に約**100万BTC**をマイニング（2013年4月24日のフォローアップで~98万BTCに修正）
- 同期間に付与された全1,814,400 BTCのうち、1,148,800 BTCが未使用のまま
- Block 1がこのエンティティの最初のブロック；Block 12が別のユーザーの最初のブロック
- このエンティティから約100 BTC（ブロック報酬2つ分）のみが使用された形跡

**ノンスの謎（2013年9月）：**
Lernerはこのエンティティのノンス値が特定のバイト範囲に制限されていることを発見 — 最下位バイトが[0..9] ∪ [19..58]の値に限定され、256個中約50個のみ。このノンス空間の縮小が、他のマイナーより約4.3倍速くマイニングしているように見えた理由を説明した。

**「Patoshi」パターン（2019年4月）：**
「The Return of the Deniers and the Revenge of Patoshi」でLernerは「Patoshi」という呼称を定着させ、推定を**~22,000ブロック / ~110万BTC**に更新した。新たな証拠として、連続するPatoshiブロック間でのタイムスタンプ逆転がゼロ（非Patoshiブロック間では224回）であることを示し、単一のPCクロックが使用されていたことを証明した。

**マイニングマシン（2020年8月）：**
「The Patoshi Mining Machine」でLernerは、Patoshiが50台以上のネットワーク接続コンピュータではなく**マルチスレッドの単一高性能CPU**を使用したと結論付けた。ノンス空間は並列スレッドで走査される5つのサブレンジに分割され、Bitcoin v0.1の標準クライアントではなくSSE2最適化を施した修正版マイニングクライアントが使用されていた。

Patoshi分析は史上最も重要なブロックチェーンフォレンジクスの一つであり続けている。サトシ・ナカモトがビットコインの総供給量2,100万BTCの約5%を蓄積し — そしてそれを一度も使わないことを選んだことを明らかにした。
