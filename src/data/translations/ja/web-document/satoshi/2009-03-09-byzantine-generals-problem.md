---
title: "ビザンチン将軍問題"
date: 2009-03-09T17:58:40Z
type: "web-document"
source: "bitcoin-org"
sourceUrl: "https://web.archive.org/web/20090309175840/http://www.bitcoin.org/byzantine.html"
sourceStatus: "archived"
sourceNote: "初期の bitcoin.org に掲載された独立ページ。ページ自体に公開日は記載されておらず、エントリーの日付は 2009 年 3 月 9 日 17:58:40 UTC の Wayback Machine 保存記録の取得時刻を記録している。サトシは 2009 年 5 月 3 日、マルッティ・マルミへのメッセージで、このページをビットコインがビザンチン将軍問題をどう解くかについての自身の説明として示した。"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシが bitcoin.org で公開した、プルーフ・オブ・ワークチェーンによって将軍たちを一つの計画に一致させる、ビザンチン将軍問題の説明。"
isSatoshi: true
tags:
  - "bitcoin-org"
  - "byzantine-generals-problem"
  - "consensus"
  - "proof-of-work"
translationStatus: complete
secondarySources:
  - name: "Nakamoto Archive — 2009 年の bitcoin.org サイト保存記録"
    url: "https://github.com/lugaxker/nakamoto-archive"
relatedEntries:
  - analysis/2008-11-13-byzantine-generals-problem
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-13-re-bitcoin-p2p-e-cash-paper-satoshi-2
  - correspondence/martti-malmi/2009-05-03-bitcoin-003
---

何人ものビザンチン将軍が、それぞれコンピューターを持ち、王の Wi-Fi をブルートフォースで攻撃したいと考えている。パスワードは何文字か分かっている。ネットワークを刺激してパケットを発生させると、発見されないうちに侵入してログを消去するため、限られた時間内にパスワードを破らなければならない。彼らは、過半数が同時に攻撃した場合にのみ、十分な速さで破れるだけの CPU パワーしか持っていない。

攻撃がいつになるかは特に気にせず、ただ全員が一致していればよい。誰でも望む者が攻撃時刻を発表し、それを「計画」と呼ぶことにした。最初に聞こえた計画が公式の計画になる。問題はネットワークが瞬時ではないことだ。2 人の将軍がほぼ同時に異なる計画を発表すると、ある者は一方を先に聞き、別の者はもう一方を先に聞くことになる。

彼らはこの問題を解くためにプルーフ・オブ・ワークチェーンを使う。各将軍は、最初に聞いた計画を受け取ると、その計画をハッシュに含む、難しいハッシュベースのプルーフ・オブ・ワーク問題をコンピューターに解かせる。プルーフ・オブ・ワークは、全員が同時に取り組んでも、誰かが解を見つけてネットワークへブロードキャストするまでに 10 分かかるほど難しい。解を受け取ると、全員がプルーフ・オブ・ワーク計算のハッシュを最初の解を含むように調整する。そうすれば、次のプルーフ・オブ・ワークを見つけたとき、それが最初の解の後ろに連なる。別の計画に取り組んでいた者がいれば、こちらへ切り替える。こちらのプルーフ・オブ・ワークチェーンの方が長くなったからだ。

約 2 時間後には、計画が 12 個のプルーフ・オブ・ワークのチェーンによってハッシュ化されているはずだ。各将軍は、プルーフ・オブ・ワークチェーンの難易度を検証するだけで、そこに費やされた 1 時間あたりの並列 CPU パワーを推定し、決められた時間内にこれだけを生成するにはコンピューターの過半数が必要だったと見て取れる。少なくとも、その大半は計画を見ていたはずだ。プルーフ・オブ・ワークが、その計画に取り組んだ証拠だからである。プルーフ・オブ・ワークに表れた CPU パワーがパスワードを破るのに十分なら、合意した時刻に安全に攻撃できる。

ホーム
