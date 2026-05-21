---
title: "サトシからマイク・ハーンへ：クライアント実装と 2100 万枚のコイン上限（2011-01-10）"
date: 2011-01-10T16:34:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "サトシは元のソフトウェアが GPU ファーム向けの産業用ツールとなる一方、クライアント実装が UI イノベーションを推進すると予測する。2100 万枚のコイン上限の背後にある数学的根拠を明かす。"
isSatoshi: true
tags:
  - "correspondence"
  - "bitcoinj"
  - "client-mode"
  - "encryption"
  - "coin-supply"
  - "gpu-mining"
translationStatus: complete
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
quotes:
  - id: "q1"
    person: "Mike Hearn"
    personSlug: "mike-hearn"
    sourceEntryId: "correspondence/mike-hearn/more-questions/2011-01-07-hearn-to-satoshi-open-source"
  - id: "q2"
    person: "Mike Hearn"
    personSlug: "mike-hearn"
    sourceEntryId: "correspondence/mike-hearn/more-questions/2010-12-30-hearn-to-satoshi-spv-progress"
---

<!-- speaker: Mike Hearn -->
<!-- quote: q1 -->
> オープンソースだ。

<!-- speaker: Satoshi Nakamoto -->
完璧だ。あなたのコードが簡素化の方法を示せば、他の開発者もそれに続くだろう。クライアントはフル実装よりもハードルが低い挑戦だ。より多くの開発者の手の届く範囲にあれば、私が思いつかなかったような、より洗練された UI やその他のものを考え出すだろう。元のソフトウェアは GPU ファームやプールサーバーで使われる産業用の古いものになると予想している。

ところで、将来的にクライアント版の良い機能として、秘密鍵を暗号化して保持し、送金のたびにパスワードを入力するようにすることがある。

<!-- speaker: Mike Hearn -->
<!-- quote: q1 -->
> 数日前にアプリで testnet 上の初めてのコイン送金に成功した。今週末にもう少し進められることを期待している。順調にいけば、2月頃には公開できるものがあるだろう。

<!-- speaker: Satoshi Nakamoto -->
素晴らしい、進捗を教えてほしい。

<!-- speaker: Mike Hearn -->
<!-- quote: q2 -->
> > 非常に普及した場合に低すぎず、そうでない場合に高すぎないものが欲しかったのだ。
>
> この計算過程を見てみたいものだ。ある意味、コインの数は任意だ。nanocoinの表現により、発行量は事実上無限と言えるほど膨大だからだ。

<!-- speaker: Satoshi Nakamoto -->
計算すると、ちょうど 10分ごとに 1 ブロックになる：
21000000 / (50 BTC * 24時間 * 365日 * 4年 * 2) = 5.99 ブロック/時間

364.58333日/年に調整した。50 BTC から 25 BTC への半減は 210000 ブロック後、約 3.9954年後であり、リターゲティングメカニズムのベストエフォートに基づくおおよその値だ。

100 BTC と 4200 万枚も考えたが、4200 万は多すぎるように思えた。

典型的な金額が馴染みのある範囲になるようにしたかったのだ。100000 単位をやり取りしていると、希少に感じない。脳は 0.01 から 1000 の範囲の数字をより扱いやすいのだ。

非常に大きくなれば、小数点を 2 桁移動させて、セントが新しいコインになる。
