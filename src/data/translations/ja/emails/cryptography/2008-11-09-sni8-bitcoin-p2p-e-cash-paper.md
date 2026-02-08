---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-09T16:31:26.000Z
source: cryptography-mailing-list
sourceUrl: "http://www.metzdowd.com/pipermail/cryptography/2008-November/014838.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが同時にブロックが生成された場合のチェーン分岐の解決について説明した投稿。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/8/"
translationStatus: complete
---

James A. Donaldの投稿：
>あるノードがプルーフ・オブ・ワークに
>正直で正当な単一支払いのトランザクション群を組み込み、
>別のノードがプルーフ・オブ・ワークに
>同様に正直で正当な単一支払いの
>別のトランザクション群を組み込み、
>両方のプルーフがほぼ同時に
>生成されたとする。
>
>その場合はどうなるのか？

両方ともブロックをブロードキャストする。すべてのノードは両方を受信して保持するが、最初に受信した方にのみ取り組む。正確に半分が一方を先に受信し、残りの半分がもう一方を先に受信したとしよう。

短時間で、すべてのトランザクションは伝播を完了し、全員がフルセットを持つことになる。各側で作業しているノードは、自分の側に欠けているトランザクションの追加を試みる。次のプルーフ・オブ・ワークが発見されると、そのノードが取り組んでいた前のブロックの分岐がより長くなり、同点が解消される。どちらの側であっても、新しいブロックにはトランザクションのもう半分が含まれるため、いずれの場合でも分岐にはすべてのトランザクションが含まれることになる。分岐が2回連続で起こるという起こりにくいイベントの場合でも、2回目の分岐の両側にはいずれにせよフルセットのトランザクションが含まれる。

トランザクションがブロックに入るまで1回かそれ以上の追加サイクルを待つ必要があっても問題ではない。

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
