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
translationStatus: complete
quotes:
  - id: "q1"
    person: "theymos"
    personSlug: "michael-marquardt"
    date: "2010-10-21T13:00:26.000Z"
  - id: "q2"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-10-22T05:25:14.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> Dhawがdebug.logファイルのいくつかを送ってくれた。見られた症状：
<!-- /tone-skip -->

彼は難易度1.0で無効なブロックを生成していた。blk0001.datまたはblkindex.datファイルに破損したエントリがあるはずだ。blk*.datを削除して再ダウンロードさせるだけで済む。

安全ロックダウンが問題を検出し、受け入れられないより長いチェーンが存在することを確認したため「警告：表示されているトランザクションが正しくない可能性があります！」と表示していた。安全ロックダウンは生成を停止することはできない。そうすると攻撃の可能性を生み出してしまうからだ。

<!-- quote: q2 -->
<!-- tone-skip -->
> Dhawはこれらのコインをすべて自分のマシンで生成した。
<!-- /tone-skip -->

良いアイデアだ。チェックポイントブロック 74000より前では生成しないように変更した。
