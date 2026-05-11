---
title: "Re: BitDNS と Bitcoin の汎用化"
date: 2010-12-09T22:46:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1790.msg28715#msg28715"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「BitDNS とビットコインの汎用化」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/533/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "nanotube"
    personSlug: "nanotube"
    date: "2010-12-09T12:20:40.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> マイナーは基本的に「追加の作業」をしなければならないようだ。追加の作業から BitDNS マイニングの報酬がなければ（もちろんメインの Bitcoin 作業を遅くする）、マイナーが BitDNS（およびその他のサイドチェーン）を含めるインセンティブは何だろう？
<!-- /tone-skip -->

インセンティブは、同じ作業で追加のサイドチェーンからも報酬を得ることだ。

ビットコインを生成している間に、*同じ作業*で無料のドメイン名も得られるのに、なぜそうしないのか？

現在週に 50 BTC を生成しているなら、50 BTC に加えていくつかのドメイン名も得られる。

1 つの作業単位がある。それを解けば、Bitcoin と BitDNS の両方のブロックを解決する。概念的には、マークルツリーで結び付けられている。Bitcoin に提出するには BitDNS のブランチを切り離し、BitDNS に提出するには Bitcoin のブランチを切り離す。

実際には、Bitcoin に後付けするために、BitDNS 側にはおそらく約 200 バイトの余分が必要だが、大したことではない。1 ブロックあたり 50 ドメインの話をしているが、後方互換性のための 1 ブロックあたり 200 バイトは些細なものだ。十分に気にするなら、将来のブロックで Bitcoin がマークルツリーを上位に持つ近代化された配置にアップグレードするスケジュールを組むこともできる。

チェーンはこの新しいマークルツリーの下にあることに注意してほしい。つまり、Bitcoin と BitDNS それぞれが自分のブロック内に独自のチェーンリンクを持つ。これは一般的なタイムスタンプサーバーの配置とは逆で、通常はチェーンが上にあってその下にマークルツリーがあり、1 つの共通のマスターチェーンを作る。これはチェーンを共有しない 2 つのタイムスタンプサーバーだ。
