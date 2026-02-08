---
title: "Re: RFC: リリースtarballにブロックチェーン1-74000を同梱する？"
date: 2010-12-01T21:25:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1931.msg26016#msg26016"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「RFC: リリースtarballにブロックチェーン1-74000を同梱する？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/522/"
threadId: "bt-rfc-ship-block-chain-1-74000-with-release-tarballs"
threadTitle: "RFC: ship block chain 1-74000 with release tarballs?"
threadPosition: 5
translationStatus: complete
---

良い最適化ですね。次にSVNを更新する際に追加します。

より一般的には、これも検討できるでしょう：

        dbenv.set_lk_max_objects(10000);
        dbenv.set_errfile(fopen(strErrorFile.c_str(), "a")); /// debug
        dbenv.set_flags(DB_AUTO_COMMIT, 1);
+       dbenv.set_flags(DB_TXN_NOSYNC, 1);
        ret = dbenv.open(strDataDir.c_str(),
                         DB_CREATE     |
                         DB_INIT_LOCK  |
                         DB_INIT_LOG   |

そうすれば、ウォレット書き込み後のフラッシュにはCDB::Close()のdbenv.txn_checkpoint(0, 0, 0)に依存することになります。
