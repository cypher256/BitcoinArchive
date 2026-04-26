---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-17T17:24:43.000Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014863.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "ノードが新しいブロックとトランザクションのハッシュリストを交換するインベントリベースのブロードキャストメカニズムをサトシが説明し、1年半の開発を経てソースコードが間もなくリリースされると述べた。"
isSatoshi: true
tags:
  - "networking"
  - "block-propagation"
  - "inventory"
  - "implementation"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/15/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "James A. Donald"
    personSlug: "james-donald"
relatedEntries:
  - "analysis/2008-10-31-cypherpunk-independent-arrival"
---

<!-- speaker: James A. Donald -->
<!-- quote: q1 -->
<!-- tone-skip -->
> > 幸い、現在の最良の分岐のための
> > 保留トランザクションプールだけを保持すれば十分だ。
>
> これは我々が知っている、つまり通信と
> データストレージが正常に動作している誠実で
> 行儀の良いピアが、現在の最良の分岐が何であるかを
> 知っていることを要求する——
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
ノードは自分が持っている最良の分岐の保留トランザクションプールだけを持てばよいということだ。現在最良の分岐だと考えている分岐のことだ。それがブロックを作ろうとしている分岐であり、プールが必要なのはそのためだけだ。

<!-- speaker: James A. Donald -->
> > ブロードキャストはおそらくほぼ完全に
> > 信頼できるだろう。
>
> 各メッセージが少なくとも1回は到着すると
> 仮定するのではなく、頻繁に到着に失敗する
> メッセージによって伝えられる場合でも
> 情報が到着するようなメカニズムを
> 作る必要がある。

<!-- speaker: Satoshi Nakamoto -->
ピアネットワーキングのブロードキャストメカニズムはカバーできていると思う。

各ノードは隣接ノードに、持っている新しいブロックとトランザクションのハッシュのインベントリリストを送信する。隣接ノードはまだ持っていないアイテムを要求する。タイムアウト後にアイテムが届かない場合、そのアイテムを持っていた別の隣接ノードにリクエストする。すべてまたはほとんどの隣接ノードが最終的に各アイテムを持つはずなので、1つとの通信が失敗しても、他の任意のノードから1つずつ試して取得できる。

インベントリ-リクエスト-データのスキームは少しレイテンシを導入するが、余分なデータブロックを送信キューに入れないことで帯域幅を節約し、最終的にはスピードの向上に役立つ。

<!-- speaker: James A. Donald -->
> あなたにはそのような設計のアウトライン
> と提案があり、それは大きな前進だが、
> 悪魔は細部に宿る。

<!-- speaker: Satoshi Nakamoto -->
コーディングしながらこの1年半でそれらの細かい詳細をすべて検討してきたと思うが、多くの詳細があった。機能的な詳細は論文ではカバーされていないが、ソースコードは近日公開する。メインファイルはお送りした。
（現時点ではリクエストに応じて提供可能、完全リリースは近日中）

Satoshi Nakamoto

*[編者注：ここでサトシ自身が述べる「コーディングしながらこの 1 年半」という時間軸は、設計作業を 2007 年半ばから 2008 年末の期間に位置づける — 3 か月前にウェイ・ダイへ送ったメールで本人が「b-money を知らなかった」と述べたのと同じ期間である。これは[サトシとサイファーパンク運動との関係についての分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-cypherpunk-independent-arrival/)が依拠する一次資料の観察の一つである。]*

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
