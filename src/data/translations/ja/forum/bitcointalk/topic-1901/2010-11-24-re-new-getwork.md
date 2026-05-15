---
title: "Re: 新しい getwork"
date: 2010-11-24T17:21:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1901.msg24095#msg24095"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「新しい getwork」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/509/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-11-23T19:47:42.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1901/2010-11-24-jgarzik-msg24008"
  - id: "q2"
    person: "DiabloD3"
    personSlug: "diablod3"
    date: "2010-11-24T02:31:11.000Z"
    sourceEntryId: "forum/bitcointalk/topic-1901/2010-11-24-diablod3-msg24050"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> C言語で簡単なCPUマイナーの作成を開始した。主にデモンストレーション用で、「getwork」を理解するためだ。
<!-- /tone-skip -->

getwork がバイト反転を行う。midstate、data、hash1 はすでにビッグエンディアンで、data を返す時もビッグエンディアンのままなので、ビッグエンディアンで作業し、バイト反転は不要だ。これらは ScanHash_関数に渡されるのと同じデータだ。midstate、data、hash1 を 16 バイトアラインされたバッファに入れて ScanHash_関数に渡すことができる。例えば ScanHash(pmidstate, pdata + 64, phash1, nHashesDone)のように。ナンスが見つかったら data にパッチして getwork を呼び出す。

ScanHash_関数が pdata + 64 ではなく pdata を使うように変更して一貫性を持たせるべきかもしれない。

target はリトルエンディアンで、m0mchil のものと同じ方法のはずだ。（もし違えば修正すべきだ）バイト反転を使う唯一のケースだ。こんな感じだと思う：if ByteReverse((unsigned int*)hash[6]) < (unsigned int*)target[6]。

<!-- quote: q2 -->
<!-- tone-skip -->
> サトシ、getwork の実装を m0mchil の仕様に準拠するように修正してほしい
<!-- /tone-skip -->

これが新しい仕様だ。マイナーをこれに対応させるのは難しくないはずだ。

変更点：
- 候補を送信した時に work を返さない。パラメーターなしで呼び出した時のみだ。
- block フィールドが data と hash1 に分割された。
- 一貫性のため state を midstate に改名。
- extranonce は不要になった。
