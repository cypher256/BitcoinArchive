// Short, sourced one-line notes for participants who have no dedicated
// biography entry (see STYLE_GUIDE_REFERENCE.md's biography-linking rules
// for why most participants never get one). Rendered on the participant
// page as a fallback for the biography-derived subtitle
// (src/pages/participants/[participant].astro / src/pages/ja/participants/[participant].astro).
//
// Every entry here was individually researched against this archive's own
// content and independently re-verified against its cited source(s) before
// being added — this is not a mechanical activity summary ("posted N
// times"). A participant with no genuinely distinctive, sourced fact is
// left out entirely rather than given a generic placeholder.
export interface ParticipantNote {
  hookEn: string;
  hookJa: string;
  sourceEntryIds: string[];
}

export const PARTICIPANT_NOTES: Record<string, ParticipantNote> = {
  gridecon: {
    hookEn: "Started the 2010 thread that drew Satoshi's gold-mining energy analogy",
    hookJa: 'サトシの金採掘エネルギー論を引き出したスレッドの発起人',
    sourceEntryIds: ['forum/bitcointalk/topic-721/2010-08-05-bitcoin-minting-is-thermodynamically-perverse', 'forum/bitcointalk/topic-721/2010-08-07-gridecon-msg8165'],
  },
  'paolo-ardoino': {
    hookEn: "As Tether's CEO, gave the on-record reason why no Big Four firm audits its books",
    hookJa: 'テザー CEO。大手会計事務所の監査を受けない理由を公式に述べた人物',
    sourceEntryIds: ['currency/2026-07-27-usdt-currency-overview'],
  },
  andrewbuck: {
    hookEn: "Clashed with Satoshi over whether to publicly document the client's intentionally undocumented, developer-only command-line switches (-printblock, -noirc, -dropmessagetest)",
    hookJa: '開発者専用の非公開コマンドラインスイッチの扱いをめぐりサトシと対立した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-393/2010-07-15-source-code-documentation', 'forum/bitcointalk/topic-393/2010-07-18-andrewbuck-msg4005'],
  },
  blackeye: {
    hookEn: 'Optimized SHA-256 with Crypto++ that Satoshi then folded into the official SVN',
    hookJa: 'Crypto++による SHA-256 最適化を行い、サトシが公式 SVN に取り込んだ人物',
    sourceEntryIds: ['forum/bitcointalk/topic-453/2010-07-25-blackeye-msg5774', 'forum/bitcointalk/topic-572/2010-07-27-blackeye-msg6093'],
  },
  'stefan-thomas': {
    hookEn: 'Locked 7,002 BTC on an IronKey with two of ten password attempts left before self-erasure',
    hookJa: 'IronKey に 7,002 BTC を封じ込め、パスワード試行残り 2回で自己消去する状態にした人物',
    sourceEntryIds: ['aftermath/2021-01-12-stefan-thomas-7002-btc-ironkey-lockout'],
  },
  'timothy-may': {
    hookEn: 'Co-founded the cypherpunk movement and wrote The Crypto Anarchist Manifesto',
    hookJa: 'サイファーパンク運動の共同創始者、『暗号アナーキスト宣言』の著者',
    sourceEntryIds: ['analysis/2008-10-31-cypherpunk-independent-arrival'],
  },
  tilka: {
    hookEn: "Wrote Bitcoin's unofficial release changelog when no official one existed",
    hookJa: '公式版が存在しなかった時期にビットコインの非公式リリースノートを書いた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-806/2010-08-15-tilka-msg9439', 'forum/bitcointalk/topic-806/2010-08-16-tilka-msg9738'],
  },
  ec: {
    hookEn: 'Proposed a bitcoin: URI payment scheme nearly two years before BIP 21 formalized it',
    hookJa: 'BIP 21 成立の 2年近く前に、bitcoin: URI 決済方式を提案した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-55/2010-02-16-uri-scheme-for-bitcoin', 'bip/2012-01-29-bip-0021'],
  },
  'nils-schneider': {
    hookEn: "Wrote the 2011 commit removing Bitcoin's last dependency on Wei Dai's Crypto++ library",
    hookJa: '2011年、ウェイ・ダイの Crypto++への最後の依存を除去するコミットを書いた人物',
    sourceEntryIds: ['aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency', 'aftermath/2011-09-13-bitcoin-github-migration-committers'],
  },
  bober182: {
    hookEn: "Was pressuring WikiLeaks's board to adopt Bitcoin the day Satoshi publicly objected",
    hookJa: 'サトシが公に異議を唱えたその日、WikiLeaks 理事会にビットコイン導入を働きかけていた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-1735/2010-12-05-bober182-msg26987', 'forum/bitcointalk/topic-1735/2010-12-05-re-wikileaks', 'aftermath/2011-06-14-wikileaks-accepts-bitcoin'],
  },
  'johnson-lau': {
    hookEn: "Co-authored BIP 141, Segregated Witness — Bitcoin's most significant protocol upgrade since creation",
    hookJa: 'BIP 141(SegWit、創設以来最大のプロトコル改修)の共著者',
    sourceEntryIds: ['bip/2015-12-21-bip-0141'],
  },
  dkaparis: {
    hookEn: 'Built and maintained an independent CMake build system for Bitcoin on Bitbucket',
    hookJa: 'Bitbucket 上でビットコイン向けの独自 CMake ビルドシステムを構築・保守した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-1034/2010-09-24-dkaparis-msg13937', 'forum/bitcointalk/topic-790/2010-08-11-bsd-detection', 'forum/bitcointalk/topic-790/2010-08-13-dkaparis-msg9032', 'forum/bitcointalk/topic-753/2010-08-09-dkaparis-msg8396'],
  },
  rix: {
    hookEn: 'Reported the copied-wallet crash that led Satoshi to build wallet resync',
    hookJa: 'ウォレット複製によるクラッシュを報告し、サトシにウォレット再同期機能を作らせた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-27/2010-01-25-bitcoin-crash-when-sending-coins', 'forum/bitcointalk/topic-27/2010-01-27-re-bitcoin-crash-when-sending-coins', 'forum/bitcointalk/topic-27/2010-01-28-re-bitcoin-crash-when-sending-coins', 'forum/bitcointalk/topic-27/2010-02-03-re-bitcoin-crash-when-sending-coins'],
  },
  'dan-kaminsky': {
    hookEn: 'Embedded an ASCII-art memorial to Len Sassaman directly into the Bitcoin blockchain',
    hookJa: 'レン・サッサマンを追悼する ASCII アートをビットコインのブロックチェーンに直接刻んだ人物',
    sourceEntryIds: ['aftermath/2011-07-30-len-sassaman-blockchain-tribute', 'aftermath/2011-10-10-dan-kaminsky-bitcoin-security'],
  },
  'giulio-prisco': {
    hookEn: "Started the BitcoinTalk thread alerting the community to Wikipedia's 2010 deletion attempt",
    hookJa: '2010年の Wikipedia 記事削除騒動を警告した BitcoinTalk スレッドの発起人',
    sourceEntryIds: ['forum/bitcointalk/topic-342/2010-07-13-they-want-to-delete-the-wikipedia-article', 'forum/bitcointalk/topic-342/2010-07-20-re-they-want-to-delete-the-wikipedia-article'],
  },
  omegadraconis: {
    hookEn: "Started the thread that prompted Satoshi's public explanation for keeping the MIT/BSD-style license over GPL",
    hookJa: 'GPL ではなく MIT/BSD 系ライセンスを選んだ理由をサトシに公に語らせたスレッドの発起人',
    sourceEntryIds: ['forum/bitcointalk/topic-989/2010-09-06-omegadraconis-msg12070', 'forum/bitcointalk/topic-989/2010-09-12-re-switch-to-gpl'],
  },
  'eric-lombrozo': {
    hookEn: 'Co-authored BIP 141, the Segregated Witness upgrade fixing transaction malleability',
    hookJa: 'トランザクション展性問題を解消した BIP 141(SegWit)の共著者',
    sourceEntryIds: ['bip/2015-12-21-bip-0141'],
  },
  suggester: {
    hookEn: "Directly debated Satoshi over Bitcoin's deflationary economics as early as February 2010",
    hookJa: '2010年2月という早い時期に、ビットコインのデフレ経済性をめぐりサトシと直接論争した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-57/2010-02-17-the-current-bitcoin-economic-model-doesnt-work', 'forum/bitcointalk/topic-57/2010-02-21-suggester-msg417', 'forum/bitcointalk/topic-57/2010-02-21-suggester-msg419'],
  },
  'sam-biddle': {
    hookEn: 'Wrote the Gizmodo investigation naming Craig Wright as Satoshi based on hacked emails',
    hookJa: '流出メールを根拠にクレイグ・ライトをサトシだと名指しした Gizmodo 調査記事の執筆者',
    sourceEntryIds: ['aftermath/2015-12-08-wired-gizmodo-craig-wright-claims'],
  },
  'chris-moore': {
    hookEn: 'First developer to receive GitHub commit access to Bitcoin Core, granted January 21, 2011',
    hookJa: '2011年1月21日、Bitcoin Core の GitHub コミット権限を最初に得た開発者',
    sourceEntryIds: ['aftermath/2011-09-13-bitcoin-github-migration-committers'],
  },
  'andy-greenberg': {
    hookEn: 'Wrote the 2015 Wired investigation naming Craig Wright as probable Satoshi Nakamoto',
    hookJa: '2015年、クレイグ・ライトをサトシ有力候補と名指しした Wired 誌の調査記事執筆者',
    sourceEntryIds: ['aftermath/2015-12-08-wired-gizmodo-craig-wright-claims'],
  },
  milkiway: {
    hookEn: "Credited by name as the Spanish translator in Satoshi's official 0.3.2 release notes",
    hookJa: 'サトシ公式の v0.3.2 リリースノートで、スペイン語翻訳者として名指しの謝辞を受けた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-437/2010-07-17-bitcoin-0-3-2-released', 'forum/bitcointalk/topic-437/2010-07-18-milkiway-msg3981'],
  },
  dybbuk: {
    hookEn: 'First to report the wallet.dat immature-coinbase coin-loss bug, drawing a same-day Satoshi reply',
    hookJa: 'wallet.dat の未成熟コインベース喪失バグを最初に報告し、同日サトシの返信を引き出した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-642/2010-07-30-dybbuk-msg6672', 'forum/bitcointalk/topic-642/2010-07-30-re-bug-immature-coins-lost-in-wallet-dat-during-transaction'],
  },
  'james-howells': {
    hookEn: 'Lost a 7,500 BTC hard drive in a 2013 landfill discard, later fought a £495M lawsuit over it',
    hookJa: '2013年に 7,500 BTC 入り HDD を廃棄、後に 4.95 億ポンドの訴訟を起こした人物',
    sourceEntryIds: ['aftermath/2024-12-03-james-howells-7500-btc-newport-landfill'],
  },
  giik: {
    hookEn: 'Started the "We accept Bitcoins" thread that Satoshi personally joined',
    hookJa: 'サトシ本人が参加した「We accept Bitcoins」スレッドの発起人',
    sourceEntryIds: ['forum/bitcointalk/topic-30/2010-01-27-giik-msg144', 'forum/bitcointalk/topic-30/2010-05-20-re-we-accept-bitcoins'],
  },
  'david-harding': {
    hookEn: 'Co-authored BIP 125, the opt-in full Replace-by-Fee signaling standard',
    hookJa: 'オプトイン方式の手数料引き上げ標準、BIP 125 の共著者',
    sourceEntryIds: ['bip/2015-11-03-bip-0125'],
  },
  'mark-friedenbach': {
    hookEn: "Proposed the CMoney type for code parity with side chains like Freicoin's",
    hookJa: 'Freicoin 等のサイドチェーンとのコード互換のため、CMoney 型を提案した人物',
    sourceEntryIds: ['forum/github/pr-4067/2014-04-18-pr-4067-encapsulate-coin-balances-within-a-new-cmoney-type'],
  },
  mizerydearia: {
    hookEn: 'Published one of the first Gentoo Linux packages for Bitcoin via a public GitHub ebuild repository',
    hookJa: 'GitHub 公開 ebuild でビットコイン向け Gentoo パッケージを最初期に公開した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-930/2010-08-27-mizerydearia-msg11370'],
  },
  'leah-mcgrath-goodman': {
    hookEn: 'Authored Newsweek\'s 2014 "Face Behind Bitcoin" story that misidentified Dorian Nakamoto as Satoshi',
    hookJa: '2014年、ドリアン・ナカモトをサトシと誤認した Newsweek 記事「ビットコインの顔」の執筆者',
    sourceEntryIds: ['aftermath/2014-03-06-newsweek-dorian-nakamoto'],
  },
  lfm: {
    hookEn: "Diagnosed the SSE2 compile-flag conditional that left the 64-bit hashing routine an empty no-op, silently halting block generation",
    hookJa: 'SSE2 条件分岐の不具合でハッシュ処理が空転し、ブロック生成が止まった原因を特定した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-753/2010-08-07-bitcoin-generation-broken-in-038-64-bit', 'forum/bitcointalk/topic-753/2010-08-09-lfm-msg8342', 'forum/bitcointalk/topic-753/2010-08-10-lfm-msg8491'],
  },
  'amir-taaki': {
    hookEn: 'Authored BIP 1, the foundational document defining the Bitcoin Improvement Proposal process',
    hookJa: 'BIP 制度そのものを定めた基礎文書、BIP 1 の著者',
    sourceEntryIds: ['bip/2011-08-19-bip-0001'],
  },
  'pavol-rusnak': {
    hookEn: 'Co-authored BIP 39, the mnemonic seed-phrase standard used by nearly every Bitcoin wallet',
    hookJa: 'ほぼ全てのビットコインウォレットが用いるニーモニック標準、BIP 39 の共著者',
    sourceEntryIds: ['bip/2013-09-10-bip-0039'],
  },
  insti: {
    hookEn: "Asked the vending-machine question that prompted Satoshi's zero-confirmation double-spend explanation",
    hookJa: '自動販売機の疑問を投げかけ、サトシにゼロ承認時の二重支払いリスクを説明させた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-423/2010-07-16-bitcoin-snack-machine-fast-transaction-problem', 'forum/bitcointalk/topic-423/2010-07-17-re-bitcoin-snack-machine-fast-transaction-problem'],
  },
  'heather-morgan': {
    hookEn: 'Arrested in 2022 as rapper Razzlekhan for laundering the 2016 Bitfinex hack',
    hookJa: 'ラッパー名「Razzlekhan」。2016年 Bitfinex ハック資金洗浄容疑で 2022年逮捕',
    sourceEntryIds: ['aftermath/2022-02-08-bitfinex-hack-morgan-lichtenstein-arrest'],
  },
  'bill-gates': {
    hookEn: 'Called Bitcoin\'s design "a technical tour de force" on live Fox Business TV in 2013',
    hookJa: '2013年、Fox Business の生放送でビットコインの設計を「技術的偉業」と評した人物',
    sourceEntryIds: ['aftermath/2013-05-06-bill-gates-bitcoin-technical-tour-de-force'],
  },
  lachesis: {
    hookEn: "Correctly diagnosed the 2010 value-overflow bug's INT64_MAX cause within minutes of the report",
    hookJa: '2010年の価値オーバーフロー・バグ(INT64_MAX)を報告から数分で特定した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-822/2010-08-15-lachesis-msg9476'],
  },
  'nayib-bukele': {
    hookEn: "Championed El Salvador's 2021 Bitcoin Law, the world's first bitcoin legal-tender adoption",
    hookJa: '世界初のビットコイン法定通貨化、2021年エルサルバドル・ビットコイン法を主導した人物',
    sourceEntryIds: ['aftermath/2021-09-07-el-salvador-bitcoin-law'],
  },
  wobber: {
    hookEn: 'Named the miner behind a 10%-supply claim later misattributed to knightmb',
    hookJa: '後に knightmb の功績と誤って伝わった「供給の 10%」採掘者の正体を名指しした人物',
    sourceEntryIds: ['forum/bitcointalk/topic-431/2010-07-17-nenolod-the-guy-that-wants-to-prove-bitcoin-doesnt-work', 'analysis/2010-08-15-knightmb-snapshot-and-legend'],
  },
  'matt-corallo': {
    hookEn: 'Co-authored BIP 21, the bitcoin: URI scheme standard for payment links',
    hookJa: '決済リンク標準、bitcoin: URI スキームを定めた BIP 21 の共著者',
    sourceEntryIds: ['bip/2012-01-29-bip-0021'],
  },
  'mihai-alisie': {
    hookEn: 'Co-founded Bitcoin Magazine, the first dedicated print publication for Bitcoin, in 2012',
    hookJa: '2012年、ビットコイン専門の初の印刷雑誌『Bitcoin Magazine』を共同創刊した人物',
    sourceEntryIds: ['aftermath/2012-05-01-bitcoin-magazine-launch'],
  },
  rhorning: {
    hookEn: 'Prompted Satoshi\'s famous objection to WikiLeaks adopting Bitcoin',
    hookJa: 'WikiLeaks のビットコイン導入に対する、サトシの有名な反対表明を引き出した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-1735/2010-12-04-rhorning-msg26876', 'forum/bitcointalk/topic-1735/2010-12-05-re-wikileaks'],
  },
  bytecoin: {
    hookEn: 'Proposed OP_BLOCKNUMBER for time-limited transactions; Satoshi rejected it over reorg risk',
    hookJa: 'OP_BLOCKNUMBER を提案し、再編成リスクを理由にサトシに却下された人物',
    sourceEntryIds: ['forum/bitcointalk/topic-1786/2010-11-15-bytecoin-msg21998', 'forum/bitcointalk/topic-1786/2010-11-18-bytecoin-msg22512'],
  },
  kencausey: {
    hookEn: 'Posted the addnode fix that got users unstuck during the August 2010 overflow incident',
    hookJa: '2010年8月の価値オーバーフロー事件で addnode 対処法を投稿した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-823/2010-08-15-kencausey-msg9595', 'forum/bitcointalk/topic-823/2010-08-16-kencausey-msg9627'],
  },
  'john-levine': {
    hookEn: "Challenged Satoshi's honest-majority security assumption in the original whitepaper thread",
    hookJa: 'ホワイトペーパー発表の元スレッドで、サトシの「善意多数派」という安全性の前提に異を唱えた人物',
    sourceEntryIds: ['emails/cryptography/bitcoin-p2p-e-cash-paper/2008-11-03-re-bitcoin-p2p-e-cash-paper-levine', 'analysis/2008-08-21-what-they-said-about-satoshi'],
  },
  'jonas-nick': {
    hookEn: "Co-authored BIP-340 (Schnorr) and BIP-341 (Taproot), Bitcoin's 2021 soft fork",
    hookJa: 'ソフトフォーク、BIP-340(シュノア署名)と BIP-341(Taproot)の共著者',
    sourceEntryIds: ['bip/2020-01-19-bip-0340', 'bip/2020-01-19-bip-0341'],
  },
  'julian-assange': {
    hookEn: "Early cypherpunk 'Proff' since 1995, later called WikiLeaks' Bitcoin return '50,000%'",
    hookJa: '「Proff」の初期サイファーパンク。WikiLeaks の収益を「50,000%」と語った',
    sourceEntryIds: ['aftermath/2011-06-14-wikileaks-accepts-bitcoin'],
  },
  'tim-ruffing': {
    hookEn: "Co-authored BIP-340, the Schnorr signature standard behind Bitcoin's Taproot upgrade",
    hookJa: 'Taproot 改修の基盤、シュノア署名標準 BIP-340 の共著者',
    sourceEntryIds: ['bip/2020-01-19-bip-0340'],
  },
  'gavin-wood': {
    hookEn: "Filed Polkadot's founding technical paper under his own name in November 2016",
    hookJa: '2016年11月、自身の名でポルカドットの基礎技術文書を発表した人物',
    sourceEntryIds: ['currency/2026-07-27-polkadot-currency-overview'],
  },
  'gerald-cotten': {
    hookEn: 'QuadrigaCX CEO whose 2018 death froze C$250M later ruled a long-running fraud',
    hookJa: 'QuadrigaCX CEO。2018年死去で C$2.5 億が凍結、後に長期詐欺と認定された',
    sourceEntryIds: ['aftermath/2019-04-08-quadrigacx-gerald-cotten-death'],
  },
  'anthony-towns': {
    hookEn: "Co-authored BIP 341 Taproot, Bitcoin's most significant protocol upgrade since SegWit",
    hookJa: 'SegWit 以来最大のプロトコル改修、BIP 341(Taproot)の共著者',
    sourceEntryIds: ['bip/2020-01-19-bip-0341'],
  },
  'chen-zhi': {
    hookEn: "Prince Group founder whose $15B Bitcoin forfeiture is the largest in DOJ history",
    hookJa: 'プリンス・グループ創設者。150 億ドル相当のビットコイン没収は米司法省史上最大',
    sourceEntryIds: ['aftermath/2025-03-06-us-strategic-bitcoin-reserve'],
  },
  'the-madhatter': {
    hookEn: 'Coined the term "natural deflation" in a Dec 2009 exchange that Satoshi quoted verbatim and praised by name the same day',
    hookJa: '2009年12月に「自然なデフレ」を提唱、サトシが同日引用し名指しで称賛した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-12/2009-12-13-the-madhatter-msg61', 'forum/bitcointalk/topic-12/2009-12-13-re-a-few-suggestions'],
  },
  'timo-y': {
    hookEn: 'Objected to Bitcoin\'s "energy-backed" framing hours before Satoshi rejected the same claim',
    hookJa: '「エネルギー裏付け」というビットコイン像に異を唱え、その数時間後にサトシも同じ主張を否定した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-234/2010-07-05-timo-y-msg1969', 'forum/bitcointalk/topic-234/2010-07-05-re-slashdot-submission-for-1-0'],
  },
  macrohard: {
    hookEn: 'Built a real-time block-generation graph that drew a direct "Nice graph!" from Satoshi',
    hookJa: 'ブロック生成状況をリアルタイムで示すグラフを作り、サトシから直接「いいグラフだ」と評された人物',
    sourceEntryIds: ['forum/bitcointalk/topic-441/2010-07-18-macrohard-msg3902', 'forum/bitcointalk/topic-441/2010-07-18-re-did-block-generation-crawl-to-a-halt', 'forum/bitcointalk/topic-441/2010-07-19-macrohard-msg4245'],
  },
  pboc: {
    hookEn: 'Led the seven-regulator order that banned ICOs and shut Chinese crypto exchanges in 2017',
    hookJa: '2017年、ICO 禁止と中国国内取引所の閉鎖を命じた 7 当局共同措置を主導した中国人民銀行',
    sourceEntryIds: ['aftermath/2017-09-04-china-ico-ban'],
  },
  twitter: {
    hookEn: 'Suffered the largest security breach in its history in a 2020 Bitcoin scam hack',
    hookJa: '2020年のビットコイン詐欺ハッキングで、自社史上最大のセキュリティ侵害を受けた Twitter',
    sourceEntryIds: ['aftermath/2020-07-15-twitter-hack-bitcoin-scam'],
  },
  red: {
    hookEn: 'Privately warned Satoshi of a hash-collision flaw that could spoof a Bitcoin address before disclosing it publicly',
    hookJa: 'ビットコインアドレスを偽装しうるハッシュ衝突の欠陥を、公表前にまずサトシへ内密に警告した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-571/2010-07-25-stealing-coins', 'forum/bitcointalk/topic-571/2010-07-25-sni270-re-stealing-coins', 'forum/bitcointalk/topic-571/2010-07-25-red-msg5725'],
  },
  'marek-palatinus': {
    hookEn: 'Co-authored BIP-39, the mnemonic seed-phrase standard used by nearly every wallet',
    hookJa: 'ほぼ全てのウォレットが用いるニーモニック標準、BIP-39 の共著者',
    sourceEntryIds: ['bip/2013-09-10-bip-0039'],
  },
  'doncho-karaivanov': {
    hookEn: 'Analyzed 742 Satoshi posts, commits, and emails to argue for a London base',
    hookJa: 'サトシの投稿・コミット・メール 742件を分析し、ロンドン在住説を唱えた人物',
    sourceEntryIds: ['aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis'],
  },
  'donald-trump': {
    hookEn: 'Signed the executive order creating the first U.S. Bitcoin reserve built entirely from seizures',
    hookJa: '押収資産のみで構成される米国初のビットコイン準備金を創設する大統領令に署名した人物',
    sourceEntryIds: ['aftermath/2025-03-06-us-strategic-bitcoin-reserve'],
  },
  nelisky: {
    hookEn: 'Prompted Satoshi to add the -testsafemode switch in SVN rev 145, at his request',
    hookJa: '本人の要望で、サトシに SVN リビジョン 145 で-testsafemode スイッチを追加させた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-898/2010-08-25-nelisky-msg11092', 'forum/bitcointalk/topic-898/2010-08-25-nelisky-msg11152', 'forum/bitcointalk/topic-898/2010-08-25-sni417-re-development-of-alert-system'],
  },
  impossible7: {
    hookEn: "Pinpointed the exact broken code lines crashing tcatm's SSE2 mining patch",
    hookJa: 'tcatm の SSE2 マイニングパッチをクラッシュさせていた不具合箇所を正確に特定した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-648/2010-08-06-impossible7-msg7838', 'forum/bitcointalk/topic-648/2010-08-02-impossible7-msg7094', 'forum/bitcointalk/topic-648/2010-08-07-impossible7-msg8167'],
  },
  awemany: {
    hookEn: "First reported GitHub's misattribution of early Bitcoin Core commit authorship in 2016",
    hookJa: '2016年、GitHub 上の初期コミット著者情報の誤表示を最初に報告した人物',
    sourceEntryIds: ['forum/github/issue-7512/2016-02-11-issue-7512-misattributed-authorship-in-commit-log-here-on-git', 'forum/github/issue-7512/2016-02-12-gmaxwell-comment-183459072', 'forum/github/issue-7512/2017-02-16-laanwj-comment-280261425'],
  },
  'maria-oskarsdottir': {
    hookEn: 'Co-authored the first peer-reviewed academic study confirming the Patoshi mining pattern',
    hookJa: 'Patoshi マイニングパターンを確認した初の査読付き学術論文の共著者',
    sourceEntryIds: ['aftermath/2021-09-30-plos-one-patoshi-anomaly-study'],
  },
  'isabel-foxen-duke': {
    hookEn: "Co-authored BIP 360's quantum-resistant P2MR proposal, shaping much of its language",
    hookJa: '量子耐性を持つ P2MR 方式を提案する BIP 360 の共著者。文面の多くを形作った',
    sourceEntryIds: ['bip/2024-12-17-bip-0360'],
  },
  datawraith: {
    hookEn: 'Provided the German-language translation of the Bitcoin client and website',
    hookJa: 'ビットコインのクライアントとウェブサイトのドイツ語訳を提供した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-151/2010-05-25-datawraith-msg1239', 'forum/bitcointalk/topic-151/2010-05-27-datawraith-msg1266', 'forum/bitcointalk/topic-151/2010-06-03-datawraith-msg1331'],
  },
  shadowofharbringer: {
    hookEn: "Proposed embedding encrypted messages in transactions, drawing Satoshi's direct rebuttal",
    hookJa: 'トランザクションへの暗号化メッセージ埋め込みを提案し、サトシから直接反論を受けた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-1545/2010-10-23-shadowofharbringer-msg18205', 'forum/bitcointalk/topic-1545/2010-10-23-shadowofharbringer-msg18251'],
  },
  theymos: {
    hookEn: "Confirmed the August 2010 value-overflow bug via Bitcoin's own printblock debug output",
    hookJa: 'printblock デバッグ出力から 2010年8月の価値オーバーフロー・バグを裏付けた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-822/2010-08-15-theymos-msg9481'],
  },
  'vincent-durham': {
    hookEn: "Forked Bitcoin's codebase to launch Namecoin, the first altcoin, in 2011",
    hookJa: '2011年、ビットコインのコードを分岐させ初のアルトコイン、ネームコインを立ち上げた人物',
    sourceEntryIds: ['aftermath/2011-04-18-namecoin-launch'],
  },
  'jacky-mallett': {
    hookEn: 'Co-authored the first peer-reviewed academic study confirming the Patoshi mining pattern',
    hookJa: 'Patoshi マイニングパターンを確認した初の査読付き学術論文の共著者',
    sourceEntryIds: ['aftermath/2021-09-30-plos-one-patoshi-anomaly-study'],
  },
  'ethan-heilman': {
    hookEn: "Co-authored BIP 360, Bitcoin's Pay-to-Merkle-Root quantum-resistance proposal",
    hookJa: '量子耐性方式 Pay-to-Merkle-Root を提案する BIP 360 の共著者',
    sourceEntryIds: ['bip/2024-12-17-bip-0360'],
  },
  artforz: {
    hookEn: "Diagnosed the 0.3.8 SHA256Transform bug via gdb disassembly of the stripped binary",
    hookJa: 'gdb 逆アセンブルで v0.3.8 の SHA256Transform バグを特定した人物',
    sourceEntryIds: ['forum/bitcointalk/topic-753/2010-08-09-artforz-msg8306', 'forum/bitcointalk/topic-753/2010-08-07-bitcoin-generation-broken-in-038-64-bit'],
  },
  appamatto: {
    hookEn: 'Opened the BitDNS thread on BitcoinTalk that led to Namecoin, the first altcoin',
    hookJa: '初のアルトコイン、ネームコインにつながる BitDNS スレッドを BitcoinTalk で開いた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-1790/2010-11-14-bitdns-and-generalizing-bitcoin', 'aftermath/2011-04-18-namecoin-launch'],
  },
  'mark-karpeles': {
    hookEn: 'As Mt. Gox CEO, revealed roughly 850,000 BTC lost at the 2014 bankruptcy filing',
    hookJa: 'Mt.Gox CEO。2014年の破産申請時、約 85 万 BTC の消失を明らかにした人物',
    sourceEntryIds: ['aftermath/2014-02-28-mt-gox-bankruptcy'],
  },
  'james-mellor': {
    hookEn: 'As UK High Court judge, ruled Craig Wright is not Satoshi Nakamoto',
    hookJa: '英国高等法院判事として、クレイグ・ライトはサトシ・ナカモトではないと判決を下した人物',
    sourceEntryIds: ['aftermath/2024-03-14-copa-v-wright-ruling'],
  },
  xunie: {
    hookEn: "Thanked by name in Satoshi's official Bitcoin 0.3 release announcement for translation work",
    hookJa: 'サトシ公式の Bitcoin 0.3 リリース告知で、翻訳作業について名指しの謝辞を受けた人物',
    sourceEntryIds: ['forum/bitcointalk/topic-238/2010-07-06-bitcoin-0-3-released', 'forum/bitcointalk/topic-238/2010-07-08-xunie-msg2051'],
  },
  copa: {
    hookEn: "Brought the lawsuit that led the UK High Court to rule Wright had fabricated evidence to support his false Satoshi claim",
    hookJa: 'クレイグ・ライトの証拠捏造を英国高等法院に認定させた訴訟を起こした団体',
    sourceEntryIds: ['aftermath/2024-03-14-copa-v-wright-ruling'],
  },
  'pete-rizzo': {
    hookEn: 'Investigated the unexplained five-day, eight-hour gap between the Genesis Block and Block 1',
    hookJa: 'ジェネシスブロックとブロック 1 の間にある未解明の約 5日8時間の空白を調査した人物',
    sourceEntryIds: ['aftermath/2024-10-01-bitcoin-magazine-genesis-block-5-day-mystery'],
  },
};
