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

> [Quote from: theymos on October 21, 2010, 10:00:26 PM](#msg17955)
> 彼のブロック数が1698で「止まったまま」だ。

彼は難易度1.0で無効なブロックを生成していた。blk0001.datまたはblkindex.datファイルに破損したエントリがあるはずだ。blk*.datを削除して再ダウンロードさせるだけで済む。

安全ロックダウンが問題を検出し、受け入れられないより長いチェーンが存在することを確認したため「警告：表示されているトランザクションが正しくない可能性があります！」と表示していた。安全ロックダウンは生成を停止することはできない。そうすると攻撃の可能性を生み出してしまうからだ。

> [Quote from: gavinandresen on October 22, 2010, 02:25:14 PM](#msg18074)
> Bitcoinクライアントは、最後のブロックチェックポイントまでのすべてのブロックを取得するまで、コイン生成を許可すべきではない。

良いアイデアだ。チェックポイントブロック74000より前では生成しないように変更した。
