---
title: "サトシからマイク・ハーンへ：マージドマイニング・放棄されたマーケットプレイス・独立チェーン（2011-03-09）"
date: 2011-03-09T19:39:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread4.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "サトシが最も詳細なマージドマイニング提案を説明し、放棄された eBay スタイルのマーケットプレイス機能を明かし、代替チェーンはマイナーを共有する完全に独立したものであることを明確にする。"
isSatoshi: true
tags:
  - "correspondence"
  - "merged-mining"
  - "bitdns"
  - "publish-subscribe"
  - "marketplace"
  - "fees"
  - "json-rpc"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Mike Hearn"
    personSlug: "mike-hearn"
    sourceEntryId: "correspondence/mike-hearn/bitcoinj/2011-03-09-hearn-to-satoshi-contracts-followup"
  - id: "q2"
    person: "Mike Hearn"
    personSlug: "mike-hearn"
    sourceEntryId: "correspondence/mike-hearn/bitcoinj/2011-03-09-hearn-to-satoshi-contracts-followup"
  - id: "q3"
    person: "Mike Hearn"
    personSlug: "mike-hearn"
    sourceEntryId: "correspondence/mike-hearn/bitcoinj/2011-03-09-hearn-to-satoshi-contracts-followup"
---

<!-- speaker: Mike Hearn -->
<!-- quote: q1 -->
<!-- tone-skip -->
> 以下のスレッドを参照してほしい：
> http://www.bitcoin.org/smf/index.php?topic=1786.msg22119#msg22119
> http://www.bitcoin.org/smf/index.php?topic=2181.msg28729#msg28729
>
> なるほど。つまり現在、手数料は事前に決めなければならないため厄介で、低すぎた場合にトランザクションを修正する方法がなく、ネットワークはいずれ忘れるものの、ウォレットにはコインを使ったと記録されたままになる。これはすでに起こり始めている。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
ネットワークは忘れないし、所有者のクライアントは再ブロードキャストし続ける。オーバーフロートランザクションは、残りの 0.3.8 ノードが減少する中でも数ヶ月間ネットワークに記憶されていた。

優先度には経過時間が含まれるため、トランザクションが待機するにつれて経過時間が増え、最終的には十分な優先度を持つようになる。

上記のリンクの 1 つで、手数料を増やすために正直な二重支払いを送信することを検討している。多くの作業が必要だが、実行は可能だ。現時点ではその価値はないと思う。

現在のシステムでは、ノードが現在の条件に十分な手数料を含めるようにし、ネットワークがすべてのトランザクションを最終的に処理するようにしており、十分に機能している。Gavin は、ノードが自分のトランザクションを書き込む際に優先度をチェックしていなかった見落としを修正している。

処理速度の不確実性を心配するユーザーは、手数料を含めることへの動機付けと考えるべきだ。

<!-- speaker: Mike Hearn -->
<!-- quote: q2 -->
<!-- tone-skip -->
> プロトコルには publisher/subscriber チャネルを設定するための未完成の部分があり、ネットワークを介した分散ルーティングを扱っている。これの目的は何だったのか？P2P マーケットのアイデアだったのか、それとも予想されるトランザクション手数料のブロードキャストなど、何かもっと低レベルの機能だったのか？
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
クライアントに組み込んだ eBay スタイルのマーケットプレイスを実装しようとしていた。Publish/subscribe は商品オファーや評価・レビューのブロードキャストに使用される予定だった。レビューはあなたが生成したブロックによって重み付けされる。JSON-RPC を優先して正しく放棄した。これにより他の開発者が外部で実装できるようになった。publish/subscribe の「中間で出会う」メカニズムは興味深い概念だったが、それを使用するものは何も残っていない。

これは最も技術的に要求の厳しいユースケースを探索し、ブロックチェーンが開始された後のルールのロックイン性を考慮して、将来必要になる可能性のあるすべてをビットコインがサポートできることを確認するためのコード作成の一部だった。

<!-- speaker: Mike Hearn -->
<!-- quote: q3 -->
<!-- tone-skip -->
> 数ヶ月前にビットコインを一般化することについて興味深い議論があったが、あなたがそれをどのように達成しようとしていたかを完全に理解するのは難しかった。複数の独立したチェーンの上に別のマークルツリーを配置するという概念は理解できたと思う：
>
> http://www.bitcoin.org/smf/index.php?topic=3414.msg48171#msg48171
>
> しかし、後方互換性のために200バイトを持つというあなたのコメントは理解できなかった。また、これは明らかだと思うが、念のため確認する。あなたのアイデアでは、代替チェーンはビットコインとまったく同じ形式と検証ルールのセット（同じスクリプト言語など）を共有し、すべてのマイナーは非金融的な性質のブロックであっても検証できるということか？そして、別々のブロックチェーンを持つ意味は、単にクライアントモード実装のストレージコストと帯域幅を管理することなのか？
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
いいえ、他のチェーンはビットコインのルールには従わない。それらは完全に独立したチェーンだ。マイナー以外は何も共有しない。他のネットワークの Proof of Work の定義は、自分のブロックのハッシュを含むビットコイン形式のブロックを（自分のチェーンの難易度に従って）解くことだ。ビットコインブロックが有効であるか、ビットコインによって使用されているかは気にしないが、マイナーが両方のチェーンを同時に作業できるようにする。

BitDNS ブロックをハッシュする手順：
 - BitDNS ブロックをハッシュする
 - ビットコインブロックを構築する
 - ビットコインブロックの Tx 0 の scriptSig に BitDNS ハッシュを挿入する
 - ビットコインブロックをハッシュする

そのハッシュが BitDNS のターゲット以下であれば、BitDNS ブロックは有効だ。

BitDNS ブロックには、ハッシュに使用されたビットコインブロックを再構築するために必要な約 200 バイトのデータが必要だ：
 - ビットコインブロックヘッダー
 - Tx 0 へのマークルブランチ
 - Tx 0（ちなみに、Tx 0 の prev ハッシュは常に 0 なので、省略すると 32 バイト節約できる）

素材となる「ビットコインブロック」がビットコインチェーンで実際に有効であったかどうかは問題ではない。ただし、有効であった可能性はある。BitDNS にとっては、その複雑なハッシュ計算を行うために必要な単なるソルトの集まりだ。マイナーが BitDNS のみをマイニングしていてビットコインに関心がない場合、すべてゼロの空白ビットコインブロック（ナンスを除く）を使用するだろう。

アイデアをさらに拡張性のために発展させるなら、BitDNS ブロックハッシュを Tx 0 に入れる代わりに、BitDNS を含むマークルツリーのルートを入れることを検討してくれ。これが概念的に最上部にあるマークルツリーだ。
