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
  'analysis',
]);

const participantSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

const quoteSchema = z.object({
  id: z.string(),
  person: z.string().nullable().default(null),
  personSlug: z.string().nullable().default(null),
  date: z.coerce.date().nullable().default(null),
  sourceEntryId: z.string().nullable().default(null),
  parent: z.string().nullable().default(null),
});

const entrySchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  type: typeEnum,
  source: z.string(),
  sourceUrl: z.string().url(),
  sourceNote: z.string().optional(),
  sourceStatus: z.enum(['available', 'archived', 'unavailable']).default('available'),
  author: z.string(),
  participants: z.array(participantSchema).default([]),
  description: z.string(),
  inReplyTo: z.string().optional(),
  isSatoshi: z.boolean().default(false),
  isConversation: z.boolean().default(false),
  secondarySources: z.array(z.object({
    name: z.string(),
    url: z.string().url(),
    note: z.string().optional(),
  })).optional(),
  homeOrder: z.number().optional(),
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
  quotes: z.array(quoteSchema).default([]),
  relatedEntries: z.array(z.string()).default([]),
  inlineLinkKeywords: z.array(z.string()).optional(),
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
