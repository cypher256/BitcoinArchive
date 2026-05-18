---
title: "ピーター・トッドの Zcash トラステッドセットアップセレモニー参加"
date: 2016-10-22T00:00:00Z
type: "article"
source: "petertodd-org"
sourceUrl: "https://petertodd.org/2016/cypherpunk-desert-bus-zcash-trusted-setup-ceremony"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "ピーター・トッドが 2016 年 10 月の Zcash トラステッドセットアップセレモニーに 6 名中 1 名として参加し、その後プロセスの根本的欠陥を批判した記録を公開。"
isSatoshi: false
tags:
  - "peter-todd"
  - "zcash"
  - "trusted-setup"
  - "cryptography"
  - "privacy"
secondarySources:
  - name: "IEEE Spectrum — The Crazy Security Behind the Birth of Zcash"
    url: "https://spectrum.ieee.org/the-crazy-security-behind-the-birth-of-zcash"
  - name: "Zcash Community Forum — Peter Todd's statement on trusted setup"
    url: "https://forum.zcashcommunity.com/t/peter-todd-s-statement-on-trusted-setup/31424"
  - name: "Peter Todd on X — Snowden also participated"
    url: "https://x.com/peterktodd/status/1519428920000622592"
  - name: "GitHub — Reveal Peter Todd's involvement in the ceremony"
    url: "https://github.com/zcash/mpc/pull/1"
relatedEntries:
  - aftermath/2010-12-07-peter-todd-biography
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify
  - aftermath/2015-12-04-peter-todd-bip-125-replace-by-fee
  - aftermath/2016-09-15-peter-todd-opentimestamps-announcement
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
translationStatus: complete
---

<!-- speaker: narrator -->
[ピーター・トッド](/BitcoinArchive/ja/participants/peter-todd/)は、2016年10月22〜23日に行われた Zcash のトラステッドセットアップセレモニーに、6人の参加者の 1人として参加した。Zcash 共同創設者のズーコ・ウィルコックスが 9月26日に Twitter DM で参加を依頼し、トッドは会話を Signal に移すよう求めた。このような依頼自体が「かなり大きな脅威」にさらされることだと指摘した。

**セレモニーの目的：**

<!-- speaker: narrator -->
Zcash の zk-SNARK プロトコルは暗号パラメーターの生成を必要とし、その過程で「有毒廃棄物」と呼ばれる秘密鍵も生成された。いずれかの当事者がこの鍵を保持すれば、Zcash を無制限に偽造できる。マルチパーティ計算は、6人全員が共謀するか侵害されない限り秘密が漏洩しないよう設計されていた。

**参加前のトッドの批判：**

<!-- speaker: Peter Todd -->
> 「私自身と他の参加者が共謀しなかったことを第三者に証明するのは、不可能である」

<!-- speaker: Peter Todd -->
> 「ソフトウェアと決定論的ビルドが監査されるまで、このセレモニー全体はただの暗号的なごまかしに過ぎない」

<!-- speaker: Peter Todd -->
> 「もし私が Zcash のバックドアを持っていたら、手順はこうなる。Zcash の秘密鍵を取得する。好きなだけ通貨を発行する。それで終わり」

<!-- speaker: narrator -->
トッドは zk-SNARK の実験的性質にも疑問を呈し、専門家の間でセキュリティパラメーターについて意見が分かれていることを指摘。Zcash の創設者報酬が利益相反を生むとも批判した。

**モバイルセレモニー：**

<!-- speaker: narrator -->
固定された場所を使う代わりに、トッドはブリティッシュコロンビア州内陸部を車で移動しながら計算を実行するという独自のアプローチを考案した。移動する標的は物理的監視や電磁的サイドチャネル攻撃を困難にする。機材は現金で購入し、偽の航空券を使い、携帯電話はアルミ箔に包んで機内モードにし、計算ノード用にアルミ箔で裏打ちしたファラデーケージを自作した。

**実行（10月22〜23日）：**

<!-- speaker: narrator -->
トッドはホープからプリンスジョージに向けて BC 州内陸部を北上し、休憩所やモーテルで暗号計算を処理した。最長の計算（Disc C）は 90分を要した。最終アップロードはプリンスジョージのビジターセンターで完了した。

**破壊：**

<!-- speaker: narrator -->
10月24日、トッドは計算に使用したハードウェアを体系的に破壊した。ラップトップを分解し、伐採跡地の金属パンの上でプロパントーチを使い全電子部品を加熱した。破壊した部品と GoPro の監視映像はフォレンジック証拠として保存した。

**その後：**

<!-- speaker: narrator -->
トッドは自身の参加について「私の参加は Zcash の支持と解釈されるべきではない」 と述べた。セレモニーは最終的に無意味だったとし、「Zcash の信頼設定はマルチパーティ計算と呼ぶべきではない」 と語った。2022年には、エドワード・スノーデンも 6人の参加者の 1人だったことが明らかになった。

<!-- speaker: narrator -->
*[編者注：トッドの精巧なセキュリティ対策——ファラデーケージ、プロパントーチ、BC 州の辺境をドライブしながらのモバイルセレモニー——は、サトシ・ナカモトの Bitcoin へのアプローチとは鮮明な対照をなしている。Bitcoin は透明で監査可能なコードに依拠し、トラステッドセットアップを一切必要としなかった。トッド自身がこの対照を根本的な欠陥として指摘した：Bitcoin のセキュリティモデルは数学とコードを信頼するが、Zcash のトラステッドセットアップは最終的に人間を信頼することを求める。]*
