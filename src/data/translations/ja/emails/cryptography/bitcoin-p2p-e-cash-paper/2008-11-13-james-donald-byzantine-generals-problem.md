---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-13T06:16:31Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014847.html"
author: "James A. Donald"
participants:
  - name: "James A. Donald"
    slug: "james-donald"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ジェームズ・A・ドナルドが、善良な参加者だけでもグローバルに共有された見解へどう至るのかをサトシに追及し、その難しさをビザンチン将軍問題と名指す。"
inReplyTo: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-bitcoin-p2p-e-cash-paper"
isSatoshi: false
tags:
  - "mailing-list"
  - "consensus"
  - "byzantine-generals-problem"
  - "trust"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/"
relatedEntries:
  - analysis/2008-11-13-byzantine-generals-problem
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2008-11-10T22:18:20Z"
    sourceEntryId: "emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-10-bitcoin-p2p-e-cash-paper"
translationStatus: complete
---

<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> 同じトランザクションの複数の二重支払いバージョンがある場合、1 つだけが有効となる。

<!-- speaker: James A. Donald -->
それは私が尋ねている質問ではない。

私が懸念しているのは信頼の問題ではない。全員がきちんと振る舞ったとしても、どうすればグローバルに共有された見解を持つことが可能になるかという点だ。

誰がどの bitgold コインを所有しているかについて、グローバルに共有された見解へ至るプロセスの規定が不十分だ。それが規定されて初めて、全員が正しく振る舞うインセンティブを持つかどうかを検討できる。

全員が X を知っているだけでは不十分だ。全員が全員が X を知っていることを知り、さらに全員が全員が全員が X を知っていることを知っていることを知っている必要もある——これはビザンチン将軍問題として知られる、分散データ処理の古典的な難問だ。

この問題は、X がきわめて大量のデータになりうる場合——つまり、ある時点においてすべての bitgold コインを誰が所有していたかについての合意——にさらに難しくなる。

その上さらに、合意が生じるような振る舞いをする動機を全員が持っている必要がある。動機づけられるべき振る舞いが何なのかが分からない以上、彼らにその動機があるとは私には見えない。

あなたは攻撃下でのシステムの分析を繰り返し述べている。だが、攻撃を受けていないときにシステムがどう振る舞うべきかが分からない限り、攻撃下でどう振る舞うかを語ることはできない。

トランザクション数が多ければ、あるノードの見解と別のノードの見解との食い違いを効率的に発見するのは難しい。しかも新しいトランザクションは絶えず到着し続けるため、たとえ全ノードが正直で、報告されたトランザクションがすべて正しい単一支払いであったとしても、2 つのノードの見解が完全に一致することは決してない。

直近のある時点で誰がどの bitgold コインを所有していたかについて、2 つのノードが合意に至りやすいシステムを実現できるはずだが、それは簡単なことではない。

あるノードが、特定の時点で誰がどの bitgold コインを所有していたかについての知識を表すハッシュを構築し、別のノードがそのハッシュを検証したいとする。合意が生じやすく、かつ正直できちんと振る舞うノード間の不一致が効率的に検出・解決される形でそれを行うのは、簡単なことではない。

仮に合意がどう生成されるかの仕様があったとしても、2 つ目のノードがそのハッシュを検証するインセンティブを持つ理由は自明ではない。

システムは、合意に至るためにノードが直近のトランザクションについての見解を容易かつ低コストで変更できる一方で、確定性と不可逆性を提供するためには、いったん合意に達し、その上に新たなものが——とりわけ新しい bitgold が古い合意の上に積み重ねられたなら、決定事項をさかのぼって変更するのが極めて困難になる、という形で機能しなければならない。

それがどう機能するかを述べるだけでは、実際にそう機能させる方法にはならない。

<!-- speaker: Satoshi Nakamoto -->
> 支払いの受取人は、それが有効であると信じる前に 1時間ほど待たなければならない。ネットワークはそれまでにあらゆる二重支払いの競争を解決する。

<!-- speaker: James A. Donald -->
あなたは攻撃について議論し続けている。当事者全員がきちんと行動した場合の通常の振る舞いが何なのかが私には明確でない以上、攻撃への対応を考えるのは難しい。

分散データベースは、すべてのデータベースが単一の所有者の意志に完全に従っている場合でさえ*難しい*。メッセージは失われ、リンクは切断し、同期の遅延は異常な水準になり、マシン全体が炎上することもある。それでもネットワーク全体として、こうしたことすべてを乗り越えていかなければならない。

これをどう行うかを解明すること自体が、攻撃が完全に存在しない状況でさえ難しい。そのすべてにどう対処するかを解明できて初めて、次に攻撃が来る。

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
