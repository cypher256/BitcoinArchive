import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sourceEnum = z.enum([
  'cryptography-mailing-list',
  'bitcoin-list',
  'p2p-research-list',
  'bitcointalk',
  'p2pfoundation',
  'correspondence',
  'whitepaper',
  'sourceforge',
  'aftermath',
]);

const participantSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

const entrySchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  source: sourceEnum,
  sourceUrl: z.string().url(),
  author: z.string(),
  participants: z.array(participantSchema),
  description: z.string(),
  threadId: z.string().optional(),
  threadTitle: z.string().optional(),
  threadPosition: z.number().optional(),
  inReplyTo: z.string().optional(),
  isSatoshi: z.boolean().default(false),
  secondarySources: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
  })).optional(),
  tags: z.array(z.string()).optional(),
  aftermathType: z.enum([
    'court-testimony', 'blog', 'interview', 'media', 'retrospective',
  ]).optional(),
  translationStatus: z.enum([
    'complete', 'partial', 'machine', 'pending',
  ]).optional(),
});

const entries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/entries/en' }),
  schema: entrySchema,
});

const entries_ja = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/translations/ja' }),
  schema: entrySchema,
});

export const collections = { entries, entries_ja };
