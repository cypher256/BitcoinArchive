---
title: "fClientの削除"
date: 2013-01-09T18:42:57.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/2161"
author: "sipa"
participants:
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
description: "sipaがbitcoin/bitcoin PR #2161でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "pull-request"
translationStatus: complete
---

クライアント（SPV）モードは完全には実装されず、すでに動作していた部分も過去2年間テストされていない（あるいは一度も実行されていない）可能性が高い。本PRではこれを完全に削除する。

SPV実装が必要な場合は、まずブロックチェーンのデータ構造を標準インターフェースを実装するクラスにカプセル化し、その後SPVセマンティクスを持つ代替実装を作成すべきだと考える。
