---
title: "Re: Linux build ready for testing ( ブロック増加が遅い、 ポートとライブラリの問題 )"
date: 2009-11-09T00:30:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Satoshi と Martti Malmi の往復メール内に引用返信として保存。 2024 年 2 月、 COPA 対 Wright 訴訟での Malmi の証言として GitHub で公開。 Liberty Standard の元メッセージの正確な送信時刻は記録されていない。 上記の時刻は 11 月 9 日 01:23 UTC の Satoshi 返信から逆算した目安。"
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard が Linux のブロック開始まで約 30 分と報告。 ポート切替の可否と ELFCLASS64 失敗も提示。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

ようやくブロックが増え始めました。Windows 版より明らかに増え始めるまでに時間がかかりますし、 増え方も Windows 版より遅いように思えます。 送ってもらった Linux ビルドにデバッグが有効になっていたりしないでしょうか ? ブロックは 1 秒あたり約 15 個ずつ増えています ( 時計を見ながらの目視推定 )。 Windows 版での増加速度は計っていませんでしたが、 もっと速かった気がします。

増加が速くなり始めるまでに 30 分くらいかかりました。 興味深いことに、 安定して増加し始める前に CPU 使用率が上がり、 安定して増加し始めると下がりました。 とはいえ今回はブロックが最初の数分で 2 まで増えました。 まだビットコインは生成できていません。 我慢が続く限りビットコイン生成を待つつもりですが、 我慢が切れるまでに 1 枚も生成できなかったら、 Wine 版に戻ります。

現在の debug.log を添付しています。

ビットコインを起動した時、 ビットコインのポートが使えないと、 コマンドラインに以下のメッセージが出ます。 ポートが使えるときは、 このメッセージは出ません。 既定ポートが塞がっているときは、 ビットコインが別のポートを選べるようにはできないでしょうか ? BitTorrent クライアントでも同じことがあります。 再起動すると、 直前まで開いていたポートが閉じています。 ポートを変更するだけで動くようになります。

/usr/lib/gio/modules/libgvfsdbus.so: wrong ELF class: ELFCLASS64
Failed to load module: /usr/lib/gio/modules/libgvfsdbus.so
/usr/lib/gio/modules/libgioremote-volume-monitor.so: wrong ELF class: ELFCLASS64
Failed to load module: /usr/lib/gio/modules/libgioremote-volume-monitor.so
/usr/lib/gio/modules/libgiogconf.so: wrong ELF class: ELFCLASS64
Failed to load module: /usr/lib/gio/modules/libgiogconf.so

ビットコインを同時に二つ動かす理由は、 ビットコインを別のインスタンスに移すためです。 もちろん、 別々のデータディレクトリを使う必要があります。 これはコマンドライン引数で指定できるとよいかもしれません。 いまは仮想マシンにビットコインのデータフォルダを移して対応しています。 ビットコインを終了して別のデータディレクトリで起動し直すのは、 未確定のビットコインがある状態で終了するとそれを失う恐れがあるので、 よい解ではありません。

ポート使用中エラーが出たとき、 ビットコインは確実に動いていませんでした。 私の経験ではビットコインは素早く確実に終了しますが、 ポートが再び使えるようになるまで 30 秒から 3 分 ( 記憶からの推定 ) かかります。 Wine 上の bitcoin 0.1.5 から Linux ビルドに切り替えた時、 また Linux ビルドから Wine 上の bitcoin 0.1.5 に切り替えた時に発生しました。

もう一つ気付いた点として、 about ダイアログのテキストが収まりきっておらず、 ダイアログのサイズも変更できません。
