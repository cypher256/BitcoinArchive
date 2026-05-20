---
title: "サトシからウェイ・ダイへ：ビットコインホワイトペーパーでの b-money 引用について（2008-08-22）"
date: 2008-08-22T00:00:00Z
type: "correspondence"
source: "gwern"
sourceUrl: "https://gwern.net/doc/bitcoin/2008-nakamoto"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Wei Dai"
    slug: "wei-dai"
description: "サトシの最も初期に知られるメール。ウェイ・ダイに b-money の正しい引用について尋ねるメールを送り、アダム・バックの紹介で b-money を知ったことを明かしている。"
isSatoshi: true
tags:
  - "b-money"
  - "earliest-correspondence"
  - "adam-back"
  - "origins"
relatedEntries:
  - "analysis/2008-08-22-wei-dai-satoshi-identity-hypothesis"
  - "analysis/2008-10-31-bitcoin-design-lineage"
  - "analysis/2026-04-08-adam-back-satoshi-identity-hypothesis"
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/1998-11-26-wei-dai-pipenet-b-money-announcement"
  - "aftermath/1998-12-07-wei-dai-re-b-money-protocol"
  - "aftermath/2014-01-12-wei-dai-retrospective-on-satoshi"
  - "aftermath/2008-08-20-satoshi-to-adam-back"
  - "analysis/2008-10-31-cypherpunk-independent-arrival"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
あなたの b-money ページを非常に興味深く読んだ。あなたのアイデアを完全に動作するシステムに拡張した論文を公開する準備をしている。[アダム・バック](/BitcoinArchive/ja/participants/adam-back/)（hashcash.org）が類似点に気づき、あなたのサイトを教えてくれた。

論文の引用のために、あなたの b-money ページの公開年を知る必要がある。このようになる：

[1] W. Dai, "b-money," http://www.weidai.com/bmoney.txt, 1998.

*[補足：このメールは satoshi@anonymousspeech.com から weidai@ibiblio.org 宛に送信され、CC は satoshi@anonymousspeech.com に向けられていた。]*

*[補足：メールにはプレリリース原稿へのリンクも含まれていた：http://www.upload.ae/file/6157/ecash-pdf.html — 表題は「Electronic Cash Without a Trusted Third Party」（ecash.pdf）。同じ原稿は 2 日前の 8 月 20 日にアダム・バックにも共有されている。このファイルは現在失われており、ホスティングサイトが消滅し、キャッシュも見つかっていない。グウェン、ウェイ・ダイ、アダム・バック、グレゴリー・マクスウェルのいずれも、控えを保持していないと確認している。]*

*[補足：メールには論文のアブストラクトも含まれていた：]*

> 純粋に peer-to-peer の電子キャッシュであれば、金融機関を経由する負担なしに、当事者間で直接オンライン支払いを送ることができる。デジタル署名は解決策の一部を提供するが、二重支払いを防ぐために信頼された第三者が依然として必要であるなら、その主な利点は失われる。本論文は peer-to-peer ネットワークを用いて二重支払い問題を解決する方法を提案する。ネットワークはトランザクションを、ハッシュベースの proof-of-work の継続的な連鎖にハッシュ化することでタイムスタンプを付け、proof-of-work をやり直さない限り改変できない記録を形成する。最長のチェーンは目撃された事象の順序の証明であるだけでなく、それが最大の CPU 計算力のプールから来たことの証明でもある。誠実なノードがネットワーク上の CPU 計算力の過半数を制御している限り、最長のチェーンを生成し、いかなる攻撃者をも凌駕できる。ネットワーク自体は最小限の構造しか必要としない。メッセージはベストエフォートでブロードキャストされ、ノードは自由にネットワークを離脱・再参加でき、不在の間に起きたことの証明として最長の proof-of-work チェーンを受け入れる。

よろしく頼む、
Satoshi

*[編者注：ここでサトシ本人が述べていること — アダム・バックの紹介でようやく b-money を知った、それも設計作業の後で — は、[サトシとサイファーパンク運動との関係についての分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)が依拠する一次資料の観察の一つである。]*
