#!/usr/bin/env node
/**
 * Batch fetch all Satoshi Nakamoto posts from Satoshi Nakamoto Institute (SNI)
 * and generate Markdown entry files for the Bitcoin Archive.
 *
 * Usage: node scripts/fetch-sni-posts.mjs [--source bitcointalk|cryptography|bitcoin-list|p2pfoundation] [--start N] [--end N]
 */

import { writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://satoshi.nakamotoinstitute.org';
const DATA_DIR = join(import.meta.dirname, '..', 'src', 'data', 'entries', 'en');

const DELAY_MS = 300; // delay between requests to be polite

// ─── Post lists from SNI ───────────────────────────────────────────────────

const BITCOINTALK_POSTS = [
  {num:5,date:"2009-11-22",title:"Welcome to the new Bitcoin forum!"},
  {num:6,date:"2009-11-22",title:"Repost: Bitcoin Maturation"},
  {num:7,date:"2009-11-22",title:"Repost: Request: Make this anonymous?"},
  {num:8,date:"2009-11-22",title:"Re: Repost: Bitcoin Maturation"},
  {num:9,date:"2009-11-22",title:"Re: Repost: Request: Make this anonymous?"},
  {num:10,date:"2009-11-25",title:"Repost: How anonymous are bitcoins?"},
  {num:11,date:"2009-11-25",title:"Re: Repost: How anonymous are bitcoins?"},
  {num:12,date:"2009-11-27",title:"Repost: Linux/UNIX compile"},
  {num:13,date:"2009-11-27",title:"Re: Repost: Linux/UNIX compile"},
  {num:14,date:"2009-11-27",title:"[OLD THREAD] Bitcoin version 0.2 development status"},
  {num:15,date:"2009-12-09",title:"Re: A few suggestions"},
  {num:16,date:"2009-12-10",title:"Re: A few suggestions"},
  {num:17,date:"2009-12-10",title:"Re: Questions about Bitcoin"},
  {num:18,date:"2009-12-11",title:"Re: Questions about Bitcoin"},
  {num:19,date:"2009-12-11",title:"Re: A few suggestions"},
  {num:20,date:"2009-12-12",title:"Re: A few suggestions"},
  {num:21,date:"2009-12-12",title:"Re: A few suggestions"},
  {num:22,date:"2009-12-13",title:"Re: A few suggestions"},
  {num:23,date:"2009-12-14",title:"Re: A few suggestions"},
  {num:24,date:"2009-12-15",title:"Re: A few suggestions"},
  {num:25,date:"2009-12-16",title:"Bitcoin 0.2 released!"},
  {num:26,date:"2009-12-17",title:"Re: A few suggestions"},
  {num:27,date:"2009-12-18",title:"Re: A few suggestions"},
  {num:28,date:"2010-01-05",title:"Re: Is my second Transaction working correctly?"},
  {num:29,date:"2010-01-14",title:"Re: 64bit support"},
  {num:30,date:"2010-01-20",title:"Re: Number of connections?"},
  {num:31,date:"2010-01-20",title:"Re: TOR and I2P"},
  {num:32,date:"2010-01-27",title:"Re: Bitcoin crash when sending coins"},
  {num:33,date:"2010-01-28",title:"Re: A newb's test - anyone want to buy a picture for $1?"},
  {num:34,date:"2010-01-28",title:"Re: Blocks never stop generating?"},
  {num:35,date:"2010-01-28",title:"Re: Bitcoin crash when sending coins"},
  {num:36,date:"2010-01-28",title:"Re: Payment server"},
  {num:37,date:"2010-01-29",title:"Re: A newb's test - anyone want to buy a picture for $1?"},
  {num:38,date:"2010-01-29",title:"Re: 64bit support"},
  {num:39,date:"2010-02-03",title:"Re: Bitcoin crash when sending coins"},
  {num:40,date:"2010-02-03",title:"Re: Win32 CPU Cycles vs 'Live Protection' Engines?"},
  {num:41,date:"2010-02-04",title:"Re: Questions about Addresses"},
  {num:42,date:"2010-02-04",title:"Re: TOR and I2P"},
  {num:43,date:"2010-02-05",title:"Proof-of-work difficulty increasing"},
  {num:44,date:"2010-02-05",title:"Re: Questions about Addresses"},
  {num:45,date:"2010-02-06",title:"Re: Repost: Request: Make this anonymous?"},
  {num:46,date:"2010-02-06",title:"Re: How divisible are bitcoins and other market/economic questions"},
  {num:47,date:"2010-02-08",title:'Re: Make your "we accept Bitcoin" logo'},
  {num:48,date:"2010-02-08",title:"Bitcoin client and website translation"},
  {num:49,date:"2010-02-08",title:"Bitcoin client and website translation"},
  {num:50,date:"2010-02-08",title:"Re: Simple to implement feature requests"},
  {num:51,date:"2010-02-12",title:"Re: DEB Package?"},
  {num:52,date:"2010-02-12",title:"Re: What's with this odd generation?"},
  {num:53,date:"2010-02-12",title:"Re: DEB Package?"},
  {num:54,date:"2010-02-12",title:"Re: Repost: Request: Make this anonymous?"},
  {num:55,date:"2010-02-13",title:"Re: DEB Package?"},
  {num:56,date:"2010-02-14",title:"Re: What's with this odd generation?"},
  {num:57,date:"2010-02-14",title:"Re: What's with this odd generation?"},
  {num:58,date:"2010-02-15",title:"Re: Proof-of-work difficulty increasing"},
  {num:59,date:"2010-02-16",title:"Re: Setting up multiple bitcoin machines behind NAT"},
  {num:60,date:"2010-02-16",title:"Re: Proof-of-work difficulty increasing"},
  {num:61,date:"2010-02-17",title:"Re: Proof-of-work difficulty increasing"},
  {num:62,date:"2010-02-17",title:"Re: Bitcoin client and website translation"},
  {num:63,date:"2010-02-21",title:"Re: Number of connections"},
  {num:64,date:"2010-02-21",title:"Post your static IP"},
  {num:65,date:"2010-02-21",title:"Re: Current Bitcoin economic model is unsustainable"},
  {num:66,date:"2010-02-21",title:"UI improvements"},
  {num:67,date:"2010-02-23",title:"Re: generation slowed down dramatically"},
  {num:68,date:"2010-02-23",title:"Re: UI improvements"},
  {num:69,date:"2010-02-23",title:"Re: Bitcoin Address Collisions"},
  {num:70,date:"2010-02-23",title:"Re: UI improvements"},
  {num:71,date:"2010-02-23",title:"Command Line and JSON-RPC"},
  {num:72,date:"2010-02-23",title:"Re: Bitcoin Address Collisions"},
  {num:73,date:"2010-02-24",title:"Re: URI-scheme for bitcoin"},
  {num:74,date:"2010-02-24",title:"Re: Command Line and JSON-RPC"},
  {num:75,date:"2010-02-24",title:"New icon/logo"},
  {num:76,date:"2010-02-24",title:'Re: Make your "we accept Bitcoin" logo'},
  {num:77,date:"2010-02-24",title:"Re: Command Line and JSON-RPC"},
  {num:78,date:"2010-02-24",title:"Re: Proof-of-work difficulty increasing"},
  {num:79,date:"2010-02-25",title:"Re: New icon/logo"},
  {num:80,date:"2010-02-25",title:"Re: Command Line and JSON-RPC"},
  {num:81,date:"2010-02-25",title:"Re: Proof-of-work difficulty increasing"},
  {num:82,date:"2010-02-26",title:"Re: Command Line and JSON-RPC"},
  {num:83,date:"2010-02-26",title:"Re: New icon/logo"},
  {num:84,date:"2010-02-26",title:"Re: Command Line and JSON-RPC"},
  {num:85,date:"2010-02-27",title:"Re: New icon/logo"},
  {num:86,date:"2010-02-27",title:"Re: wxWidgets 2.9.0"},
  {num:87,date:"2010-03-02",title:"Re: New icon/logo"},
  {num:88,date:"2010-03-03",title:"Re: Money Transfer Regulations"},
  {num:89,date:"2010-03-05",title:"Re: Command Line and JSON-RPC"},
  {num:90,date:"2010-03-15",title:"Re: bitcoin auto-renice-ing"},
  {num:91,date:"2010-03-15",title:"Idea for file hosting and proxy services"},
  {num:92,date:"2010-03-16",title:"Re: On IRC bootstrapping"},
  {num:93,date:"2010-03-16",title:"Re: Idea for file hosting service"},
  {num:94,date:"2010-03-23",title:"Re: who is bitcoin.com"},
  {num:95,date:"2010-03-23",title:"Re: Exchange Methods"},
  {num:96,date:"2010-03-24",title:"Re: Idea for file hosting and proxy services"},
  {num:97,date:"2010-03-24",title:"Re: Idea for file hosting and proxy services"},
  {num:98,date:"2010-05-16",title:"Re: Could the bitcoin network be destroyed..."},
  {num:99,date:"2010-05-16",title:"Re: For a website taking payments with bitcoins..."},
  {num:100,date:"2010-05-16",title:"Re: URI-scheme for bitcoin"},
  {num:101,date:"2010-05-16",title:"Re: Exception: 9key_error error"},
  {num:102,date:"2010-05-16",title:"Re: removing bitcoin addresses"},
  {num:103,date:"2010-05-16",title:"Re: Setting up multiple bitcoin machines behind NAT"},
  {num:104,date:"2010-05-18",title:"Re: Is there a way to automate bitcoin payments..."},
  {num:105,date:"2010-05-18",title:"Re: Ummmm... where did my bitcoins go?"},
  {num:106,date:"2010-05-20",title:"Re: We accept Bitcoins"},
  {num:107,date:"2010-05-26",title:"JSON-RPC programming tips using labels"},
  {num:108,date:"2010-05-26",title:"Re: Tracing a coin's lineage"},
  {num:109,date:"2010-05-26",title:"Re: CLI bitcoin generation"},
  {num:110,date:"2010-05-26",title:"Re: Share database blocks ?"},
  {num:111,date:"2010-05-26",title:"Re: Website translations"},
  {num:112,date:"2010-05-26",title:"Re: Odd amount of generated coins"},
  {num:113,date:"2010-05-27",title:"Re: Website translations"},
  {num:114,date:"2010-06-02",title:"Re: Hostnames instead of IP Addresses"},
  {num:115,date:"2010-06-02",title:"Re: Proof-of-work difficulty increasing"},
  {num:116,date:"2010-06-02",title:"Re: Website translations"},
  {num:117,date:"2010-06-14",title:"Re: On IRC bootstrapping"},
  {num:118,date:"2010-06-14",title:"Re: Hostnames instead of IP Addresses"},
  {num:119,date:"2010-06-14",title:"Re: Dealing with SHA-256 Collisions"},
  {num:120,date:"2010-06-14",title:"Re: Technical clarifications"},
  {num:121,date:"2010-06-14",title:"Re: Can't Build r80 from SVN"},
  {num:122,date:"2010-06-15",title:"Re: What is the incentive to collect transactions?"},
  {num:123,date:"2010-06-16",title:"Re: URI-scheme for bitcoin"},
  {num:124,date:"2010-06-16",title:"Re: Website translations"},
  {num:125,date:"2010-06-17",title:"Re: new binary release?"},
  {num:126,date:"2010-06-17",title:"Re: Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"},
  {num:127,date:"2010-06-18",title:"Re: Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG"},
  {num:128,date:"2010-06-18",title:"Re: On IRC bootstrapping"},
  {num:129,date:"2010-06-18",title:"Re: Get 5 free bitcoins from freebitcoins.appspot.com"},
  {num:130,date:"2010-06-21",title:"Re: Bitcoin in Ubuntu 10.04"},
  {num:131,date:"2010-06-21",title:"Re: Dying bitcoins"},
  {num:132,date:"2010-06-21",title:"Re: Proof-of-work difficulty increasing"},
  {num:133,date:"2010-06-22",title:"Re: Bitcoin in Ubuntu 10.04"},
  {num:134,date:"2010-06-22",title:"0.3 almost ready -- please test the Mac version!"},
  {num:135,date:"2010-06-22",title:"Re: How fast do the fastest computers generate bitcoins?"},
  {num:136,date:"2010-06-22",title:"Re: Bitcoin in Ubuntu 10.04"},
  {num:137,date:"2010-06-22",title:"Re: Proof-of-work difficulty increasing"},
  {num:138,date:"2010-06-22",title:"Re: 0.3 almost ready"},
  {num:139,date:"2010-06-22",title:"Re: 0.3 almost ready"},
  {num:140,date:"2010-06-22",title:"Re: 0.3 almost ready"},
  {num:141,date:"2010-06-22",title:"Re: 0.3 almost ready"},
  {num:142,date:"2010-06-22",title:"Re: 0.3 almost ready"},
  {num:143,date:"2010-06-22",title:"Re: 0.3 almost ready"},
  {num:144,date:"2010-06-24",title:"Re: 0.3 almost ready"},
  {num:145,date:"2010-06-25",title:"Re: 0.3 almost ready"},
  {num:146,date:"2010-06-25",title:"Re: 0.3 almost ready"},
  {num:147,date:"2010-06-25",title:"Re: Bitcoin clients getting k-lined from the IRC bootstrapping channel"},
  {num:148,date:"2010-06-25",title:"Re: On IRC bootstrapping"},
  {num:149,date:"2010-06-26",title:"Re: 0.3 almost ready"},
  {num:150,date:"2010-06-26",title:"Re: Bitcoin clients getting k-lined from the IRC bootstrapping channel"},
  {num:151,date:"2010-06-26",title:"Re: 0.3 almost ready"},
  {num:152,date:"2010-06-26",title:"Beta?"},
  {num:153,date:"2010-06-26",title:"Re: 1.3 almost ready"},
  {num:154,date:"2010-06-26",title:"Re: Bitcoin mobile."},
  {num:155,date:"2010-06-26",title:"Re: Building BitCoin Client completely Headless"},
  {num:156,date:"2010-06-26",title:"Re: Bitcoin Faucet changes"},
  {num:157,date:"2010-06-27",title:"Re: Beta?"},
  {num:158,date:"2010-06-27",title:"Re: IPv6, headless client, and more"},
  {num:159,date:"2010-06-27",title:"Re: 1.3 almost ready"},
  {num:160,date:"2010-06-27",title:"Re: Major Meltdown"},
  {num:161,date:"2010-07-02",title:"Re: Feature Request: Limiting Connections"},
  {num:162,date:"2010-07-02",title:"Re: 1.3 almost ready"},
  {num:163,date:"2010-07-02",title:"Re: 0.3 almost ready"},
  {num:164,date:"2010-07-02",title:"Re: Beta?"},
  {num:165,date:"2010-07-02",title:"Re: Feature Request: Limiting Connections"},
  {num:166,date:"2010-07-04",title:"Re: 0.3 almost ready -- please test the Mac version!"},
  {num:167,date:"2010-07-05",title:"Re: Slashdot Submission for 1.0"},
  {num:168,date:"2010-07-06",title:"Bitcoin 0.3 released!"},
  {num:169,date:"2010-07-06",title:"Re: 0.3 almost ready -- please test the Mac version!"},
  {num:170,date:"2010-07-07",title:"Re: On IRC bootstrapping"},
  {num:171,date:"2010-07-08",title:"Re: bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"},
  {num:172,date:"2010-07-08",title:"Re: Anonymity"},
  {num:173,date:"2010-07-09",title:"Re: bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"},
  {num:174,date:"2010-07-09",title:"Re: BTC Vulnerability? (Massive Attack against BTC system. Is it really?)"},
  {num:175,date:"2010-07-09",title:"Re: bitcoin 0.3 win64 - broken access to APPDATA if non-latin characters in username"},
  {num:176,date:"2010-07-10",title:"Re: Security"},
  {num:177,date:"2010-07-10",title:"Re: Major Meltdown"},
  {num:178,date:"2010-07-14",title:"Re: No blocks downloaded... why?"},
  {num:179,date:"2010-07-14",title:"Re: resource hog"},
  {num:180,date:"2010-07-14",title:"Re: stopped prodicing coins"},
  {num:181,date:"2010-07-14",title:"Re: Building Bitcoin 0.3"},
  {num:182,date:"2010-07-14",title:"Re: bitcoin auto-renice-ing"},
  {num:183,date:"2010-07-14",title:"Re: Stuck on 513 blocks"},
  {num:184,date:"2010-07-14",title:"Re: Error on Ubuntu 10.04"},
  {num:185,date:"2010-07-14",title:"Re: Runaway CPU usage for 64bit BitCoin (Linux Client)"},
  {num:186,date:"2010-07-14",title:"Re: Warning this block was not received by any other nodes"},
  {num:187,date:"2010-07-14",title:"Re: Hash/sec Throttling for Democracy"},
  {num:188,date:"2010-07-14",title:"Re: Scalability"},
  {num:189,date:"2010-07-15",title:"Re: Runaway CPU usage for 64bit BitCoin (Linux Client)"},
  {num:190,date:"2010-07-15",title:"Re: [Bitcoin 0.3.0] Runtime error"},
  {num:191,date:"2010-07-15",title:"Re: Static Linux x86_64 bins for those having libcrypto troubles"},
  {num:192,date:"2010-07-15",title:"Re: resource hog"},
  {num:193,date:"2010-07-15",title:"Bitcoin 0.3.1 released"},
  {num:194,date:"2010-07-15",title:"Re: 0.3.1 release candidate, please test"},
  {num:195,date:"2010-07-15",title:"Re: 0.3.1 release candidate, please test"},
  {num:196,date:"2010-07-15",title:"Re: Website and software translations"},
  {num:197,date:"2010-07-15",title:"Re: Website and software translations"},
  {num:198,date:"2010-07-15",title:"Re: Website and software translations"},
  {num:199,date:"2010-07-15",title:"Re: Website and software translations"},
  {num:200,date:"2010-07-15",title:"Re: 0.3.1 release candidate, please test"},
  {num:201,date:"2010-07-15",title:"Re: 0.3.1 release candidate, please test"},
  {num:202,date:"2010-07-15",title:"Re: 0.3.1 release candidate, please test"},
  {num:203,date:"2010-07-15",title:'Re: "SetIcons(): icon bundle doesn\'t contain any suitable icon"'},
  {num:204,date:"2010-07-15",title:"Re: Runaway CPU usage for 64bit BitCoin (Linux Client)"},
  {num:205,date:"2010-07-15",title:"Re: 0.3.1 release candidate, please test"},
  {num:206,date:"2010-07-15",title:'Re: "SetIcons(): icon bundle doesn\'t contain any suitable icon"'},
  {num:207,date:"2010-07-16",title:"Re: 0.3.1 release candidate, please test"},
  {num:208,date:"2010-07-16",title:"Re: Donations to freebitcoins.appspot.com needed!"},
  {num:209,date:"2010-07-16",title:'Re: "SetIcons(): icon bundle doesn\'t contain any suitable icon"'},
  {num:210,date:"2010-07-16",title:"Re: Proof-of-work difficulty increasing"},
  {num:211,date:"2010-07-16",title:"Re: Assertion Failure - Ubuntu Lucid"},
  {num:212,date:"2010-07-16",title:"Re: Fedora 13 libcrypto"},
  {num:213,date:"2010-07-16",title:"Re: Resending transaction"},
  {num:214,date:"2010-07-16",title:"Re: 0.3.1 release candidate, please test"},
  {num:215,date:"2010-07-16",title:"Re: Source code documentation"},
  {num:216,date:"2010-07-16",title:"Re: Hash() function not secure"},
  {num:217,date:"2010-07-16",title:"Re: Request: expected bitcoins per day display"},
  {num:218,date:"2010-07-16",title:"Re: Proof-of-work difficulty increasing"},
  {num:219,date:"2010-07-16",title:"Re: Source code documentation"},
  {num:220,date:"2010-07-16",title:"Re: 0.3.1 release candidate, please test"},
  {num:221,date:"2010-07-16",title:"Re: Proof-of-work difficulty increasing"},
  {num:222,date:"2010-07-16",title:"Re: bitcoin trademark?"},
  {num:223,date:"2010-07-16",title:"Re: The dollar cost of bitmining energy"},
  {num:224,date:"2010-07-16",title:"Re: Website integration for bitcoin"},
  {num:225,date:"2010-07-16",title:"Re: Proof-of-work difficulty increasing"},
  {num:226,date:"2010-07-16",title:"Sample account system using JSON-RPC needed"},
  {num:227,date:"2010-07-16",title:"Re: Bitcoin 0.3.1 released"},
  {num:228,date:"2010-07-16",title:"Re: A New Currency System for the World"},
  {num:229,date:"2010-07-17",title:"Re: BUG Report: Rounding glitch"},
  {num:230,date:"2010-07-17",title:"Re: Privacy versus Safety: handling change"},
  {num:231,date:"2010-07-17",title:"Re: Nenolod, the guy that wants to prove Bitcoin doesn't work."},
  {num:232,date:"2010-07-17",title:"Bitcoin 0.3.2 released"},
  {num:233,date:"2010-07-17",title:"Re: Bitcoin snack machine (fast transaction problem)"},
  {num:234,date:"2010-07-17",title:"Re: Assertion Failure - Ubuntu Lucid"},
  {num:235,date:"2010-07-17",title:"Re: Bitcoin 0.3.2 released"},
  {num:236,date:"2010-07-17",title:"Re: Source code documentation"},
  {num:237,date:"2010-07-17",title:"Re: Network Size"},
  {num:238,date:"2010-07-18",title:"Re: Bitcoin snack machine (fast transaction problem)"},
  {num:239,date:"2010-07-18",title:"Re: Source code documentation"},
  {num:240,date:"2010-07-18",title:"Re: URI-scheme for bitcoin"},
  {num:241,date:"2010-07-18",title:"Re: Bitcoin 0.3.2 released"},
  {num:242,date:"2010-07-18",title:"JSON-RPC password"},
  {num:243,date:"2010-07-18",title:"Re: MSVC build & SHA-256"},
  {num:244,date:"2010-07-18",title:"Re: Nenolod, the guy that wants to prove Bitcoin doesn't work."},
  {num:245,date:"2010-07-18",title:"Re: Did block generation crawl to a halt?"},
  {num:246,date:"2010-07-19",title:"Re: JSON-RPC password"},
  {num:247,date:"2010-07-19",title:"Warning: don't use -server or bitcoind where you web browse (v0.3.2 and lower)"},
  {num:248,date:"2010-07-19",title:"Re: JSON-RPC password"},
  {num:249,date:"2010-07-20",title:"Re: They want to delete the Wikipedia article"},
  {num:250,date:"2010-07-21",title:"Re: JSON-RPC password"},
  {num:251,date:"2010-07-21",title:"Re: JSON-RPC password"},
  {num:252,date:"2010-07-21",title:"Re: JSON-RPC password"},
  {num:253,date:"2010-07-21",title:"Re: JSON-RPC password"},
  {num:254,date:"2010-07-22",title:"Re: JSON-RPC password"},
  {num:255,date:"2010-07-23",title:"Re: JSON-RPC password"},
  {num:256,date:"2010-07-23",title:"Re: JSON-RPC password"},
  {num:257,date:"2010-07-23",title:"Re: bitcoind not responding to RPC"},
  {num:258,date:"2010-07-23",title:"Faster initial block download (5x faster)"},
  {num:259,date:"2010-07-23",title:"Re: Faster initial block download"},
  {num:260,date:"2010-07-23",title:"Re: JSON-RPC password"},
  {num:261,date:"2010-07-24",title:"Re: JSON-RPC Multiple Invocations"},
  {num:262,date:"2010-07-24",title:"Re: bitcoind not responding to RPC"},
  {num:263,date:"2010-07-24",title:"Re: Warning: don't use -server or bitcoind on a machine where you web browse"},
  {num:264,date:"2010-07-24",title:"Version 0.3.2.5 -- please test!"},
  {num:265,date:"2010-07-24",title:"Re: Reading/Writing Blocks and FLATDATA"},
  {num:266,date:"2010-07-25",title:"Re: a simple traffic load test run"},
  {num:267,date:"2010-07-25",title:"Re: a simple traffic load test run"},
  {num:268,date:"2010-07-25",title:"Bitcoin 0.3.3 released -- PLEASE UPGRADE"},
  {num:269,date:"2010-07-25",title:"Re: Stealing Coins"},
  {num:270,date:"2010-07-25",title:"Re: Stealing Coins"},
  {num:271,date:"2010-07-25",title:"Re: Stealing Coins"},
  {num:272,date:"2010-07-25",title:"Re: Stealing Coins"},
  {num:273,date:"2010-07-25",title:"Re: JSON-RPC password"},
  {num:274,date:"2010-07-25",title:"Re: JSON-RPC password"},
  {num:275,date:"2010-07-25",title:"Re: JSON-RPC password"},
  {num:276,date:"2010-07-25",title:"Re: md5?"},
  {num:277,date:"2010-07-25",title:"Re: Stealing Coins"},
  {num:278,date:"2010-07-26",title:"bitcoind without wxWidgets"},
  {num:279,date:"2010-07-26",title:"Re: Bitcoin x64 for Windows"},
  {num:280,date:"2010-07-27",title:"Re: Bitcoin x86 for Windows"},
  {num:281,date:"2010-07-27",title:"Re: Proof-of-work difficulty increasing"},
  {num:282,date:"2010-07-27",title:"Re: Bitcoin x86 for Windows"},
  {num:283,date:"2010-07-27",title:"Re: Bitcoin x86 for Windows"},
  {num:284,date:"2010-07-28",title:"Re: Having problems specifing -datadir"},
  {num:285,date:"2010-07-28",title:"Re: Build error SVN r115 on my Mac: workaround"},
  {num:286,date:"2010-07-29",title:"Re: Difficulty"},
  {num:287,date:"2010-07-29",title:"Re: Scalability and transaction rate"},
  {num:288,date:"2010-07-29",title:"Re: wiki registration email?"},
  {num:289,date:"2010-07-29",title:"*** ALERT *** Upgrade to 0.3.6"},
  {num:290,date:"2010-07-29",title:"Re: *** ALERT *** version 0.3.6"},
  {num:291,date:"2010-07-29",title:"Re: *** ALERT *** version 0.3.6"},
  {num:292,date:"2010-07-29",title:"Re: *** ALERT *** Upgrade to 0.3.6 ASAP!"},
  {num:293,date:"2010-07-29",title:"Re: *** ALERT *** Upgrade to 0.3.6 ASAP!"},
  {num:294,date:"2010-07-29",title:"Re: Implementation bug prior to 0.3.6"},
  {num:295,date:"2010-07-29",title:"Re: Transaction disappeared in the void..."},
  {num:296,date:"2010-07-29",title:"Re: Linux distribution download"},
  {num:297,date:"2010-07-29",title:"Re: *** ALERT *** Upgrade to 0.3.6 ASAP!"},
  {num:298,date:"2010-07-30",title:'Re: Bug: "Immature" coins lost in wallet.dat during transaction'},
  {num:299,date:"2010-07-30",title:"Re: [PATCH] implement 'listtransactions'"},
  {num:300,date:"2010-07-30",title:"Re: *** ALERT *** Upgrade to 0.3.6 ASAP!"},
  {num:301,date:"2010-07-30",title:"Re: *** ALERT *** Upgrade to 0.3.6 ASAP!"},
  {num:302,date:"2010-07-31",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:303,date:"2010-07-31",title:"Webpage idea: Next predicted difficulty change"},
  {num:304,date:"2010-07-31",title:"Re: Linux distribution download"},
  {num:305,date:"2010-08-02",title:"Re: Linux version => No GUI after upgrade. WTF?"},
  {num:306,date:"2010-08-02",title:"Re: Mac Client Problems Outlined..."},
  {num:307,date:"2010-08-02",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:308,date:"2010-08-02",title:"Re: Protocol Buffers for Bitcoin"},
  {num:309,date:"2010-08-03",title:"Re: Builds for Ubuntu?"},
  {num:310,date:"2010-08-03",title:"Re: Bitcoind x86 binary for CentOS"},
  {num:311,date:"2010-08-03",title:"Re: Content-Length header and 500"},
  {num:312,date:"2010-08-03",title:"Re: What happens when network is split for prolonged time and reconnected?"},
  {num:313,date:"2010-08-03",title:"Please upgrade to 0.3.8!"},
  {num:314,date:"2010-08-04",title:"Re: Bitcoind x86 binary for CentOS"},
  {num:315,date:"2010-08-04",title:"Re: Please upgrade to 0.3.8!"},
  {num:316,date:"2010-08-04",title:'Re: Building initial transaction trust through "coin ripping"'},
  {num:317,date:"2010-08-04",title:"Re: Flood attack 0.00000001 BC"},
  {num:318,date:"2010-08-05",title:"Re: Flood attack 0.00000001 BC"},
  {num:319,date:"2010-08-05",title:"Re: Flood attack 0.00000001 BC"},
  {num:320,date:"2010-08-05",title:"Re: Flood attack 0.00000001 BC"},
  {num:321,date:"2010-08-05",title:"Re: Who's the Spanish jerk draining the Faucet?"},
  {num:322,date:"2010-08-05",title:"Re: bitcoind transaction to ip address"},
  {num:323,date:"2010-08-05",title:"Re: Transaction Overload Solution"},
  {num:324,date:"2010-08-05",title:"Re: Flood attack 0.00000001 BC"},
  {num:325,date:"2010-08-05",title:"Re: A proposal for a semi-automated Escrow mechanism"},
  {num:326,date:"2010-08-07",title:"Re: latency and locality"},
  {num:327,date:"2010-08-07",title:"Re: Bitcoin minting is thermodynamically perverse"},
  {num:328,date:"2010-08-07",title:"Re: A proposal for a semi-automated Escrow mechanism"},
  {num:329,date:"2010-08-07",title:"Escrow"},
  {num:330,date:"2010-08-07",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:331,date:"2010-08-09",title:"Re: bitcoin generation broken in 0.3.8?"},
  {num:332,date:"2010-08-09",title:"Version 0.3.8.1 update for Linux 64-bit"},
  {num:333,date:"2010-08-09",title:"Re: What could be the transition plan to Y2038 compliant Bitcoin?"},
  {num:334,date:"2010-08-09",title:"Re: bitcoin generation broken in 0.3.8? (64-bit)"},
  {num:335,date:"2010-08-09",title:"Re: Version 0.3.8.1 update for Linux 64-bit"},
  {num:336,date:"2010-08-09",title:"Connection limits"},
  {num:337,date:"2010-08-09",title:"Re: Bitcoin minting is thermodynamically perverse"},
  {num:338,date:"2010-08-10",title:"Re: Version 0.3.8.1 update for Linux 64-bit"},
  {num:339,date:"2010-08-11",title:"Re: Not a suggestion"},
  {num:340,date:"2010-08-11",title:"Re: Escrow"},
  {num:341,date:"2010-08-11",title:"Re: Compile error in SVN r127"},
  {num:342,date:"2010-08-11",title:"Re: Not a suggestion"},
  {num:343,date:"2010-08-11",title:"Re: Lost large number of bitcoins"},
  {num:344,date:"2010-08-11",title:"Re: Where is the separate discussion devoted to possible Bitcoin weaknesses."},
  {num:345,date:"2010-08-11",title:"Re: Flood attack 0.00000001 BC"},
  {num:346,date:"2010-08-12",title:"Re: BSD detection"},
  {num:347,date:"2010-08-12",title:"Re: Not a suggestion"},
  {num:348,date:"2010-08-12",title:"Re: BSD detection"},
  {num:349,date:"2010-08-12",title:"Bugfixes in SVN rev 130"},
  {num:350,date:"2010-08-12",title:"Re: Bitcoin Watchdog Service"},
  {num:351,date:"2010-08-12",title:"Re: Having problems specifing -datadir"},
  {num:352,date:"2010-08-12",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:353,date:"2010-08-13",title:"Re: Bugfixes in SVN rev 130"},
  {num:354,date:"2010-08-13",title:"Re: Bitcoin Watchdog Service"},
  {num:355,date:"2010-08-13",title:"Version 0.3.9 rc1, please test"},
  {num:356,date:"2010-08-13",title:"Re: Not a suggestion"},
  {num:357,date:"2010-08-13",title:"Re: Proposed change to sendtoaddress API call"},
  {num:358,date:"2010-08-14",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:359,date:"2010-08-14",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:360,date:"2010-08-14",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:361,date:"2010-08-14",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:362,date:"2010-08-15",title:"Re: 4 hashes parallel on SSE2 CPUs for 0.3.6"},
  {num:363,date:"2010-08-15",title:"tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"},
  {num:364,date:"2010-08-15",title:"Re: Potential disaster scenario"},
  {num:365,date:"2010-08-15",title:"Re: Version 0.3.9 rc1, please test"},
  {num:366,date:"2010-08-15",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit 0.3.9 rc2"},
  {num:367,date:"2010-08-15",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit 0.3.9 rc2"},
  {num:368,date:"2010-08-15",title:"Re: overflow bug SERIOUS"},
  {num:369,date:"2010-08-15",title:"Re: overflow bug SERIOUS"},
  {num:370,date:"2010-08-15",title:"Re: overflow bug SERIOUS"},
  {num:371,date:"2010-08-15",title:"Re: overflow bug SERIOUS"},
  {num:372,date:"2010-08-15",title:"Re: overflow bug SERIOUS"},
  {num:373,date:"2010-08-15",title:"Re: overflow bug SERIOUS"},
  {num:374,date:"2010-08-15",title:"Re: overflow bug SERIOUS"},
  {num:375,date:"2010-08-15",title:"Re: overflow bug SERIOUS"},
  {num:376,date:"2010-08-15",title:"Version 0.3.10 - block 74638 overflow PATCH!"},
  {num:377,date:"2010-08-16",title:"Re: 0.3.10.1 Question on where block should be"},
  {num:378,date:"2010-08-16",title:"Re: 0.3.10.1 Question on where block should be"},
  {num:379,date:"2010-08-16",title:"Re: overflow bug SERIOUS"},
  {num:380,date:"2010-08-16",title:"Re: overflow bug SERIOUS"},
  {num:381,date:"2010-08-16",title:"Re: overflow bug SERIOUS"},
  {num:382,date:"2010-08-16",title:"Re: overflow bug SERIOUS"},
  {num:383,date:"2010-08-16",title:"Re: overflow bug SERIOUS"},
  {num:384,date:"2010-08-16",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit 0.3.9 rc2"},
  {num:385,date:"2010-08-16",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit 0.3.9 rc2"},
  {num:386,date:"2010-08-16",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"},
  {num:387,date:"2010-08-16",title:"Re: overflow bug SERIOUS"},
  {num:388,date:"2010-08-16",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"},
  {num:389,date:"2010-08-16",title:"Re: [PATCH] Automatic block validation"},
  {num:390,date:"2010-08-16",title:"blocks minus 1"},
  {num:391,date:"2010-08-16",title:"Re: blocks minus 1"},
  {num:392,date:"2010-08-16",title:"Re: [PATCH] Automatic block validation"},
  {num:393,date:"2010-08-16",title:"Checking the block chain on load"},
  {num:394,date:"2010-08-16",title:"Re: checkpointing the block chain"},
  {num:395,date:"2010-08-16",title:"Re: overflow bug SERIOUS"},
  {num:396,date:"2010-08-16",title:"Re: checkpointing the block chain"},
  {num:397,date:"2010-08-18",title:"Re: New screenshots to the front page?"},
  {num:398,date:"2010-08-18",title:"Re: Difficulty: More nodes active, or faster nodes?"},
  {num:399,date:"2010-08-18",title:"Re: Checking the block chain on load"},
  {num:400,date:"2010-08-19",title:"Re: Convert Bitcoin to GTK: Yes? No? wx is better?"},
  {num:401,date:"2010-08-19",title:"Re: HOWTO: Compiling Bitcoin on Ubuntu 10.04 (Karmic)"},
  {num:402,date:"2010-08-19",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"},
  {num:403,date:"2010-08-19",title:"Re: 28 days without generation, i have 4200khash/s"},
  {num:404,date:"2010-08-19",title:"Need a post writing up some things users should know"},
  {num:405,date:"2010-08-19",title:"Re: Hypothetical question on lost coins / transfers"},
  {num:406,date:"2010-08-22",title:"Re: Need a post writing up some things users should know"},
  {num:407,date:"2010-08-22",title:"Re: 28 days without generation, i have 4200khash/s"},
  {num:408,date:"2010-08-22",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"},
  {num:409,date:"2010-08-22",title:"Development of alert system"},
  {num:410,date:"2010-08-22",title:"Re: integrating digital payments into p2p protocols"},
  {num:411,date:"2010-08-24",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"},
  {num:412,date:"2010-08-24",title:"Re: Development of alert system"},
  {num:413,date:"2010-08-25",title:"Re: Development of alert system"},
  {num:414,date:"2010-08-25",title:"Re: Development of alert system"},
  {num:415,date:"2010-08-25",title:"Re: Development of alert system"},
  {num:416,date:"2010-08-25",title:"Re: Development of alert system"},
  {num:417,date:"2010-08-25",title:"Re: Development of alert system"},
  {num:418,date:"2010-08-26",title:"Re: Development of alert system"},
  {num:419,date:"2010-08-26",title:"Re: RFC: remove DB_PRIVATE flag"},
  {num:420,date:"2010-08-26",title:"Re: Need a post writing up some things users should know"},
  {num:421,date:"2010-08-26",title:"Re: auto backing up of wallet.dat"},
  {num:422,date:"2010-08-27",title:"Re: Gentoo Linux Ebuild"},
  {num:423,date:"2010-08-27",title:"Re: auto backing up of wallet.dat"},
  {num:424,date:"2010-08-27",title:"Re: auto backing up of wallet.dat"},
  {num:425,date:"2010-08-27",title:"Re: auto backing up of wallet.dat"},
  {num:426,date:"2010-08-27",title:"Re: New web service: obtain dump of bitcoin block NNNN"},
  {num:427,date:"2010-08-27",title:"Re: Bitcoins are most like shares of common stock"},
  {num:428,date:"2010-08-27",title:"Re: Bitcoin does NOT violate Mises' Regression Theorem"},
  {num:429,date:"2010-08-27",title:"Version 0.3.11 with upgrade alerts"},
  {num:430,date:"2010-08-28",title:"Re: tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"},
  {num:431,date:"2010-08-28",title:"Re: Version 0.3.11 with upgrade alerts"},
  {num:432,date:"2010-08-29",title:"Re: Big endian code problems"},
  {num:433,date:"2010-09-05",title:"Re: CryptoPP Assertion Error"},
  {num:434,date:"2010-09-05",title:"Re: Warning : Check your system ( Help me )"},
  {num:435,date:"2010-09-06",title:"Re: HTTP status codes from the JSON-RPC api"},
  {num:436,date:"2010-09-06",title:"Re: Warning : Check your system ( Help me )"},
  {num:437,date:"2010-09-06",title:"Re: auto backing up of wallet.dat"},
  {num:438,date:"2010-09-06",title:"Re: bitcoind as daemon in OSX"},
  {num:439,date:"2010-09-07",title:"Re: Always pay transaction fee?"},
  {num:440,date:"2010-09-07",title:"Version 0.3.12"},
  {num:441,date:"2010-09-08",title:"Re: Always pay transaction fee?"},
  {num:442,date:"2010-09-08",title:"Re: Version 0.3.12"},
  {num:443,date:"2010-09-08",title:"Re: Bitcoin Blogger: Is It Better To Buy Or Generate Bitcoins?"},
  {num:444,date:"2010-09-09",title:"Auto-detect for 128-bit 4-way SSE2"},
  {num:445,date:"2010-09-10",title:"Re: Won't let me send coins because it requires a transaction fee?"},
  {num:446,date:"2010-09-10",title:"Re: Won't let me send coins because it requires a transaction fee?"},
  {num:447,date:"2010-09-10",title:"Re: Won't let me send coins because it requires a transaction fee?"},
  {num:448,date:"2010-09-10",title:"Re: Auto-detect for 128-bit 4-way SSE2"},
  {num:449,date:"2010-09-12",title:"Re: Running on a port other than 8333"},
  {num:450,date:"2010-09-12",title:"Re: RFC: remove DB_PRIVATE flag"},
  {num:451,date:"2010-09-12",title:"Re: Switch to GPL"},
  {num:452,date:"2010-09-19",title:"Re: Memory leak"},
  {num:453,date:"2010-09-19",title:"Re: Issues building bitcoin on Windows 7"},
  {num:454,date:"2010-09-19",title:'Re: Bug? /usr/bin/bitcoind ""'},
  {num:455,date:"2010-09-19",title:"Re: The case for removing IP transactions"},
  {num:456,date:"2010-09-19",title:"Re: Message Encryption as a built-in feature?"},
  {num:457,date:"2010-09-23",title:"Re: Always pay transaction fee?"},
  {num:458,date:"2010-09-23",title:"Internal version number"},
  {num:459,date:"2010-09-23",title:"Re: Warning : Check your system ( Help me )"},
  {num:460,date:"2010-09-23",title:"Re: Porn"},
  {num:461,date:"2010-09-23",title:"Re: How divisible are bitcoins - the technical side"},
  {num:462,date:"2010-09-23",title:"Re: Internal version number"},
  {num:463,date:"2010-09-26",title:"Re: How To Make a Distributed BitCoin Escrow Service"},
  {num:464,date:"2010-09-30",title:"Re: I broke my wallet, sends never confirm now."},
  {num:465,date:"2010-09-30",title:"Re: I broke my wallet, sends never confirm now."},
  {num:466,date:"2010-09-30",title:"0.3.13 RC1 for Windows, please test"},
  {num:467,date:"2010-09-30",title:"Re: BitCoin Wikipedia page DELETED!!!"},
  {num:468,date:"2010-09-30",title:"Re: Prioritized transactions, and tx fees"},
  {num:469,date:"2010-09-30",title:"Re: Prioritized transactions, and tx fees"},
  {num:470,date:"2010-09-30",title:"Re: Remote RPC access"},
  {num:471,date:"2010-10-01",title:"Re: 0.3.13 RC1 for Windows, please test"},
  {num:472,date:"2010-10-01",title:"Version 0.3.13, please upgrade"},
  {num:473,date:"2010-10-03",title:"Re: Version 0.3.13"},
  {num:474,date:"2010-10-03",title:"Re: Version 0.3.13, please upgrade"},
  {num:475,date:"2010-10-03",title:"Re: Version 0.3.13, please upgrade"},
  {num:476,date:"2010-10-03",title:"Re: Version 0.3.13, please upgrade"},
  {num:477,date:"2010-10-03",title:"Re: Version 0.3.13, please upgrade"},
  {num:478,date:"2010-10-03",title:"Re: [PATCH] increase block size limit"},
  {num:479,date:"2010-10-03",title:"Re: How to overthrow the GPU Oligarchs"},
  {num:480,date:"2010-10-03",title:"Re: Version 0.3.13, please upgrade"},
  {num:481,date:"2010-10-03",title:"Re: Memory leak"},
  {num:482,date:"2010-10-03",title:"Re: Version 0.3.13, please upgrade"},
  {num:483,date:"2010-10-04",title:"Re: Website and software translations"},
  {num:484,date:"2010-10-04",title:"Re: Website and software translations"},
  {num:485,date:"2010-10-04",title:"Re: [PATCH] increase block size limit"},
  {num:486,date:"2010-10-06",title:"Re: Website and software translations"},
  {num:487,date:"2010-10-06",title:"Re: I broke my wallet, sends never confirm now."},
  {num:488,date:"2010-10-06",title:"Re: Tor connections not working reliably, many seednodes offline"},
  {num:489,date:"2010-10-06",title:"Re: The Niche List"},
  {num:490,date:"2010-10-09",title:"Key pool feature for safer wallet backup"},
  {num:491,date:"2010-10-21",title:"Version 0.3.14"},
  {num:492,date:"2010-10-21",title:"Re: Website and software translations"},
  {num:493,date:"2010-10-23",title:"Re: ERROR - PLEASE HELP ME!"},
  {num:494,date:"2010-10-23",title:"Re: ERROR - PLEASE HELP ME!"},
  {num:495,date:"2010-10-23",title:"Re: Win7 64bit since last patch Tues now crashes"},
  {num:496,date:"2010-10-23",title:"Re: Suggestion: Allow short messages to be sent together with bitcoins ?"},
  {num:497,date:"2010-10-24",title:"Re: Multiple Wallets, one computer"},
  {num:498,date:"2010-10-25",title:"Re: Multiple Wallets, one computer"},
  {num:499,date:"2010-10-25",title:"Re: Win7 64bit since last patch Tues now crashes"},
  {num:500,date:"2010-11-13",title:"Re: New icon/logo"},
  {num:501,date:"2010-11-13",title:"Re: Some testing that I did on the testnetwork, my findings."},
  {num:502,date:"2010-11-13",title:"Version 0.3.15"},
  {num:503,date:"2010-11-14",title:"Re: Some testing that I did on the testnetwork, my findings."},
  {num:504,date:"2010-11-15",title:"Re: Need OP_BLOCKNUMBER to allow 'time' limited transactions"},
  {num:505,date:"2010-11-19",title:"Re: Transaction / spam flood attack currently under way"},
  {num:506,date:"2010-11-20",title:"Re: OpenCL miner for the masses"},
  {num:507,date:"2010-11-23",title:"New getwork"},
  {num:508,date:"2010-11-23",title:"Re: New getwork"},
  {num:509,date:"2010-11-24",title:"Re: New getwork"},
  {num:510,date:"2010-11-24",title:"Re: OpenCL miner for the masses"},
  {num:511,date:"2010-11-25",title:"Re: RFC: ship block chain 1-74000 with release tarballs?"},
  {num:512,date:"2010-11-25",title:"Version 0.3.17"},
  {num:513,date:"2010-11-26",title:"Re: RFC: ship block chain 1-74000 with release tarballs?"},
  {num:514,date:"2010-11-26",title:"Re: Version 0.3.17"},
  {num:515,date:"2010-11-26",title:"Re: New getwork"},
  {num:516,date:"2010-11-26",title:"Re: New demonstration CPU miner available"},
  {num:517,date:"2010-11-28",title:"Re: Cooperative mining"},
  {num:518,date:"2010-11-28",title:"Re: RFC: ship block chain 1-74000 with release tarballs?"},
  {num:519,date:"2010-11-28",title:"Re: Is safe running bitcoins with the same wallet on more computers simultaneously?"},
  {num:520,date:"2010-11-29",title:"Re: RFC: ship block chain 1-74000 with release tarballs?"},
  {num:521,date:"2010-11-30",title:"Re: Incompatible wallet format with latest bitcoin-git ?"},
  {num:522,date:"2010-12-01",title:"Re: RFC: ship block chain 1-74000 with release tarballs?"},
  {num:523,date:"2010-12-05",title:"Re: Wikileaks contact info?"},
  {num:524,date:"2010-12-08",title:"Re: JSON-RPC method idea: list transactions newer than a given txid"},
  {num:525,date:"2010-12-08",title:"Re: JSON-RPC method idea: list transactions newer than a given txid"},
  {num:526,date:"2010-12-08",title:"Version 0.3.18"},
  {num:527,date:"2010-12-09",title:"Re: JSON-RPC method idea: list transactions newer than a given txid"},
  {num:528,date:"2010-12-09",title:"Re: Version 0.3.18"},
  {num:529,date:"2010-12-09",title:"Re: Version 0.3.18"},
  {num:530,date:"2010-12-09",title:"Re: JSON-RPC method idea: list transactions newer than a given txid"},
  {num:531,date:"2010-12-09",title:"Re: Automated nightly builds"},
  {num:532,date:"2010-12-09",title:"Re: BitDNS and Generalizing Bitcoin"},
  {num:533,date:"2010-12-09",title:"Re: BitDNS and Generalizing Bitcoin"},
  {num:534,date:"2010-12-09",title:"Re: Fees in BitDNS confusion"},
  {num:535,date:"2010-12-10",title:"Re: BitDNS and Generalizing Bitcoin"},
  {num:536,date:"2010-12-10",title:"Accounts example code"},
  {num:537,date:"2010-12-10",title:"Re: BitDNS and Generalizing Bitcoin"},
  {num:538,date:"2010-12-10",title:"Re: BitDNS and Generalizing Bitcoin"},
  {num:539,date:"2010-12-11",title:"Re: BitDNS and Generalizing Bitcoin"},
];

const CRYPTOGRAPHY_ML_POSTS = [
  {num:1,date:"2008-10-31",title:"Bitcoin P2P e-cash paper"},
  {num:2,date:"2008-11-03",title:"Bitcoin P2P e-cash paper"},
  {num:3,date:"2008-11-03",title:"Bitcoin P2P e-cash paper"},
  {num:4,date:"2008-11-06",title:"Bitcoin P2P e-cash paper"},
  {num:5,date:"2008-11-08",title:"Bitcoin P2P e-cash paper"},
  {num:6,date:"2008-11-09",title:"Bitcoin P2P e-cash paper"},
  {num:7,date:"2008-11-09",title:"Bitcoin P2P e-cash paper"},
  {num:8,date:"2008-11-09",title:"Bitcoin P2P e-cash paper"},
  {num:9,date:"2008-11-10",title:"Bitcoin P2P e-cash paper"},
  {num:10,date:"2008-11-10",title:"Bitcoin P2P e-cash paper"},
  {num:11,date:"2008-11-13",title:"Bitcoin P2P e-cash paper"},
  {num:12,date:"2008-11-14",title:"Bitcoin P2P e-cash paper"},
  {num:13,date:"2008-11-15",title:"Bitcoin P2P e-cash paper"},
  {num:14,date:"2008-11-15",title:"Bitcoin P2P e-cash paper"},
  {num:15,date:"2008-11-17",title:"Bitcoin P2P e-cash paper"},
  {num:16,date:"2009-01-08",title:"Bitcoin v0.1 released"},
  {num:17,date:"2009-01-16",title:"Bitcoin v0.1 released"},
  {num:18,date:"2009-01-25",title:"Bitcoin v0.1 released"},
];

const BITCOIN_LIST_POSTS = [
  {num:19,date:"2008-12-10",title:"[bitcoin-list] Welcome"},
  {num:20,date:"2009-01-11",title:"[bitcoin-list] Bitcoin v0.1.2 now available"},
  {num:21,date:"2009-01-12",title:"[bitcoin-list] Bitcoin v0.1 Alpha release notes"},
  {num:22,date:"2009-01-12",title:"[bitcoin-list] Bitcoin v0.1.3"},
  {num:23,date:"2009-01-16",title:"Re: [bitcoin-list] Bitcoin v0.1 released"},
  {num:24,date:"2009-01-25",title:"Re: [bitcoin-list] Problems"},
  {num:25,date:"2009-02-04",title:"[bitcoin-list] Bitcoin v0.1.5 released"},
  {num:26,date:"2009-02-22",title:"Re: [bitcoin-list] Bitcoin v0.1.5 released"},
  {num:27,date:"2009-03-04",title:"Re: [bitcoin-list] Bitcoin v0.1.5 released"},
  {num:28,date:"2009-10-23",title:"Re: [bitcoin-list] Does Bitcoin Crash in Windows?"},
  {num:29,date:"2009-12-17",title:"[bitcoin-list] Bitcoin 0.2 released"},
  {num:30,date:"2010-07-06",title:"[bitcoin-list] Bitcoin 0.3 released!"},
  {num:31,date:"2010-07-30",title:"[bitcoin-list] Alert: upgrade to bitcoin 0.3.6"},
  {num:32,date:"2010-08-15",title:"[bitcoin-list] ALERT - we are investigating a problem"},
  {num:33,date:"2010-12-08",title:"[bitcoin-list] Bitcoin 0.3.18 is released"},
  {num:34,date:"2010-12-13",title:"[bitcoin-list] Bitcoin 0.3.19 is released"},
];

const P2P_FOUNDATION_POSTS = [
  {num:1,date:"2009-02-11",title:"Bitcoin open source implementation of P2P currency"},
  {num:2,date:"2009-02-15",title:"Bitcoin open source implementation of P2P currency"},
  {num:3,date:"2009-02-18",title:"Bitcoin open source implementation of P2P currency"},
  {num:4,date:"2014-03-07",title:"Bitcoin open source implementation of P2P currency"},
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\[.*?\]/g, '')            // remove [brackets]
    .replace(/re:\s*/gi, 're-')         // handle Re:
    .replace(/['"'""\(\)]/g, '')        // remove quotes & parens
    .replace(/\*+/g, '')                // remove asterisks
    .replace(/[^a-z0-9]+/g, '-')        // non-alphanum to dash
    .replace(/^-+|-+$/g, '')            // trim dashes
    .substring(0, 60);                  // max length
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function htmlToMarkdown(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<blockquote[^>]*>/gi, '\n> ')
    .replace(/<\/blockquote>/gi, '\n')
    .replace(/<pre[^>]*>(.*?)<\/pre>/gis, '\n```\n$1\n```\n')
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')            // strip remaining tags
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')         // collapse blank lines
    .trim();
}

async function fetchPostContent(url) {
  try {
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'BitcoinArchive/1.0 (historical research)' }
    });
    if (!resp.ok) {
      console.error(`  HTTP ${resp.status} for ${url}`);
      return null;
    }
    const html = await resp.text();
    return html;
  } catch (e) {
    console.error(`  Fetch error for ${url}: ${e.message}`);
    return null;
  }
}

function extractContent(html) {
  // Extract the datetime from <time dateTime="...">
  const timeMatch = html.match(/dateTime="([^"]+)"/);
  const dateTime = timeMatch ? timeMatch[1] : null;

  // Extract source URL from "View original" link
  const sourceMatch = html.match(/href="([^"]*)"[^>]*>\s*View original/i);
  const sourceUrl = sourceMatch ? sourceMatch[1] : null;

  // Extract post content from the section with dangerouslySetInnerHTML
  // The content is between the main section markers
  // Try to find the post div content
  let content = '';

  // Method 1: Look for the post div in the server-rendered HTML
  const postDivMatch = html.match(/<div class="post">([\s\S]*?)<\/div>\s*<\/section>/i);
  if (postDivMatch) {
    content = htmlToMarkdown(postDivMatch[1]);
  }

  // Method 2: Look for section content
  if (!content) {
    const sectionMatch = html.match(/<section[^>]*class="[^"]*px-8 py-4[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
    if (sectionMatch) {
      content = htmlToMarkdown(sectionMatch[1]);
    }
  }

  // Method 3: Look for any substantial text block after the header area
  if (!content) {
    // Try to find content between date and footer
    const contentMatch = html.match(/UTC<\/time>[\s\S]*?<\/header>([\s\S]*?)<footer/i);
    if (contentMatch) {
      content = htmlToMarkdown(contentMatch[1]);
    }
  }

  return { dateTime, sourceUrl, content };
}

function escapeYaml(str) {
  if (/[:"'#\[\]{}|>&*!%@`]/.test(str) || str.startsWith('Re: ') || str.startsWith('Re:')) {
    return `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return `"${str}"`;
}

function generateFrontmatter(post, source, dateTime, sourceUrl, sniUrl) {
  const title = escapeYaml(post.title);
  const date = dateTime || `${post.date}T00:00:00Z`;
  const actualSourceUrl = sourceUrl || sniUrl;
  const isRe = post.title.startsWith('Re:') || post.title.startsWith('Re: ');
  const description = isRe
    ? `Satoshi Nakamoto's reply in the thread "${post.title.replace(/^Re:\s*/, '')}".`
    : `Satoshi Nakamoto's post: "${post.title}".`;

  let sourceType, sniSection;
  switch (source) {
    case 'bitcointalk':
      sourceType = 'bitcointalk';
      sniSection = 'posts/bitcointalk';
      break;
    case 'cryptography':
      sourceType = 'cryptography-mailing-list';
      sniSection = 'emails/cryptography';
      break;
    case 'bitcoin-list':
      sourceType = 'bitcoin-list';
      sniSection = 'emails/bitcoin-list';
      break;
    case 'p2pfoundation':
      sourceType = 'p2pfoundation';
      sniSection = 'posts/p2pfoundation';
      break;
  }

  return `---
title: ${title}
date: ${date}
source: ${sourceType}
sourceUrl: "${actualSourceUrl}"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: ${escapeYaml(description)}
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/${sniSection}/${post.num}/"
---`;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function processSource(source, posts, sniPath, outputDir) {
  const dir = join(DATA_DIR, outputDir);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  // Count existing files to check for duplicates
  const existingFiles = existsSync(dir) ? readdirSync(dir).filter(f => f.endsWith('.md')) : [];
  const existingSniNums = new Set();

  // Check existing files for SNI numbers in secondarySources
  for (const f of existingFiles) {
    const content = await import('fs').then(m => m.readFileSync(join(dir, f), 'utf8'));
    const sniMatch = content.match(/nakamotoinstitute\.org\/[^"]*\/(\d+)\//);
    if (sniMatch) {
      existingSniNums.add(parseInt(sniMatch[1]));
    }
  }

  console.log(`\n=== Processing ${source} ===`);
  console.log(`  Total posts: ${posts.length}`);
  console.log(`  Already have SNI nums: ${[...existingSniNums].join(', ') || 'none'}`);

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const post of posts) {
    if (existingSniNums.has(post.num)) {
      skipped++;
      continue;
    }

    const sniUrl = `${BASE_URL}/${sniPath}/${post.num}/`;
    console.log(`  Fetching #${post.num}: ${post.title.substring(0, 50)}...`);

    const html = await fetchPostContent(sniUrl);
    if (!html) {
      failed++;
      continue;
    }

    const { dateTime, sourceUrl, content } = extractContent(html);

    // Generate filename with counter for same-date posts
    const dateStr = post.date;
    const slug = slugify(post.title);
    let filename = `${dateStr}-${slug}.md`;

    // Handle duplicate filenames by appending SNI number
    if (existsSync(join(dir, filename))) {
      filename = `${dateStr}-sni${post.num}-${slug}.md`;
    }

    const frontmatter = generateFrontmatter(post, source, dateTime, sourceUrl, sniUrl);
    const fileContent = `${frontmatter}\n\n${content || '*(Content to be added)*'}\n`;

    writeFileSync(join(dir, filename), fileContent, 'utf8');
    created++;

    await delay(DELAY_MS);
  }

  console.log(`  Done: ${created} created, ${skipped} skipped, ${failed} failed`);
  return { created, skipped, failed };
}

// Parse CLI args
const args = process.argv.slice(2);
const sourceArg = args.find((a, i) => args[i-1] === '--source') || 'all';
const startArg = parseInt(args.find((a, i) => args[i-1] === '--start') || '0');
const endArg = parseInt(args.find((a, i) => args[i-1] === '--end') || '99999');

async function main() {
  console.log('Bitcoin Archive - SNI Post Fetcher');
  console.log('==================================');

  const results = [];

  if (sourceArg === 'all' || sourceArg === 'bitcointalk') {
    const posts = BITCOINTALK_POSTS.filter(p => p.num >= startArg && p.num <= endArg);
    results.push(await processSource('bitcointalk', posts, 'posts/bitcointalk', 'forum/bitcointalk'));
  }

  if (sourceArg === 'all' || sourceArg === 'cryptography') {
    const posts = CRYPTOGRAPHY_ML_POSTS.filter(p => p.num >= startArg && p.num <= endArg);
    results.push(await processSource('cryptography', posts, 'emails/cryptography', 'emails/cryptography'));
  }

  if (sourceArg === 'all' || sourceArg === 'bitcoin-list') {
    const posts = BITCOIN_LIST_POSTS.filter(p => p.num >= startArg && p.num <= endArg);
    results.push(await processSource('bitcoin-list', posts, 'emails/bitcoin-list', 'emails/bitcoin-list'));
  }

  if (sourceArg === 'all' || sourceArg === 'p2pfoundation') {
    const posts = P2P_FOUNDATION_POSTS.filter(p => p.num >= startArg && p.num <= endArg);
    results.push(await processSource('p2pfoundation', posts, 'posts/p2pfoundation', 'forum/p2pfoundation'));
  }

  const total = results.reduce((a, r) => ({
    created: a.created + r.created,
    skipped: a.skipped + r.skipped,
    failed: a.failed + r.failed,
  }), { created: 0, skipped: 0, failed: 0 });

  console.log('\n==================================');
  console.log(`Total: ${total.created} created, ${total.skipped} skipped, ${total.failed} failed`);
}

main().catch(console.error);
