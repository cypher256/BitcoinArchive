import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const typeEnum = z.enum([
  'forum-post',
  'mailing-list',
  'correspondence',
  'whitepaper',
  'bip',
  'article',
  'biography',
  'court-document',
]);

const participantSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

const entrySchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  type: typeEnum,
  source: z.string(),
  sourceUrl: z.string().url(),
  sourceStatus: z.enum(['available', 'archived', 'unavailable']).default('available'),
  author: z.string(),
  participants: z.array(participantSchema).default([]),
  description: z.string(),
  threadId: z.string().optional(),
  threadPosition: z.number().optional(),
  inReplyTo: z.string().optional(),
  isSatoshi: z.boolean().default(false),
  isConversation: z.boolean().default(false),
  secondarySources: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
  })).optional(),
  featured: z.boolean().optional(),
  editorNote: z.string().optional(),
  tags: z.array(z.string()).optional(),
  pdfMetadata: z.object({
    id: z.string(),
    language: z.string(),
    creator: z.string(),
    producer: z.string(),
    creationDate: z.string(),
    pages: z.number(),
    checksum: z.string(),
  }).optional(),
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
