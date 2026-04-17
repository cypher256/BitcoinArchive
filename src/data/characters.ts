// Dossiers for the index page.
// Content must be historically grounded — bios stick to facts, and every
// quote is a verified published statement (emails, forum posts, blog posts,
// tweets, court records, or interviews). No novel-sourced lines.
// Irony and humor come from the facts themselves, not editorializing.

export interface CharacterBio {
  slug: string;          // participants/<slug>/ link
  name: { ja: string; en: string };
  epithet: { ja: string; en: string };
  bio: { ja: string; en: string };
  quote?: {
    text: string;        // original-language quote (English unless Japanese source)
    attribution?: { ja: string; en: string };
  };
}

export const characters: CharacterBio[] = [
  {
    slug: 'satoshi-nakamoto',
    name: { ja: 'サトシ・ナカモト', en: 'Satoshi Nakamoto' },
    epithet: { ja: '消えた創設者', en: 'The Vanished Founder' },
    bio: {
      ja: '2008年10月31日、9ページの論文をメーリングリストに投稿。2009年1月3日、ジェネシスブロックに「The Times 03/Jan/2009 Chancellor on brink of second bailout for banks」を刻んでビットコインを起動した。約110万BTCを採掘し、一枚も使わなかった。2011年4月、ギャビンへのメールを最後に消失。正体不明。本名かどうかもわからない。',
      en: 'On October 31, 2008, he posted a nine-page paper to a cryptography mailing list. On January 3, 2009, he launched Bitcoin by embedding "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" into the genesis block. He mined roughly 1.1 million BTC and never spent a single one. In April 2011, after a final email to Gavin, he vanished. Identity unknown. The name may not even be real.',
    },
    quote: {
      text: "I've moved on to other things. It's in good hands with Gavin and everyone.",
      attribution: { ja: 'マイク・ハーン宛メール（2011-04-23）', en: 'Email to Mike Hearn, 2011-04-23' },
    },
  },
  {
    slug: 'hal-finney',
    name: { ja: 'ハル・フィニー', en: 'Hal Finney' },
    epithet: { ja: '最初のユーザー', en: 'The First User' },
    bio: {
      ja: 'RPOW（再利用可能なプルーフ・オブ・ワーク）の発明者。2009年1月11日、Twitterに「Running bitcoin」とだけ投稿し、サトシ以外で初めてビットコインを動かした人間となった。翌日、サトシから世界初の送金（10 BTC）を受け取った。ALS（筋萎縮性側索硬化症）と診断された後も視線入力でコードを書き続けた。2014年死去。遺体はアルコー財団で冷凍保存されている。',
      en: 'Inventor of RPOW (Reusable Proofs of Work). On January 11, 2009, he tweeted just "Running bitcoin" — becoming the first person besides Satoshi to run the software. The next day, he received the world\'s first Bitcoin transaction (10 BTC from Satoshi). After his ALS diagnosis, he kept writing code using eye-tracking software. He died in 2014. His body is cryogenically preserved at the Alcor Life Extension Foundation.',
    },
    quote: {
      text: 'Running bitcoin',
      attribution: { ja: 'Twitter（2009-01-11）', en: 'Twitter, 2009-01-11' },
    },
  },
  {
    slug: 'martti-malmi',
    name: { ja: 'マルッティ・マルミ', en: 'Martti Malmi' },
    epithet: { ja: '20歳のサトシの右腕', en: 'Satoshi\'s Right-Hand Undergraduate' },
    bio: {
      ja: 'ヘルシンキの大学生だった2009年、サトシにメールを送った。それから260通のやりとりを経て、bitcoin.orgとフォーラム（後のBitcointalk）を立ち上げた。サトシとの往復メールは13年間、公開せず手元に保管。2024年、COPA対ライト訴訟の証拠提出のためにすべて公開した。',
      en: 'A Helsinki undergraduate who emailed Satoshi in 2009 — and proceeded to exchange 260 emails, launch bitcoin.org, and run the forum that became Bitcointalk. He kept the Satoshi correspondence private for thirteen years. In 2024, he released all of it as evidence in COPA v. Wright.',
    },
    quote: {
      text: "I would like to help with Bitcoin, if there's something I can do.",
      attribution: { ja: 'サトシへの最初のメール（2009-05-02）', en: 'First email to Satoshi, 2009-05-02' },
    },
  },
  {
    slug: 'gavin-andresen',
    name: { ja: 'ギャビン・アンドレセン', en: 'Gavin Andresen' },
    epithet: { ja: '託された後継者', en: 'The Designated Successor' },
    bio: {
      ja: '「偉大な人」ではなく「いい人」として覚えられたいと語った実務家。2011年、CIA本部で講演。同じ年、サトシが消える直前に開発の鍵を手渡された。2016年、クレイグ・ライトを「サトシだ」と公に認め、コミュニティの信頼を失った。',
      en: 'A pragmatist who said he wanted to be remembered as "a good person," not "a great person." In 2011 he gave a talk at CIA headquarters. That same year, just before vanishing, Satoshi handed him the keys to the project. In 2016, Gavin publicly vouched for Craig Wright as Satoshi, and lost the community\'s trust overnight.',
    },
    quote: {
      text: 'My talk at the CIA went well today. The hallways there are REALLY wide, and full of interesting stuff.',
      attribution: { ja: 'CIA本部での講演後（2011）', en: 'After his CIA talk, 2011' },
    },
  },
  {
    slug: 'laszlo-hanyecz',
    name: { ja: 'ラズロ・ハニエツ', en: 'Laszlo Hanyecz' },
    epithet: { ja: 'ピザの人', en: 'The Pizza Guy' },
    bio: {
      ja: '2010年5月22日、1万BTCでPapa John\'sのピザ2枚を購入。ビットコインで初めて現実世界のモノを買った男となった。その夏だけで計約79,000 BTCをピザに費やしたとされる。GPUマイニングの先駆者でもあるが、世間には「ピザの人」としてしか記憶されていない。',
      en: 'On May 22, 2010, he bought two Papa John\'s pizzas for 10,000 BTC — the first real-world purchase ever made with Bitcoin. Over that summer he reportedly spent some 79,000 BTC on pizza. He was also a pioneer of GPU mining. The world remembers him only as the pizza guy.',
    },
    quote: {
      text: "No. I don't regret it. I got to be part of Bitcoin's early history. That's pretty cool.",
      attribution: { ja: '後年のインタビュー', en: 'Later interview' },
    },
  },
  {
    slug: 'adam-back',
    name: { ja: 'アダム・バック', en: 'Adam Back' },
    epithet: { ja: 'ハッシュキャッシュの父', en: 'Father of Hashcash' },
    bio: {
      ja: '1997年、ビットコインのマイニングの基盤となるハッシュキャッシュを発明。サトシが最初にメールを送った相手でもある。だが、送られてきたビットコイン論文を当時最後まで読まなかった。本格的にビットコインに関わるのは2013年、つまり発明者から連絡を受けてから5年後だった。',
      en: 'Inventor of Hashcash (1997), the proof-of-work scheme that Bitcoin mining is built on, and the first person Satoshi ever emailed. He didn\'t bother reading the attached paper at the time. He would not actively engage with Bitcoin until 2013 — five years after the inventor reached out to him personally.',
    },
    quote: {
      text: 'Probably my biggest mistake.',
      attribution: { ja: 'Cointelegraphインタビュー', en: 'Cointelegraph interview' },
    },
  },
  {
    slug: 'wei-dai',
    name: { ja: 'ウェイ・ダイ', en: 'Wei Dai' },
    epithet: { ja: 'b-moneyの設計者', en: 'Designer of b-money' },
    bio: {
      ja: '1998年、b-moneyの構想をサイファーパンク・メーリングリストに投稿。ビットコイン論文の参考文献第1番に挙げられている。マイクロソフトに在籍。イーサリアムの最小単位「wei」は彼の名に由来する。公の場にほとんど姿を現さない。',
      en: 'Posted the b-money proposal to the cypherpunks mailing list in 1998 — cited as reference [1] in the Bitcoin whitepaper. Worked at Microsoft. Ethereum\'s smallest unit, the "wei," is named after him. He almost never appears in public.',
    },
    quote: {
      text: "I'm actually more interested in Satoshi's creation... It appears to be the author wasn't aware of my ideas at the time.",
      attribution: { ja: 'LessWrong（2013）', en: 'LessWrong, 2013' },
    },
  },
  {
    slug: 'nick-szabo',
    name: { ja: 'ニック・サボ', en: 'Nick Szabo' },
    epithet: { ja: 'ビットゴールドの構想者', en: 'Architect of Bit Gold' },
    bio: {
      ja: '1998年、「bit gold」を構想。「スマートコントラクト」という言葉を生み出した人物。ビットコインの設計に最も近い先行研究を残したが、自分ではコードに落とさなかった。「サトシ＝サボ」説が絶えないが、本人は一貫して否定している。',
      en: 'Designed "bit gold" in 1998 and coined the term "smart contract." His work is the closest conceptual predecessor to Bitcoin — but he never shipped any code for it. The "Satoshi is Szabo" theory refuses to die, despite his consistent denials.',
    },
    quote: {
      text: 'Nearly everybody who heard the general idea thought it was a very bad idea.',
      attribution: { ja: 'bit goldについて、Unenumerated（2011）', en: 'On bit gold, Unenumerated blog, 2011' },
    },
  },
  {
    slug: 'mike-hearn',
    name: { ja: 'マイク・ハーン', en: 'Mike Hearn' },
    epithet: { ja: '去った実装者', en: 'The Departed Implementer' },
    bio: {
      ja: 'Googleの上級ソフトウェアエンジニアを辞めて、ビットコイン開発に専念した男。2011年4月23日、サトシ最後の私信「I\'ve moved on to other things」を受け取った一人。2016年1月、ブロックサイズ戦争の末に「Bitcoin has failed」を宣言、全コインを売却して立ち去った。',
      en: 'He left a senior engineering job at Google to work on Bitcoin full time. On April 23, 2011, he was one of the last people to receive a private email from Satoshi: "I\'ve moved on to other things." In January 2016, after the block size wars, he declared Bitcoin had failed, sold every coin he owned, and walked away.',
    },
    quote: {
      text: 'Bitcoin has failed.',
      attribution: { ja: '「The resolution of the Bitcoin experiment」（2016-01-14）', en: '"The resolution of the Bitcoin experiment," 2016-01-14' },
    },
  },
  {
    slug: 'ray-dillinger',
    name: { ja: 'レイ・ディリンジャー', en: 'Ray Dillinger' },
    epithet: { ja: '最初のレビュアー', en: 'The First Reviewer' },
    bio: {
      ja: '暗号学メーリングリストの古参。自称「悲観主義者」。2008年、サトシから頼まれてビットコインのコードをレビュー。通貨コードに浮動小数点型が使われているのを見て仰天したが、実際に検証したら丸め誤差はゼロだった。',
      en: 'A longtime regular on the cryptography mailing list and a self-described pessimist. In 2008, at Satoshi\'s request, he reviewed the Bitcoin code. He was horrified to find floating-point arithmetic in monetary logic — then verified it and discovered the rounding error was exactly zero.',
    },
    quote: {
      text: 'I freaked out when I discovered the code used a floating-point type rather than an integer type for accounting.',
      attribution: { ja: 'インタビュー（2018）', en: 'Interview, 2018' },
    },
  },
  {
    slug: 'james-donald',
    name: { ja: 'ジェームズ・A・ドナルド', en: 'James A. Donald' },
    epithet: { ja: '最初の批評家', en: 'The First Critic' },
    bio: {
      ja: 'ビットコイン論文の公開からわずか2日後、メーリングリストで最初にサトシに返信した人物。「切実に必要だ――だが、スケールしないように思える」のパターンで追及を続けた。15年後、彼の指摘した問題の多くはまだ未解決のままだ。',
      en: 'Two days after the whitepaper was posted, he became the first person to reply to Satoshi on the mailing list. His pattern was unmistakable: "We very much need such a system — but it does not seem to scale." Fifteen years on, many of the concerns he raised remain unresolved.',
    },
    quote: {
      text: 'We very, very much need such a system, but the way I understand your proposal, it does not seem to scale to the required size.',
      attribution: { ja: 'Cryptography Mailing List（2008-11-02）', en: 'Cryptography Mailing List, 2008-11-02' },
    },
  },
  {
    slug: 'peter-todd',
    name: { ja: 'ピーター・トッド', en: 'Peter Todd' },
    epithet: { ja: '否定した者', en: 'The Denier' },
    bio: {
      ja: '2010年12月、BitcoinTalkでサトシの投稿に返信した数日後から開発に関わり始めた。Replace-by-Fee（RBF）、OP_RETURN、OpenTimestampsなど、ビットコインの基盤に残した痕跡は多い。2024年10月、HBOのドキュメンタリー「Money Electric」で「お前がサトシだ」と名指しされ、皮肉で応じた。',
      en: 'He joined the project in December 2010, days after replying to one of Satoshi\'s BitcoinTalk posts. His fingerprints are on RBF, OP_RETURN, and OpenTimestamps. In October 2024, the HBO documentary "Money Electric" identified him as Satoshi. He replied with sarcasm.',
    },
    quote: {
      text: "Of course I'm Satoshi, and I'm Craig Wright.",
      attribution: { ja: 'HBO「Money Electric」への反応（2024）', en: 'Responding to HBO "Money Electric," 2024' },
    },
  },
  {
    slug: 'craig-wright',
    name: { ja: 'クレイグ・ライト', en: 'Craig Wright' },
    epithet: { ja: '名乗った者', en: 'The Pretender' },
    bio: {
      ja: '2016年、「私がサトシだ」と名乗り出た男。2024年3月14日、英国高等裁判所のメラー判事はCOPA訴訟で、ライトはホワイトペーパーの著者でも、サトシ・ナカモトの名義を使った人物でも、ビットコインの創設者でもないと認定した。「意図的かつ大規模な文書偽造」に関与したとも述べた。',
      en: 'The man who announced "I am Satoshi" in 2016. On March 14, 2024, Justice Mellor of the UK High Court ruled in COPA v. Wright that Wright is not the author of the whitepaper, is not the person who used the Satoshi Nakamoto pseudonym, and did not create Bitcoin. The judge found "deliberate and extensive forgery of documents."',
    },
    quote: {
      text: 'Dr Wright is not the author of the Bitcoin White Paper. Dr Wright is not Satoshi Nakamoto.',
      attribution: { ja: 'メラー判事、COPA対ライト判決（2024-03-14）', en: 'Justice Mellor, COPA v. Wright ruling, 2024-03-14' },
    },
  },
  {
    slug: 'cobra',
    name: { ja: 'Cøbra', en: 'Cøbra' },
    epithet: { ja: '匿名の管理者', en: 'The Anonymous Custodian' },
    bio: {
      ja: 'マルッティ・マルミから`bitcoin.org`を引き継いだ匿名の管理者。本名、国籍、年齢、すべて不明。2021年、クレイグ・ライトからホワイトペーパー削除を求めて提訴されたが、匿名を守るために出廷せず、欠席敗訴を選択した。裁判所の削除命令を無視し、今もホワイトペーパーはbitcoin.orgに掲載されている。',
      en: 'The anonymous custodian of bitcoin.org, who inherited it from Martti Malmi. Real name, nationality, and age all unknown. In 2021, when Craig Wright sued him over the whitepaper\'s hosting, Cøbra chose to lose by default rather than appear in court and reveal his identity. The takedown order was issued; the whitepaper is still up.',
    },
    quote: {
      text: "A system where 'justice' depends on who's got the bigger wallet.",
      attribution: { ja: 'ホワイトペーパー削除命令後のツイート（2021-06-28）', en: 'Tweeted after the takedown order, 2021-06-28' },
    },
  },
];
