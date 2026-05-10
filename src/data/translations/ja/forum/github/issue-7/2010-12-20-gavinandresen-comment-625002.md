---
title: "Re: ブロックヘッダーのみの高速起動クライアント"
date: 2010-12-20T17:44:49.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7#issuecomment-625002"
author: "gavinandresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "bitcoin/bitcoin Issue #7 における gavinandresen のコメント。サトシへの言及。"
isSatoshi: false
tags:
  - "github"
translationStatus: complete
---

この作業の初期段階については、blockheaders フィーチャーブランチを参照のこと。サトシからのメモ：

CBlockIndex にはブロックヘッダーのすべての情報が含まれているため、ヘッダーのみで動作させるには、通常通り CBlockIndex 構造体を維持するだけでよい。フルブロックはディスクに記録されないため、nFile/nBlockPos は null である。

途中で blk*.dat を削除せずにクライアントモードのオン/オフをスムーズに切り替えるコードはまだ実装されていない。主にやるべきことは、非クライアントモードの LoadBlockIndex がブロック位置が null のブロックインデックスエントリを無視するようにすることである。そうすれば、それらをフルブロックとして再ダウンロードする。クライアントモードへの切り戻しは問題なく、フルブロックが存在しても気にしない。

初期ブロックダウンロードが長くなりすぎる場合、新規ユーザーが素早く使い始められるよう、クライアントモードをオプションとして提供したい。クライアントモードのスムーズな解除機能があれば、後からクライアントモードをオフにしてフルブロックをダウンロードし、生成を開始することができる。
