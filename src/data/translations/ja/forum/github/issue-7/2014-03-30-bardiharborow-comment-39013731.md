---
title: "Re: ブロックヘッダーのみの高速起動クライアント"
date: 2014-03-30T00:24:46.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7#issuecomment-39013731"
author: "bardiharborow"
participants:
  - name: "bardiharborow"
    slug: "bardiharborow"
description: "bitcoin/bitcoin Issue #7 における bardiharborow の文脈投稿。サトシ言及の文脈。"
isSatoshi: false
tags:
  - "github"
translationStatus: complete
---

@laanwj、私の理解では、現在のほとんどの SPV クライアントは、中央集権的なソース（Electrum）からヘッダーを取得するか、独自の P2P ネットワークを使用している。メインのビットコインネットワークを使っているものもあるかもしれないが、他のクライアントからブロックの照会を受けてそれを無視しなければならず、相手のピアを混乱させる可能性がある（かもしれない）。ヘッダーは要求できるがブロックやトランザクションは要求できないということを他のピアが把握できるほうがすっきりすると思う。とにかく、古い Issue を掘り返して申し訳ない。膨大な未処理の山を片付け始めようと思い、最も古いものから手をつけたのである。
