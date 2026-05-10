---
title: "Re: RFC: DB_PRIVATE フラグの削除"
date: 2010-09-12T18:00:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=920.msg12484#msg12484"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: DB_PRIVATE フラグの削除」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/450/"
translationStatus: complete
---

rev 153 で DB_PRIVATE フラグなしで試している。何が異なるか注視する必要がある。

少なくとも Windows では、24KB から 4MB のサイズの__db.001 から__db.006 の 6 つのファイルを作成する。終了時にそれらを削除せず、そのまま残す。

ドキュメントによると、メモリーマップドファイルを使用するとのことだ。データベースファイルと同じファイル権限を持ち、同じユーザーアクセス制限が適用されると思われる。

Windows プライベート LAN での 78500 ブロックのダウンロードテスト：
DB_PRIVATE あり     20分51秒
DB_PRIVATE なし     20分51秒

まったく同じになるとは予想していなかった。
