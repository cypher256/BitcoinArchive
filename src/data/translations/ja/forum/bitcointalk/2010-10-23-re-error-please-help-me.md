---
title: "Re: エラー - 助けてください！"
date: 2010-10-23T18:22:49.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1530.msg18241#msg18241"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「エラー - 助けてください！」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/493/"
threadId: "bt-error-please-help-me"
translationStatus: complete
---

[Quote from: theymos on October 21, 2010, 10:00:26 PM](#msg17955)
> Dhawがdebug.logファイルのいくつかを送ってくれた。見られた症状：
> - ほとんどのファイルで、ブロック数が1698で「スタック」している。
> - 1つのファイルではそれ以降のブロックを受け入れたが、Bitcoin再起動後に1698に*戻った*。
> - 1698以降に受信するブロックはおそらく無効と見なしている。実際のブロック拒否は見ていないが（自動トリムで削除され続ける）、debug.logには自分が有効と認識していないブロックに対する「block xxx have」メッセージが大量にある。
> - 実際のピアに接続されている。IRCへの接続に成功し、-addnodeで自分にも接続できた。自分の側で、彼が*getblocks*メッセージを正常に送信していることを確認した。
>
> Dhawは詐欺師ではなく、何らかのバグの被害者だとほぼ確信している。推測では、Bitcoin再起動のたびにブロックデータベースが破損している。
>
> 彼は「ブラジルポルトガル語」を話す。翻訳者がいると助かる。

彼は難易度1.0で無効なブロックを生成していた。blk0001.datまたはblkindex.datファイルに破損したエントリがあるはずだ。blk*.datを削除して再ダウンロードさせるだけで済む。

安全ロックダウンが問題を検出し、受け入れられないより長いチェーンが存在することを確認したため「警告：表示されているトランザクションが正しくない可能性があります！」と表示していた。安全ロックダウンは生成を停止することはできない。そうすると攻撃の可能性を生み出してしまうからだ。

[Quote from: gavinandresen on October 22, 2010, 02:25:14 PM](#msg18074)
> Dhawはこれらのコインをすべて自分のマシンで生成した。
>
> 残念ながら、バグかDhawのネットワーク接続の何らかの異常により、すべて別のブロックチェーンで生成されていた。
>
> Bitcoinクライアントは、最後のブロックチェックポイントまでのすべてのブロックを持つまで、コイン生成を許可すべきではない。

良いアイデアだ。チェックポイントブロック74000より前では生成しないように変更した。
