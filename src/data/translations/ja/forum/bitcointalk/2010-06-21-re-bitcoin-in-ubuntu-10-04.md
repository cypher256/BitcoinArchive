---
title: "返信: Ubuntu 10.04でのBitcoin"
date: 2010-06-21T17:20:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=149.msg1646#msg1646"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Ubuntu 10.04でのBitcoin」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/130/"
threadId: "bt-bitcoin-in-ubuntu-10-04"
threadTitle: "Bitcoin in Ubuntu 10.04"
threadPosition: 1
translationStatus: complete
---

[NewLibertyStandard、2010年5月23日 午後4:28:12の引用](https://bitcointalk.org/index.php?topic=149.msg1203#msg1203)Ubuntuの新しいデフォルトテーマではBitcoinの見た目が悪いです。テーマ設定の一部は反映されていますが、すべてではないようです。選択されていないファイルメニューは暗い背景に明るい文字であるべきですが、誤って明るい背景に明るい文字になっています。私のディスプレイでは読めないほど似ています。次の安定版リリースまでに修正すべきです。
SVNバージョンで修正されました。
1) メニューバーのデフォルトカラー。
2) 残高バーが異なる色にならないようにした。
3) ビットコインアドレスと残高の背景をツールバーと同じ色にした。

すべての標準テーマを確認し、すべてにおいて妥当に見えます。

Ubuntuの最小化、最大化、閉じるボタンを右に移動するには:
gconf-editor
apps->metacity->general
button_layout=menu:minimize,maximize,close

10人中9人のユーザーが右側にあることに慣れていることを考えると、ひどく分かりにくい場所に設定が埋もれています。
