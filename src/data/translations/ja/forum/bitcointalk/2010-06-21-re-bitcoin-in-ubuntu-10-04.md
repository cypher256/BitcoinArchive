---
title: "Re: Ubuntu 10.04でのBitcoin"
date: 2010-06-21T17:20:21.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: NewLibertyStandard on May 23, 2010, 04:28:12 PM](#msg1203)
> Ubuntuの新しいデフォルトテーマでビットコインの見た目が悪い。テーマ設定の一部は反映されているが、すべてではないようだ。選択されていないファイルメニューは暗い背景に明るいテキストであるべきだが、明るい背景に明るいテキストになっており正しくない。私のディスプレイでは両者が似すぎていて読めない。次の安定版リリースまでに修正すべきだ。
<!-- /tone-skip -->
SVNバージョンで修正した。
1) メニューバーのデフォルトカラー。
2) 残高バーが異なる色にならないようにした。
3) ビットコインアドレスと残高の背景をツールバーと同じ色にした。

すべての標準テーマを確認し、すべてにおいて妥当に見える。

Ubuntuの最小化、最大化、閉じるボタンを右に移動するには:
gconf-editor
apps->metacity->general
button_layout=menu:minimize,maximize,close

10人中9人のユーザーが右側にあることに慣れていることを考えると、ひどく分かりにくい場所に設定が埋もれている。
