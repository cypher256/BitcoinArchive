---
title: "Re: 提案ではなく"
date: 2010-08-11T00:14:22.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=770.msg8637#msg8637"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが二重支払いの不在を証明する課題について議論し、ゼロ知識証明の適用可能性を検討。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/339/"
threadId: "bt-not-a-suggestion"
threadPosition: 2
translationStatus: complete
---

これは非常に興味深いトピックだ。解決策が見つかれば、はるかに優れた、簡単で便利なBitcoinの実装が可能になるだろう。

元々、コインは単なる署名のチェーンであり得る。タイムスタンプサービスがあれば、バックトレースのファンアウトが大きくなりすぎる前に古いものを最終的に破棄できるし、コインを個別にまたは額面単位で保持できる。二重支払いの不在をチェックする必要があるからこそ、すべてのトランザクションのグローバルな知識が必要になる。

課題は、他の支出が存在しないことをどうやって証明するかだ。ノードはそれを検証するためにすべてのトランザクションを知っている必要があるようだ。入出力ポイントのハッシュしか知らなければ、出力ポイントが以前に使われたかどうかを署名で確認できない。このことについて何かアイデアはあるだろうか？

このケースでゼロ知識証明をどう適用するか考えるのは困難だ。

何かの不在を証明しようとしている。これにはすべてを知り、そのものが含まれていないことを確認する必要があるようだ。
