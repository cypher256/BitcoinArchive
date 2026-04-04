---
title: "Re: コイン送信時のBitcoinクラッシュ"
date: 2010-01-28T23:08:02.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=27.msg170#msg170"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「コイン送信時のBitcoinクラッシュ」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/35/"
translationStatus: complete
---

再同期のアイデアは、ウォレットを調べてブロックインデックスと照合し、現在のコンピュータが既に使われたことを認識していないトランザクションを見つけるものだ。これは、ウォレットファイルのコピーを使って別のコンピュータで使われた場合や、使用前のバックアップにウォレットを復元した場合に発生する可能性がある。現在、ソフトウェアは使用時にwallet.datに使用済みマークを付けるため、自分のトランザクションが使用済みかどうかを常に把握していると仮定している。

ウォレットマージツールは実装可能だが、再同期がほとんどの問題を解決すれば、需要はかなり少なくなる。再同期があれば、一方のウォレットからもう一方にすべてのお金を送ることで、ほぼ同じことができる。受信側が再同期して、重複しているコインがすべて使われたことを発見し、新しいトランザクションでそれらを受け取る。
