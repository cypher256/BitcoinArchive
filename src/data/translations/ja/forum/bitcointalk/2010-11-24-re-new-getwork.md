---
title: "Re: 新しいgetwork"
date: 2010-11-24T17:21:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1901.msg24095#msg24095"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「新しいgetwork」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/509/"
threadId: "bt-new-getwork"
threadTitle: "New getwork"
threadPosition: 3
translationStatus: complete
---

[Quote from: jgarzik on November 24, 2010, 04:47:42 AM](https://bitcointalk.org/index.php?topic=1901.msg24008#msg24008)ByteReverseに何か奇妙なことが起きている（あるいは不足している）のではないかと思います。'data'と'nonce'をバイト反転する必要があるかどうか、どのようにするかがかなり不明確です。
getworkがバイト反転を行います。midstate、data、hash1はすでにビッグエンディアンで、dataを返す時もビッグエンディアンのままなので、ビッグエンディアンで作業し、バイト反転は不要です。これらはScanHash_関数に渡されるのと同じデータです。midstate、data、hash1を16バイトアラインされたバッファに入れてScanHash_関数に渡すことができます。例えばScanHash(pmidstate, pdata + 64, phash1, nHashesDone)のように。nonceが見つかったらdataにパッチしてgetworkを呼び出します。

ScanHash_関数がpdata + 64ではなくpdataを使うように変更して一貫性を持たせるべきかもしれません。

targetはリトルエンディアンで、m0mchilのものと同じ方法のはずです。（もし違えば修正すべきです）バイト反転を使う唯一のケースです。こんな感じだと思います：if ByteReverse((unsigned int*)hash[6]) < (unsigned int*)target[6]。

[Quote from: DiabloD3 on November 24, 2010, 11:31:11 AM](https://bitcointalk.org/index.php?topic=1901.msg24050#msg24050)Satoshi、getworkの実装をm0mchilの仕様に準拠するように修正してください
これが新しい仕様です。マイナーをこれに対応させるのは難しくないはずです。

変更点：
- 候補を送信した時にworkを返しません。パラメータなしで呼び出した時のみです。
- blockフィールドがdataとhash1に分割されました。
- 一貫性のためstateをmidstateに改名。
- extranonceは不要になりました。
