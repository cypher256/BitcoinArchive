---
title: "Re: エラー - 助けてください！"
date: 2010-10-23T18:22:49.000Z
source: bitcointalk
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
threadTitle: "ERROR - PLEASE HELP ME!"
threadPosition: 1
translationStatus: complete
---

[Quote from: theymos on October 21, 2010, 10:00:26 PM](https://bitcointalk.org/index.php?topic=1530.msg17955#msg17955)彼のブロック数が1698で「止まったまま」です。
彼は難易度1.0で無効なブロックを生成していました。blk0001.datまたはblkindex.datファイルに破損したエントリがあるはずです。blk*.datを削除して再ダウンロードさせるだけで済みます。

安全ロックダウンが問題を検出し、受け入れられないより長いチェーンが存在することを確認したため「警告：表示されているトランザクションが正しくない可能性があります！」と表示していました。安全ロックダウンは生成を停止することはできません。そうすると攻撃の可能性を生み出してしまうからです。

[Quote from: gavinandresen on October 22, 2010, 02:25:14 PM](https://bitcointalk.org/index.php?topic=1530.msg18074#msg18074)Bitcoinクライアントは、最後のブロックチェックポイントまでのすべてのブロックを取得するまで、コイン生成を許可すべきではありません。
良いアイデアです。チェックポイントブロック74000より前では生成しないように変更しました。
