---
title: "クライアント実装と2100万枚のコイン上限"
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
description: "サトシは元のソフトウェアがGPUファーム向けの産業用ツールとなる一方、クライアント実装がUIイノベーションを推進すると予測する。2100万枚のコイン上限の背後にある数学的根拠を明かす。"
isSatoshi: true
threadId: "satoshi-mike-hearn-more-questions"
threadPosition: 6
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
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

> オープンソースです。

完璧だ。あなたのコードが簡素化の方法を示せば、他の開発者もそれに続くだろう。クライアントはフル実装よりもハードルが低い挑戦だ。より多くの開発者の手の届く範囲にあれば、私が思いつかなかったような、より洗練されたUIやその他のものを考え出すだろう。元のソフトウェアはGPUファームやプールサーバーで使われる産業用の古いものになると予想している。

ところで、将来的にクライアント版の良い機能として、秘密鍵を暗号化して保持し、送金のたびにパスワードを入力するようにすることがある。

> 数日前にアプリでtestnet上の初めてのコイン送金に成功しました。今週末にもう少し進められることを期待しています。順調にいけば、2月頃には公開できるものがあるでしょう。

素晴らしい、進捗を教えてほしい。

> > 非常に普及した場合に低すぎず、そうでない場合に高すぎないものが欲しかったのです。
>
> この計算過程を見てみたいですね。ある意味、コインの数は任意です。nanocoinの表現により、発行量は事実上無限と言えるほど膨大だからです。

計算すると、ちょうど10分ごとに1ブロックになる：
21000000 / (50 BTC * 24時間 * 365日 * 4年 * 2) = 5.99 ブロック/時間

364.58333日/年に調整した。50 BTCから25 BTCへの半減は210000ブロック後、約3.9954年後であり、リターゲティングメカニズムのベストエフォートに基づくおおよその値だ。

100 BTCと4200万枚も考えたが、4200万は多すぎるように思えた。

典型的な金額が馴染みのある範囲になるようにしたかったのだ。100000単位をやり取りしていると、希少に感じない。脳は0.01から1000の範囲の数字をより扱いやすいのだ。

非常に大きくなれば、小数点を2桁移動させて、セントが新しいコインになる。
