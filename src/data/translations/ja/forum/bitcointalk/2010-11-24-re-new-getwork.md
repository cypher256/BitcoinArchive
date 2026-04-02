---
title: "Re: 新しいgetwork"
date: 2010-11-24T17:21:01.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

[Quote from: jgarzik on November 24, 2010, 04:47:42 AM](#msg24008)
> ByteReverseに何か奇妙なことが起きている（あるいは不足している）のではないかと思う。'data'と'nonce'をバイト反転する必要があるかどうか、どのようにするかがかなり不明確だ。

getworkがバイト反転を行う。midstate、data、hash1はすでにビッグエンディアンで、dataを返す時もビッグエンディアンのままなので、ビッグエンディアンで作業し、バイト反転は不要だ。これらはScanHash_関数に渡されるのと同じデータだ。midstate、data、hash1を16バイトアラインされたバッファに入れてScanHash_関数に渡すことができる。例えばScanHash(pmidstate, pdata + 64, phash1, nHashesDone)のように。nonceが見つかったらdataにパッチしてgetworkを呼び出す。

ScanHash_関数がpdata + 64ではなくpdataを使うように変更して一貫性を持たせるべきかもしれない。

targetはリトルエンディアンで、m0mchilのものと同じ方法のはずだ。（もし違えば修正すべきだ）バイト反転を使う唯一のケースだ。こんな感じだと思う：if ByteReverse((unsigned int*)hash[6]) < (unsigned int*)target[6]。

[Quote from: DiabloD3 on November 24, 2010, 11:31:11 AM](#msg24050)
> サトシ、getworkの実装をm0mchilの仕様に準拠するよう修正してほしい。

これが新しい仕様だ。マイナーをこれに対応させるのは難しくないはずだ。

変更点：
- 候補を送信した時にworkを返さない。パラメータなしで呼び出した時のみだ。
- blockフィールドがdataとhash1に分割された。
- 一貫性のためstateをmidstateに改名。
- extranonceは不要になった。
