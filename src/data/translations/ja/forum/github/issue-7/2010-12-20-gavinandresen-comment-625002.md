---
title: "Re: ブロックヘッダーのみの高速起動クライアント"
date: 2010-12-20T17:44:49.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7#issuecomment-625002"
author: "gavinandresen"
participants:
  - name: "gavinandresen"
    slug: "gavinandresen"
description: "bitcoin/bitcoin Issue #7におけるgavinandresen のコメント。サトシへの言及。"
isSatoshi: false
tags:
  - "github"
translationStatus: complete
---

この作業の初期段階については、blockheadersフィーチャーブランチを参照のこと。サトシからのメモ：

CBlockIndexにはブロックヘッダーのすべての情報が含まれているため、ヘッダーのみで動作させるには、通常通りCBlockIndex構造体を維持するだけでよい。フルブロックはディスクに記録されないため、nFile/nBlockPosはnullである。

途中でblk*.datを削除せずにクライアントモードのオン/オフをスムーズに切り替えるコードはまだ実装されていない。主にやるべきことは、非クライアントモードのLoadBlockIndexがブロック位置がnullのブロックインデックスエントリを無視するようにすることである。そうすれば、それらをフルブロックとして再ダウンロードする。クライアントモードへの切り戻しは問題なく、フルブロックが存在しても気にしない。

初期ブロックダウンロードが長くなりすぎる場合、新規ユーザーが素早く使い始められるよう、クライアントモードをオプションとして提供したい。クライアントモードのスムーズな解除機能があれば、後からクライアントモードをオフにしてフルブロックをダウンロードし、生成を開始することができる。
