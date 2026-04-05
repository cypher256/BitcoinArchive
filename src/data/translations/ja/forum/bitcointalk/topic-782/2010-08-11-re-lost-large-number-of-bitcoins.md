---
title: "Re: 大量のビットコインを紛失"
date: 2010-08-11T21:46:51.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=782.msg8803#msg8803"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがウォレットのバックアップ方法と、トランザクション時のコイン選択の仕組みについて説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/343/"
translationStatus: complete
---

[Quote from: sirius-m on August 11, 2010, 02:01:53 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-782/2010-08-11-sirius-msg8657/)
> FAQに各トランザクション後にバックアップを取るという警告を追加した。ちなみにバックアップを取る前にクライアントを停止する必要があるのか？それは少し不便だ。自動バックアップは確かに便利だろう。

バックアップの数秒前（5秒程度）以内に何もしなかったり、支払いを受けたりしなければ、クライアントを停止せずにバックアップを取ることができる。

[Quote from: gridecon on August 11, 2010, 08:46:08 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-782/2010-08-11-gridecon-msg8795/)
> [Quote from: lachesis on August 11, 2010, 05:57:20 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-782/2010-08-11-lachesis-msg8772/)
> > [Quote from: Ground Loop on August 11, 2010, 05:31:24 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-782/2010-08-11-ground-loop-msg8768/)
> > > *すべての*コインがリスクにさらされるとは初耳だ。トランザクションに関与するコインの塊（以前受け取ったトランザクション）だけだと思っていた。合計残高ではなく。おっと。
> > >
> > > 対策として、ウォレットを手動で5つの新しいウォレットに分散して分割した。これで常にリスクにさらされるのは1つだけだ。
> >
> > 前の理解が正しかった。彼のすべてのコインが失われた理由は、最初に9000すべてを自分自身に送金し、単一のTxInに統合したからだ。そのステップを省略して直接自分に1を送っていれば、1を超える以前受け取った最小の支払いだけを失っていただろう。
> >
> > クライアントはTxInとTxOutをユーザーにもっとうまく伝える必要があると思う。混乱させずにそれをどうやるかはわからないが、クライアントがどのコインを送金するかの選択には、プライバシー、安全性、セキュリティに関する現実的な影響がある。
> [Quote from: Ground Loop on August 11, 2010, 05:31:24 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-782/2010-08-11-ground-loop-msg8768/)
> > *すべての*コインがリスクにさらされるとは初耳だ。トランザクションに関与するコインの塊（以前受け取ったトランザクション）だけだと思っていた。合計残高ではなく。おっと。
> >
> > 対策として、ウォレットを手動で5つの新しいウォレットに分散して分割した。これで常にリスクにさらされるのは1つだけだ。
>
> 待ってくれ、また混乱してきた。この驚きの本質は、Bitcoinが各トランザクションで「ウォレットを空にする」ようにプログラムされているということだと思っていた。私が読んだ説明によると、ウォレットのアドレスAから外部のアドレスBにコインを送る場合、実際にはアドレスAから全てのコインが送出され、アドレスBに向かわない分は自分のアドレスCに送られる。つまり、9000枚の中から1枚だけ支払う場合でも、1枚を相手に送り、8999枚を新しいアドレスの自分自身に送ることになる。
>
> 言い換えれば（私が混乱していなければ）、トランザクションを行うたびに、バックアップ済みの古いウォレットアドレスは空にされることになる。

いいえ、通常は各トランザクションでウォレットを空にするわけではない。金額に近くなるように合計できる最小のコインセットを使う。この場合、残念ながら彼のウォレットには9000 BTCの単一の「紙幣」が入っており、1 BTCと8999 BTCのお釣りを得るために崩す必要があった。
