---
title: "無料トランザクションのレート制限"
date: 2011-03-13T17:50:13.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/117"
author: "gavinandresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "gavinandresenがbitcoin/bitcoin PR #117でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "pull-request"
translationStatus: complete
---

この変更の理由：「ペニーフラッディング」のより効果的な緩和策。

この変更前の動作：-limitfreerelayブール引数を設定してbitcoinを実行した場合、10分間に150Kバイトを超える無料トランザクションを受信すると、無料トランザクションのリレーを停止していた。

この変更後の動作：ビットコインは指数関数的なレート制限関数に基づいて無料トランザクションのリレーを停止する。より短い期間により多くのトランザクションがあるほどドロップされる可能性が高くなる（デフォルトの平均は10分間に約150Kバイトを許可する）。-limitfreerelayはブール値からKバイト/分のレートに変更され、デフォルトは15である。

サトシによるオリジナルコード――私はいくつかのコメントを追加し、-limitefreerelayオプションでレートを設定できるようにした。
