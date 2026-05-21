---
title: "ビットコイン：P2P 通貨のオープンソース実装"
date: 2009-02-18T20:50:00.000Z
type: "forum-post"
source: "p2pfoundation"
sourceUrl: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/3/"
sourceStatus: "archived"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Joerg Baach"
    slug: "joerg-baach"
  - name: "Sepp Hasslberger"
    slug: "sepp-hasslberger"
description: "ヨルク・バッハとゼップ・ハスルベルガーの質問に回答。ビットコインの PoW マイニング、半減期、固定供給量を説明し、供給があらかじめ決まり価値が変動する貴金属に例えた。"
isSatoshi: true
tags:
  - "mining"
  - "supply-limit"
  - "proof-of-work"
  - "monetary-policy"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Joerg Baach"
    personSlug: "joerg-baach"
    sourceEntryId: "forum/p2pfoundation/bitcoin-open-source/2009-02-17-bitcoin-open-source-baach"
  - id: "q2"
    person: "Sepp Hasslberger"
    personSlug: "sepp-hasslberger"
    sourceEntryId: "forum/p2pfoundation/bitcoin-open-source/2009-02-18-bitcoin-open-source-hasslberger"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> あなたのシステムについて理解できなかったのだが、これをどのように通貨として使うのだろうか？ 私の理解では、誰でも好きなようにコインを作成できるので、信頼できるトークン/コインの供給がないことになる。
<!-- /tone-skip -->

<!-- quote: q2 -->
<!-- tone-skip -->
> トークンの総量を決定する公式はあるか？ もしあるなら、その公式は何か？
<!-- /tone-skip -->

これはグローバルな分散データベースであり、参加者が従う一連のルールに基づいて、多数決の合意によりデータベースへの追加が行われる：

- 誰かがプルーフ・オブ・ワークを見つけてブロックを生成すると、新しいコインを獲得する

- プルーフ・オブ・ワークの難易度は、ネットワーク全体で 1時間あたり平均 6 ブロックを目標として、2 週間ごとに調整される

- ブロックごとに付与されるコインは 4年ごとに半減する

コインは多数派によって発行されると言える。限られた、あらかじめ決められた量で発行される。

例として、1000 のノードがあり、毎時6 ノードがコインを獲得する場合、あなたが何かを得るまでにおそらく 1 週間かかるだろう。

Sepp の質問に対してだが、確かにユーザー人口の増加に応じてマネーサプライを調整する中央銀行や連邦準備制度のような存在はいない。それには価値を決定するための信頼できる当事者が必要だっただろう。なぜなら、ソフトウェアが現実世界のものの価値を知る方法を私は知らないからだ。もし何か巧妙な方法があったり、あるいは誰かに積極的にマネーサプライを管理して何かに連動させることを信頼したいのであれば、そのようにルールをプログラムすることもできただろう。

この意味で、これは貴金属により近い性質を持っている。価値を一定に保つために供給量が変わるのではなく、供給量はあらかじめ決められており、価値が変動する。ユーザー数が増えるにつれて、1 コインあたりの価値は上昇する。正のフィードバックループの可能性がある。ユーザーが増えると価値が上がり、それがさらに多くのユーザーを引きつけて増加する価値を享受しようとするかもしれない。
