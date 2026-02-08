---
title: "Re: RFC: DB_PRIVATEフラグの削除"
date: 2010-09-12T18:00:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=920.msg12484#msg12484"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: DB_PRIVATEフラグの削除」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/450/"
threadId: "bt-rfc-remove-db-private-flag"
threadTitle: "RFC: remove DB_PRIVATE flag"
threadPosition: 2
translationStatus: complete
---

rev 153でDB_PRIVATEフラグなしで試しています。何が異なるか注視する必要があります。

少なくともWindowsでは、24KBから4MBのサイズの__db.001から__db.006の6つのファイルを作成します。終了時にそれらを削除せず、そのまま残します。

ドキュメントによると、メモリマップドファイルを使用するとのことです。データベースファイルと同じファイル権限を持ち、同じユーザーアクセス制限が適用されると思われます。

WindowsプライベートLANでの78500ブロックのダウンロードテスト：
DB_PRIVATEあり     20分51秒
DB_PRIVATEなし     20分51秒

まったく同じになるとは予想していませんでした。
