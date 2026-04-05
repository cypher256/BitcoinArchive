---
title: "Re: 8333以外のポートでの実行"
date: 2010-09-12T17:40:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=589.msg12483#msg12483"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「8333以外のポートでの実行」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/449/"
translationStatus: complete
---

[Quote from: lachesis on August 10, 2010, 03:24:55 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-589/2010-08-10-lachesis-msg8544/)
> SVNリビジョン125に対応した更新版のパッチはあるか？また、BerkeleyDBを排他モードで開いているなら、ファイルロックは不要ではないか？排他モードでは開いていない――自分でテストして確認した。

BerkeleyDBを排他的に開く方法はあるか？

DB_PRIVATEは最悪の両方のデメリットを持つ。DB_PRIVATEは排他的ではないが、他のプロセスが同時にアクセスしようとすると問題が起きる。

rev 153でDB_PRIVATEフラグを削除した。
