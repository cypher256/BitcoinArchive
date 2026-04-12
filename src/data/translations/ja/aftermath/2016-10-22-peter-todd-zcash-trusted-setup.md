---
title: "ピーター・トッドのZcashトラステッドセットアップセレモニー参加"
date: 2016-10-22T00:00:00Z
type: "article"
source: "petertodd-org"
sourceUrl: "https://petertodd.org/2016/cypherpunk-desert-bus-zcash-trusted-setup-ceremony"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "ピーター・トッドは2016年10月のZcashトラステッドセットアップセレモニーに6人の参加者の1人として参加し、その後プロセスを批判する詳細な記録を公開した。ブリティッシュコロンビア州をドライブしながら計算を実行し、ラップトップをファラデーケージで遮蔽、終了後にハードウェアをプロパントーチで焼却した。しかし、決定論的ビルドが監査されておらず共謀の不在を証明できないため、セレモニーは根本的に欠陥があると結論づけた。"
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
[ピーター・トッド](/BitcoinArchive/ja/participants/peter-todd/)は、2016年10月22〜23日に行われたZcashのトラステッドセットアップセレモニーに、6人の参加者の1人として参加した。Zcash共同創設者のズーコ・ウィルコックスが9月26日にTwitter DMで参加を依頼し、トッドは会話をSignalに移すよう求めた。このような依頼自体が「かなり大きな脅威」にさらされることだと指摘した。

**セレモニーの目的：**

<!-- speaker: narrator -->
Zcashのzk-SNARKプロトコルは暗号パラメータの生成を必要とし、その過程で「有毒廃棄物」と呼ばれる秘密鍵も生成された。いずれかの当事者がこの鍵を保持すれば、Zcashを無制限に偽造できる。マルチパーティ計算は、6人全員が共謀するか侵害されない限り秘密が漏洩しないよう設計されていた。

**参加前のトッドの批判：**

<!-- speaker: Peter Todd -->
> 「俺を含む参加者が共謀しなかったなんて、第三者に証明する方法はない。はっきり言って不可能だ」

<!-- speaker: Peter Todd -->
> 「ソフトウェアと決定論的ビルドが監査されるまで、このセレモニー全体はただの暗号的まやかしだろ。何の意味もない」

<!-- speaker: Peter Todd -->
> 「もしZcashのバックドアを手に入れたら、こうなる。Zcashの秘密鍵を手に入れる。好きなだけカネを刷る。以上。ステップ3はない」

<!-- speaker: narrator -->
トッドはzk-SNARKの実験的性質にも疑問を呈し、専門家の間でセキュリティパラメータについて意見が分かれていることを指摘。Zcashの創設者報酬が利益相反を生むとも批判した。

**モバイルセレモニー：**

<!-- speaker: narrator -->
固定された場所を使う代わりに、トッドはブリティッシュコロンビア州内陸部を車で移動しながら計算を実行するという独自のアプローチを考案した。移動する標的は物理的監視や電磁的サイドチャネル攻撃を困難にする。機材は現金で購入し、偽の航空券を使い、携帯電話はアルミ箔に包んで機内モードにし、計算ノード用にアルミ箔で裏打ちしたファラデーケージを自作した。

**実行（10月22〜23日）：**

<!-- speaker: narrator -->
トッドはホープからプリンスジョージに向けてBC州内陸部を北上し、休憩所やモーテルで暗号計算を処理した。最長の計算（Disc C）は90分を要した。最終アップロードはプリンスジョージのビジターセンターで完了した。

**破壊：**

<!-- speaker: narrator -->
10月24日、トッドは計算に使用したハードウェアを体系的に破壊した。ラップトップを分解し、伐採跡地の金属パンの上でプロパントーチを使い全電子部品を加熱した。破壊した部品とGoProの監視映像はフォレンジック証拠として保存した。

**その後：**

<!-- speaker: narrator -->
トッドは自身の参加について「俺が参加したからってZcashを支持してるなんて思うなよ」と述べた。セレモニーは最終的に無意味だったとし、「あれをマルチパーティ計算と呼ぶべきじゃない」と語った。2022年には、エドワード・スノーデンも6人の参加者の1人だったことが明らかになった。

<!-- speaker: narrator -->
*[トッドの精巧なセキュリティ対策——ファラデーケージ、プロパントーチ、BC州の辺境をドライブしながらのモバイルセレモニー——は、サトシ・ナカモトのBitcoinへのアプローチとは鮮明な対照をなしている。Bitcoinは透明で監査可能なコードに依拠し、トラステッドセットアップを一切必要としなかった。トッド自身がこの対照を根本的な欠陥として指摘した：Bitcoinのセキュリティモデルは数学とコードを信頼するが、Zcashのトラステッドセットアップは最終的に人間を信頼することを求める。]*
