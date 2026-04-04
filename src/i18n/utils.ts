import { defaultLang, ui, type Lang } from './ui';
import { getJapaneseParticipantDisplayName, participantDisplayNamesJaBySlug } from './participants';
import { tagTranslations } from './tags';
import { getCollection, type CollectionEntry } from 'astro:content';
import { PRIMARY_ORIGIN as primaryOrigin } from '../lib/constants';

export function getLangFromUrl(url: URL): Lang {
  const pathParts = url.pathname.split('/');
  // URL: /BitcoinArchive/ja/... → pathParts includes 'ja'
  const jaIndex = pathParts.indexOf('ja');
  if (jaIndex !== -1) return 'ja';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'ja') {
    return `${base}/ja${clean}`;
  }
  return `${base}${clean}`;
}

/** Primary-origin absolute URL for hreflang/canonical */
export function absoluteUrl(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const langPath = lang === 'ja' ? `/ja${clean}` : clean;
  return `${primaryOrigin}${langPath}`;
}

export async function getEntries(lang: Lang): Promise<CollectionEntry<'entries' | 'entries_ja'>[]> {
  const collection = lang === 'ja' ? 'entries_ja' : 'entries';
  const entries = await getCollection(collection);
  return entries.sort((a, b) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime());
}

export async function getEntriesBySource(lang: Lang, source: string) {
  const entries = await getEntries(lang);
  return entries.filter((e) => e.data.source === source);
}

export async function getEntriesByType(lang: Lang, type: string) {
  const entries = await getEntries(lang);
  return entries.filter((e) => e.data.type === type);
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatDateShort(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Entries excluding biographies — use for all listing/counting contexts */
export async function getDisplayEntries(lang: Lang): Promise<CollectionEntry<'entries' | 'entries_ja'>[]> {
  const entries = await getEntries(lang);
  return entries.filter((e) => e.data.type !== 'biography');
}

export async function getBiographyForParticipant(
  lang: Lang,
  participantSlug: string,
): Promise<CollectionEntry<'entries' | 'entries_ja'> | undefined> {
  const entries = await getEntries(lang);
  return entries.find(
    (e) =>
      e.data.type === 'biography' &&
      e.data.participants[0]?.slug === participantSlug,
  );
}

interface Participant {
  name: string;
  slug: string;
}

const authorHandleToSlug: Record<string, string> = {
  'jgarzik': 'jeff-garzik',
  'sirius': 'martti-malmi',
  'laszlo': 'laszlo-hanyecz',
  'hal': 'hal-finney',
  'laanwj': 'wladimir-van-der-laan',
  'slush': 'marek-palatinus',
  'harding': 'david-harding',
  'satoshi': 'satoshi-nakamoto',
};

export function findAuthorParticipant(author: string, participants: Participant[]): Participant | undefined {
  return participants.find((p) => p.name === author)
    || participants.find((p) => p.slug === authorHandleToSlug[author])
    || participants.find((p) => p.slug === author)
    || undefined;
}

export function translateParticipantName(name: string, slug: string | undefined, lang: Lang): string {
  if (lang === 'ja') {
    return getJapaneseParticipantDisplayName(name, slug);
  }
  return name;
}

export function translateTag(tag: string, lang: Lang): string {
  if (lang === 'ja') {
    return participantDisplayNamesJaBySlug[tag] ?? tagTranslations[tag] ?? tag;
  }
  return tag;
}
