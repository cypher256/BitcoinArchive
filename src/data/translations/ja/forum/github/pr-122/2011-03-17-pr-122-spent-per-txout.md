---
title: "トランザクション出力ごとの使用済み管理"
date: 2011-03-17T21:58:07.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/pull/122"
author: "sipa"
participants:
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
description: "sipaがbitcoin/bitcoin PR #122でスレッドを開始。"
isSatoshi: false
tags:
  - "github"
  - "pull-request"
translationStatus: complete
---

このパッチは、部分的に使用済みのトランザクションをサポートするため、各ウォレットトランザクション出力の使用済み状態を個別に追跡するよう内部構造を変更するものである。以下を含む：
- データ構造の更新（CWalletTxのfSpentの代わりにvfSpent）
- ウォレットディスクフォーマットの後方互換性のある更新（サトシが作成、ギャビンが把握している）。ただし、旧クライアントが更新されたウォレットを読み戻す場合、新しいトランザクション作成時に部分的に使用済みのトランザクションを無視し、残高が誤って表示される可能性がある。
- いくつかのヘルパー関数（CWalletTx: IsSpent、MarkSpent、キャッシュ値をリセットするMarkDirty、未使用の出力のみをカウントするGetAvailableCredit）
- SelectCoinsとCreateTransactionの更新。トランザクション全体単位ではなく、ソーストランザクション出力を個別に選択するようにした。これにより、http://www.bitcoin.org/smf/index.php?topic=3759.0 で言及されている問題が修正される。

このパッチを作成した理由：ウォレットのインポート/エクスポートパッチにも取り組んでおり、部分的に使用済みのトランザクションが発生する状況を避けることが困難になるためである。

新しいウォレットを旧クライアントにロードする場合を除き、部分的に使用済みトランザクションの意図的な状況を含め、すべてtestnetでテスト済みである。
