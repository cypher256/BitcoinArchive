---
title: "新しい CMoney 型によるコイン残高のカプセル化"
date: 2014-04-18T16:54:21.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/4067"
author: "maaku"
participants:
  - name: "Mark Friedenbach"
    slug: "mark-friedenbach"
description: "maaku が bitcoin/bitcoin PR #4067 でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "pull-request"
translationStatus: complete
---

コイン残高の表現と算術演算に異なる型を使用するサイドチェーンとビットコインの間でコードの同等性を提供する。例えば、Freicoin では分割可能性の向上と利息計算のために GMP ライブラリの任意精度有理数型を使用している。これにより、コードの共有やアップストリームへのコード提出における摩擦が大幅に軽減される。また、FormatMoney や ParseMoney などの関連機能を単一のクラスフレームワークに整理する。
